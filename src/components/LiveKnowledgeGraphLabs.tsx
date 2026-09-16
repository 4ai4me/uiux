import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Share2,
  Maximize2,
  Minimize2,
  Sliders,
  Search,
  Filter,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Info,
  ChevronRight,
  ChevronLeft,
  X,
  Plus,
  Play,
  Pause,
  Compass,
  Database,
  Tag,
  ArrowRight,
  ExternalLink,
  Code,
  Eye,
  EyeOff,
  Activity,
  Cpu,
  Compass as CompassIcon,
  CheckCircle2,
  Copy,
  FolderTree
} from 'lucide-react';

// ==========================================
// 1. Force-Directed Knowledge Graph Canvas (#659)
// ==========================================
interface GraphNode {
  id: string;
  label: string;
  group: 'ai' | 'infra' | 'data' | 'model';
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface GraphEdge {
  source: string;
  target: string;
  label: string;
}

const INITIAL_NODES: GraphNode[] = [
  { id: 'n1', label: 'Artificial Intelligence', group: 'ai', x: 200, y: 150, vx: 0, vy: 0, radius: 24 },
  { id: 'n2', label: 'Large Language Model', group: 'model', x: 300, y: 110, vx: 0, vy: 0, radius: 20 },
  { id: 'n3', label: 'Transformer Arch', group: 'model', x: 320, y: 220, vx: 0, vy: 0, radius: 18 },
  { id: 'n4', label: 'Knowledge Graph', group: 'data', x: 140, y: 260, vx: 0, vy: 0, radius: 20 },
  { id: 'n5', label: 'Vector Database', group: 'infra', x: 220, y: 310, vx: 0, vy: 0, radius: 17 },
  { id: 'n6', label: 'Attention Mechanism', group: 'model', x: 420, y: 240, vx: 0, vy: 0, radius: 16 },
  { id: 'n7', label: 'Ontology Schema', group: 'data', x: 70, y: 210, vx: 0, vy: 0, radius: 15 },
  { id: 'n8', label: 'GPU Cluster', group: 'infra', x: 360, y: 320, vx: 0, vy: 0, radius: 16 },
  { id: 'n9', label: 'Graph Neural Net', group: 'ai', x: 110, y: 100, vx: 0, vy: 0, radius: 17 },
];

const INITIAL_EDGES: GraphEdge[] = [
  { source: 'n1', target: 'n2', label: 'powers' },
  { source: 'n1', target: 'n9', label: 'subfield' },
  { source: 'n2', target: 'n3', label: 'built_on' },
  { source: 'n3', target: 'n6', label: 'utilizes' },
  { source: 'n1', target: 'n4', label: 'grounds' },
  { source: 'n4', target: 'n7', label: 'governed_by' },
  { source: 'n4', target: 'n5', label: 'indexed_in' },
  { source: 'n2', target: 'n5', label: 'retrieves_from' },
  { source: 'n3', target: 'n8', label: 'accelerated_by' },
  { source: 'n9', target: 'n4', label: 'traverses' },
  { source: 'n5', target: 'n8', label: 'hosted_on' },
];

export const LiveForceDirectedGraphCanvasLab: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [nodes, setNodes] = useState<GraphNode[]>(INITIAL_NODES);
  const [edges] = useState<GraphEdge[]>(INITIAL_EDGES);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [repulsion, setRepulsion] = useState<number>(450);
  const [springLength, setSpringLength] = useState<number>(90);
  const [springK, setSpringK] = useState<number>(0.04);
  const [gravity, setGravity] = useState<number>(0.015);
  const [draggedNode, setDraggedNode] = useState<string | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>('n1');
  const [kineticEnergy, setKineticEnergy] = useState<number>(0);

  // Physics simulation loop
  useEffect(() => {
    let animId: number;

    const tick = () => {
      setNodes((prevNodes) => {
        const next = prevNodes.map((n) => ({ ...n }));
        const nodeMap = new Map<string, GraphNode>();
        next.forEach((n) => nodeMap.set(n.id, n));

        const cx = 250;
        const cy = 200;

        // 1. Center gravity & repulsion
        for (let i = 0; i < next.length; i++) {
          const n1 = next[i];
          if (n1.id === draggedNode) continue;

          // Center gravity
          n1.vx += (cx - n1.x) * gravity;
          n1.vy += (cy - n1.y) * gravity;

          // Coulomb repulsion between all node pairs
          for (let j = 0; j < next.length; j++) {
            if (i === j) continue;
            const n2 = next[j];
            const dx = n1.x - n2.x;
            const dy = n1.y - n2.y;
            const distSq = dx * dx + dy * dy || 1;
            const dist = Math.sqrt(distSq);
            if (dist < 320) {
              const force = repulsion / distSq;
              n1.vx += (dx / dist) * force;
              n1.vy += (dy / dist) * force;
            }
          }
        }

        // 2. Hooke spring attraction along edges
        edges.forEach((edge) => {
          const s = nodeMap.get(edge.source);
          const t = nodeMap.get(edge.target);
          if (!s || !t) return;

          const dx = t.x - s.x;
          const dy = t.y - s.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const displacement = dist - springLength;
          const force = displacement * springK;

          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;

          if (s.id !== draggedNode) {
            s.vx += fx;
            s.vy += fy;
          }
          if (t.id !== draggedNode) {
            t.vx -= fx;
            t.vy -= fy;
          }
        });

        // 3. Update positions with damping (friction)
        let totalEnergy = 0;
        const damping = 0.88;
        next.forEach((n) => {
          if (n.id !== draggedNode && isRunning) {
            n.vx *= damping;
            n.vy *= damping;
            n.x += n.vx;
            n.y += n.vy;

            // Boundary clamping
            n.x = Math.max(n.radius + 10, Math.min(500 - n.radius - 10, n.x));
            n.y = Math.max(n.radius + 10, Math.min(390 - n.radius - 10, n.y));

            totalEnergy += Math.sqrt(n.vx * n.vx + n.vy * n.vy);
          }
        });

        setKineticEnergy(Math.round(totalEnergy * 10) / 10);
        return next;
      });

      if (isRunning) {
        animId = requestAnimationFrame(tick);
      }
    };

    if (isRunning) {
      animId = requestAnimationFrame(tick);
    }
    return () => cancelAnimationFrame(animId);
  }, [isRunning, repulsion, springLength, springK, gravity, draggedNode, edges]);

  // Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background subtle dot grid
    ctx.fillStyle = '#334155';
    for (let x = 20; x < canvas.width; x += 30) {
      for (let y = 20; y < canvas.height; y += 30) {
        ctx.fillRect(x, y, 1.2, 1.2);
      }
    }

    const nodeMap = new Map<string, GraphNode>();
    nodes.forEach((n) => nodeMap.set(n.id, n));

    // Draw edges
    edges.forEach((edge) => {
      const s = nodeMap.get(edge.source);
      const t = nodeMap.get(edge.target);
      if (!s || !t) return;

      const isConnectedToSelected = s.id === selectedNodeId || t.id === selectedNodeId;

      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(t.x, t.y);
      ctx.strokeStyle = isConnectedToSelected ? '#38bdf8' : '#475569';
      ctx.lineWidth = isConnectedToSelected ? 2.2 : 1.2;
      ctx.stroke();

      // Predicate label on edge center
      const midX = (s.x + t.x) / 2;
      const midY = (s.y + t.y) / 2;
      ctx.font = '9px monospace';
      ctx.fillStyle = isConnectedToSelected ? '#7dd3fc' : '#64748b';
      ctx.fillText(edge.label, midX - 16, midY - 4);
    });

    // Color group palette
    const colorMap: Record<string, { fill: string; stroke: string; glow: string }> = {
      ai: { fill: '#3b82f6', stroke: '#93c5fd', glow: 'rgba(59,130,246,0.3)' },
      model: { fill: '#8b5cf6', stroke: '#c4b5fd', glow: 'rgba(139,92,246,0.3)' },
      data: { fill: '#10b981', stroke: '#6ee7b7', glow: 'rgba(16,185,129,0.3)' },
      infra: { fill: '#f59e0b', stroke: '#fcd34d', glow: 'rgba(245,158,11,0.3)' },
    };

