import React, { useState, useRef } from 'react';
import { 
  Layers, Eye, EyeOff, ShieldCheck, Maximize2, Minimize2, 
  Sparkles, Move, Compass, Sliders, Box, AlertTriangle, 
  Search, Check, Copy, ExternalLink, RefreshCw, X, Plus,
  ChevronRight, ArrowRight, CornerRightDown, Grid, Crosshair,
  Maximize, Activity, Flame, Shield, MapPin, MousePointer
} from 'lucide-react';

// =========================================================================
// Category 24: Overlay & Transparency Specialized Interactive Labs (#591 ~ #636)
// =========================================================================

// #591 Z-Index Stacking Order (3D Interactive Layer Stack)
export const LiveZIndexStackOrderLab: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(40);

  const layers = [
    { z: 50, name: 'z-50: Toast Alerts', color: 'border-rose-500 bg-rose-500/20 text-rose-300' },
    { z: 40, name: 'z-40: Modal Dialog', color: 'border-indigo-500 bg-indigo-500/20 text-indigo-300' },
    { z: 30, name: 'z-30: Popover / Tooltip', color: 'border-amber-500 bg-amber-500/20 text-amber-300' },
    { z: 20, name: 'z-20: Sticky Header', color: 'border-emerald-500 bg-emerald-500/20 text-emerald-300' },
    { z: 10, name: 'z-10: Canvas Background', color: 'border-slate-500 bg-slate-500/20 text-slate-300' },
  ];

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> #591 Z-Index Stacking Hierarchy
        </span>
        <span className="text-[10px] bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded border border-indigo-400/40 font-bold">
          Standardized Depth
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        {layers.map((l) => (
          <button
            key={l.z}
            onClick={() => setActiveLayer(l.z)}
            className={`flex justify-between items-center p-2 rounded border transition-all text-left ${
              activeLayer === l.z ? `${l.color} ring-2 ring-indigo-400 font-bold translate-x-1` : 'border-slate-300 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 opacity-70 hover:opacity-100'
            }`}
          >
            <span>{l.name}</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800">
              Depth: {l.z}
            </span>
          </button>
        ))}
      </div>

      <p className="text-[10px] text-slate-500">Eliminates chaotic z-[9999] usage by establishing strict 5-tier stacking system.</p>
    </div>
  );
};

// #592 Dimmed Backdrop Overlay
export const LiveDimmedBackdropLab: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Eye className="w-4 h-4" /> #592 Dimmed Backdrop Overlay
        </span>
        <button
          onClick={() => setOpen(!open)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-2.5 py-1 rounded text-[10px] font-bold"
        >
          {open ? 'Dismiss Backdrop' : 'Trigger Modal'}
        </button>
      </div>

      <div className="relative h-40 bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden p-3 flex flex-col justify-between">
        <div className="text-slate-500 space-y-1">
          <div className="h-3 w-3/4 bg-slate-300 dark:bg-slate-800 rounded" />
          <div className="h-3 w-1/2 bg-slate-300 dark:bg-slate-800 rounded" />
          <div className="h-3 w-5/6 bg-slate-300 dark:bg-slate-800 rounded" />
        </div>

        {/* Dimmed Overlay */}
        {open && (
          <div 
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm z-30 flex items-center justify-center p-4 cursor-pointer transition-all animate-fadeIn"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-indigo-500 p-3 rounded-lg shadow-xl text-center max-w-xs cursor-default"
            >
              <h4 className="font-bold text-indigo-400 text-xs mb-1">Focused Dialog Active</h4>
              <p className="text-[10px] text-slate-300">Click anywhere outside this box on the dimmed area to dismiss.</p>
            </div>
          </div>
        )}

        <span className="text-[10px] text-slate-500 z-10">Underlying workbench blueprint content</span>
      </div>
    </div>
  );
};

// #593 Glassmorphism (Frosted Glass Effect)
export const LiveGlassmorphismLab: React.FC = () => {
  const [blurAmount, setBlurAmount] = useState(8);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> #593 Glassmorphism Frosted Glass
        </span>
        <span className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded">
          Blur: {blurAmount}px
        </span>
      </div>

      <div className="relative h-44 rounded-lg overflow-hidden border border-slate-300 dark:border-slate-800 flex items-center justify-center p-4 bg-gradient-to-tr from-indigo-900 via-purple-900 to-slate-900">
        <div className="absolute w-24 h-24 rounded-full bg-rose-500/60 -top-4 -left-4 filter blur-sm" />
        <div className="absolute w-20 h-20 rounded-full bg-cyan-400/60 -bottom-2 -right-2 filter blur-sm" />
        <div className="absolute w-16 h-16 rounded-full bg-amber-400/60 top-1/2 left-1/3 filter blur-sm" />

        <div 
          style={{ backdropFilter: `blur(${blurAmount}px)` }}
          className="relative z-10 w-full max-w-xs bg-white/10 dark:bg-slate-900/40 border border-white/20 dark:border-slate-700/50 rounded-xl p-3 shadow-2xl text-white"
        >
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-xs">Aero Frosted Panel</span>
            <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded">1px Rim Highlight</span>
          </div>
          <p className="text-[10px] text-slate-200 opacity-90">Translucent refraction preserves ambient lighting and gradient depth behind the panel.</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[10px] text-slate-500">Adjust Blur:</span>
        <input
          type="range"
          min="0"
          max="20"
          value={blurAmount}
          onChange={(e) => setBlurAmount(Number(e.target.value))}
          className="w-full accent-indigo-500"
        />
      </div>
    </div>
  );
};

