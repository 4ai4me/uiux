import React, { useState, useEffect, useRef } from 'react';
import {
  Volume2,
  VolumeX,
  Sparkles,
  Sliders,
  RotateCcw,
  Play,
  Pause,
  Layers,
  Palette,
  Eye,
  Activity,
  Maximize2,
  Minimize2,
  Zap,
  Info,
  Compass
} from 'lucide-react';

// ==========================================
// Web Audio Chime Helper (Procedural Synthesizer)
// ==========================================
class ChimeAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.5;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
  }

  public playChime(freq: number = 659.25, velocity: number = 1.0) {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Dual harmonic blend: Sine with slight triangle sparkle
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Higher velocity -> slightly higher pitch modulation & brightness
      const filterCutoff = Math.min(12000, 2000 + velocity * 4000);
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(filterCutoff, now);
      filter.Q.setValueAtTime(4.0, now);

      const peakGain = Math.min(0.8, (0.05 + velocity * 0.25) * this.volume);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(peakGain, now + 0.008);
      // Exponential chime decay
      gain.gain.exponentialRampToValueAtTime(0.0001, now + Math.min(2.5, 0.4 + velocity * 1.2));

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 2.5);
    } catch {
      // Audio context policy fallback
    }
  }
}

const chimeEngine = new ChimeAudioEngine();

// Pentatonic Frequencies
const PENTATONIC_SCALE = [
  523.25, // C5
  587.33, // D5
  659.25, // E5
  783.99, // G5
  880.00, // A5
  1046.50, // C6
  1174.66, // D6
  1318.51, // E6
];

// ==========================================
// 1. Live Interactive Beaded Curtain Lab (#653)
// ==========================================
interface BeadPoint {
  x: number;
  y: number;
  oldX: number;
  oldY: number;
  pinned: boolean;
  color: string;
  radius: number;
}

