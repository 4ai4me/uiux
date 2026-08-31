import React, { useState, useEffect, useRef } from 'react';
import {
  Layers,
  Eye,
  Sliders,
  Compass,
  Crosshair,
  Shield,
  Activity,
  Cpu,
  Maximize2,
  RefreshCw,
  Zap,
  Radio,
  Camera,
  ChevronDown,
  ChevronRight,
  Info,
  CheckCircle2,
  AlertTriangle,
  Play,
  Pause,
} from 'lucide-react';

// ============================================================================
// #647: Split-Flap Status Badge Lab
// ============================================================================
export const LiveSplitFlapStatusBadgeLab: React.FC = () => {
  const PRESETS = [
    'STANDBY READY',
    'SIGNAL LOCKED',
    'ACQUIRING TELEMETRY',
    'ORBIT STABLE',
    'SYSTEM OFFLINE',
    'SCAN COMPLETE',
  ];
  const [currentText, setCurrentText] = useState('STANDBY READY');
  const [displayedText, setDisplayedText] = useState('STANDBY READY');
  const [flippingIndices, setFlippingIndices] = useState<number[]>([]);
  const [speed, setSpeed] = useState<'fast' | 'normal' | 'slow'>('normal');

  const triggerFlip = (newText: string) => {
    if (newText === currentText) return;
    const paddedNew = newText.padEnd(18, ' ').slice(0, 18);
    const paddedOld = currentText.padEnd(18, ' ').slice(0, 18);
    setCurrentText(newText);

    // Staggered flip simulation
    const delayPerChar = speed === 'fast' ? 25 : speed === 'slow' ? 80 : 45;
    paddedNew.split('').forEach((_, idx) => {
      setTimeout(() => {
        setFlippingIndices((prev) => [...prev, idx]);
        setTimeout(() => {
          setDisplayedText((cur) => {
            const arr = cur.padEnd(18, ' ').split('');
            arr[idx] = paddedNew[idx];
            return arr.join('');
          });
          setFlippingIndices((prev) => prev.filter((i) => i !== idx));
        }, 180);
      }, idx * delayPerChar);
    });
  };

  const getStatusColor = (text: string) => {
    if (text.includes('LOCKED') || text.includes('STABLE') || text.includes('COMPLETE'))
      return { dot: 'bg-emerald-400', border: 'border-emerald-500/60', text: 'text-emerald-300' };
    if (text.includes('ACQUIRING') || text.includes('TELEMETRY'))
      return { dot: 'bg-amber-400', border: 'border-amber-500/60', text: 'text-amber-300' };
    if (text.includes('OFFLINE'))
      return { dot: 'bg-rose-500', border: 'border-rose-500/60', text: 'text-rose-300' };
    return { dot: 'bg-cyan-400', border: 'border-cyan-500/60', text: 'text-cyan-300' };
  };

  const colorTheme = getStatusColor(currentText);

  return (
    <div className="flex flex-col gap-3 font-mono text-xs text-slate-200">
      <div className="flex justify-between items-center bg-slate-900/90 border border-slate-700/80 px-3 py-2 rounded-xl">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="font-bold text-slate-100">Solari Split-Flap Status Badge</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px]">
          <span className="text-slate-400">Speed:</span>
          {(['fast', 'normal', 'slow'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={`px-2 py-0.5 rounded capitalize ${
                speed === s
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Main Flap Board Display */}
      <div className="bg-slate-950 border-2 border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center gap-3 shadow-2xl relative overflow-hidden">
        <div className="flex items-center gap-2 mb-1">
          <span className={`w-2.5 h-2.5 rounded-full ${colorTheme.dot} shadow-lg shadow-cyan-500/20`} />
          <span className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">
            Station Status Feed
          </span>
        </div>

        {/* 3D Flap Letter Rows */}
        <div className="flex flex-wrap justify-center gap-1 p-2 bg-slate-900/90 border border-slate-800 rounded-lg max-w-full overflow-x-auto shadow-inner">
          {displayedText.padEnd(16, ' ').slice(0, 16).split('').map((char, index) => {
            const isFlipping = flippingIndices.includes(index);
            return (
              <div
                key={index}
                className="w-6 h-9 bg-slate-950 border border-slate-700/80 rounded flex flex-col relative overflow-hidden shadow"
                style={{ perspective: '300px' }}
              >
                {/* Top Half */}
                <div
                  className={`h-1/2 bg-slate-800/90 border-b border-slate-950 flex items-center justify-center text-slate-100 font-black text-xs pt-1 transition-transform duration-150 ${
                    isFlipping ? '-rotate-x-90 opacity-70' : 'rotate-x-0'
                  }`}
                  style={{ transformOrigin: 'bottom' }}
                >
                  {char === ' ' ? '·' : char}
                </div>
                {/* Bottom Half */}
                <div
                  className={`h-1/2 bg-slate-900/95 flex items-center justify-center text-slate-200 font-black text-xs pb-1 transition-transform duration-150 ${
                    isFlipping ? 'rotate-x-90 opacity-70' : 'rotate-x-0'
                  }`}
                  style={{ transformOrigin: 'top' }}
                >
                  {char === ' ' ? '·' : char}
                </div>
                {/* Split horizontal line */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-slate-950/80 pointer-events-none shadow" />
              </div>
            );
          })}
        </div>

        <div className="text-[10px] text-slate-500">
          CSS 3D Flap Rotation • Zero per-frame paint • Invariant Text Node DOM
        </div>
      </div>

      {/* Trigger Controls */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold text-slate-400">Trigger Status Mutation:</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
          {PRESETS.map((preset) => (
            <button
              key={preset}
              onClick={() => triggerFlip(preset)}
              className={`px-2.5 py-1.5 text-[10.5px] rounded-lg border text-left truncate transition ${
                currentText === preset
                  ? 'bg-cyan-950/80 border-cyan-400 text-cyan-200 font-bold'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// #648: Tactical Reconnaissance HUD Lab
// ============================================================================
export const LiveTacticalReconHudLab: React.FC = () => {
  const [hudMode, setHudMode] = useState<'nvg' | 'flir' | 'tactical'>('tactical');
  const [azimuth, setAzimuth] = useState(142);
  const [pitch, setPitch] = useState(-34);
  const [lockedTarget, setLockedTarget] = useState(true);
  const [mgrsCoord, setMgrsCoord] = useState('52SDG 8912 3401');

  const randomizeTarget = () => {
    const e = Math.floor(1000 + Math.random() * 8999);
    const n = Math.floor(1000 + Math.random() * 8999);
    setMgrsCoord(`52SDG ${e} ${n}`);
    setAzimuth(Math.floor(Math.random() * 360));
    setPitch(Math.floor(-15 - Math.random() * 60));
  };

  const getThemeStyles = () => {
    switch (hudMode) {
      case 'nvg':
        return {
          bg: 'bg-emerald-950/90',
          border: 'border-emerald-500/80',
          text: 'text-emerald-400',
          accent: 'text-emerald-200',
          reticle: 'border-emerald-400',
          badge: 'bg-emerald-900/80 text-emerald-300 border-emerald-500/50',
        };
      case 'flir':
        return {
          bg: 'bg-zinc-950/95',
          border: 'border-amber-500/80',
          text: 'text-amber-400',
          accent: 'text-amber-200',
          reticle: 'border-amber-400',
          badge: 'bg-amber-950/80 text-amber-300 border-amber-500/50',
        };
      default:
        return {
          bg: 'bg-slate-950/90',
          border: 'border-cyan-500/80',
          text: 'text-cyan-400',
          accent: 'text-cyan-200',
          reticle: 'border-cyan-400',
          badge: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/50',
        };
    }
  };

  const theme = getThemeStyles();

  return (
    <div className="flex flex-col gap-3 font-mono text-xs text-slate-200">
      <div className="flex justify-between items-center bg-slate-900/90 border border-slate-700/80 px-3 py-2 rounded-xl">
        <div className="flex items-center gap-2">
          <Crosshair className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-slate-100">Tactical Reconnaissance Intelligence HUD</span>
        </div>
        <div className="flex gap-1 text-[10px]">
          {(['tactical', 'nvg', 'flir'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setHudMode(mode)}
              className={`px-2 py-0.5 rounded uppercase font-bold ${
                hudMode === mode
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Simulated Recon Viewport */}
      <div className={`relative h-60 rounded-xl border-2 ${theme.border} ${theme.bg} p-3 overflow-hidden shadow-2xl flex flex-col justify-between`}>
        {/* Top Intelligence Banner */}
        <div className="flex justify-between items-center z-10 text-[10px]">
          <span className={`px-2 py-0.5 rounded border font-black ${theme.badge}`}>
            TOP SECRET // GEO-INT ORBITAL
          </span>
          <div className="flex items-center gap-2 font-bold">
            <span className={theme.text}>MGRS: {mgrsCoord}</span>
            <span className="text-slate-500">|</span>
            <span className={theme.accent}>ALT: 420.5 km</span>
          </div>
        </div>

        {/* 4 Corner L-Reticles */}
        <div className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 ${theme.reticle}`} />
        <div className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 ${theme.reticle}`} />
        <div className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 ${theme.reticle}`} />
        <div className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 ${theme.reticle}`} />

        {/* Center Boresight & Target Tracker */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className={`w-20 h-20 rounded-full border border-dashed ${theme.reticle} opacity-60 flex items-center justify-center animate-spin-slow`}>
            <div className={`w-3 h-3 rounded-full border-2 ${theme.reticle}`} />
          </div>
          {lockedTarget && (
            <div className="absolute w-24 h-24 border border-rose-500/80 rounded animate-pulse flex flex-col justify-between p-1">
              <span className="text-[8px] bg-rose-500 text-slate-950 font-black px-1 rounded w-max">
                TRACKING ID-902
              </span>
              <span className="text-[7.5px] text-rose-400 font-bold self-end">ONA: 12.4°</span>
            </div>
          )}
        </div>

        {/* Heading Compass Tape (Simulated) */}
        <div className="absolute top-8 inset-x-12 flex justify-between items-center text-[8px] text-slate-400 border-b border-slate-700/60 pb-1">
          <span>{azimuth - 20}°</span>
          <span className="text-amber-400 font-bold">▲ AZ {azimuth}° (NNE)</span>
          <span>{azimuth + 20}°</span>
        </div>

        {/* Bottom Sensor Telemetry Metrics */}
        <div className="flex justify-between items-end z-10 text-[9.5px]">
          <div className="flex flex-col gap-0.5">
            <span className={theme.text}>GSD: <strong className="text-slate-100">0.12m/px</strong> (High Res)</span>
            <span className={theme.text}>NIIRS: <strong className="text-slate-100">8.4</strong> (Tactical Recon)</span>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <span className={theme.text}>PITCH: <strong className="text-slate-100">{pitch}°</strong></span>
            <span className={theme.text}>CADENCE: <strong className="text-emerald-400">10 Hz LIVE</strong></span>
          </div>
        </div>
      </div>

      {/* Control Panel */}
      <div className="flex flex-wrap gap-2 items-center justify-between bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
        <button
          onClick={randomizeTarget}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 text-slate-950 font-bold rounded-lg hover:bg-emerald-400 transition text-xs"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Acquire New Target Coordinates
        </button>
        <button
          onClick={() => setLockedTarget(!lockedTarget)}
          className={`px-3 py-1.5 rounded-lg border font-bold text-xs transition ${
            lockedTarget
              ? 'bg-rose-950/80 border-rose-500 text-rose-300'
              : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}
        >
          {lockedTarget ? 'Target Lock: ENGAGED' : 'Target Lock: OFF'}
        </button>
      </div>
    </div>
  );
};

// ============================================================================
// #649: Shared Corridor Proportional Panel Stack Lab
// ============================================================================
export const LiveSharedCorridorPanelStackLab: React.FC = () => {
  const [availableHeight, setAvailableHeight] = useState(380);
  const [panel1Open, setPanel1Open] = useState(true);
  const [panel2Open, setPanel2Open] = useState(true);
  const [panel3Open, setPanel3Open] = useState(true);

  // Natural Heights of each panel
  const panels = [
    { id: 'p1', title: 'Layer Pipeline Config', natural: 180, open: panel1Open, setOpen: setPanel1Open },
    { id: 'p2', title: 'Telemetry Teleprompter', natural: 240, open: panel2Open, setOpen: setPanel2Open },
    { id: 'p3', title: 'System Diagnostics & Logs', natural: 160, open: panel3Open, setOpen: setPanel3Open },
  ];

  // Mathematical Shared Corridor Algorithm
  const expandedPanels = panels.filter((p) => p.open);
  const naturalHeights = expandedPanels.map((p) => p.natural);
  const minimumFloor = 80;

  const calculateAllocations = (): number[] => {
    if (!naturalHeights.length) return [];
    const naturalTotal = naturalHeights.reduce((s, h) => s + h, 0);
    if (naturalTotal <= availableHeight) return naturalHeights;
    if (availableHeight <= 0) return naturalHeights.map(() => 0);

    const base = naturalHeights.map((h) => Math.min(h, minimumFloor));
    const baseTotal = base.reduce((s, h) => s + h, 0);
    if (baseTotal >= availableHeight) {
      const scale = baseTotal > 0 ? availableHeight / baseTotal : 0;
      return base.map((h) => Math.round(h * scale));
    }

    const remaining = availableHeight - baseTotal;
    const unmet = naturalHeights.map((h, i) => Math.max(0, h - base[i]));
    const unmetTotal = unmet.reduce((s, h) => s + h, 0);
    if (unmetTotal <= 0) return base;

    return base.map((h, i) => Math.round(h + remaining * (unmet[i] / unmetTotal)));
  };

  const allocated = calculateAllocations();

  return (
    <div className="flex flex-col gap-3 font-mono text-xs text-slate-200">
      <div className="flex justify-between items-center bg-slate-900/90 border border-slate-700/80 px-3 py-2 rounded-xl">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span className="font-bold text-slate-100">Shared Corridor Proportional Panel Stack</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/40">
          Floor Floor: 80px
        </span>
      </div>

      {/* Available Corridor Height Slider */}
      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-col gap-2">
        <div className="flex justify-between text-xs font-bold text-slate-300">
          <span>Corridor Usable Height: {availableHeight}px</span>
          <span className="text-cyan-400">
            Natural Sum: {naturalHeights.reduce((s, h) => s + h, 0)}px
          </span>
        </div>
        <input
          type="range"
          min="180"
          max="600"
          value={availableHeight}
          onChange={(e) => setAvailableHeight(Number(e.target.value))}
          className="w-full accent-cyan-500"
        />
      </div>

      {/* Live Simulated Corridor Rail */}
      <div
        className="bg-slate-950 border-2 border-slate-800 rounded-xl p-2 flex flex-col gap-1.5 overflow-hidden transition-all shadow-xl"
        style={{ height: `${availableHeight + 40}px` }}
      >
        <div className="text-[10px] text-slate-500 font-bold px-1 flex justify-between">
          <span>SIDE RAIL CONTAINER</span>
          <span className="text-cyan-400">{expandedPanels.length} Expanded / 3 Total</span>
        </div>

        {panels.map((panel) => {
          const isExpanded = panel.open;
          const allocIdx = expandedPanels.findIndex((p) => p.id === panel.id);
          const allocatedHeight = isExpanded ? allocated[allocIdx] : 32;

          return (
            <div
              key={panel.id}
              className={`rounded-lg border transition-all flex flex-col overflow-hidden ${
                isExpanded
                  ? 'bg-slate-900 border-cyan-500/70 shadow-md'
                  : 'bg-slate-950 border-slate-800 opacity-70'
              }`}
              style={{ height: `${allocatedHeight}px` }}
            >
              {/* Header */}
              <button
                onClick={() => panel.setOpen(!panel.open)}
                className="flex justify-between items-center px-2.5 py-1.5 bg-slate-950/80 hover:bg-slate-800 text-left shrink-0"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                  {isExpanded ? <ChevronDown className="w-3.5 h-3.5 text-cyan-400" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
                  <span>{panel.title}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px]">
                  {isExpanded ? (
                    <span className="text-cyan-300 font-bold bg-cyan-950 px-1.5 rounded">
                      Alloc: {allocatedHeight}px / Nat: {panel.natural}px
                    </span>
                  ) : (
                    <span className="text-slate-500">Collapsed</span>
                  )}
                </div>
              </button>

              {/* Body Content with auto internal scrolling when squeezed */}
              {isExpanded && (
                <div className="p-2 overflow-y-auto flex-1 text-[11px] text-slate-400 space-y-1">
                  <div className="bg-slate-950 p-1.5 rounded border border-slate-800 text-[10px]">
                    <span className="text-emerald-400 font-bold">✓ Minimum Floor Guaranteed:</span> Every expanded panel maintains at least 80px height regardless of crowding.
                  </div>
                  <p className="text-slate-300">
                    Active data streams connected. Packet rate: 64 pkt/s. Synchronized DOM scroll maintains focus.
                  </p>
                  <div className="h-10 bg-slate-800/40 rounded border border-dashed border-slate-700 flex items-center justify-center text-[10px] text-slate-500">
                    [Internal Panel Visualization Widget]
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ============================================================================
// #650: Sensor Frustum & 3D Viewshed Volume Lab
// ============================================================================
export const LiveCctvFrustumViewshedLab: React.FC = () => {
  const [altitude, setAltitude] = useState(25); // meters
  const [pitch, setPitch] = useState(-35); // degrees
  const [heading, setHeading] = useState(45); // degrees
  const [fov, setFov] = useState(65); // degrees
  const [range, setRange] = useState(120); // meters

  // Coverage Area Calculation (Approximate ground polygon footprint)
  const coverageArea = Math.round(
    Math.tan((fov * Math.PI) / 360) * range * Math.tan((Math.abs(pitch) * Math.PI) / 180) * range * 0.8
  );

  return (
    <div className="flex flex-col gap-3 font-mono text-xs text-slate-200">
      <div className="flex justify-between items-center bg-slate-900/90 border border-slate-700/80 px-3 py-2 rounded-xl">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-cyan-400" />
          <span className="font-bold text-slate-100">Sensor Frustum & 3D Viewshed Volume</span>
        </div>
        <span className="text-[10px] text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-500/40">
          Footprint: ~{coverageArea} m²
        </span>
      </div>

      {/* 3D Vector Geometry Canvas */}
      <div className="h-56 bg-slate-950 border-2 border-slate-800 rounded-xl relative overflow-hidden flex items-center justify-center shadow-2xl">
        <svg className="w-full h-full" viewBox="0 0 320 200">
          {/* Ground Grid lines */}
          <line x1="20" y1="170" x2="300" y2="170" stroke="rgba(51,65,85,0.4)" strokeWidth="1" />
          <line x1="50" y1="150" x2="270" y2="150" stroke="rgba(51,65,85,0.3)" strokeWidth="1" />
          <line x1="80" y1="130" x2="240" y2="130" stroke="rgba(51,65,85,0.2)" strokeWidth="1" />

          {/* Sensor Apex Position (x: 80, y: calculated from altitude) */}
          {(() => {
            const apexX = 70;
            const apexY = 160 - altitude * 2.2;
            const fpWidth = (fov / 90) * 110;
            const fpDist = (range / 200) * 160;
            const p1 = { x: apexX + fpDist - fpWidth / 2, y: 170 };
            const p2 = { x: apexX + fpDist + fpWidth / 2, y: 170 };
            const p3 = { x: apexX + fpDist + fpWidth * 0.7, y: 145 };
            const p4 = { x: apexX + fpDist - fpWidth * 0.3, y: 145 };

            return (
              <g>
                {/* 3D Frustum Volume (Pyramid) */}
                <polygon
                  points={`${apexX},${apexY} ${p1.x},${p1.y} ${p2.x},${p2.y}`}
                  fill="rgba(6, 182, 212, 0.18)"
                  stroke="rgba(6, 182, 212, 0.8)"
                  strokeWidth="1.2"
                />
                <polygon
                  points={`${apexX},${apexY} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y} ${p1.x},${p1.y}`}
                  fill="rgba(6, 182, 212, 0.12)"
                />
                {/* Ground Projected Footprint */}
                <polygon
                  points={`${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}`}
                  fill="rgba(245, 158, 11, 0.25)"
                  stroke="rgba(245, 158, 11, 0.9)"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                {/* Connecting Wireframe Rays */}
                <line x1={apexX} y1={apexY} x2={p3.x} y2={p3.y} stroke="rgba(6,182,212,0.5)" strokeDasharray="2 2" />
                <line x1={apexX} y1={apexY} x2={p4.x} y2={p4.y} stroke="rgba(6,182,212,0.5)" strokeDasharray="2 2" />

                {/* Sensor Node (Pole & Head) */}
                <line x1={apexX} y1={170} x2={apexX} y2={apexY} stroke="rgba(148,163,184,0.8)" strokeWidth="2" />
                <circle cx={apexX} cy={apexY} r="5" fill="#06b6d4" stroke="#ffffff" strokeWidth="1.5" />
                <text x={apexX - 18} y={apexY - 8} fill="#38bdf8" fontSize="9" fontWeight="bold">
                  CAM-01
                </text>
              </g>
            );
          })()}
        </svg>

        {/* Overlay Badges */}
        <div className="absolute top-2 right-2 flex flex-col items-end gap-1 text-[9px]">
          <span className="bg-slate-900/90 text-cyan-300 px-2 py-0.5 rounded border border-slate-700">
            PITCH: {pitch}° | YAW: {heading}°
          </span>
          <span className="bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded border border-slate-700">
            FoV: {fov}° | MAX RNG: {range}m
          </span>
        </div>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-2 gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[11px] text-slate-300">
            <span>Mount Altitude</span>
            <strong className="text-cyan-400">{altitude}m</strong>
          </div>
          <input
            type="range"
            min="5"
            max="50"
            value={altitude}
            onChange={(e) => setAltitude(Number(e.target.value))}
            className="accent-cyan-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[11px] text-slate-300">
            <span>Tilt (Pitch)</span>
            <strong className="text-cyan-400">{pitch}°</strong>
          </div>
          <input
            type="range"
            min="-80"
            max="-10"
            value={pitch}
            onChange={(e) => setPitch(Number(e.target.value))}
            className="accent-cyan-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[11px] text-slate-300">
            <span>Lens Field of View (FoV)</span>
            <strong className="text-cyan-400">{fov}°</strong>
          </div>
          <input
            type="range"
            min="30"
            max="110"
            value={fov}
            onChange={(e) => setFov(Number(e.target.value))}
            className="accent-cyan-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[11px] text-slate-300">
            <span>Max Effective Range</span>
            <strong className="text-cyan-400">{range}m</strong>
          </div>
          <input
            type="range"
            min="30"
            max="200"
            value={range}
            onChange={(e) => setRange(Number(e.target.value))}
            className="accent-cyan-500"
          />
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// #651: Altitude-Adaptive Aperture Scope Mask Lab
// ============================================================================
export const LiveAltitudeAdaptiveScopeMaskLab: React.FC = () => {
  const [altitudeMm, setAltitudeMm] = useState(8.5); // 0.1 Mm to 15 Mm
  const [scopeEnabled, setScopeEnabled] = useState(true);
  const [tubeShader, setTubeShader] = useState<'nvg' | 'flir' | 'clear'>('clear');

  // Quantized Terminus Alpha calculation:
  // Above 10 Mm => alpha 0.94 (faint stars in corners)
  // 7 Mm to 10 Mm => smooth ramp
  // Below 7 Mm => solid 1.0 black
  const terminusAlpha =
    altitudeMm >= 10
      ? 0.94
      : altitudeMm <= 7
      ? 1.0
      : +(0.94 + ((10 - altitudeMm) / 3) * 0.06).toFixed(3);

  const featherPx = Math.round(10 + (altitudeMm / 15) * 30);

  return (
    <div className="flex flex-col gap-3 font-mono text-xs text-slate-200">
      <div className="flex justify-between items-center bg-slate-900/90 border border-slate-700/80 px-3 py-2 rounded-xl">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-cyan-400" />
          <span className="font-bold text-slate-100">Altitude-Adaptive Aperture Scope Mask</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px]">
          <button
            onClick={() => setScopeEnabled(!scopeEnabled)}
            className={`px-2 py-0.5 rounded font-bold ${
              scopeEnabled ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
            }`}
          >
            Scope: {scopeEnabled ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      {/* Scope Viewport Simulator */}
      <div className="h-60 bg-slate-950 border-2 border-slate-800 rounded-xl relative overflow-hidden flex items-center justify-center shadow-2xl">
        {/* Background Target Scene (Simulated Earth Grid & Starfield) */}
        <div className="absolute inset-0 bg-radial from-slate-800 via-slate-900 to-slate-950 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full border border-dashed border-cyan-500/40 flex items-center justify-center animate-spin-slow">
            <div className="w-24 h-24 rounded-full bg-cyan-900/20 border border-cyan-400 flex items-center justify-center">
              <span className="text-[10px] text-cyan-300 font-bold">Earth Focal Target</span>
            </div>
          </div>
          {/* Star dots in outer corners */}
          <div className="absolute top-4 left-6 w-1 h-1 bg-white rounded-full opacity-80" />
          <div className="absolute top-8 right-10 w-1 h-1 bg-white rounded-full opacity-70" />
          <div className="absolute bottom-5 left-12 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-90" />
        </div>

        {/* Scope Mask Overlay Canvas Effect */}
        {scopeEnabled && (
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-300 flex items-center justify-center"
            style={{
              background: `radial-gradient(circle at center, transparent 38%, rgba(2, 6, 23, ${terminusAlpha}) 75%, rgba(2, 6, 23, ${terminusAlpha}) 100%)`,
            }}
          >
            {/* Circular Keyhole Ring */}
            <div
              className={`w-48 h-48 rounded-full border ${
                tubeShader === 'nvg'
                  ? 'border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.3)]'
                  : tubeShader === 'flir'
                  ? 'border-amber-500/60 shadow-[0_0_30px_rgba(245,158,11,0.3)]'
                  : 'border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.2)]'
              }`}
            />
          </div>
        )}

        {/* Real-Time Metrics Overlay */}
        <div className="absolute bottom-2 inset-x-3 flex justify-between items-center text-[9.5px] bg-slate-950/80 p-1.5 rounded-lg border border-slate-800">
          <span className="text-slate-300">
            Altitude: <strong className="text-cyan-400">{(altitudeMm * 1000).toLocaleString()} km</strong>
          </span>
          <span className="text-amber-400 font-bold">
            Terminus Alpha: {terminusAlpha} {altitudeMm >= 10 ? '(Stars Visible)' : '(Solid Black)'}
          </span>
          <span className="text-emerald-400">Feather: {featherPx}px</span>
        </div>
      </div>

      {/* Altitude Slider & Mode Toggles */}
      <div className="flex flex-col gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
        <div className="flex justify-between items-center text-xs">
          <label className="font-bold text-slate-300">Observation Altitude Zoom (Mm):</label>
          <span className="text-cyan-400 font-bold">{altitudeMm} Mm ({altitudeMm >= 10 ? 'High Space' : altitudeMm >= 7 ? 'Mid Orbit' : 'Tactical Surface'})</span>
        </div>
        <input
          type="range"
          min="1"
          max="15"
          step="0.5"
          value={altitudeMm}
          onChange={(e) => setAltitudeMm(Number(e.target.value))}
          className="accent-cyan-500"
        />

        <div className="flex gap-2 items-center justify-between pt-1 text-[11px]">
          <span className="text-slate-400">Shader Tint:</span>
          {(['clear', 'nvg', 'flir'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setTubeShader(mode)}
              className={`px-3 py-1 rounded-lg uppercase font-bold text-xs ${
                tubeShader === mode
                  ? 'bg-cyan-500 text-slate-950'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// #652: Idle Render Governor & Hold Monitor Lab
// ============================================================================
export const LiveIdleRenderGovernorMonitorLab: React.FC = () => {
  const [holds, setHolds] = useState<string[]>([]);
  const [simFps, setSimFps] = useState(0);
  const [gpuLoad, setGpuLoad] = useState(0.8);
  const [pulseCount, setPulseCount] = useState(0);

  const AVAILABLE_HOLD_MODULES = [
    { id: 'satellite-orbit', label: 'Satellite Orbit Sim' },
    { id: 'flight-interpolator', label: 'Aircraft Real-Time Interpolation' },
    { id: 'traffic-flow-sim', label: 'Ground Traffic Vectors' },
    { id: 'camera-flyto', label: 'Camera FlyTo Animation' },
    { id: 'hud-pulse-ring', label: 'HUD Pulse Ring Shader' },
  ];

  const toggleHold = (id: string) => {
    setHolds((prev) => (prev.includes(id) ? prev.filter((h) => h !== id) : [...prev, id]));
  };

  const isContinuous = holds.length > 0;

  useEffect(() => {
    if (isContinuous) {
      setSimFps(60);
      setGpuLoad(48.5 + holds.length * 6);
    } else {
      setSimFps(0);
      setGpuLoad(0.8);
    }
  }, [holds, isContinuous]);

  const requestSingleFrame = () => {
    setPulseCount((c) => c + 1);
    setSimFps(60);
    setGpuLoad(15.2);
    setTimeout(() => {
      if (!isContinuous) {
        setSimFps(0);
        setGpuLoad(0.8);
      }
    }, 120);
  };

  return (
    <div className="flex flex-col gap-3 font-mono text-xs text-slate-200">
      <div className="flex justify-between items-center bg-slate-900/90 border border-slate-700/80 px-3 py-2 rounded-xl">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-slate-100">Idle Render Governor & Hold Monitor</span>
        </div>
        <span
          className={`text-[10px] font-black px-2 py-0.5 rounded border ${
            isContinuous
              ? 'bg-amber-950 text-amber-300 border-amber-500/50 animate-pulse'
              : 'bg-emerald-950 text-emerald-300 border-emerald-500/50'
          }`}
        >
          {isContinuous ? 'CONTINUOUS MODE (60 FPS)' : 'IDLE SAVING MODE (0 FPS)'}
        </span>
      </div>

      {/* Real-Time Telemetry Dashboard */}
      <div className="grid grid-cols-3 gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 shadow-xl text-center">
        <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex flex-col items-center justify-center">
          <span className="text-[10px] text-slate-400">Render Loop Rate</span>
          <span className={`text-lg font-black ${isContinuous ? 'text-amber-400' : 'text-emerald-400'}`}>
            {simFps} FPS
          </span>
          <span className="text-[9px] text-slate-500">
            {isContinuous ? 'Active holds present' : 'requestRenderMode = true'}
          </span>
        </div>

        <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex flex-col items-center justify-center">
          <span className="text-[10px] text-slate-400">GPU / CPU Load</span>
          <span className={`text-lg font-black ${isContinuous ? 'text-amber-400' : 'text-emerald-400'}`}>
            {gpuLoad.toFixed(1)}%
          </span>
          <span className="text-[9px] text-emerald-400 font-bold">
            {isContinuous ? 'Normal Draw' : '98.4% Power Saved'}
          </span>
        </div>

        <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex flex-col items-center justify-center">
          <span className="text-[10px] text-slate-400">Active Holds (Ref-Count)</span>
          <span className="text-lg font-black text-cyan-300">{holds.length}</span>
          <span className="text-[9px] text-slate-500">Identity Set Registered</span>
        </div>
      </div>

      {/* Interactive Hold Activators */}
      <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <label className="text-[11px] font-bold text-slate-300">Per-Frame Scene Animators (Holds):</label>
          <button
            onClick={requestSingleFrame}
            className="flex items-center gap-1 px-2.5 py-1 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition text-[10px]"
          >
            <Zap className="w-3 h-3" />
            Trigger Single Frame Mutation (Clicks: {pulseCount})
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          {AVAILABLE_HOLD_MODULES.map((mod) => {
            const active = holds.includes(mod.id);
            return (
              <button
                key={mod.id}
                onClick={() => toggleHold(mod.id)}
                className={`flex items-center justify-between p-2 rounded-lg border transition ${
                  active
                    ? 'bg-cyan-950/80 border-cyan-400 text-cyan-200'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${active ? 'bg-cyan-400 shadow-md shadow-cyan-500/50' : 'bg-slate-700'}`} />
                  <span className="font-bold text-xs">{mod.label}</span>
                </div>
                <span className="text-[10px] font-mono bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700">
                  {active ? 'HOLD ACTIVE' : 'RELEASED'}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