// #594 Click-Through Overlay (pointer-events: none)
export const LiveClickThroughLab: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> #594 Click-Through Overlay
        </span>
        <span className="text-[10px] bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded">
          Clicks Passed: {clickCount}
        </span>
      </div>

      <div className="relative h-32 bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden flex items-center justify-center p-4">
        <button
          onClick={() => setClickCount((c) => c + 1)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-xs shadow-lg transition-all"
        >
          Click Me (Target Node)
        </button>

        <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-indigo-500/10 border-2 border-dashed border-indigo-400/40 select-none">
          <span className="text-xl font-black text-indigo-400/40 uppercase rotate-[-12deg] tracking-widest">
            POINTER-EVENTS: NONE OVERLAY
          </span>
        </div>
      </div>

      <p className="text-[10px] text-slate-500">The decorative watermark sits on top visually but passes 100% of pointer clicks to the button underneath.</p>
    </div>
  );
};

// #595 React Portal (DOM Teleportation)
export const LiveReactPortalLab: React.FC = () => {
  const [teleported, setTeleported] = useState(false);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> #595 React Portal Teleportation
        </span>
        <button onClick={() => setTeleported(!teleported)} className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded font-bold">
          {teleported ? 'Escape to Root' : 'Trapped in Overflow'}
        </button>
      </div>
      <div className="relative h-32 bg-slate-200 dark:bg-slate-900 border border-red-500/50 rounded-lg p-2 overflow-hidden">
        <span className="text-[10px] text-rose-500 font-bold">Parent Box (overflow: hidden)</span>
        {teleported ? (
          <div className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-xl shadow-2xl z-50 animate-bounce flex items-center gap-2">
            <span>🚀 Teleported via React Portal to Document Root!</span>
            <button onClick={() => setTeleported(false)} className="bg-black/40 p-1 rounded"><X className="w-3 h-3" /></button>
          </div>
        ) : (
          <div className="w-48 bg-indigo-900 text-white p-2 rounded text-[10px] translate-x-28 translate-y-6">
            Clipping Hazard: Part of this box is cut off by overflow!
          </div>
        )}
      </div>
    </div>
  );
};

// #596 Stacking Context (Isolation: Isolate)
export const LiveStackingContextLab: React.FC = () => {
  const [isolated, setIsolated] = useState(true);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Box className="w-4 h-4" /> #596 Stacking Isolation
        </span>
        <button onClick={() => setIsolated(!isolated)} className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded">
          {isolated ? 'isolation: isolate (Active)' : 'Unscoped Leak'}
        </button>
      </div>
      <div className="relative h-28 bg-slate-200 dark:bg-slate-900 rounded p-2 flex items-center justify-center">
        <div className={`p-4 bg-indigo-500/20 border border-indigo-500 rounded text-center ${isolated ? 'isolate' : ''}`}>
          <span className="text-[10px] text-indigo-300 font-bold block">Internal Widget z-999</span>
          <span className="text-[9px] text-slate-400">{isolated ? 'Safely contained within module context.' : 'Leaking outside and occluding global navbar!'}</span>
        </div>
      </div>
    </div>
  );
};

// #597 Backdrop Blur Filter
export const LiveBackdropBlurLab: React.FC = () => {
  const [blur, setBlur] = useState(true);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> #597 Backdrop Blur Filter
        </span>
        <button onClick={() => setBlur(!blur)} className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded">
          {blur ? 'Blur: ON (backdrop-blur-md)' : 'Blur: OFF'}
        </button>
      </div>
      <div className="relative h-28 rounded-lg overflow-hidden flex items-center justify-center p-3 bg-gradient-to-r from-emerald-600 via-indigo-600 to-rose-600">
        <div className={`w-3/4 p-3 bg-white/20 dark:bg-black/30 rounded-lg border border-white/30 text-white text-center ${blur ? 'backdrop-blur-md' : ''}`}>
          <span className="font-bold text-xs">High Frequency Mesh Behind</span>
        </div>
      </div>
    </div>
  );
};