export const LiveInteractiveBeadedCurtainLab: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [theme, setTheme] = useState<'azulejo' | 'talavera' | 'nordic' | 'neon'>('azulejo');
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [strandsCount, setStrandsCount] = useState(14);
  const [beadsPerStrand] = useState(12);
  const [gravity, setGravity] = useState(0.4);
  const [damping, setDamping] = useState(0.96);

  const pointsRef = useRef<BeadPoint[][]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, prevX: -1000, prevY: -1000, isDown: false, vx: 0, vy: 0 });

  const themeColors: Record<string, string[]> = {
    azulejo: ['#0284c7', '#38bdf8', '#e0f2fe', '#0369a1', '#f8fafc'],
    talavera: ['#f59e0b', '#d97706', '#ea580c', '#0284c7', '#fbbf24'],
    nordic: ['#14b8a6', '#0d9488', '#f1f5f9', '#64748b', '#cbd5e1'],
    neon: ['#ec4899', '#8b5cf6', '#06b6d4', '#10b981', '#f43f5e']
  };

  useEffect(() => {
    chimeEngine.setMuted(isMuted);
    chimeEngine.setVolume(volume);
  }, [isMuted, volume]);

  // Initialize Point Mesh
  const initCurtain = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = canvas.width;
    const h = canvas.height;
    const strandSpacing = w / (strandsCount + 1);
    const beadSpacing = (h - 40) / beadsPerStrand;
    const colors = themeColors[theme];

    const newPoints: BeadPoint[][] = [];

    for (let s = 0; s < strandsCount; s++) {
      const strandPoints: BeadPoint[] = [];
      const baseX = (s + 1) * strandSpacing;

      for (let b = 0; b < beadsPerStrand; b++) {
        const baseY = 25 + b * beadSpacing;
        const color = colors[(s + b) % colors.length];
        strandPoints.push({
          x: baseX,
          y: baseY,
          oldX: baseX,
          oldY: baseY,
          pinned: b === 0,
          color: color,
          radius: 5.5
        });
      }
      newPoints.push(strandPoints);
    }
    pointsRef.current = newPoints;
  };

  useEffect(() => {
    initCurtain();
  }, [strandsCount, theme]);

  // Canvas Animation & Physics Loop
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastSoundTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Top Rod
      ctx.fillStyle = '#475569';
      ctx.fillRect(10, 18, canvas.width - 20, 5);
      ctx.fillStyle = '#64748b';
      ctx.fillRect(10, 19, canvas.width - 20, 2);

      const mouse = mouseRef.current;
      const mouseSpeed = Math.hypot(mouse.vx, mouse.vy);

      // 1. Verlet Integration Step
      pointsRef.current.forEach((strand) => {
        strand.forEach((p) => {
          if (!p.pinned) {
            const vx = (p.x - p.oldX) * damping;
            const vy = (p.y - p.oldY) * damping + gravity;

            p.oldX = p.x;
            p.oldY = p.y;

            p.x += vx;
            p.y += vy;

            // Mouse interaction push
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.hypot(dx, dy);
            const touchRadius = 38;

            if (dist < touchRadius && dist > 0) {
              const force = (touchRadius - dist) / touchRadius;
              const pushX = (dx / dist) * force * 16 + mouse.vx * 0.4;
              const pushY = (dy / dist) * force * 10 + mouse.vy * 0.2;
              p.x += pushX;
              p.y += pushY;

              const now = performance.now();
              if (now - lastSoundTime > 65 && mouseSpeed > 1.5) {
                const noteIndex = Math.floor(Math.random() * PENTATONIC_SCALE.length);
                const freq = PENTATONIC_SCALE[noteIndex];
                chimeEngine.playChime(freq, Math.min(1.5, mouseSpeed / 8));
                lastSoundTime = now;
              }
            }
          }
        });
      });

      // 2. Distance Constraints Relaxation (3 iterations)
      for (let iter = 0; iter < 4; iter++) {
        pointsRef.current.forEach((strand) => {
          const targetDist = (canvas.height - 40) / beadsPerStrand;
          for (let i = 0; i < strand.length - 1; i++) {
            const p1 = strand[i];
            const p2 = strand[i + 1];
            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            const dist = Math.hypot(dx, dy);
            if (dist === 0) continue;
            const diff = (targetDist - dist) / dist;
            const offsetX = dx * diff * 0.5;
            const offsetY = dy * diff * 0.5;

            if (!p1.pinned) {
              p1.x -= offsetX;
              p1.y -= offsetY;
            }
            if (!p2.pinned) {
              p2.x += offsetX;
              p2.y += offsetY;
            }
          }
        });
      }

      // 3. Draw Strings & Beads
      pointsRef.current.forEach((strand) => {
        // Draw string cord
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
        ctx.lineWidth = 1.2;
        strand.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();

        // Draw Beads with 3D specular highlight
        strand.forEach((p, i) => {
          if (i === 0) return; // Top anchor ring

          // Shadow
          ctx.beginPath();
          ctx.arc(p.x + 1.5, p.y + 2, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
          ctx.fill();

          // Bead body
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          // Specular shine
          ctx.beginPath();
          ctx.arc(p.x - p.radius * 0.35, p.y - p.radius * 0.35, p.radius * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.fill();

          // Subtle border
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        });
      });

      // Mouse ripple indicator
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 16, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Update mouse velocity decay
      mouse.vx = (mouse.x - mouse.prevX);
      mouse.vy = (mouse.y - mouse.prevY);
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [gravity, damping, beadsPerStrand]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    mouseRef.current.x = (e.clientX - rect.left) * scaleX;
    mouseRef.current.y = (e.clientY - rect.top) * scaleY;
  };

  const handleMouseLeave = () => {
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
    mouseRef.current.vx = 0;
    mouseRef.current.vy = 0;
  };

  const handleImpulse = () => {
    pointsRef.current.forEach((strand, sIdx) => {
      strand.forEach((p, bIdx) => {
        if (!p.pinned) {
          p.x += Math.sin(sIdx * 0.8 + bIdx) * 24;
        }
      });
    });
    // Multi chime burst
    PENTATONIC_SCALE.forEach((freq, idx) => {
      setTimeout(() => chimeEngine.playChime(freq, 0.8), idx * 70);
    });
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 text-slate-200">
      {/* Top Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              Interactive Beaded Curtain
              <span className="text-[10px] bg-amber-950 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/30 font-mono">
                Verlet Physics + Chimes
              </span>
            </h4>
            <p className="text-xs text-slate-400">마우스를 캔버스 위로 스치거나 드래그하여 구슬 발을 흔들어보세요.</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isMuted
                ? 'bg-rose-950/60 border-rose-800 text-rose-300'
                : 'bg-emerald-950/60 border-emerald-800 text-emerald-300'
            }`}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span>{isMuted ? 'Muted' : 'Audio ON'}</span>
          </button>

          <button
            onClick={handleImpulse}
            className="px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 text-xs font-bold transition-all flex items-center gap-1"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Shake Curtain</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Canvas Area */}
      <div className="relative w-full h-[320px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center cursor-crosshair">
        <canvas
          ref={canvasRef}
          width={640}
          height={320}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full h-full object-contain"
        />

        {/* Floating Hint Pill */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-700/80 text-[11px] text-slate-300 pointer-events-none flex items-center gap-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Swipe cursor across beads to hear natural ceramic chimes</span>
        </div>
      </div>

      {/* Bottom Tuning Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-400 font-medium flex justify-between">
            <span>Color Palette Theme:</span>
            <span className="text-amber-400 font-bold capitalize">{theme}</span>
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {(['azulejo', 'talavera', 'nordic', 'neon'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`py-1 px-2 rounded-lg border text-[11px] font-medium capitalize transition-all ${
                  theme === t
                    ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 font-bold'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5 justify-center">
          <div className="flex justify-between text-slate-400">
            <span>Strand Count:</span>
            <span className="font-mono text-cyan-300">{strandsCount} Strings</span>
          </div>
          <input
            type="range"
            min="8"
            max="20"
            value={strandsCount}
            onChange={(e) => setStrandsCount(Number(e.target.value))}
            className="w-full accent-cyan-400"
          />

          <div className="flex justify-between text-slate-400 mt-1">
            <span>Chime Volume:</span>
            <span className="font-mono text-emerald-300">{Math.round(volume * 100)}%</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full accent-emerald-400"
          />
        </div>

        <div className="flex flex-col gap-1.5 justify-center">
          <div className="flex justify-between text-slate-400">
            <span>Gravity Acceleration:</span>
            <span className="font-mono text-amber-300">{gravity.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="1.2"
            step="0.05"
            value={gravity}
            onChange={(e) => setGravity(Number(e.target.value))}
            className="w-full accent-amber-400"
          />

          <div className="flex justify-between text-slate-400 mt-1">
            <span>Air Damping (Friction):</span>
            <span className="font-mono text-indigo-300">{damping.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.85"
            max="0.99"
            step="0.01"
            value={damping}
            onChange={(e) => setDamping(Number(e.target.value))}
            className="w-full accent-indigo-400"
          />
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. Live Velocity-Adaptive Chime Synthesizer Lab (#654)
// ==========================================
export const LiveVelocityAdaptiveChimeSynthesizerLab: React.FC = () => {
  const [scaleMode, setScaleMode] = useState<'pentatonic' | 'akebono' | 'hirajoshi' | 'celtic'>('pentatonic');
  const [lastVelocity, setLastVelocity] = useState(0);
  const [lastNote, setLastNote] = useState('E5 (659Hz)');
  const [waveHistory, setWaveHistory] = useState<number[]>(new Array(40).fill(0));

  const scales: Record<string, { name: string; notes: { name: string; freq: number }[] }> = {
    pentatonic: {
      name: 'Pentatonic Major (밝고 청아한 울림)',
      notes: [
        { name: 'C5', freq: 523.25 },
        { name: 'D5', freq: 587.33 },
        { name: 'E5', freq: 659.25 },
        { name: 'G5', freq: 783.99 },
        { name: 'A5', freq: 880.00 },
        { name: 'C6', freq: 1046.50 }
      ]
    },
    akebono: {
      name: 'Akebono (동양풍 명상 풍경)',
      notes: [
        { name: 'C5', freq: 523.25 },
        { name: 'D5', freq: 587.33 },
        { name: 'Eb5', freq: 622.25 },
        { name: 'G5', freq: 783.99 },
        { name: 'Ab5', freq: 830.61 },
        { name: 'C6', freq: 1046.50 }
      ]
    },
    hirajoshi: {
      name: 'Hirajoshi (신비로운 세라믹 공명)',
      notes: [
        { name: 'C5', freq: 523.25 },
        { name: 'Db5', freq: 554.37 },
        { name: 'F5', freq: 698.46 },
        { name: 'G5', freq: 783.99 },
        { name: 'Bb5', freq: 932.33 },
        { name: 'C6', freq: 1046.50 }
      ]
    },
    celtic: {
      name: 'Celtic Wind (맑은 종소리)',
      notes: [
        { name: 'D5', freq: 587.33 },
        { name: 'E5', freq: 659.25 },
        { name: 'G5', freq: 783.99 },
        { name: 'A5', freq: 880.00 },
        { name: 'B5', freq: 987.77 },
        { name: 'D6', freq: 1174.66 }
      ]
    }
  };

  const triggerChime = (freq: number, noteName: string, vel: number) => {
    chimeEngine.playChime(freq, vel);
    setLastVelocity(Math.round(vel * 100));
    setLastNote(`${noteName} (${Math.round(freq)}Hz)`);

    // Update wave visual
    setWaveHistory((prev) => {
      const next = [...prev.slice(1)];
      next.push(vel);
      return next;
    });
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 text-slate-200">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Velocity-Adaptive Chime Synthesizer</h4>
            <p className="text-xs text-slate-400">Web Audio API 기반 무지연(Zero-Latency) 충돌 감응형 오디오 합성 엔진</p>
          </div>
        </div>
        <div className="flex gap-2">
          {(['pentatonic', 'akebono', 'hirajoshi', 'celtic'] as const).map((k) => (
            <button
              key={k}
              onClick={() => setScaleMode(k)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize border transition-all ${
                scaleMode === k
                  ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      {/* Chime Strike Ribbons (Interactive Keys) */}
      <div className="grid grid-cols-6 gap-2">
        {scales[scaleMode].notes.map((note, idx) => (
          <div
            key={idx}
            onMouseEnter={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const vel = Math.min(1.8, Math.max(0.4, (rect.bottom - e.clientY) / rect.height * 1.5));
              triggerChime(note.freq, note.name, vel);
            }}
            onClick={() => triggerChime(note.freq, note.name, 1.2)}
            className="group relative h-40 bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 hover:border-emerald-500/60 rounded-xl p-3 flex flex-col justify-between items-center cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:-translate-y-1 select-none"
          >
            {/* Hanging String */}
            <div className="w-0.5 h-6 bg-slate-700 group-hover:bg-emerald-400 transition-colors" />

            {/* Ceramic Bead Cylinder */}
            <div
              className="w-10 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg transition-transform group-hover:scale-105"
              style={{
                height: `${80 - idx * 6}px`,
                backgroundColor: `hsl(${150 + idx * 25}, 70%, 45%)`,
                boxShadow: `0 4px 12px hsla(${150 + idx * 25}, 70%, 45%, 0.3)`
              }}
            >
              <span className="text-white font-black text-xs drop-shadow">{note.name}</span>
              <span className="text-[9px] text-emerald-100 font-mono">{Math.round(note.freq)}Hz</span>
            </div>

            <span className="text-[10px] text-slate-500 font-mono">Strike Bar</span>
          </div>
        ))}
      </div>

      {/* DSP Telemetry & Waveform Visualizer */}
      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="flex flex-col justify-center gap-1">
          <span className="text-slate-400">Current Harmonic Trigger:</span>
          <span className="font-mono text-sm font-bold text-emerald-300">{lastNote}</span>
          <span className="text-[11px] text-slate-500">Envelope: Exponential Decay τ=0.85s</span>
        </div>

        <div className="flex flex-col justify-center gap-1">
          <div className="flex justify-between">
            <span className="text-slate-400">Impact Velocity Index:</span>
            <span className="font-mono text-amber-400 font-bold">{lastVelocity}%</span>
          </div>
          <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-400 transition-all duration-150"
              style={{ width: `${Math.min(100, lastVelocity)}%` }}
            />
          </div>
          <span className="text-[10px] text-slate-500">Dynamic Q-factor Modulation: 4.0 ~ 8.5</span>
        </div>

        <div className="flex flex-col gap-1 justify-center">
          <span className="text-slate-400">Real-Time Wave Spectrum:</span>
          <div className="h-10 bg-slate-900 rounded-lg p-1 flex items-end gap-1 border border-slate-800">
            {waveHistory.map((val, i) => (
              <div
                key={i}
                className="flex-1 bg-emerald-500/80 rounded-t transition-all duration-100"
                style={{ height: `${Math.max(10, val * 90)}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. Live Verlet String Drag Dynamics Lab (#655)
// ==========================================
export const LiveVerletStringDragDynamicsLab: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pointCount, setPointCount] = useState(12);
  const [gravity, setGravity] = useState(0.5);
  const [damping, setDamping] = useState(0.97);
  const [renderMode, setRenderMode] = useState<'spline' | 'points' | 'stress'>('spline');

  const nodesRef = useRef<{ x: number; y: number; oldX: number; oldY: number; pinned: boolean }[]>([]);
  const dragIdxRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = canvas.width;
    const h = canvas.height;

    const newNodes = [];
    const spacing = (h - 60) / pointCount;
    for (let i = 0; i < pointCount; i++) {
      newNodes.push({
        x: w / 2,
        y: 30 + i * spacing,
        oldX: w / 2,
        oldY: 30 + i * spacing,
        pinned: i === 0
      });
    }
    nodesRef.current = newNodes;
  }, [pointCount]);

  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Top anchor beam
      ctx.fillStyle = '#6366f1';
      ctx.fillRect(canvas.width / 2 - 25, 18, 50, 6);

      const nodes = nodesRef.current;
      const targetDist = (canvas.height - 60) / pointCount;

      // 1. Verlet integration
      nodes.forEach((p, idx) => {
        if (!p.pinned && dragIdxRef.current !== idx) {
          const vx = (p.x - p.oldX) * damping;
          const vy = (p.y - p.oldY) * damping + gravity;

          p.oldX = p.x;
          p.oldY = p.y;

          p.x += vx;
          p.y += vy;
        }
      });

      // 2. Distance constraint relaxation (6 iterations)
      for (let iter = 0; iter < 6; iter++) {
        for (let i = 0; i < nodes.length - 1; i++) {
          const p1 = nodes[i];
          const p2 = nodes[i + 1];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.hypot(dx, dy);
          if (dist === 0) continue;
          const diff = (targetDist - dist) / dist;
          const offsetX = dx * diff * 0.5;
          const offsetY = dy * diff * 0.5;

          if (!p1.pinned && dragIdxRef.current !== i) {
            p1.x -= offsetX;
            p1.y -= offsetY;
          }
          if (!p2.pinned && dragIdxRef.current !== i + 1) {
            p2.x += offsetX;
            p2.y += offsetY;
          }
        }
      }

      // 3. Render rope based on mode
      if (renderMode === 'spline') {
        ctx.beginPath();
        ctx.moveTo(nodes[0].x, nodes[0].y);
        for (let i = 1; i < nodes.length; i++) {
          ctx.lineTo(nodes[i].x, nodes[i].y);
        }
        ctx.strokeStyle = '#818cf8';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Nodes
        nodes.forEach((p, idx) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.pinned ? 6 : 4, 0, Math.PI * 2);
          ctx.fillStyle = p.pinned ? '#ef4444' : '#c7d2fe';
          ctx.fill();
        });
      } else if (renderMode === 'points') {
        for (let i = 0; i < nodes.length - 1; i++) {
          const p1 = nodes[i];
          const p2 = nodes[i + 1];
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = 'rgba(255,255,255,0.4)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
        nodes.forEach((p, idx) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, idx === dragIdxRef.current ? 8 : 5, 0, Math.PI * 2);
          ctx.fillStyle = idx === dragIdxRef.current ? '#fbbf24' : p.pinned ? '#ef4444' : '#38bdf8';
          ctx.fill();
          ctx.strokeStyle = '#000';
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      } else {
        // Stress Tension Mode
        for (let i = 0; i < nodes.length - 1; i++) {
          const p1 = nodes[i];
          const p2 = nodes[i + 1];
          const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
          const ratio = dist / targetDist;
          const color = ratio > 1.3 ? '#ef4444' : ratio > 1.1 ? '#f59e0b' : '#10b981';

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = color;
          ctx.lineWidth = 3;
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [pointCount, gravity, damping, renderMode]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    let closestIdx = -1;
    let minDist = 30;
    nodesRef.current.forEach((p, i) => {
      const d = Math.hypot(p.x - x, p.y - y);
      if (d < minDist) {
        minDist = d;
        closestIdx = i;
      }
    });

    if (closestIdx !== -1 && !nodesRef.current[closestIdx].pinned) {
      dragIdxRef.current = closestIdx;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (dragIdxRef.current === null) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    const node = nodesRef.current[dragIdxRef.current];
    if (node) {
      node.x = x;
      node.y = y;
      node.oldX = x;
      node.oldY = y;
    }
  };

  const handleMouseUp = () => {
    dragIdxRef.current = null;
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Verlet String Drag Dynamics</h4>
            <p className="text-xs text-slate-400">거리 제약 질점 체인의 베를레 수치 적분 시뮬레이션</p>
          </div>
        </div>

        <div className="flex gap-1.5">
          {(['spline', 'points', 'stress'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setRenderMode(m)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize border transition-all ${
                renderMode === m
                  ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {m} Mode
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full h-[280px] bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing">
        <canvas
          ref={canvasRef}
          width={500}
          height={280}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="w-full h-full object-contain"
        />

        <div className="absolute top-3 left-3 px-2.5 py-1 bg-slate-900/90 rounded-md border border-slate-700 text-[10px] font-mono text-indigo-300">
          Click & Drag any node to pull the rope
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800">
        <div>
          <div className="flex justify-between text-slate-400">
            <span>Points in Chain:</span>
            <span className="font-mono text-indigo-300 font-bold">{pointCount} Nodes</span>
          </div>
          <input
            type="range"
            min="6"
            max="24"
            value={pointCount}
            onChange={(e) => setPointCount(Number(e.target.value))}
            className="w-full accent-indigo-400 mt-1"
          />
        </div>

        <div>
          <div className="flex justify-between text-slate-400">
            <span>Gravity Acceleration:</span>
            <span className="font-mono text-amber-300 font-bold">{gravity.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="1.5"
            step="0.05"
            value={gravity}
            onChange={(e) => setGravity(Number(e.target.value))}
            className="w-full accent-amber-400 mt-1"
          />
        </div>

        <div>
          <div className="flex justify-between text-slate-400">
            <span>Damping / Air Resistance:</span>
            <span className="font-mono text-emerald-300 font-bold">{damping.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.90"
            max="0.99"
            step="0.005"
            value={damping}
            onChange={(e) => setDamping(Number(e.target.value))}
            className="w-full accent-emerald-400 mt-1"
          />
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. Live Cultural Pattern Grid Matrix Lab (#656)
// ==========================================
export const LiveCulturalPatternGridMatrixLab: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<'azulejo' | 'talavera' | 'zellij' | 'zen'>('azulejo');
  const [inspectedBead, setInspectedBead] = useState<{ row: number; col: number; color: string } | null>(null);

  const themeConfigs: Record<
    string,
    { title: string; desc: string; palette: string[]; pattern: (r: number, c: number) => string }
  > = {
    azulejo: {
      title: 'Portuguese Azulejo Tile',
      desc: '포르투갈 전통 코발트 블루와 화이트 기하학 모자이크 타일 패턴',
      palette: ['#0284c7', '#38bdf8', '#e0f2fe', '#075985', '#ffffff'],
      pattern: (r, c) => {
        const isBorder = r === 0 || r === 11 || c === 0 || c === 15;
        const isCenter = Math.abs(r - 5.5) + Math.abs(c - 7.5) < 3.5;
        if (isCenter) return '#0284c7';
        if (isBorder) return '#075985';
        return (r + c) % 2 === 0 ? '#38bdf8' : '#e0f2fe';
      }
    },
    talavera: {
      title: 'Mexican Talavera Ceramic',
      desc: '테라코타, 마리골드 옐로우, 터콰이즈가 어우러진 멕시칸 세라믹 패턴',
      palette: ['#f59e0b', '#ea580c', '#06b6d4', '#d97706', '#fef3c7'],
      pattern: (r, c) => {
        const dist = Math.hypot(r - 5.5, c - 7.5);
        if (dist < 2.5) return '#ea580c';
        if (dist < 4.5) return '#f59e0b';
        return (r + c) % 3 === 0 ? '#06b6d4' : '#fef3c7';
      }
    },
    zellij: {
      title: 'Moroccan Zellij Mosaic',
      desc: '모로코 전통 기하학 별모양 모자이크 타일링',
      palette: ['#10b981', '#f59e0b', '#06b6d4', '#8b5cf6', '#1e293b'],
      pattern: (r, c) => {
        const isStar = (r + c) % 4 === 0 || (r - c + 16) % 4 === 0;
        return isStar ? '#10b981' : (r * c) % 2 === 0 ? '#f59e0b' : '#06b6d4';
      }
    },
    zen: {
      title: 'Kyoto Zen Garden Lattice',
      desc: '단아한 대나무 격자와 비취색 옥(Jade) 비즈 텍스처',
      palette: ['#14b8a6', '#0f766e', '#78716c', '#d6d3d1', '#f5f5f4'],
      pattern: (r, c) => {
        return c % 3 === 0 ? '#0f766e' : r % 2 === 0 ? '#14b8a6' : '#d6d3d1';
      }
    }
  };

  const currentTheme = themeConfigs[selectedTheme];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
            <Palette className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Cultural Pattern Grid Matrix</h4>
            <p className="text-xs text-slate-400">{currentTheme.desc}</p>
          </div>
        </div>

        <div className="flex gap-1.5">
          {(['azulejo', 'talavera', 'zellij', 'zen'] as const).map((k) => (
            <button
              key={k}
              onClick={() => {
                setSelectedTheme(k);
                setInspectedBead(null);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize border transition-all ${
                selectedTheme === k
                  ? 'bg-pink-500/20 border-pink-500/50 text-pink-300 font-bold'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      {/* 16 x 12 Bead Matrix Visualizer */}
      <div className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center gap-1 overflow-x-auto">
        <div className="grid grid-cols-16 gap-1.5 p-2 bg-slate-900/80 rounded-2xl border border-slate-800/80 shadow-2xl">
          {Array.from({ length: 12 }).map((_, r) =>
            Array.from({ length: 16 }).map((_, c) => {
              const color = currentTheme.pattern(r, c);
              const isSelected = inspectedBead?.row === r && inspectedBead?.col === c;

              return (
                <button
                  key={`${r}-${c}`}
                  onClick={() => {
                    setInspectedBead({ row: r, col: c, color });
                    chimeEngine.playChime(440 + (c * 30 + r * 15), 0.7);
                  }}
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full relative transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer ${
                    isSelected ? 'ring-2 ring-white scale-125 z-30 shadow-lg' : ''
                  }`}
                  style={{
                    backgroundColor: color,
                    boxShadow: `0 2px 6px ${color}40, inset -1px -1px 2px rgba(0,0,0,0.4), inset 1px 1px 2px rgba(255,255,255,0.6)`
                  }}
                />
              );
            })
          )}
        </div>
      </div>

      {/* Inspected Token Inspector & Color Tokens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800">
        <div className="flex flex-col gap-1.5">
          <span className="text-slate-400 font-bold">Theme Color Token Palette:</span>
          <div className="flex items-center gap-2">
            {currentTheme.palette.map((c, i) => (
              <div key={i} className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
                <span className="w-3 h-3 rounded-full border border-slate-700" style={{ backgroundColor: c }} />
                <span className="font-mono text-[11px] text-slate-300">{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1 justify-center">
          <span className="text-slate-400 font-bold">Bead Coordinate Inspector:</span>
          {inspectedBead ? (
            <div className="flex items-center gap-3 text-slate-300">
              <span className="bg-pink-950 text-pink-300 px-2 py-0.5 rounded font-mono">
                Cell: [{inspectedBead.row}, {inspectedBead.col}]
              </span>
              <span className="font-mono">Hex: {inspectedBead.color}</span>
              <span className="text-emerald-400 font-bold">Audio Note Triggered</span>
            </div>
          ) : (
            <span className="text-slate-500 italic">구슬을 클릭하여 좌표 및 색상 토큰을 확인하세요.</span>
          )}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. Live Physical Parameter Tuner Drawer Lab (#657)
// ==========================================
export const LivePhysicalParameterTunerDrawerLab: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [gravity, setGravity] = useState(0.98);
  const [damping, setDamping] = useState(0.96);
  const [stiffness, setStiffness] = useState(0.85);
  const [touchRadius, setTouchRadius] = useState(40);
  const [touchForce, setTouchForce] = useState(1.5);
  const [preset, setPreset] = useState<'silk' | 'wood' | 'glass' | 'space'>('wood');

  const applyPreset = (p: 'silk' | 'wood' | 'glass' | 'space') => {
    setPreset(p);
    if (p === 'silk') {
      setGravity(0.3);
      setDamping(0.98);
      setStiffness(0.95);
      setTouchRadius(60);
      setTouchForce(0.8);
    } else if (p === 'wood') {
      setGravity(0.98);
      setDamping(0.95);
      setStiffness(0.85);
      setTouchRadius(40);
      setTouchForce(1.5);
    } else if (p === 'glass') {
      setGravity(1.4);
      setDamping(0.92);
      setStiffness(0.70);
      setTouchRadius(35);
      setTouchForce(2.2);
    } else if (p === 'space') {
      setGravity(0.02);
      setDamping(0.99);
      setStiffness(0.90);
      setTouchRadius(70);
      setTouchForce(1.0);
    }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 text-slate-200">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Physical Parameter Tuner Drawer</h4>
            <p className="text-xs text-slate-400">실시간 물리 엔진 파라미터 튜너 및 텔레메트리 컨트롤러</p>
          </div>
        </div>

        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 transition-all ${
            isDrawerOpen
              ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
              : 'bg-slate-950 border-slate-800 text-slate-400'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>{isDrawerOpen ? 'Close Tuner Panel' : 'Open Tuner Panel'}</span>
        </button>
      </div>

      {/* Main Split Layout: Viewport + Tuner Drawer */}
      <div className="relative w-full h-[300px] bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex">
        {/* Left Simulated Viewport */}
        <div className="flex-1 p-4 flex flex-col justify-between relative bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="flex justify-between items-center text-xs">
            <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800 text-slate-400 font-mono">
              Simulation Preset: <strong className="text-cyan-300 uppercase">{preset}</strong>
            </span>
            <span className="text-emerald-400 text-xs font-mono flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              60.0 FPS Engine Loop
            </span>
          </div>

          {/* Interactive Simulation Graphic */}
          <div className="flex items-center justify-around">
            {[1, 2, 3, 4, 5].map((idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-1.5 h-3 bg-slate-700 rounded-t" />
                <div
                  className="w-8 rounded-2xl flex items-center justify-center font-bold text-xs text-slate-900 transition-all duration-300 animate-bounce"
                  style={{
                    height: `${40 + idx * 8}px`,
                    backgroundColor: `hsl(${180 + idx * 30}, 80%, 55%)`,
                    animationDuration: `${1.2 / gravity}s`
                  }}
                >
                  #{idx}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-[11px] text-slate-400 font-mono border-t border-slate-800/80 pt-2">
            <span>Kinetic Energy: {(gravity * touchForce * 12.4).toFixed(1)} J</span>
            <span>Constraint Delta: &lt; 0.001mm</span>
          </div>
        </div>

        {/* Slide-out Drawer Panel */}
        {isDrawerOpen && (
          <div className="w-72 bg-slate-900/95 backdrop-blur-md border-l border-slate-800 p-3.5 flex flex-col justify-between text-xs overflow-y-auto animate-in slide-in-from-right duration-200">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  Physics Constants
                </span>
                <span className="text-[10px] bg-cyan-950 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-800">
                  Live Sync
                </span>
              </div>

              {/* Presets */}
              <div className="grid grid-cols-2 gap-1.5">
                {(['silk', 'wood', 'glass', 'space'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => applyPreset(p)}
                    className={`py-1 px-2 rounded-lg border text-[11px] font-medium capitalize transition-all ${
                      preset === p
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {p} Preset
                  </button>
                ))}
              </div>

              {/* Sliders */}
              <div className="space-y-2.5">
                <div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Gravity (g):</span>
                    <span className="font-mono text-cyan-300 font-bold">{gravity.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2.5"
                    step="0.05"
                    value={gravity}
                    onChange={(e) => setGravity(Number(e.target.value))}
                    className="w-full accent-cyan-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Air Damping (γ):</span>
                    <span className="font-mono text-emerald-300 font-bold">{damping.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.80"
                    max="0.99"
                    step="0.01"
                    value={damping}
                    onChange={(e) => setDamping(Number(e.target.value))}
                    className="w-full accent-emerald-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Touch Radius (r):</span>
                    <span className="font-mono text-amber-300 font-bold">{touchRadius}px</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="80"
                    value={touchRadius}
                    onChange={(e) => setTouchRadius(Number(e.target.value))}
                    className="w-full accent-amber-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Touch Force (F):</span>
                    <span className="font-mono text-rose-300 font-bold">{touchForce.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="3.0"
                    step="0.1"
                    value={touchForce}
                    onChange={(e) => setTouchForce(Number(e.target.value))}
                    className="w-full accent-rose-400"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => applyPreset('wood')}
              className="w-full mt-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center gap-1 text-[11px]"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset to Standard Defaults</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ==========================================
// 6. Live Curtain Reveal Layering Transition Lab (#658)
// ==========================================
export const LiveCurtainRevealLayeringTransitionLab: React.FC = () => {
  const [partRatio, setPartRatio] = useState(0.15); // 0 (closed) to 1.0 (fully parted)
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      country: 'Portugal',
      title: 'O Sol Nasce Para Todos',
      translation: '태양은 모든 이를 위해 떠오른다.',
      desc: '리스본의 유서 깊은 골목길과 아줄레주 타일 발 사이로 비쳐 드는 따스한 아침 햇살의 정취',
      color: 'from-sky-900 to-indigo-950'
    },
    {
      country: 'Mexico',
      title: 'Poco a poco se anda lejos',
      translation: '조금씩 천천히 걸으면 멀리 갈 수 있다.',
      desc: '오악사카의 수공예 세라믹 공방과 마리골드 향기 가득한 안뜰의 온화한 지혜',
      color: 'from-amber-900 to-stone-950'
    },
    {
      country: 'Japan',
      title: '一期一会 (Ichigo Ichie)',
      translation: '생애 단 한 번뿐인 소중한 만남.',
      desc: '교토의 툇마루에 걸린 유리 풍경(후린)과 바람에 스치는 비즈 발의 맑은 여운',
      color: 'from-emerald-950 to-slate-950'
    }
  ];

  const story = stories[activeStory];

  const handleDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setPartRatio(val);
    if (Math.random() > 0.6) {
      chimeEngine.playChime(500 + val * 400, val * 0.8);
    }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
            <Eye className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Curtain Reveal Layering Transition</h4>
            <p className="text-xs text-slate-400">물리적 구슬 발 젖힘 뎁스 뷰포트 전환 (Depth of Field Reveal)</p>
          </div>
        </div>

        <div className="flex gap-1.5">
          {stories.map((s, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveStory(idx);
                chimeEngine.playChime(600 + idx * 100, 1.0);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                activeStory === idx
                  ? 'bg-violet-500/20 border-violet-500/50 text-violet-300 font-bold'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {s.country}
            </button>
          ))}
        </div>
      </div>

      {/* Layered Viewport Container */}
      <div className="relative w-full h-[320px] rounded-xl border border-slate-800 overflow-hidden select-none">
        {/* Layer 0: Background Story Card (Depth Blur fades out as curtain parts) */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${story.color} p-6 flex flex-col items-center justify-center text-center transition-all duration-300`}
          style={{
            filter: `blur(${(1 - partRatio) * 12}px) brightness(${0.4 + partRatio * 0.6})`,
            transform: `scale(${0.92 + partRatio * 0.08})`
          }}
        >
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">{story.country}</span>
          <h2 className="text-2xl font-serif font-black text-white drop-shadow-md mb-2">"{story.title}"</h2>
          <p className="text-sm text-amber-200/90 font-medium mb-3 max-w-md">{story.translation}</p>
          <p className="text-xs text-slate-300 max-w-sm leading-relaxed">{story.desc}</p>
        </div>

        {/* Layer 1: Left Parting Beaded Curtain */}
        <div
          className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-amber-600/30 to-amber-500/10 border-r-2 border-amber-400/80 backdrop-blur-sm transition-all duration-150 flex items-center justify-around px-2 shadow-2xl"
          style={{
            width: `${Math.max(4, (1 - partRatio) * 50)}%`
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-full flex flex-col justify-around py-4 opacity-80">
              {Array.from({ length: 8 }).map((_, j) => (
                <div
                  key={j}
                  className="w-3 h-3 rounded-full bg-amber-400 border border-amber-200 shadow-md"
                  style={{
                    backgroundColor: j % 2 === 0 ? '#f59e0b' : '#38bdf8'
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Layer 2: Right Parting Beaded Curtain */}
        <div
          className="absolute top-0 bottom-0 right-0 bg-gradient-to-l from-amber-600/30 to-amber-500/10 border-l-2 border-amber-400/80 backdrop-blur-sm transition-all duration-150 flex items-center justify-around px-2 shadow-2xl"
          style={{
            width: `${Math.max(4, (1 - partRatio) * 50)}%`
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-full flex flex-col justify-around py-4 opacity-80">
              {Array.from({ length: 8 }).map((_, j) => (
                <div
                  key={j}
                  className="w-3 h-3 rounded-full bg-amber-400 border border-amber-200 shadow-md"
                  style={{
                    backgroundColor: j % 2 === 0 ? '#f59e0b' : '#38bdf8'
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Top Header Rail */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-slate-900 border-b border-slate-700 flex items-center justify-center">
          <span className="text-[9px] font-mono text-slate-400">Curtain Hanging Track</span>
        </div>
      </div>

      {/* Parting Gesture Controller Slider */}
      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-col gap-2 text-xs">
        <div className="flex justify-between items-center text-slate-400">
          <span>Curtain Parting Opening:</span>
          <span className="font-mono text-violet-300 font-bold">{Math.round(partRatio * 100)}% Parted</span>
        </div>
        <input
          type="range"
          min="0.05"
          max="1.0"
          step="0.01"
          value={partRatio}
          onChange={handleDrag}
          className="w-full accent-violet-400"
        />
        <div className="flex justify-between text-[11px] text-slate-500">
          <span>0% (Fully Closed / Defocused)</span>
          <span>100% (Fully Opened / Sharp Focus)</span>
        </div>
      </div>
    </div>
  );
};