    // Draw nodes
    nodes.forEach((n) => {
      const isSelected = n.id === selectedNodeId;
      const colors = colorMap[n.group] || colorMap.ai;

      // Glow halo for selected
      if (isSelected) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + 8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
        ctx.fill();
      }

      // Outer circle
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      ctx.fillStyle = colors.fill;
      ctx.fill();
      ctx.lineWidth = isSelected ? 3 : 1.5;
      ctx.strokeStyle = isSelected ? '#ffffff' : colors.stroke;
      ctx.stroke();

      // Node text label
      ctx.font = isSelected ? 'bold 10px sans-serif' : '9px sans-serif';
      ctx.fillStyle = '#f8fafc';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(n.label.length > 12 ? n.label.slice(0, 11) + '..' : n.label, n.x, n.y);
    });
  }, [nodes, edges, selectedNodeId]);

  // Pointer interaction
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;

    for (let i = nodes.length - 1; i >= 0; i--) {
      const n = nodes[i];
      const dx = n.x - x;
      const dy = n.y - y;
      if (dx * dx + dy * dy <= (n.radius + 6) * (n.radius + 6)) {
        setDraggedNode(n.id);
        setSelectedNodeId(n.id);
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        break;
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!draggedNode) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;

    setNodes((prev) =>
      prev.map((n) => (n.id === draggedNode ? { ...n, x, y, vx: 0, vy: 0 } : n))
    );
  };

  const handlePointerUp = () => {
    setDraggedNode(null);
  };

  const resetSimulation = () => {
    setNodes(
      INITIAL_NODES.map((n) => ({
        ...n,
        x: n.x + (Math.random() - 0.5) * 40,
        y: n.y + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
      }))
    );
    setIsRunning(true);
  };

  const selectedNode = nodes.find((n) => n.id === selectedNodeId);

  return (
    <div className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl p-4 shadow-xl flex flex-col gap-3 font-sans">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
            <Share2 className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-cyan-400">#659</span>
              <h3 className="text-sm font-semibold text-slate-100">Force-Directed Knowledge Graph Canvas</h3>
            </div>
            <p className="text-xs text-slate-400">Coulomb-Hooke 물리 엔진 기반 2D 실시간 그래프 캔버스</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg text-slate-300">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            Kinetic: {kineticEnergy}
          </span>
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border font-medium transition ${
              isRunning
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 hover:bg-amber-500/30'
                : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 hover:bg-emerald-500/30'
            }`}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isRunning ? 'Pause Physics' : 'Resume'}
          </button>
          <button
            onClick={resetSimulation}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-lg transition"
            title="Re-seed Layout"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Canvas Viewport */}
        <div className="lg:col-span-3 bg-slate-950 border border-slate-800 rounded-xl relative overflow-hidden flex items-center justify-center p-2">
          <canvas
            ref={canvasRef}
            width={500}
            height={400}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="w-full h-[360px] object-contain cursor-grab active:cursor-grabbing touch-none"
          />

          {/* Canvas Floating Overlay Controls */}
          <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-lg p-2 flex flex-col gap-1 text-[11px] font-mono text-slate-300 pointer-events-none">
            <span className="flex items-center gap-1 text-cyan-400 font-bold">
              <Compass className="w-3 h-3" /> Physics Engine: Active
            </span>
            <span>Nodes: {nodes.length} | Edges: {edges.length}</span>
            <span className="text-[10px] text-slate-400">Drag any node to test spring tension</span>
          </div>

          <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-lg px-2 py-1 flex items-center gap-2 text-[11px] font-mono text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500" /> AI
            <span className="inline-block w-2 h-2 rounded-full bg-purple-500 ml-1" /> Model
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 ml-1" /> Data
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 ml-1" /> Infra
          </div>
        </div>

        {/* Physics Controls & Selected Entity Card */}
        <div className="flex flex-col gap-3">
          {/* Selected Node Mini Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Selected Entity</span>
              <span className="text-cyan-400">{selectedNode?.id}</span>
            </div>
            {selectedNode ? (
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-slate-100">{selectedNode.label}</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                    Group: {selectedNode.group}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Radius: {selectedNode.radius}px
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 mt-2">
                  Connected edges: {edges.filter((e) => e.source === selectedNode.id || e.target === selectedNode.id).length}
                </div>
              </div>
            ) : (
              <span className="text-xs text-slate-500">Click a node on canvas to inspect</span>
            )}
          </div>

          {/* Simulation Tuner */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex flex-col gap-3 font-mono text-xs">
            <span className="text-slate-200 font-bold flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" /> Force Parameters
            </span>

            {/* Repulsion */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Coulomb Repulsion</span>
                <span className="text-cyan-400">{repulsion}</span>
              </div>
              <input
                type="range"
                min={150}
                max={900}
                step={20}
                value={repulsion}
                onChange={(e) => setRepulsion(Number(e.target.value))}
                className="w-full accent-cyan-500 h-1.5 bg-slate-800 rounded cursor-pointer"
              />
            </div>

            {/* Spring Length */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Spring Length</span>
                <span className="text-cyan-400">{springLength}px</span>
              </div>
              <input
                type="range"
                min={40}
                max={160}
                step={5}
                value={springLength}
                onChange={(e) => setSpringLength(Number(e.target.value))}
                className="w-full accent-cyan-500 h-1.5 bg-slate-800 rounded cursor-pointer"
              />
            </div>

            {/* Center Gravity */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Center Gravity</span>
                <span className="text-cyan-400">{gravity}</span>
              </div>
              <input
                type="range"
                min={0.005}
                max={0.04}
                step={0.005}
                value={gravity}
                onChange={(e) => setGravity(Number(e.target.value))}
                className="w-full accent-cyan-500 h-1.5 bg-slate-800 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. Entity Property Inspector Drawer (#660)
// ==========================================
export const LiveEntityInspectorDrawerLab: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);
  const [selectedEntityId, setSelectedEntityId] = useState<string>('e1');
  const [activeTab, setActiveTab] = useState<'metadata' | 'triples' | 'jsonld'>('metadata');
  const [copied, setCopied] = useState<boolean>(false);

  const entities = [
    {
      id: 'e1',
      name: 'Transformer Architecture',
      uri: 'https://schema.org/ai/TransformerArch',
      type: 'ModelArchitecture',
      description: 'Self-attention based neural network architecture introduced in Vaswani et al. (2017).',
      inDegree: 8,
      outDegree: 5,
      confidence: 0.994,
      properties: {
        inventedYear: '2017',
        authors: 'Vaswani, Shazeer, Parmar, et al.',
        complexity: 'O(N^2) attention scaling',
        keyPaper: 'Attention Is All You Need',
        frameworks: 'PyTorch, JAX, TensorFlow',
      },
      triples: [
        { sub: 'Transformer Architecture', pred: 'hasSubcomponent', obj: 'MultiHeadAttention' },
        { sub: 'Transformer Architecture', pred: 'solvesTask', obj: 'SequenceTransduction' },
        { sub: 'Transformer Architecture', pred: 'optimizedBy', obj: 'FlashAttention_v2' },
        { sub: 'GPT-4', pred: 'instanceOf', obj: 'Transformer Architecture' },
      ],
    },
    {
      id: 'e2',
      name: 'Knowledge Graph',
      uri: 'https://schema.org/ai/KnowledgeGraph',
      type: 'SemanticOntology',
      description: 'Structured network representation of real-world entities and formal semantic relations.',
      inDegree: 12,
      outDegree: 9,
      confidence: 0.985,
      properties: {
        serialization: 'RDF/OWL, Turtle, JSON-LD',
        queryLanguage: 'SPARQL, Cypher',
        storageType: 'Graph Database / TripleStore',
        applications: 'RAG Grounding, Fact Checking',
      },
      triples: [
        { sub: 'Knowledge Graph', pred: 'stores', obj: 'RDF Triples' },
        { sub: 'Knowledge Graph', pred: 'queriesWith', obj: 'SPARQL' },
        { sub: 'RAG Pipeline', pred: 'retrievesFrom', obj: 'Knowledge Graph' },
      ],
    },
    {
      id: 'e3',
      name: 'Vector Database',
      uri: 'https://schema.org/ai/VectorDB',
      type: 'InfrastructureIndex',
      description: 'High-dimensional indexing store optimized for Approximate Nearest Neighbor (ANN) search.',
      inDegree: 6,
      outDegree: 4,
      confidence: 0.978,
      properties: {
        indexingAlgo: 'HNSW, IVF-PQ, ScaNN',
        distanceMetric: 'Cosine Similarity, L2 Euclidean',
        latencyP99: '1.8ms',
        storageTier: 'In-Memory + NVMe SSD',
      },
      triples: [
        { sub: 'Vector Database', pred: 'executes', obj: 'HNSW Indexing' },
        { sub: 'Vector Database', pred: 'storesEmbeddingsFrom', obj: 'Transformer Architecture' },
      ],
    },
  ];

  const current = entities.find((e) => e.id === selectedEntityId) || entities[0];

  const handleCopyJsonLd = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl p-4 shadow-xl flex flex-col gap-3 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center text-indigo-400">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-indigo-400">#660</span>
              <h3 className="text-sm font-semibold text-slate-100">Entity Property Inspector Drawer</h3>
            </div>
            <p className="text-xs text-slate-400">그래프 노드 선택 시 슬라이드되는 온톨로지 메타데이터 & 트리플 인스펙터</p>
          </div>
        </div>

        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="flex items-center gap-1.5 px-3 py-1 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 rounded-lg text-xs font-mono transition"
        >
          {isDrawerOpen ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
          {isDrawerOpen ? 'Collapse Drawer' : 'Open Inspector'}
        </button>
      </div>

      {/* Main Workspace: Left Graph Preview + Right Slide-Over Inspector */}
      <div className="relative w-full h-[380px] bg-slate-950 border border-slate-800 rounded-xl overflow-hidden flex">
        {/* Left Interactive Canvas Area */}
        <div className="flex-1 p-4 flex flex-col justify-between relative bg-dot-pattern">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400">Select entity to inspect:</span>
            <div className="flex items-center gap-1.5">
              {entities.map((ent) => (
                <button
                  key={ent.id}
                  onClick={() => {
                    setSelectedEntityId(ent.id);
                    setIsDrawerOpen(true);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition border ${
                    selectedEntityId === ent.id
                      ? 'bg-indigo-600 text-white border-indigo-400 shadow'
                      : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  {ent.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mini Mock Graph Representation in Left Pane */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative w-72 h-56 border border-slate-800/60 rounded-xl bg-slate-900/40 p-3 flex items-center justify-center">
              {/* Edges */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="70" y1="110" x2="200" y2="70" stroke="#475569" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="200" y1="70" x2="160" y2="170" stroke="#475569" strokeWidth="2" />
                <line x1="70" y1="110" x2="160" y2="170" stroke="#475569" strokeWidth="2" />
              </svg>

              {/* Node 1 */}
              <div
                onClick={() => { setSelectedEntityId('e1'); setIsDrawerOpen(true); }}
                className={`absolute left-8 top-20 w-24 p-2 rounded-xl border text-center cursor-pointer transition shadow-lg ${
                  selectedEntityId === 'e1'
                    ? 'bg-indigo-600 border-white text-white scale-105 ring-2 ring-indigo-400/50'
                    : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono opacity-70">Model</div>
                <div className="text-xs font-bold truncate">Transformer</div>
              </div>

              {/* Node 2 */}
              <div
                onClick={() => { setSelectedEntityId('e2'); setIsDrawerOpen(true); }}
                className={`absolute right-6 top-10 w-24 p-2 rounded-xl border text-center cursor-pointer transition shadow-lg ${
                  selectedEntityId === 'e2'
                    ? 'bg-emerald-600 border-white text-white scale-105 ring-2 ring-emerald-400/50'
                    : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono opacity-70">Ontology</div>
                <div className="text-xs font-bold truncate">KnowledgeGraph</div>
              </div>

              {/* Node 3 */}
              <div
                onClick={() => { setSelectedEntityId('e3'); setIsDrawerOpen(true); }}
                className={`absolute right-20 bottom-8 w-24 p-2 rounded-xl border text-center cursor-pointer transition shadow-lg ${
                  selectedEntityId === 'e3'
                    ? 'bg-amber-600 border-white text-white scale-105 ring-2 ring-amber-400/50'
                    : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono opacity-70">Infra</div>
                <div className="text-xs font-bold truncate">VectorDB</div>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 font-mono flex items-center justify-between">
            <span>Canvas Viewport: 2D Spatial Subgraph</span>
            <span>Click any node to focus inspector</span>
          </div>
        </div>

        {/* Right Slide-Over Inspector Drawer */}
        <div
          className={`h-full border-l border-slate-800 bg-slate-900 transition-all duration-300 flex flex-col ${
            isDrawerOpen ? 'w-80 md:w-96' : 'w-0 border-l-0 overflow-hidden'
          }`}
        >
          {isDrawerOpen && (
            <div className="h-full flex flex-col overflow-y-auto">
              {/* Drawer Title Bar */}
              <div className="p-3 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 backdrop-blur sticky top-0 z-10">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold text-slate-200">Entity Inspector</span>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-1 hover:bg-slate-800 text-slate-400 hover:text-slate-200 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Entity Header Summary */}
              <div className="p-3.5 border-b border-slate-800/80 bg-slate-950/60 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                    {current.type}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> {(current.confidence * 100).toFixed(1)}% Conf
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-100">{current.name}</h4>
                <span className="text-[10px] font-mono text-slate-400 break-all truncate">{current.uri}</span>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{current.description}</p>

                <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-slate-800 font-mono text-[11px]">
                  <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                    <span className="text-slate-400 text-[10px] block">In-Degree</span>
                    <span className="font-bold text-cyan-400">{current.inDegree} relations</span>
                  </div>
                  <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                    <span className="text-slate-400 text-[10px] block">Out-Degree</span>
                    <span className="font-bold text-indigo-400">{current.outDegree} relations</span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-800 bg-slate-900 text-xs font-mono">
                {(['metadata', 'triples', 'jsonld'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 text-center border-b-2 capitalize transition ${
                      activeTab === tab
                        ? 'border-indigo-500 text-indigo-300 bg-indigo-500/10 font-bold'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-3 flex-1 overflow-y-auto">
                {activeTab === 'metadata' && (
                  <div className="flex flex-col gap-2 text-xs">
                    {Object.entries(current.properties).map(([k, v]) => (
                      <div key={k} className="flex flex-col gap-0.5 bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span className="text-[10px] font-mono text-indigo-400 capitalize">{k}</span>
                        <span className="text-slate-200 font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'triples' && (
                  <div className="flex flex-col gap-2">
                    {current.triples.map((tr, idx) => (
                      <div key={idx} className="bg-slate-950 p-2 rounded-lg border border-slate-800 text-[11px] font-mono flex flex-col gap-1">
                        <div className="text-slate-300 font-semibold">{tr.sub}</div>
                        <div className="text-cyan-400 flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" /> {tr.pred}
                        </div>
                        <div className="text-emerald-300 font-medium pl-4">{tr.obj}</div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'jsonld' && (
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                      <span>JSON-LD Representation</span>
                      <button
                        onClick={handleCopyJsonLd}
                        className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
                      >
                        <Copy className="w-3 h-3" /> {copied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <pre className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[10px] font-mono text-emerald-300 overflow-x-auto whitespace-pre">
{JSON.stringify(
  {
    '@context': 'https://schema.org',
    '@type': current.type,
    '@id': current.uri,
    name: current.name,
    description: current.description,
    confidenceScore: current.confidence,
    properties: current.properties,
  },
  null,
  2
)}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. Semantic Zoom Infinite Canvas (#661)
// ==========================================
export const LiveSemanticZoomInfiniteCanvasLab: React.FC = () => {
  const [zoom, setZoom] = useState<number>(100); // 25% ~ 200%

  // LOD Level determination
  const lodTier = useMemo(() => {
    if (zoom < 55) return 'Macro (Cluster Overview)';
    if (zoom <= 125) return 'Standard (Entity & Relations)';
    return 'Micro (Deep Attribute & Predicate Pin)';
  }, [zoom]);

  return (
    <div className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl p-4 shadow-xl flex flex-col gap-3 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-emerald-400">#661</span>
              <h3 className="text-sm font-semibold text-slate-100">Semantic Zoom Infinite Canvas</h3>
            </div>
            <p className="text-xs text-slate-400">배율(Level of Detail)에 따라 군집 버블에서 세부 속성 핀으로 전환되는 지식 캔버스</p>
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 bg-emerald-950 text-emerald-300 border border-emerald-800/80 rounded-lg">
            LOD: {lodTier}
          </span>
          <div className="flex items-center bg-slate-800 rounded-lg border border-slate-700 p-0.5">
            <button
              onClick={() => setZoom((z) => Math.max(25, z - 25))}
              className="p-1 hover:bg-slate-700 text-slate-300 rounded"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="w-12 text-center font-bold text-slate-200">{zoom}%</span>
            <button
              onClick={() => setZoom((z) => Math.min(200, z + 25))}
              className="p-1 hover:bg-slate-700 text-slate-300 rounded"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>
          <button
            onClick={() => setZoom(100)}
            className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Semantic Zoom Canvas Viewport */}
      <div className="w-full h-[370px] bg-slate-950 border border-slate-800 rounded-xl relative overflow-hidden flex items-center justify-center p-4">
        {/* Scale Container */}
        <div
          className="relative w-[500px] h-[320px] transition-transform duration-300 origin-center"
          style={{ transform: `scale(${zoom / 100})` }}
        >
          {/* Cluster Hull 1: Deep Learning Models (Blue Cluster) */}
          <div className="absolute left-6 top-6 w-52 h-64 rounded-3xl bg-blue-500/10 border-2 border-blue-500/30 p-3 flex flex-col justify-between transition-all">
            {/* Macro View Content (<55%) */}
            {zoom < 55 && (
              <div className="h-full flex flex-col items-center justify-center text-center p-2">
                <span className="w-12 h-12 rounded-full bg-blue-600/40 border border-blue-400 flex items-center justify-center text-blue-200 font-bold text-lg mb-1">
                  DL
                </span>
                <span className="text-sm font-bold text-blue-200">Neural Network Cluster</span>
                <span className="text-[10px] text-blue-400 font-mono">14 Entities • 28 Edges</span>
              </div>
            )}

            {/* Standard (55% ~ 125%) & Micro (>125%) View */}
            {zoom >= 55 && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold font-mono text-blue-300 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/60">
                    Neural Models Group
                  </span>
                  {zoom > 125 && <span className="text-[9px] font-mono text-blue-400">Hull ID: #CL-01</span>}
                </div>

                <div className="flex flex-col gap-3 my-auto">
                  {/* Entity Node A */}
                  <div className="bg-slate-900 border border-blue-500/50 p-2 rounded-xl shadow">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-100">Transformer</span>
                      {zoom > 125 && <span className="text-[9px] font-mono text-emerald-400">99.8%</span>}
                    </div>
                    {zoom > 125 && (
                      <div className="mt-1 pt-1 border-t border-slate-800 flex flex-wrap gap-1 text-[9px] font-mono text-slate-400">
                        <span className="px-1 bg-slate-800 rounded">Layers: 96</span>
                        <span className="px-1 bg-slate-800 rounded">Heads: 128</span>
                      </div>
                    )}
                  </div>

                  {/* Entity Node B */}
                  <div className="bg-slate-900 border border-purple-500/50 p-2 rounded-xl shadow">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-100">Diffusion Model</span>
                      {zoom > 125 && <span className="text-[9px] font-mono text-emerald-400">97.2%</span>}
                    </div>
                    {zoom > 125 && (
                      <div className="mt-1 pt-1 border-t border-slate-800 flex flex-wrap gap-1 text-[9px] font-mono text-slate-400">
                        <span className="px-1 bg-slate-800 rounded">UNet Core</span>
                        <span className="px-1 bg-slate-800 rounded">Noise Pred</span>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Cluster Hull 2: Knowledge Ontologies (Emerald Cluster) */}
          <div className="absolute right-6 top-6 w-52 h-64 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/30 p-3 flex flex-col justify-between transition-all">
            {zoom < 55 && (
              <div className="h-full flex flex-col items-center justify-center text-center p-2">
                <span className="w-12 h-12 rounded-full bg-emerald-600/40 border border-emerald-400 flex items-center justify-center text-emerald-200 font-bold text-lg mb-1">
                  KG
                </span>
                <span className="text-sm font-bold text-emerald-200">Knowledge & Graph Cluster</span>
                <span className="text-[10px] text-emerald-400 font-mono">22 Entities • 45 Triples</span>
              </div>
            )}

            {zoom >= 55 && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                    Ontology Group
                  </span>
                  {zoom > 125 && <span className="text-[9px] font-mono text-emerald-400">Hull ID: #CL-02</span>}
                </div>

                <div className="flex flex-col gap-3 my-auto">
                  {/* Entity Node C */}
                  <div className="bg-slate-900 border border-emerald-500/50 p-2 rounded-xl shadow">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-100">Wikidata Schema</span>
                      {zoom > 125 && <span className="text-[9px] font-mono text-emerald-400">RDF/OWL</span>}
                    </div>
                    {zoom > 125 && (
                      <div className="mt-1 pt-1 border-t border-slate-800 flex flex-wrap gap-1 text-[9px] font-mono text-slate-400">
                        <span className="px-1 bg-slate-800 rounded">QID: Q11660</span>
                        <span className="px-1 bg-slate-800 rounded">Triples: 1.4B</span>
                      </div>
                    )}
                  </div>

                  {/* Entity Node D */}
                  <div className="bg-slate-900 border border-teal-500/50 p-2 rounded-xl shadow">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-100">ConceptNet 5.8</span>
                      {zoom > 125 && <span className="text-[9px] font-mono text-emerald-400">CommonSense</span>}
                    </div>
                    {zoom > 125 && (
                      <div className="mt-1 pt-1 border-t border-slate-800 flex flex-wrap gap-1 text-[9px] font-mono text-slate-400">
                        <span className="px-1 bg-slate-800 rounded">IsA Relation</span>
                        <span className="px-1 bg-slate-800 rounded">Weight: 4.2</span>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Inter-Cluster Connecting Edge Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="210" y1="160" x2="290" y2="160" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray={zoom > 125 ? '0' : '4 4'} />
          </svg>
          {zoom >= 55 && (
            <div className="absolute left-[225px] top-[145px] bg-slate-900 border border-cyan-500/50 px-2 py-0.5 rounded text-[9px] font-mono text-cyan-300 shadow">
              {zoom > 125 ? 'sem:groundsKnowledge' : 'grounds'}
            </div>
          )}
        </div>

        {/* Floating Zoom Guidance Bar */}
        <div className="absolute bottom-3 inset-x-4 bg-slate-900/90 backdrop-blur border border-slate-800 rounded-xl p-2.5 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className={zoom < 55 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
              [25%~50%] Macro Hull Bubble
            </span>
            <span>➔</span>
            <span className={zoom >= 55 && zoom <= 125 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
              [75%~125%] Entity Nodes
            </span>
            <span>➔</span>
            <span className={zoom > 125 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
              [150%~200%] Micro Triples & Metrics
            </span>
          </div>
          <span className="text-slate-400">Click + / - above to test Semantic Zoom</span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. Ego-Network Focus & Context Highlighting (#662)
// ==========================================
export const LiveEgoNetworkFocusLab: React.FC = () => {
  const [egoFocalId, setEgoFocalId] = useState<string>('n_gnn');
  const [hopDistance, setHopDistance] = useState<'1-hop' | '2-hop' | 'all'>('1-hop');

  // Network topology
  const allNodes = [
    { id: 'n_gnn', label: 'Graph Neural Net (Ego)', group: 'core' },
    { id: 'n_embed', label: 'Node Embeddings', group: '1-hop' },
    { id: 'n_kg', label: 'Knowledge Graph', group: '1-hop' },
    { id: 'n_link', label: 'Link Prediction', group: '1-hop' },
    { id: 'n_sparql', label: 'SPARQL Endpoint', group: '2-hop' },
    { id: 'n_vector', label: 'Vector Index', group: '2-hop' },
    { id: 'n_rag', label: 'RAG Pipeline', group: '2-hop' },
    { id: 'n_quantum', label: 'Quantum Circuit', group: 'unrelated' },
    { id: 'n_crypto', label: 'Zero-Knowledge Proof', group: 'unrelated' },
    { id: 'n_compiler', label: 'LLVM JIT Compiler', group: 'unrelated' },
  ];

  // Membership check based on selected hop
  const isHighlighted = (nodeGroup: string) => {
    if (hopDistance === 'all') return true;
    if (nodeGroup === 'core') return true;
    if (nodeGroup === '1-hop') return true;
    if (hopDistance === '2-hop' && nodeGroup === '2-hop') return true;
    return false;
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl p-4 shadow-xl flex flex-col gap-3 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-500/50 flex items-center justify-center text-pink-400">
            <CompassIcon className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-pink-400">#662</span>
              <h3 className="text-sm font-semibold text-slate-100">Ego-Network Focus & Context Highlighting</h3>
            </div>
            <p className="text-xs text-slate-400">복잡한 그래프 헤어볼(Hairball)에서 선택 노드의 1~2홉 이웃만 집중 조명</p>
          </div>
        </div>

        {/* Hop Distance Toggle Buttons */}
        <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs font-mono">
          {(['1-hop', '2-hop', 'all'] as const).map((hop) => (
            <button
              key={hop}
              onClick={() => setHopDistance(hop)}
              className={`px-3 py-1 rounded-md capitalize transition font-medium ${
                hopDistance === hop
                  ? 'bg-pink-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {hop === 'all' ? 'All (Hairball)' : `${hop} Isolation`}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Network Graph Grid */}
      <div className="w-full h-[370px] bg-slate-950 border border-slate-800 rounded-xl relative p-4 flex flex-col justify-between">
        {/* Top Status & Metrics */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">
            Focal Entity: <strong className="text-pink-400">Graph Neural Net</strong>
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            Active Nodes: {allNodes.filter((n) => isHighlighted(n.group)).length} / {allNodes.length}
          </span>
        </div>

        {/* Graph Visual Canvas Simulation */}
        <div className="flex-1 relative flex items-center justify-center">
          {/* Radial concentric rings */}
          <div className="absolute w-44 h-44 rounded-full border border-pink-500/20 pointer-events-none" />
          <div className="absolute w-72 h-72 rounded-full border border-purple-500/20 pointer-events-none" />

          {/* Central Ego Node */}
          <div className="relative z-20 w-28 h-28 rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 border-2 border-pink-300 p-2 flex flex-col items-center justify-center text-center shadow-[0_0_24px_rgba(236,72,153,0.5)]">
            <span className="text-[10px] font-mono text-pink-200">Ego Root</span>
            <span className="text-xs font-black text-white leading-tight">Graph Neural Net</span>
          </div>

          {/* 1-Hop Neighbor Orbit */}
          <div className="absolute inset-0 flex items-center justify-around pointer-events-none">
            {allNodes
              .filter((n) => n.group === '1-hop')
              .map((n, idx) => {
                const active = isHighlighted(n.group);
                const posClass = idx === 0 ? '-translate-y-24' : idx === 1 ? 'translate-x-32' : '-translate-x-32';
                return (
                  <div
                    key={n.id}
                    className={`absolute p-2.5 rounded-xl border font-mono text-xs transition-all duration-300 ${posClass} ${
                      active
                        ? 'bg-pink-950/80 border-pink-400 text-pink-200 shadow-[0_0_15px_rgba(236,72,153,0.3)] opacity-100 scale-105'
                        : 'bg-slate-900/30 border-slate-800 text-slate-600 opacity-20 scale-95 blur-[1px]'
                    }`}
                  >
                    <span className="text-[9px] block text-pink-400">1-Hop Neighbor</span>
                    <span className="font-bold">{n.label}</span>
                  </div>
                );
              })}
          </div>

          {/* 2-Hop Neighbor Orbit */}
          <div className="absolute inset-0 flex items-center justify-around pointer-events-none">
            {allNodes
              .filter((n) => n.group === '2-hop')
              .map((n, idx) => {
                const active = isHighlighted(n.group);
                const posClass =
                  idx === 0 ? '-translate-x-44 -translate-y-28' : idx === 1 ? 'translate-x-44 -translate-y-28' : 'translate-y-36';
                return (
                  <div
                    key={n.id}
                    className={`absolute p-2 rounded-xl border font-mono text-[11px] transition-all duration-300 ${posClass} ${
                      active
                        ? 'bg-purple-950/80 border-purple-400 text-purple-200 shadow opacity-100'
                        : 'bg-slate-900/30 border-slate-800 text-slate-600 opacity-20 scale-95 blur-[1px]'
                    }`}
                  >
                    <span className="text-[9px] block text-purple-400">2-Hop Neighbor</span>
                    <span className="font-semibold">{n.label}</span>
                  </div>
                );
              })}
          </div>

          {/* Unrelated Background Nodes (Dimmed or visible in 'all') */}
          <div className="absolute inset-0 flex items-center justify-around pointer-events-none">
            {allNodes
              .filter((n) => n.group === 'unrelated')
              .map((n, idx) => {
                const active = isHighlighted(n.group);
                const posClass =
                  idx === 0 ? '-translate-x-52 translate-y-24' : idx === 1 ? 'translate-x-52 translate-y-24' : '-translate-y-36';
                return (
                  <div
                    key={n.id}
                    className={`absolute p-1.5 rounded-lg border font-mono text-[10px] transition-all duration-300 ${posClass} ${
                      active
                        ? 'bg-slate-800 border-slate-600 text-slate-300 opacity-80'
                        : 'bg-slate-900/20 border-slate-800/40 text-slate-700 opacity-15 blur-[2px]'
                    }`}
                  >
                    <span className="text-[8px] block text-slate-500">Unrelated (Dimmed)</span>
                    <span>{n.label}</span>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Footer Insight Banner */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-300 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            {hopDistance === '1-hop' && '1-Hop isolates immediate direct connections; background hairball noise is filtered out.'}
            {hopDistance === '2-hop' && '2-Hop reveals bridge concepts and secondary dependency clusters.'}
            {hopDistance === 'all' && 'All nodes visible: hairball visual clutter is apparent.'}
          </span>
          <span className="text-pink-400 font-bold">Focus+Context Mode</span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. Shortest Path Traversal Finder (#663)
// ==========================================
export const LiveShortestPathTraversalLab: React.FC = () => {
  const [sourceId, setSourceId] = useState<string>('kg');
  const [targetId, setTargetId] = useState<string>('gpu');
  const [isTraversing, setIsTraversing] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(3);

  const pathSteps = [
    { id: 'kg', label: 'Knowledge Graph', type: 'Data' },
    { id: 'vec', label: 'Vector Index', pred: 'indexed_by', type: 'Store' },
    { id: 'pipe', label: 'Embedding Pipeline', pred: 'queried_through', type: 'Compute' },
    { id: 'gpu', label: 'GPU Cluster', pred: 'accelerated_on', type: 'Hardware' },
  ];

  const handleRunTraversal = () => {
    setIsTraversing(true);
    setActiveStep(0);
    const interval = setInterval(() => {
      setActiveStep((s) => {
        if (s >= pathSteps.length - 1) {
          clearInterval(interval);
          setIsTraversing(false);
          return pathSteps.length - 1;
        }
        return s + 1;
      });
    }, 600);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl p-4 shadow-xl flex flex-col gap-3 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400">
            <RouteIcon className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-amber-400">#663</span>
              <h3 className="text-sm font-semibold text-slate-100">Shortest Path Traversal Finder</h3>
            </div>
            <p className="text-xs text-slate-400">두 지식 엔티티 간의 최단 연결 경로(BFS/Dijkstra) 및 매개 관계 추적</p>
          </div>
        </div>

        <button
          onClick={handleRunTraversal}
          disabled={isTraversing}
          className="flex items-center gap-1.5 px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs font-mono transition disabled:opacity-50"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          {isTraversing ? 'Traversing...' : 'Trace Path (Dijkstra)'}
        </button>
      </div>

      {/* Query Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-slate-950 border border-slate-800 p-3 rounded-xl font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Source Entity (A):</span>
          <select
            value={sourceId}
            onChange={(e) => setSourceId(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 text-slate-200 p-1.5 rounded"
          >
            <option value="kg">Knowledge Graph</option>
            <option value="ontology">Ontology Schema</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-slate-400">Target Entity (B):</span>
          <select
            value={targetId}
            onChange={(e) => setTargetId(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 text-slate-200 p-1.5 rounded"
          >
            <option value="gpu">GPU Cluster</option>
            <option value="transformer">Transformer Model</option>
          </select>
        </div>
      </div>

      {/* Visual Path Traversal Pipeline */}
      <div className="w-full bg-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Shortest Path Discovered: 3 Hops</span>
          <span className="text-amber-400">Cost Weight: 2.45</span>
        </div>

        {/* Step-by-Step Flow */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 relative">
          {pathSteps.map((step, idx) => {
            const isReached = idx <= activeStep;
            const isCurrent = idx === activeStep;

            return (
              <React.Fragment key={step.id}>
                {/* Node Box */}
                <div
                  className={`flex-1 w-full p-3 rounded-xl border flex flex-col gap-1 transition-all duration-300 font-mono ${
                    isCurrent
                      ? 'bg-amber-950/80 border-amber-400 text-amber-200 ring-2 ring-amber-500/50 scale-105 shadow-lg'
                      : isReached
                      ? 'bg-slate-900 border-slate-700 text-slate-200'
                      : 'bg-slate-900/30 border-slate-800 text-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="opacity-70">{step.type}</span>
                    <span className="font-bold">Hop #{idx}</span>
                  </div>
                  <span className="text-xs font-bold truncate">{step.label}</span>
                </div>

                {/* Predicate Link Arrow */}
                {idx < pathSteps.length - 1 && (
                  <div className="flex flex-col items-center justify-center px-1">
                    <span className="text-[9px] font-mono text-amber-400/80 mb-0.5">
                      {pathSteps[idx + 1].pred}
                    </span>
                    <div className="flex items-center gap-1 text-slate-500">
                      <div className={`h-0.5 w-6 transition-colors ${idx < activeStep ? 'bg-amber-400' : 'bg-slate-700'}`} />
                      <ArrowRight className={`w-3.5 h-3.5 ${idx < activeStep ? 'text-amber-400' : 'text-slate-700'}`} />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Traversal Execution Log */}
        <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-[11px] text-slate-300 flex flex-col gap-1">
          <div className="text-xs text-amber-400 font-bold flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" /> Traversal Log:
          </div>
          <div>[BFS Step 0] Seed node: &lt;kg:KnowledgeGraph&gt; expanded.</div>
          <div>[BFS Step 1] Discovered predicate &lt;rel:indexed_by&gt; ➔ &lt;kg:VectorIndex&gt;</div>
          <div>[BFS Step 2] Discovered predicate &lt;rel:queried_through&gt; ➔ &lt;kg:EmbeddingPipeline&gt;</div>
          <div>[BFS Step 3] Target reached! Predicate &lt;rel:accelerated_on&gt; ➔ &lt;kg:GPUCluster&gt;</div>
        </div>
      </div>
    </div>
  );
};

function RouteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  );
}

// ==========================================
// 6. Triple Predicate Editor & Ontology Toggler (#664)
// ==========================================
export const LiveTripleEditorOntologyTogglerLab: React.FC = () => {
  const [triples, setTriples] = useState([
    { id: 1, sub: 'Claude-3.5-Sonnet', pred: 'developedBy', obj: 'Anthropic', category: 'Model' },
    { id: 2, sub: 'Gemini-1.5-Pro', pred: 'hasContextWindow', obj: '2_Million_Tokens', category: 'Model' },
    { id: 3, sub: 'Knowledge Graph', pred: 'providesGroundingTo', obj: 'RAG_Pipeline', category: 'Ontology' },
    { id: 4, sub: 'Vector DB', pred: 'executesSearch', obj: 'HNSW_Algorithm', category: 'Infra' },
  ]);

  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [newSub, setNewSub] = useState<string>('');
  const [newPred, setNewPred] = useState<string>('rel:enhances');
  const [newObj, setNewObj] = useState<string>('');
  const [newCat, setNewCat] = useState<string>('Model');

  const handleAddTriple = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSub || !newObj) return;

    setTriples((prev) => [
      ...prev,
      {
        id: Date.now(),
        sub: newSub.trim(),
        pred: newPred.trim(),
        obj: newObj.trim(),
        category: newCat,
      },
    ]);
    setNewSub('');
    setNewObj('');
  };

  const filteredTriples = triples.filter(
    (t) => filterCategory === 'All' || t.category === filterCategory
  );

  return (
    <div className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl p-4 shadow-xl flex flex-col gap-3 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/50 flex items-center justify-center text-teal-400">
            <Code className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-teal-400">#664</span>
              <h3 className="text-sm font-semibold text-slate-100">Triple Predicate Editor & Ontology Toggler</h3>
            </div>
            <p className="text-xs text-slate-400">RDF 주어-서술어-목적어(S-P-O) 관계 저작 및 온톨로지 카테고리 필터링</p>
          </div>
        </div>

        {/* Category Facet Filter */}
        <div className="flex items-center gap-1.5 text-xs font-mono">
          <span className="text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Ontology:
          </span>
          {['All', 'Model', 'Ontology', 'Infra'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-2.5 py-1 rounded-lg border transition ${
                filterCategory === cat
                  ? 'bg-teal-600 text-white border-teal-400'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Left Triple Input Form + Right Triple Store List */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Left Input Form (2 Cols) */}
        <form onSubmit={handleAddTriple} className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col gap-3 font-mono text-xs">
          <span className="text-slate-200 font-bold flex items-center gap-1.5">
            <Plus className="w-3.5 h-3.5 text-teal-400" /> Add RDF Knowledge Triple
          </span>

          <div className="flex flex-col gap-1">
            <label className="text-slate-400 text-[11px]">Subject (주어):</label>
            <input
              type="text"
              placeholder="e.g. GPT-5, Graph_DB"
              value={newSub}
              onChange={(e) => setNewSub(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-100 focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-slate-400 text-[11px]">Predicate (서술어):</label>
            <select
              value={newPred}
              onChange={(e) => setNewPred(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-100 focus:outline-none focus:border-teal-500"
            >
              <option value="rel:powers">rel:powers</option>
              <option value="rel:enhances">rel:enhances</option>
              <option value="rel:dependsOn">rel:dependsOn</option>
              <option value="rel:trainedOn">rel:trainedOn</option>
              <option value="rel:indexes">rel:indexes</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-slate-400 text-[11px]">Object (목적어):</label>
            <input
              type="text"
              placeholder="e.g. Reasoning_Core, Petaflops"
              value={newObj}
              onChange={(e) => setNewObj(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-100 focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-slate-400 text-[11px]">Ontology Class:</label>
            <div className="flex gap-2">
              {['Model', 'Ontology', 'Infra'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setNewCat(cat)}
                  className={`flex-1 py-1 rounded text-center border ${
                    newCat === cat
                      ? 'bg-teal-950 text-teal-300 border-teal-500 font-bold'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-2 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg transition"
          >
            + Commit Triple to Graph
          </button>
        </form>

        {/* Right Triple Store List (3 Cols) */}
        <div className="lg:col-span-3 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col gap-2.5 font-mono">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
            <span>RDF Triples in Store ({filteredTriples.length})</span>
            <span className="text-[11px] text-teal-400">Turtle Syntax Format</span>
          </div>

          <div className="flex flex-col gap-2 max-h-[280px] overflow-y-auto pr-1">
            {filteredTriples.map((t) => (
              <div
                key={t.id}
                className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-xl flex items-center justify-between text-xs hover:border-slate-700 transition"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-slate-100">&lt;:{t.sub}&gt;</span>
                  <span className="text-teal-400 font-semibold">{t.pred}</span>
                  <span className="font-medium text-emerald-300">&lt;:{t.obj}&gt; .</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  {t.category}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-2 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between">
            <span>SPARQL Update: COMMIT_SUCCESS</span>
            <span>Triples indexed in memory</span>
          </div>
        </div>
      </div>
    </div>
  );
};