// #598 Modal Backdrop Click-to-Dismiss
export const LiveModalDismissLab: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Eye className="w-4 h-4" /> #598 Backdrop Click-to-Dismiss
        </span>
        <button onClick={() => setShow(true)} className="bg-indigo-600 text-white px-2.5 py-1 rounded text-[10px] font-bold">Open Modal</button>
      </div>
      <div className="relative h-32 bg-slate-200 dark:bg-slate-900 rounded p-2 flex items-center justify-center">
        <span className="text-slate-400 text-[10px]">Underlying Content Stage</span>
        {show && (
          <div onClick={() => setShow(false)} className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center cursor-pointer animate-fadeIn">
            <div onClick={(e) => e.stopPropagation()} className="bg-slate-900 border border-indigo-500 p-3 rounded-lg text-center cursor-default">
              <span className="font-bold text-indigo-300 text-xs">Click Outside to Dismiss</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// #599 Scrim Overlay (Gradient Shadow Wash)
export const LiveScrimOverlayLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> #599 Scrim Gradient Wash
        </span>
      </div>
      <div className="relative h-32 rounded-lg overflow-hidden bg-gradient-to-tr from-amber-400 via-rose-500 to-cyan-400 flex items-end p-3">
        {/* Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
        <div className="relative z-10 text-white">
          <h4 className="font-bold text-xs">High-Contrast Title via Scrim</h4>
          <p className="text-[10px] text-slate-200">Guarantees 100% legibility regardless of busy background imagery.</p>
        </div>
      </div>
    </div>
  );
};

// #600 Loading Skeleton Overlay
export const LiveSkeletonOverlayLab: React.FC = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <RefreshCw className="w-4 h-4" /> #600 Skeleton Overlay
        </span>
        <button onClick={() => setLoading(!loading)} className="text-[10px] underline">Toggle Loading</button>
      </div>
      <div className="relative h-28 bg-white dark:bg-slate-900 border rounded p-3 flex flex-col justify-between">
        <div>
          <h4 className="font-bold">Servo Axis-1 Telemetry Table</h4>
          <span className="text-emerald-500 text-[10px]">Voltage: 220.4V | Current: 3.2A</span>
        </div>
        {loading && (
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px] p-3 flex flex-col gap-2 justify-center animate-pulse">
            <div className="h-3 w-3/4 bg-slate-700 rounded" />
            <div className="h-3 w-1/2 bg-slate-700 rounded" />
          </div>
        )}
      </div>
    </div>
  );
};

// #601 Sticky Header Floating Shadow
export const LiveStickyShadowLab: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> #601 Sticky Header Dynamic Shadow
        </span>
      </div>
      <div 
        onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 10)}
        className="relative h-32 overflow-y-auto bg-slate-200 dark:bg-slate-900 rounded border"
      >
        <div className={`sticky top-0 p-2 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md flex justify-between items-center transition-shadow z-20 ${scrolled ? 'shadow-lg border-b border-indigo-500/40' : ''}`}>
          <span className="font-bold text-indigo-400">Sticky Navigation Bar</span>
          <span className="text-[9px] bg-indigo-500/20 px-1.5 py-0.5 rounded">{scrolled ? 'Shadow Elevation Active' : 'Resting Top'}</span>
        </div>
        <div className="p-3 space-y-4 text-slate-500 text-[10px]">
          <p>Scroll down inside this container to trigger elevation shadow.</p>
          <p>Line 1: High speed packaging conveyor status</p>
          <p>Line 2: Hydraulic press feedback telemetry</p>
          <p>Line 3: End of record scroll buffer</p>
        </div>
      </div>
    </div>
  );
};

// #602 Toast Stacking Queue
export const LiveToastStackLab: React.FC = () => {
  const [toasts, setToasts] = useState<string[]>(['Servo 01 Connected', 'Firmware Synced']);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> #602 Toast Notification Queue
        </span>
        <button onClick={() => setToasts([...toasts, `Alert #${toasts.length + 1}`])} className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">+ Push Toast</button>
      </div>
      <div className="relative h-32 bg-slate-200 dark:bg-slate-900 rounded p-2 flex flex-col justify-end gap-1 overflow-hidden">
        {toasts.slice(-3).map((t, idx) => (
          <div key={idx} className="p-2 bg-slate-900 text-white border border-indigo-500 rounded shadow-md flex justify-between items-center text-[10px] animate-fadeIn">
            <span>🔔 {t}</span>
            <span className="text-slate-400 text-[8px]">z-50</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #603 Drawer Sheet Slide-over Overlay
export const LiveDrawerSheetLab: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <ChevronRight className="w-4 h-4" /> #603 Slide-over Drawer Sheet
        </span>
        <button onClick={() => setOpen(!open)} className="bg-indigo-600 text-white px-2.5 py-1 rounded text-[10px] font-bold">
          {open ? 'Close Drawer' : 'Open Drawer'}
        </button>
      </div>
      <div className="relative h-32 bg-slate-200 dark:bg-slate-900 rounded overflow-hidden p-2">
        <span className="text-slate-400 text-[10px]">Main Workbench Surface</span>
        {open && (
          <div className="absolute inset-y-0 right-0 w-48 bg-slate-950 border-l border-indigo-500 p-3 shadow-2xl z-30 animate-fadeIn flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-indigo-400 text-xs">Side Drawer</h4>
              <p className="text-[9px] text-slate-400 mt-1">Direct inspector settings panel.</p>
            </div>
            <button onClick={() => setOpen(false)} className="bg-slate-800 text-white py-1 rounded text-[10px]">Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

// #604 Hover Card Floating Popover
export const LiveHoverCardLab: React.FC = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <MousePointer className="w-4 h-4" /> #604 Hover Card Popover
        </span>
      </div>
      <div className="flex items-center justify-center py-6">
        <div className="relative">
          <span 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
            className="cursor-pointer bg-indigo-600/20 text-indigo-300 px-3 py-1.5 rounded border border-indigo-500 font-bold"
          >
            @ServoDriver_Axis4
          </span>
          {hover && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-900 border border-slate-700 p-2.5 rounded-lg shadow-xl text-white z-30 animate-fadeIn">
              <span className="font-bold text-indigo-400 block text-xs">Mitsubishi MR-J5-40G</span>
              <span className="text-[10px] text-slate-400">CC-Link IE TSN 1Gbps servo amplifier node.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// #605 Canvas Grid Overlay
export const LiveCanvasGridLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Grid className="w-4 h-4" /> #605 Canvas Grid Overlay
        </span>
      </div>
      <div className="relative h-28 bg-slate-900 rounded border overflow-hidden flex items-center justify-center">
        {/* Dot Matrix Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-60" />
        <span className="relative z-10 bg-slate-950/80 px-3 py-1 rounded border border-indigo-500 text-indigo-300 font-bold text-xs">
          Interactive Node Placed
        </span>
      </div>
    </div>
  );
};

// #606 Selection Marquee Box Overlay
export const LiveMarqueeOverlayLab: React.FC = () => {
  const [selectedNodes, setSelectedNodes] = useState<number[]>([1]);

  const nodes = [
    { id: 1, name: 'Servo A', x: 20, y: 20 },
    { id: 2, name: 'PLC Node B', x: 140, y: 20 },
    { id: 3, name: 'Relay C', x: 80, y: 70 },
  ];

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Box className="w-4 h-4" /> #606 Selection Marquee Overlay
        </span>
        <button 
          onClick={() => setSelectedNodes(selectedNodes.length === 3 ? [1] : [1, 2, 3])}
          className="text-[10px] text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          Toggle All Select
        </button>
      </div>

      <div className="relative h-36 bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden p-2">
        {nodes.map((n) => {
          const isSel = selectedNodes.includes(n.id);
          return (
            <div
              key={n.id}
              style={{ left: n.x, top: n.y }}
              onClick={() => {
                setSelectedNodes(isSel ? selectedNodes.filter(id => id !== n.id) : [...selectedNodes, n.id]);
              }}
              className={`absolute px-2.5 py-1.5 rounded-lg border text-[10px] font-bold cursor-pointer transition-all ${
                isSel ? 'bg-indigo-600 text-white border-indigo-400 shadow-md ring-2 ring-indigo-400/40' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
              }`}
            >
              {n.name}
            </div>
          );
        })}

        <div className="absolute left-3 top-3 w-44 h-28 bg-indigo-500/15 border-2 border-indigo-500 border-dashed rounded pointer-events-none flex items-end justify-end p-1">
          <span className="text-[9px] text-indigo-400 font-bold bg-indigo-950/80 px-1 rounded">Marquee Bounds</span>
        </div>
      </div>

      <p className="text-[10px] text-slate-500">Selected: {selectedNodes.length} nodes bound to canvas marquee group.</p>
    </div>
  );
};

// #607 Smart Alignment Guidelines Overlay
export const LiveSmartGuidesLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Crosshair className="w-4 h-4" /> #607 Smart Guides Alignment
        </span>
      </div>
      <div className="relative h-28 bg-slate-900 rounded border overflow-hidden p-3 flex items-center justify-around">
        {/* Pink Magnetic Snap Line */}
        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-pink-500 shadow-[0_0_8px_#ec4899] z-20" />
        <div className="p-2 bg-indigo-600 text-white rounded font-bold text-[10px] z-10">Node A (Aligned)</div>
        <div className="p-2 bg-indigo-600 text-white rounded font-bold text-[10px] z-10">Node B (Aligned)</div>
      </div>
    </div>
  );
};

// #608 Watermark Protection Overlay
export const LiveWatermarkLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Shield className="w-4 h-4" /> #608 Security Watermark
        </span>
      </div>
      <div className="relative h-28 bg-white dark:bg-slate-900 rounded border p-3 overflow-hidden flex flex-col justify-between">
        <h4 className="font-bold text-slate-800 dark:text-slate-200">CONFIDENTIAL MOTOR SPECIFICATION</h4>
        <p className="text-[10px] text-slate-400">Classified CAD schematics strictly for internal audit.</p>
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-15 rotate-[-20deg] select-none text-2xl font-black text-slate-900 dark:text-white">
          CONFIDENTIAL - DO NOT COPY
        </div>
      </div>
    </div>
  );
};

