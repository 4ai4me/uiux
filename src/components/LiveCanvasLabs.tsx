import React, { useState } from 'react';
import { 
  Move, Maximize2, RotateCw, Grid, Layout, AlignLeft, 
  AlignCenter, AlignRight, RefreshCw,
  Sliders, Plus, Layers, ArrowRight, Zap, Target, Box
} from 'lucide-react';

/**
 * ----------------------------------------------------------------------------
 * Category 13: Canvas, Nodes & Diagramming (#241 ~ #260) Dedicated 1:1 Labs
 * High-contrast, Light/Dark adaptive UI/UX Architecture Workbench
 * ----------------------------------------------------------------------------
 */

// #241 Canvas - 2D infinite workspace surface with coordinate tracking
export const LiveCanvasLab: React.FC = () => {
  const [pos, setPos] = useState({ x: 120, y: 40 });

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#241 CANVAS (2D SURFACE)</span>
        <span className="text-[10px] text-slate-500">X: {pos.x}px | Y: {pos.y}px</span>
      </div>

      <div className="relative h-32 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:16px_16px] border border-slate-300 dark:border-slate-700 rounded-lg p-2 overflow-hidden">
        <div
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
          className="absolute w-24 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-[10px] shadow cursor-move"
        >
          Active Node
        </div>
      </div>
      <div className="flex justify-between text-[10px]">
        <button onClick={() => setPos({ x: pos.x - 10, y: pos.y })} className="px-2 py-0.5 bg-white dark:bg-slate-800 border rounded">← Move Left</button>
        <button onClick={() => setPos({ x: pos.x + 10, y: pos.y })} className="px-2 py-0.5 bg-white dark:bg-slate-800 border rounded">Move Right →</button>
        <button onClick={() => setPos({ x: 120, y: 40 })} className="px-2 py-0.5 bg-white dark:bg-slate-800 border rounded">Reset</button>
      </div>
    </div>
  );
};

// #242 Workspace (Canvas Workspace) - 3-pane diagram IDE layout
export const LiveWorkspaceLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#242 WORKSPACE (DIAGRAM IDE)</span>
        <span className="text-[10px] text-emerald-600 font-bold">Tri-Pane Structure</span>
      </div>

      <div className="h-28 flex gap-1.5">
        {/* Left Palette */}
        <div className="w-20 bg-white dark:bg-slate-900 border rounded p-1.5 flex flex-col justify-between text-[8px]">
          <span className="font-bold text-slate-400">PALETTE</span>
          <div className="p-1 bg-indigo-50 dark:bg-indigo-950 rounded text-center text-indigo-600 font-bold">+ Node</div>
          <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded text-center">+ Logic</div>
        </div>

        {/* Center Canvas */}
        <div className="flex-1 bg-white dark:bg-slate-900 border rounded p-2 flex items-center justify-center text-center">
          <div className="p-2 bg-indigo-600 text-white rounded text-[9px] font-bold shadow">
            Main Diagram Surface
          </div>
        </div>

        {/* Right Inspector */}
        <div className="w-24 bg-white dark:bg-slate-900 border rounded p-1.5 flex flex-col gap-1 text-[8px]">
          <span className="font-bold text-slate-400">INSPECTOR</span>
          <div className="text-slate-500">ID: N_402</div>
          <div className="text-slate-500">Scale: 100%</div>
          <div className="text-indigo-600 font-bold">Valid: YES</div>
        </div>
      </div>
    </div>
  );
};

// #243 Node - Diagram component with title and IN/OUT ports
export const LiveNodeLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#243 NODE (GRAPH VERTEX)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Execution Unit</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex justify-center">
        {/* Graph Node */}
        <div className="relative w-48 bg-slate-50 dark:bg-slate-950 border-2 border-indigo-500 rounded-xl shadow-lg p-2.5 space-y-1.5">
          {/* Input Port */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-indigo-600 rounded-full border-2 border-white dark:border-slate-900 shadow" title="IN Port" />
          
          <div className="flex items-center justify-between border-b pb-1">
            <span className="font-bold text-[10px] text-indigo-600 dark:text-indigo-400">Spindle Controller</span>
            <span className="text-[8px] px-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 rounded">OK</span>
          </div>
          <div className="text-[9px] text-slate-600 dark:text-slate-400">
            <div>Target: 14,000 RPM</div>
            <div>Feedback: Closed-Loop</div>
          </div>

          {/* Output Port */}
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-emerald-600 rounded-full border-2 border-white dark:border-slate-900 shadow" title="OUT Port" />
        </div>
      </div>
    </div>
  );
};