// #609 Fullscreen Loading Overlay
export const LiveFullScreenLoadingLab: React.FC = () => {
  const [load, setLoad] = useState(false);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <RefreshCw className="w-4 h-4" /> #609 Fullscreen Loading Overlay
        </span>
        <button onClick={() => { setLoad(true); setTimeout(() => setLoad(false), 2000); }} className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">
          Simulate 2s Lock
        </button>
      </div>
      <div className="relative h-28 bg-slate-200 dark:bg-slate-900 rounded p-3 flex items-center justify-center">
        <span>Application Content Stage</span>
        {load && (
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-30 flex flex-col items-center justify-center gap-2">
            <RefreshCw className="w-6 h-6 text-indigo-400 animate-spin" />
            <span className="text-[10px] text-white font-bold">Compiling Hardware Graph...</span>
          </div>
        )}
      </div>
    </div>
  );
};

// #610 Lightbox Media Viewer
export const LiveOverlayLightboxLab: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Maximize2 className="w-4 h-4" /> #610 Lightbox Media Viewer
        </span>
        <button onClick={() => setOpen(true)} className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">Open Lightbox</button>
      </div>
      <div className="relative h-28 bg-slate-900 rounded p-2 flex items-center justify-center">
        <span className="text-slate-400 text-[10px]">Click Open to trigger 95% pitch dark focus</span>
        {open && (
          <div onClick={() => setOpen(false)} className="absolute inset-0 bg-black/95 z-40 flex items-center justify-center p-4 cursor-pointer">
            <div className="border border-white/20 p-4 rounded-xl text-center">
              <span className="text-xs text-white font-bold block">📷 High-Res Motor Chassis View</span>
              <span className="text-[9px] text-slate-400">Click anywhere to exit lightbox</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// #611 Context Menu Overlay
export const LiveOverlayContextMenuLab: React.FC = () => {
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <MousePointer className="w-4 h-4" /> #611 Context Menu Overlay
        </span>
      </div>
      <div 
        onContextMenu={(e) => { e.preventDefault(); setMenu({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }); }}
        onClick={() => setMenu(null)}
        className="relative h-28 bg-slate-200 dark:bg-slate-900 rounded border flex items-center justify-center cursor-context-menu"
      >
        <span className="text-slate-400 text-[10px]">Right click anywhere inside this box</span>
        {menu && (
          <div 
            style={{ left: menu.x, top: menu.y }}
            className="absolute bg-slate-950 border border-indigo-500 rounded p-1 shadow-2xl z-30 space-y-1 text-white text-[10px]"
          >
            <div className="px-2 py-0.5 hover:bg-indigo-600 rounded cursor-pointer">Copy Node</div>
            <div className="px-2 py-0.5 hover:bg-rose-600 rounded cursor-pointer text-rose-300">Delete Node</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #612 Spotlight Search Overlay (Ctrl+K)
export const LiveSpotlightSearchLab: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Search className="w-4 h-4" /> #612 Spotlight Palette (Ctrl+K)
        </span>
        <button onClick={() => setOpen(true)} className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">⌘K Spotlight</button>
      </div>
      <div className="relative h-28 bg-slate-900 rounded border flex items-center justify-center">
        {open && (
          <div onClick={() => setOpen(false)} className="absolute inset-0 bg-black/70 backdrop-blur-sm z-30 flex items-start justify-center p-3 cursor-pointer">
            <div onClick={(e) => e.stopPropagation()} className="w-full bg-slate-900 border border-indigo-500 p-2 rounded-lg shadow-2xl">
              <input type="text" placeholder="Search commands, axes, files..." className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-xs text-white" autoFocus />
            </div>
          </div>
        )}
        <span className="text-slate-500 text-[10px]">Workbench Canvas</span>
      </div>
    </div>
  );
};

// #613 Split View Drag Resizer Ghost Overlay
export const LiveResizerGhostLab: React.FC = () => {
  const [split, setSplit] = useState(50);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Move className="w-4 h-4" /> #613 Resizer Ghost Overlay
        </span>
        <span className="text-[10px]">{split}% / {100 - split}%</span>
      </div>
      <div className="relative h-28 bg-slate-900 rounded border flex overflow-hidden">
        <div style={{ width: `${split}%` }} className="bg-slate-800 p-2 border-r border-indigo-500 flex items-center justify-center text-[10px]">Left Pane</div>
        <div style={{ width: `${100 - split}%` }} className="bg-slate-900 p-2 flex items-center justify-center text-[10px]">Right Pane</div>
      </div>
      <input type="range" min={20} max={80} value={split} onChange={(e) => setSplit(Number(e.target.value))} className="w-full accent-indigo-500" />
    </div>
  );
};

// #614 Tour Guide Step-by-Step Spotlight Overlay
export const LiveTourSpotlightLab: React.FC = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> #614 Tour Spotlight
        </span>
        <span className="text-[10px]">Step {step} of 2</span>
      </div>
      <div className="relative h-32 bg-slate-900 rounded border p-3 flex justify-between items-center">
        <div className={`p-2 rounded border ${step === 1 ? 'bg-indigo-600 text-white ring-4 ring-indigo-400/50 z-20' : 'bg-slate-800 text-slate-400 opacity-30'}`}>
          1. Connect Node
        </div>
        <div className={`p-2 rounded border ${step === 2 ? 'bg-indigo-600 text-white ring-4 ring-indigo-400/50 z-20' : 'bg-slate-800 text-slate-400 opacity-30'}`}>
          2. Run Calibrate
        </div>
        <button onClick={() => setStep(step === 1 ? 2 : 1)} className="absolute bottom-2 right-2 bg-indigo-500 text-white px-2 py-0.5 rounded text-[10px] font-bold">
          Next Target
        </button>
      </div>
    </div>
  );
};

// #615 Pulse Glow
export const LivePulseGlowLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Activity className="w-4 h-4" /> #615 Ripple Pulse Glow
        </span>
      </div>
      <div className="flex items-center justify-center py-6">
        <div className="relative inline-flex">
          <span className="absolute -inset-1 rounded-full bg-indigo-500 animate-ping opacity-75" />
          <span className="relative bg-indigo-600 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg">
            ⚡ Critical Telemetry Alarm
          </span>
        </div>
      </div>
    </div>
  );
};

// #616 Glass Border
export const LiveGlassBorderLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> #616 Glass Border Highlight
        </span>
      </div>
      <div className="p-4 bg-white/10 dark:bg-slate-900/60 backdrop-blur-md rounded-xl border-t border-t-white/40 border-b border-b-black/30 border-x border-x-white/10 shadow-2xl">
        <h4 className="font-bold text-indigo-400">1px Rim Light Card</h4>
        <p className="text-[10px] text-slate-300 mt-1">Optical refraction rim simulation with gradient border.</p>
      </div>
    </div>
  );
};

// #617 Dropdown Shield
export const LiveDropdownShieldLab: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Shield className="w-4 h-4" /> #617 Dropdown Dismiss Shield
        </span>
      </div>
      <div className="relative h-28 bg-slate-900 rounded p-2">
        <button onClick={() => setOpen(!open)} className="bg-indigo-600 text-white px-3 py-1 rounded text-xs">Menu Dropdown ▼</button>
        {open && (
          <>
            <div onClick={() => setOpen(false)} className="fixed inset-0 z-20 cursor-default" />
            <div className="absolute top-10 left-2 w-36 bg-slate-950 border border-indigo-500 rounded p-1 shadow-2xl z-30 text-white text-[10px] space-y-1">
              <div className="p-1 hover:bg-indigo-600 rounded">Option 1</div>
              <div className="p-1 hover:bg-indigo-600 rounded">Option 2</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// #618 Text Fade Mask
export const LiveTextFadeMaskLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Eye className="w-4 h-4" /> #618 Text Fade Mask
        </span>
      </div>
      <div className="relative h-24 bg-white dark:bg-slate-900 border rounded p-3 overflow-hidden">
        <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
          The MELSERVO-J5 series servo amplifier represents next-generation industrial automation with 3.5kHz velocity frequency response and synchronized multi-axis optical bus telemetry.
        </p>
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

// #619 Heatmap Color Overlay
export const LiveHeatmapOverlayLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Flame className="w-4 h-4 text-rose-500" /> #619 Thermal Heatmap Overlay
        </span>
      </div>
      <div className="relative h-28 bg-slate-900 rounded border overflow-hidden flex items-center justify-center">
        <span className="font-mono text-xs text-slate-500">⚙️ CAD Stator Core</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-yellow-500/40 to-rose-500/70 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-2 right-2 bg-slate-950/80 px-2 py-0.5 rounded text-rose-400 text-[10px] font-bold">
          Max: 78.4°C
        </div>
      </div>
    </div>
  );
};