// #244 Edge - Connecting wire between source and target nodes
export const LiveEdgeLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#244 EDGE (GRAPH CONNECTION)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Bezier Flow Wire</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex items-center justify-between relative">
        <div className="p-2 bg-indigo-600 text-white rounded font-bold text-[9px] z-10 shadow">
          Sensor #1 (OUT)
        </div>

        {/* Dynamic Edge Wire */}
        <div className="flex-1 flex items-center justify-center px-2">
          <div className="w-full h-1 bg-indigo-500 relative">
            <span className="absolute left-1/2 -top-3 -translate-x-1/2 text-[8px] bg-indigo-600 text-white px-1.5 py-0.2 rounded">
              Data Stream ➔
            </span>
          </div>
        </div>

        <div className="p-2 bg-emerald-600 text-white rounded font-bold text-[9px] z-10 shadow">
          DSP Filter (IN)
        </div>
      </div>
    </div>
  );
};

// #245 Connector - Elastic rubberband wire drawn during port dragging
export const LiveConnectorLab: React.FC = () => {
  const [targetConnected, setTargetConnected] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#245 CONNECTOR TOOL</span>
        <button
          onClick={() => setTargetConnected(!targetConnected)}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
        >
          {targetConnected ? 'Disconnect Wire' : 'Simulate Port Snap'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex items-center justify-between">
        <div className="w-16 h-10 bg-slate-100 dark:bg-slate-800 border rounded flex items-center justify-center text-[9px] font-bold">
          Source
        </div>

        <div className={`flex-1 h-0.5 border-t-2 border-dashed transition-all ${targetConnected ? 'border-emerald-500' : 'border-indigo-500 animate-pulse'}`} />

        <div className={`w-16 h-10 border rounded flex items-center justify-center text-[9px] font-bold transition-all ${targetConnected ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
          {targetConnected ? 'Linked ✓' : 'Drop Port'}
        </div>
      </div>
    </div>
  );
};

// #246 Port - Circular terminal on node boundary
export const LivePortLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#246 PORT (TERMINAL)</span>
        <span className="text-[10px] text-slate-500">I/O Terminals</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex justify-center">
        <div className="relative w-44 bg-slate-100 dark:bg-slate-800 rounded-lg p-3 border border-slate-300 dark:border-slate-700 flex flex-col items-center">
          {/* Top Port */}
          <div className="absolute -top-2 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white dark:border-slate-900 ring-2 ring-indigo-400 flex items-center justify-center text-[7px] text-white">▲</div>
          <span className="font-bold text-xs">Port Hub</span>
          {/* Bottom Port */}
          <div className="absolute -bottom-2 w-4 h-4 bg-emerald-600 rounded-full border-2 border-white dark:border-slate-900 ring-2 ring-emerald-400 flex items-center justify-center text-[7px] text-white">▼</div>
        </div>
      </div>
    </div>
  );
};

// #247 Anchor Point - Math origin point (+) for rotation/scale
export const LiveAnchorPointLab: React.FC = () => {
  const [angle, setAngle] = useState(15);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#247 ANCHOR POINT (+)</span>
        <span className="text-[10px] text-indigo-600 font-bold">{angle}° Rotation</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 flex flex-col items-center gap-3">
        <div className="relative w-28 h-20 bg-slate-100 dark:bg-slate-800 rounded border border-slate-400 flex items-center justify-center">
          <div
            style={{ transform: `rotate(${angle}deg)` }}
            className="w-20 h-10 bg-indigo-600 text-white rounded flex items-center justify-center font-bold text-[9px] shadow origin-center transition-transform duration-100"
          >
            {/* Center Anchor Point Crosshair */}
            <div className="w-3 h-3 border border-white rounded-full flex items-center justify-center">
              <span className="text-[8px]">+</span>
            </div>
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="90"
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-full accent-indigo-600"
        />
      </div>
    </div>
  );
};

// #248 Control Point - Tangent control points modifying curve radius
export const LiveControlPointLab: React.FC = () => {
  const [tension, setTension] = useState(40);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#248 CONTROL POINT (BEZIER)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Curvature: {tension}</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="relative h-20 bg-slate-50 dark:bg-slate-950 border rounded-lg p-2 flex items-center justify-between">
          <span className="w-3 h-3 rounded-full bg-slate-700" />
          
          {/* Bezier Tangent Handle */}
          <div
            style={{ transform: `translateY(-${tension / 2}px)` }}
            className="flex items-center gap-1 bg-indigo-50 dark:bg-indigo-950/80 px-2 py-1 rounded border border-indigo-400 text-[9px] font-bold text-indigo-600 shadow"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            <span>Control Point Tangent</span>
          </div>

          <span className="w-3 h-3 rounded-full bg-slate-700" />
        </div>

        <input
          type="range"
          min="0"
          max="80"
          value={tension}
          onChange={(e) => setTension(Number(e.target.value))}
          className="w-full accent-indigo-600"
        />
      </div>
    </div>
  );
};

// #249 Transform Handle - 8-point bounding corner handles for scaling
export const LiveTransformHandleLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#249 TRANSFORM HANDLES</span>
        <span className="text-[10px] text-slate-500">8-Point Matrix</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 flex justify-center">
        <div className="relative w-40 h-20 bg-indigo-50 dark:bg-indigo-950/50 border-2 border-indigo-600 rounded flex items-center justify-center font-bold text-xs text-indigo-900 dark:text-indigo-200">
          {/* 8 Bounding Corner Handles */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-indigo-600 shadow cursor-nwse-resize" />
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-indigo-600 shadow cursor-ns-resize" />
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-indigo-600 shadow cursor-nesw-resize" />
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-white border-2 border-indigo-600 shadow cursor-ew-resize" />
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-2 border-indigo-600 shadow cursor-ew-resize" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-indigo-600 shadow cursor-nesw-resize" />
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-indigo-600 shadow cursor-ns-resize" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-indigo-600 shadow cursor-nwse-resize" />

          Scaled Shape
        </div>
      </div>
    </div>
  );
};

// #250 Bounding Box - Dashed selection boundary enclosing nodes
export const LiveBoundingBoxLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#250 BOUNDING BOX</span>
        <span className="text-[10px] text-indigo-600 font-bold">W: 180px | H: 80px</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex justify-center">
        <div className="p-3 border-2 border-dashed border-indigo-500 rounded-lg bg-indigo-50/40 dark:bg-indigo-950/30 flex gap-2">
          <div className="p-2 bg-indigo-600 text-white rounded text-[9px] font-bold">Node A</div>
          <div className="p-2 bg-emerald-600 text-white rounded text-[9px] font-bold">Node B</div>
        </div>
      </div>
    </div>
  );
};

// #251 Selection Box - Solid outline indicating focused active entity
export const LiveSelectionBoxLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#251 SELECTION BOX</span>
        <span className="text-[10px] text-emerald-600 font-bold">Active Focus</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex justify-around">
        <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded text-[9px]">Unselected</div>
        <div className="p-2.5 bg-indigo-600 text-white rounded-lg ring-4 ring-indigo-500/30 border-2 border-indigo-400 font-bold text-[9px] shadow-lg">
          Focused Selection
        </div>
      </div>
    </div>
  );
};

// #252 Marquee Selection - Dragged rectangular selection overlay
export const LiveMarqueeSelectionLab: React.FC = () => {
  const [selected, setSelected] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#252 MARQUEE SELECTION</span>
        <button onClick={() => setSelected(!selected)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          Toggle Marquee
        </button>
      </div>

      <div className="relative h-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 flex items-center justify-around">
        {selected && (
          <div className="absolute left-4 top-2 w-48 h-20 bg-indigo-500/20 border-2 border-indigo-500 rounded pointer-events-none" />
        )}
        <div className="p-2 bg-indigo-600 text-white rounded text-[9px] font-bold">N1</div>
        <div className="p-2 bg-indigo-600 text-white rounded text-[9px] font-bold">N2</div>
        <div className="p-2 bg-slate-200 dark:bg-slate-800 rounded text-[9px]">N3</div>
      </div>
    </div>
  );
};

// #253 Lasso Selection - Freeform looped selection boundary
export const LiveLassoSelectionLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#253 LASSO SELECTION</span>
        <span className="text-[10px] text-indigo-600 font-bold">Freehand Loop</span>
      </div>

      <div className="relative h-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 flex items-center justify-around overflow-hidden">
        {/* Organic SVG Lasso Loop */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path
            d="M 30,20 Q 90,5 150,25 Q 180,60 140,80 Q 50,90 30,50 Z"
            fill="rgba(99, 102, 241, 0.15)"
            stroke="#6366f1"
            strokeWidth="2"
            strokeDasharray="4 2"
          />
        </svg>
        <div className="p-2 bg-indigo-600 text-white rounded text-[9px] font-bold z-10">Lassoed 1</div>
        <div className="p-2 bg-indigo-600 text-white rounded text-[9px] font-bold z-10">Lassoed 2</div>
        <div className="p-2 bg-slate-200 dark:bg-slate-800 rounded text-[9px] z-10">Outside</div>
      </div>
    </div>
  );
};

// #254 Grid (Canvas Grid) - Background dot grid coordinate pattern
export const LiveGridLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#254 GRID (CANVAS DOT GRID)</span>
        <span className="text-[10px] text-slate-500">20px Dot Matrix</span>
      </div>

      <div className="h-20 bg-[radial-gradient(#94a3b8_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#475569_1.5px,transparent_1.5px)] [background-size:20px_20px] border border-slate-300 dark:border-slate-700 rounded-lg p-2 flex items-center justify-center text-slate-500 font-bold text-[10px]">
        Reference Grid Space
      </div>
    </div>
  );
};

// #255 Ruler (Canvas Rulers) - Top/Left pixel coordinate rulers
export const LiveRulerLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#255 RULER (CANVAS RULERS)</span>
        <span className="text-[10px] text-slate-500">Pixel Calibration</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
        {/* Top Ruler Bar */}
        <div className="h-5 bg-slate-200 dark:bg-slate-800 border-b flex justify-between px-2 text-[7px] text-slate-600 dark:text-slate-400 items-end pb-0.5">
          <span>0px</span><span>100px</span><span>200px</span><span>300px</span>
        </div>
        <div className="h-16 flex items-center justify-center text-[10px] text-slate-400">
          Calibrated Canvas Origin (0,0)
        </div>
      </div>
    </div>
  );
};

// #256 Guide (Custom Guide Lines) - Cyan user-placed alignment guidelines
export const LiveGuideLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#256 GUIDE (CUSTOM GUIDE LINE)</span>
        <span className="text-[10px] text-cyan-600 font-bold">X: 140px Guide</span>
      </div>

      <div className="relative h-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 overflow-hidden">
        {/* Cyan Guide Line */}
        <div className="absolute top-0 bottom-0 left-[140px] w-0.5 bg-cyan-500 shadow z-10">
          <span className="absolute top-1 left-1 bg-cyan-600 text-white text-[7px] font-bold px-1 rounded">
            Guide X:140
          </span>
        </div>
        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded inline-block text-[9px] font-bold">
          Aligned Object
        </div>
      </div>
    </div>
  );
};

// #257 Smart Guide - Magnetic red alignment lines detecting sibling centers
export const LiveSmartGuideLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#257 SMART GUIDE (AUTO SNAP)</span>
        <span className="text-[10px] text-rose-600 font-bold">Center Matched</span>
      </div>

      <div className="relative h-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 flex items-center justify-around">
        {/* Horizontal Center Snap Red Line */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-rose-500 dashed pointer-events-none" />

        <div className="p-2 bg-indigo-600 text-white rounded font-bold text-[9px] z-10 shadow">
          Fixed Node #1
        </div>
        <div className="p-2 bg-rose-600 text-white rounded font-bold text-[9px] z-10 ring-4 ring-rose-500/20 shadow">
          Snapped Node #2
        </div>
      </div>
    </div>
  );
};

// #258 Alignment (Tool Actions) - 1-click horizontal/vertical align tools
export const LiveAlignmentLab: React.FC = () => {
  const [align, setAlign] = useState<'left' | 'center' | 'right'>('center');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#258 ALIGNMENT TOOLS</span>
        <div className="flex gap-1">
          <button onClick={() => setAlign('left')} className={`p-1 rounded ${align === 'left' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border'}`}><AlignLeft className="w-3 h-3" /></button>
          <button onClick={() => setAlign('center')} className={`p-1 rounded ${align === 'center' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border'}`}><AlignCenter className="w-3 h-3" /></button>
          <button onClick={() => setAlign('right')} className={`p-1 rounded ${align === 'right' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border'}`}><AlignRight className="w-3 h-3" /></button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 flex flex-col gap-1.5">
        <div className={`flex ${align === 'left' ? 'justify-start' : align === 'center' ? 'justify-center' : 'justify-end'}`}>
          <div className="w-24 p-1.5 bg-indigo-600 text-white rounded text-[9px] font-bold text-center">Block A (96px)</div>
        </div>
        <div className={`flex ${align === 'left' ? 'justify-start' : align === 'center' ? 'justify-center' : 'justify-end'}`}>
          <div className="w-36 p-1.5 bg-emerald-600 text-white rounded text-[9px] font-bold text-center">Block B (144px)</div>
        </div>
      </div>
    </div>
  );
};

// #259 Distribution (Equal Spacing) - Equidistant gap spacing between items
export const LiveDistributionLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#259 DISTRIBUTION (EQUAL SPACING)</span>
        <span className="text-[10px] text-indigo-600 font-bold">24px Equal Gap</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex items-center justify-between">
        <div className="p-2 bg-indigo-600 text-white rounded font-bold text-[9px]">Box 1</div>
        <span className="text-[8px] text-indigo-500 font-bold">⟷ 24px</span>
        <div className="p-2 bg-indigo-600 text-white rounded font-bold text-[9px]">Box 2</div>
        <span className="text-[8px] text-indigo-500 font-bold">⟷ 24px</span>
        <div className="p-2 bg-indigo-600 text-white rounded font-bold text-[9px]">Box 3</div>
      </div>
    </div>
  );
};