// #620 Floating Action Button (FAB) Elevation Layer
export const LiveFABLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Plus className="w-4 h-4" /> #620 Floating Action Button (FAB)
        </span>
      </div>
      <div className="relative h-28 bg-slate-200 dark:bg-slate-900 rounded border p-3">
        <span className="text-slate-400 text-[10px]">Dashboard Content Viewport</span>
        <button className="absolute bottom-3 right-3 w-10 h-10 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-2xl flex items-center justify-center text-lg font-bold transition-transform hover:scale-110 z-30">
          +
        </button>
      </div>
    </div>
  );
};

// #621 Split Screen Curtain Swipe Overlay
export const LiveCurtainSwipeLab: React.FC = () => {
  const [pos, setPos] = useState(50);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Sliders className="w-4 h-4" /> #621 Curtain Swipe Diff
        </span>
      </div>
      <div className="relative h-28 bg-slate-900 rounded border overflow-hidden">
        {/* Under (Original) */}
        <div className="absolute inset-0 bg-slate-800 flex items-center justify-start pl-4 text-xs font-bold text-slate-400">
          BEFORE (Raw Wireframe)
        </div>
        {/* Over (Rendered) */}
        <div style={{ width: `${pos}%` }} className="absolute inset-y-0 left-0 bg-indigo-900/90 border-r-2 border-indigo-400 flex items-center justify-start pl-4 text-xs font-bold text-indigo-200 overflow-hidden whitespace-nowrap">
          AFTER (Solid CAD Shader)
        </div>
      </div>
      <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} className="w-full accent-indigo-500" />
    </div>
  );
};

// #622 Focus Target Spotlight Mask
export const LiveTargetSpotlightLab: React.FC = () => {
  const [focusId, setFocusId] = useState<number>(2);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Eye className="w-4 h-4" /> #622 Target Spotlight Mask
        </span>
      </div>
      <div className="flex gap-2 justify-around py-4 bg-slate-900 rounded border">
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setFocusId(id)}
            className={`p-3 rounded-lg border font-bold transition-all ${
              focusId === id ? 'bg-indigo-600 text-white border-indigo-400 scale-105 shadow-xl' : 'bg-slate-800 text-slate-600 opacity-30'
            }`}
          >
            Node #{id}
          </button>
        ))}
      </div>
    </div>
  );
};

// #623 Transparent Sticky Table Header
export const LiveOverlayStickyTableHeaderLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> #623 Translucent Sticky Table Header
        </span>
      </div>
      <div className="h-28 overflow-y-auto rounded border bg-slate-900">
        <div className="sticky top-0 bg-slate-950/80 backdrop-blur-md border-b border-indigo-500/40 p-1.5 text-indigo-300 font-bold flex justify-between text-[10px]">
          <span>Register Address</span>
          <span>Hex Value</span>
        </div>
        <div className="p-2 space-y-2 text-[10px] text-slate-400">
          <div className="flex justify-between"><span>D0001 (Axis Speed)</span><span>0x0FA0</span></div>
          <div className="flex justify-between"><span>D0002 (Axis Torque)</span><span>0x00C8</span></div>
          <div className="flex justify-between"><span>D0003 (Status Word)</span><span>0x8001</span></div>
        </div>
      </div>
    </div>
  );
};

// #624 Canvas Measurement Ruler Overlay
export const LiveCanvasRulerLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Compass className="w-4 h-4" /> #624 Canvas Measurement Ruler
        </span>
      </div>
      <div className="relative h-28 bg-slate-900 rounded border">
        {/* Top Ruler */}
        <div className="absolute top-0 inset-x-0 h-4 bg-slate-950 border-b border-slate-700 flex justify-between px-2 text-[8px] text-slate-400 font-mono">
          <span>0px</span><span>100px</span><span>200px</span><span>300px</span>
        </div>
        <div className="pt-6 p-2 text-indigo-300 text-[10px]">CAD viewport aligned with absolute millimetric grid.</div>
      </div>
    </div>
  );
};

// #625 Interactive Cursor Coordinate Tooltip
export const LiveCursorCoordsLab: React.FC = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Crosshair className="w-4 h-4" /> #625 Cursor Coordinate Overlay
        </span>
        <span className="text-[10px] text-indigo-400 font-bold">X:{coords.x} Y:{coords.y}</span>
      </div>
      <div 
        onMouseMove={(e) => setCoords({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })}
        className="h-28 bg-slate-900 rounded border flex items-center justify-center cursor-crosshair text-slate-500 text-[10px]"
      >
        Move mouse inside to trace viewport coordinate projection
      </div>
    </div>
  );
};

// #626 Multi-Modal Stacking Depth Illusion
export const LiveMultiModalDepthLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> #626 Multi-Modal Depth Illusion
        </span>
      </div>
      <div className="relative h-32 bg-slate-950 rounded border flex items-center justify-center p-3">
        {/* Parent Modal (Scaled 95%) */}
        <div className="absolute w-5/6 h-24 bg-slate-900 border border-slate-700 rounded-lg scale-95 opacity-60 flex items-start p-2 text-[9px] text-slate-400">
          Parent Dialog (scale-95)
        </div>
        {/* Child Submodal (Active Top) */}
        <div className="relative w-3/4 bg-slate-900 border-2 border-indigo-500 p-3 rounded-lg shadow-2xl z-20 text-center">
          <span className="text-xs font-bold text-indigo-300">Child Sub-Modal Confirm</span>
        </div>
      </div>
    </div>
  );
};

// #627 Ghost Node Placeholder
export const LiveGhostNodeLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Box className="w-4 h-4" /> #627 Ghost Node Drag Placeholder
        </span>
      </div>
      <div className="h-28 bg-slate-900 rounded border p-3 flex items-center justify-around">
        <div className="border-2 border-dashed border-indigo-500/50 p-2.5 rounded text-indigo-400/60 text-[10px]">
          [Original Slot Ghost]
        </div>
        <div className="bg-indigo-600 text-white p-2.5 rounded font-bold text-[10px] shadow-2xl rotate-3">
          ✋ Dragging Node Instance
        </div>
      </div>
    </div>
  );
};

// #628 Floating Toolbar Projection
export const LiveFloatingToolbarLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Sliders className="w-4 h-4" /> #628 Floating Contextual Toolbar
        </span>
      </div>
      <div className="relative h-28 bg-slate-900 rounded border flex items-center justify-center">
        <div className="relative">
          {/* Floating Context Toolbar */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-950 border border-indigo-500 rounded-full px-3 py-1 flex gap-2 text-white shadow-xl z-30">
            <button className="hover:text-indigo-400 font-bold text-[10px]">Edit</button>
            <button className="hover:text-rose-400 font-bold text-[10px]">Delete</button>
          </div>
          <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-xs">
            Selected CAD Node
          </div>
        </div>
      </div>
    </div>
  );
};

// #629 Glassmorphic Top Navigation Bar
export const LiveGlassNavbarLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> #629 Glassmorphic Navigation Bar
        </span>
      </div>
      <div className="relative h-28 rounded border bg-gradient-to-r from-purple-900 to-indigo-900 p-2">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded p-2 text-white flex justify-between items-center shadow-lg">
          <span className="font-bold text-xs">Aero Navigation</span>
          <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded">backdrop-blur-md</span>
        </div>
      </div>
    </div>
  );
};

// #630 Interactive Mini-Map Projection Overlay
export const LiveMinimapOverlayLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Compass className="w-4 h-4" /> #630 Minimap Viewport Overlay
        </span>
      </div>
      <div className="relative h-28 bg-slate-900 rounded border p-2">
        <div className="absolute top-2 right-2 w-20 h-14 bg-slate-950 border border-indigo-500 rounded p-1">
          <div className="w-8 h-6 border-2 border-indigo-400 bg-indigo-500/30 rounded" />
        </div>
        <span className="text-slate-500 text-[10px]">World stage: 4000x3000px</span>
      </div>
    </div>
  );
};

// #631 Screen Glass Vignette Shadow
export const LiveVignetteShadowLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Eye className="w-4 h-4" /> #631 Vignette Radial Shadow
        </span>
      </div>
      <div className="relative h-28 bg-indigo-950 rounded border overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.9)] pointer-events-none" />
        <span className="text-indigo-300 font-bold text-xs">Vignette Edge Focus</span>
      </div>
    </div>
  );
};