// #260 Auto Layout (Graph Auto-Routing) - 1-click Dagre hierarchic layout
export const LiveAutoLayoutLab: React.FC = () => {
  const [isOrganized, setIsOrganized] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#260 AUTO LAYOUT (GRAPH ROUTING)</span>
        <button
          onClick={() => setIsOrganized(!isOrganized)}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold flex items-center gap-1"
        >
          <RefreshCw className="w-3 h-3" />
          <span>{isOrganized ? 'Un-cluster' : 'Auto Organize (Dagre)'}</span>
        </button>
      </div>

      <div className="relative h-28 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 transition-all">
        {isOrganized ? (
          <div className="h-full flex items-center justify-around">
            <div className="p-2 bg-indigo-600 text-white rounded font-bold text-[9px]">Root (Stage 1)</div>
            <ArrowRight className="w-4 h-4 text-indigo-500" />
            <div className="p-2 bg-emerald-600 text-white rounded font-bold text-[9px]">Worker (Stage 2)</div>
          </div>
        ) : (
          <div className="h-full relative">
            <div className="absolute top-2 left-6 p-2 bg-indigo-600 text-white rounded font-bold text-[9px] rotate-6">
              Tangled Node #1
            </div>
            <div className="absolute bottom-2 right-8 p-2 bg-emerald-600 text-white rounded font-bold text-[9px] -rotate-3">
              Tangled Node #2
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