// #632 Interactive Layer Opacity Slider Control
export const LiveLayerOpacityLab: React.FC = () => {
  const [opacity, setOpacity] = useState(70);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Sliders className="w-4 h-4" /> #632 Layer Opacity Slider
        </span>
        <span className="text-[10px] bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded font-bold">
          Opacity: {opacity}%
        </span>
      </div>

      <div className="relative h-36 bg-slate-900 border border-slate-800 rounded-lg overflow-hidden flex items-center justify-center p-3">
        <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-[11px] select-none">
          ⚙️ BASE CAD MECHANICAL FRAME (SOLID)
        </div>

        <div 
          style={{ opacity: opacity / 100 }}
          className="absolute inset-0 bg-indigo-950/80 border-2 border-indigo-500 rounded-lg flex flex-col items-center justify-center text-indigo-300 font-bold text-xs p-3 transition-opacity duration-75"
        >
          <span>⚡ OVERLAY: 220V WIRING BUS TRACE</span>
          <span className="text-[10px] text-indigo-400 font-normal mt-1">Alpha blended with mechanical chassis</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-[10px] text-slate-500 shrink-0">0%</span>
        <input
          type="range"
          min="0"
          max="100"
          value={opacity}
          onChange={(e) => setOpacity(Number(e.target.value))}
          className="w-full accent-indigo-500"
        />
        <span className="text-[10px] text-slate-500 shrink-0">100%</span>
      </div>
    </div>
  );
};

// #633 Overlay Collision Detection & Auto-Flip
export const LiveCollisionFlipLab: React.FC = () => {
  const [top, setTop] = useState(true);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Move className="w-4 h-4" /> #633 Viewport Collision Auto-Flip
        </span>
        <button onClick={() => setTop(!top)} className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded">
          Flip Direction: {top ? 'Top' : 'Bottom (Collision Flip)'}
        </button>
      </div>
      <div className="relative h-28 bg-slate-900 rounded border flex items-center justify-center">
        <div className="relative">
          <div className={`absolute left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-2 py-1 rounded text-[10px] whitespace-nowrap shadow-xl ${
            top ? 'bottom-full mb-1.5' : 'top-full mt-1.5'
          }`}>
            Tooltip Flipped to {top ? 'Top' : 'Bottom'}
          </div>
          <button className="bg-slate-800 text-white px-3 py-1.5 rounded">Target Anchor</button>
        </div>
      </div>
    </div>
  );
};

// #634 Hover Glow Radial Gradient Overlay
export const LiveHoverGlowLab: React.FC = () => {
  const [pos, setPos] = useState({ x: 100, y: 50 });
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> #634 Hover Glow Radial Overlay
        </span>
      </div>
      <div 
        onMouseMove={(e) => setPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })}
        className="relative h-28 bg-slate-900 rounded border overflow-hidden flex items-center justify-center"
      >
        <div 
          style={{ 
            background: `radial-gradient(150px circle at ${pos.x}px ${pos.y}px, rgba(99, 102, 241, 0.4), transparent 80%)` 
          }}
          className="absolute inset-0 pointer-events-none"
        />
        <span className="text-white font-bold text-xs relative z-10">Interactive Cursor Radial Aura</span>
      </div>
    </div>
  );
};

// #635 Z-Index 3D Isometric Stack Visualizer
export const LiveZIndex3DVisualizerLab: React.FC = () => {
  const [iso, setIso] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> #635 3D Isometric Layer Stack
        </span>
        <button
          onClick={() => setIso(!iso)}
          className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded hover:bg-slate-300 dark:hover:bg-slate-700"
        >
          {iso ? 'Flatten 2D' : 'Explode 3D'}
        </button>
      </div>

      <div className="relative h-44 bg-slate-900 border border-slate-800 rounded-lg overflow-hidden flex items-center justify-center p-4 perspective-[800px]">
        <div 
          style={{
            transform: iso ? 'rotateX(55deg) rotateZ(-35deg)' : 'none',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          className="relative w-48 h-28 transform-style-3d flex items-center justify-center"
        >
          <div 
            style={{ transform: iso ? 'translateZ(0px)' : 'none' }}
            className="absolute inset-0 bg-slate-800/80 border border-slate-600 rounded-lg flex items-center justify-center text-[10px] text-slate-400 shadow-md transition-transform"
          >
            z-0 Base Canvas
          </div>

          <div 
            style={{ transform: iso ? 'translateZ(30px)' : 'none' }}
            className="absolute inset-2 bg-indigo-900/80 border border-indigo-400 rounded-lg flex items-center justify-center text-[10px] text-indigo-200 font-bold shadow-lg transition-transform"
          >
            z-40 Dialog Modal
          </div>

          <div 
            style={{ transform: iso ? 'translateZ(60px)' : 'none' }}
            className="absolute top-1 right-1 w-24 h-8 bg-rose-600/90 border border-rose-300 rounded flex items-center justify-center text-[9px] text-white font-bold shadow-xl transition-transform"
          >
            z-50 Toast Alert
          </div>
        </div>
      </div>

      <p className="text-[10px] text-slate-500">Deconstructs planar UI into separated 3D elevations to inspect and eliminate layer occlusion bugs.</p>
    </div>
  );
};

// #636 Universal UI Design System
export const LiveUniversalSystemLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> #636 Universal UI System (636 Tokens)
        </span>
        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">Complete 100%</span>
      </div>
      <div className="p-3 bg-white dark:bg-slate-900 border rounded-lg space-y-1 text-center">
        <h4 className="font-bold text-indigo-400 text-xs">Master UI/UX Design Token Dictionary</h4>
        <p className="text-[10px] text-slate-400">All 636 industrial automation UI terms fully engineered with 1:1 live interactive labs and schematics.</p>
      </div>
    </div>
  );
};
