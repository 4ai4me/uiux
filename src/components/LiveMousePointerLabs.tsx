import React, { useState, useRef } from 'react';
import { 
  MousePointer, Move, ZoomIn, ZoomOut, Crosshair, 
  Hand, ArrowLeftRight, ArrowUpDown, Sparkles, Check, 
  Copy, Layers, Sliders, Navigation, RefreshCw
} from 'lucide-react';

/**
 * ----------------------------------------------------------------------------
 * Category 20: Mouse & Pointer Controls (#431 ~ #440) Dedicated 1:1 Labs
 * High-contrast, Light/Dark adaptive UI/UX Architecture Workbench
 * ----------------------------------------------------------------------------
 */

// #431 Pointer Hover State - Micro-interaction and hover glow effect
export const LivePointerHoverLab: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#431 POINTER HOVER STATE</span>
        <span className={`text-[10px] font-bold ${hovered ? 'text-emerald-500' : 'text-slate-500'}`}>
          {hovered ? '● HOVERED' : '○ IDLE'}
        </span>
      </div>

      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-center">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`px-5 py-3 rounded-xl border-2 cursor-pointer transition-all duration-200 text-center select-none ${
            hovered 
              ? 'bg-indigo-600 border-indigo-400 text-white shadow-xl scale-105 shadow-indigo-500/30' 
              : 'bg-slate-200 dark:bg-slate-800 border-slate-400 dark:border-slate-700 text-slate-700 dark:text-slate-200'
          }`}
        >
          <div className="font-black text-[11px] flex items-center gap-1.5 justify-center">
            <MousePointer className="w-3.5 h-3.5" />
            <span>{hovered ? 'Hover Micro-Interaction Active' : 'Hover over this card'}</span>
          </div>
          <div className="text-[8px] opacity-80 mt-1">
            {hovered ? 'elevation: 8px | scale: 1.05' : 'elevation: 0px | scale: 1.0'}
          </div>
        </div>
      </div>
    </div>
  );
};

// #432 Pointer Active / Press State - Depth and scale haptic compression
export const LivePointerActivePressLab: React.FC = () => {
  const [pressed, setPressed] = useState(false);
  const [pressCount, setPressCount] = useState(0);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#432 POINTER ACTIVE (PRESS)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Presses: {pressCount}</span>
      </div>

      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-center">
        <button
          onMouseDown={() => { setPressed(true); setPressCount(c => c + 1); }}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          className={`px-6 py-3 rounded-xl font-bold border-2 transition-all select-none outline-none ${
            pressed 
              ? 'bg-indigo-800 border-indigo-600 text-white scale-95 shadow-inner translate-y-1' 
              : 'bg-indigo-600 border-indigo-400 text-white shadow-lg'
          }`}
        >
          <div className="flex items-center gap-2 text-[10px]">
            <span className={`w-2 h-2 rounded-full ${pressed ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`} />
            <span>{pressed ? 'ACTIVE PRESSED (:active)' : 'PRESS AND HOLD BUTTON'}</span>
          </div>
          <div className="text-[8px] text-indigo-200 mt-0.5 font-normal">
            {pressed ? 'translateY: +2px | scale: 0.95' : 'Resting state'}
          </div>
        </button>
      </div>
    </div>
  );
};

// #433 Double-Click Action - Quick 2-click detection & inline rename modal
export const LiveDoubleClickActionLab: React.FC = () => {
  const [nodeName, setNodeName] = useState('Spindle_Axis_04');
  const [editing, setEditing] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const handleDoubleClick = () => {
    setEditing(true);
    setMsg('Double-click detected! Enter new name and press Enter.');
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#433 DOUBLE-CLICK ACTION</span>
        <span className="text-[10px] text-indigo-600 font-bold">2x Click Target</span>
      </div>

      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex flex-col items-center justify-center gap-2">
        {!editing ? (
          <div
            onDoubleClick={handleDoubleClick}
            className="px-4 py-2 bg-indigo-50 dark:bg-indigo-950/60 border-2 border-dashed border-indigo-500 rounded-lg cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors select-none text-center"
          >
            <div className="font-black text-indigo-700 dark:text-indigo-300 text-[11px]">{nodeName}</div>
            <div className="text-[8px] text-slate-500 mt-0.5">⚡ Double-click to rename node</div>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 animate-fade-in">
            <input
              type="text"
              autoFocus
              value={nodeName}
              onChange={(e) => setNodeName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setEditing(false);
                  setMsg('Node renamed successfully!');
                }
              }}
              onBlur={() => setEditing(false)}
              className="px-2 py-1 bg-white dark:bg-slate-950 border-2 border-indigo-600 rounded text-xs font-bold outline-none text-slate-900 dark:text-slate-100"
            />
            <button onClick={() => setEditing(false)} className="px-2 py-1 bg-indigo-600 text-white rounded text-[10px] font-bold">
              Save
            </button>
          </div>
        )}
        {msg && <div className="text-[8px] text-emerald-600 font-bold">{msg}</div>}
      </div>
    </div>
  );
};

// #434 Right-Click Context Menu - onContextMenu interceptor & custom menu
export const LiveRightClickContextMenuLab: React.FC = () => {
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);
  const [actionLog, setActionLog] = useState<string | null>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setMenu({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#434 RIGHT-CLICK CONTEXT MENU</span>
        <span className="text-[10px] text-indigo-600 font-bold">Right Click Canvas</span>
      </div>

      <div
        onContextMenu={handleContextMenu}
        onClick={() => setMenu(null)}
        className="relative h-28 bg-slate-200 dark:bg-slate-900 border-2 border-dashed border-slate-400 dark:border-slate-700 rounded-lg p-2 flex flex-col items-center justify-center cursor-context-menu select-none overflow-hidden"
      >
        <div className="text-[9px] text-slate-500 font-bold">
          [ Right-Click anywhere in this canvas area ]
        </div>
        {actionLog && (
          <div className="text-[8px] text-emerald-600 font-bold mt-1">
            Executed: {actionLog}
          </div>
        )}

        {menu && (
          <div
            style={{ top: `${menu.y}px`, left: `${menu.x}px` }}
            className="absolute w-36 bg-white dark:bg-slate-950 border-2 border-indigo-600 rounded-lg shadow-2xl p-1 z-30 text-[9px] space-y-0.5 animate-fade-in"
          >
            <div
              onClick={(e) => { e.stopPropagation(); setActionLog('Duplicate Node'); setMenu(null); }}
              className="px-2 py-1 hover:bg-indigo-600 hover:text-white rounded cursor-pointer font-bold flex justify-between"
            >
              <span>Duplicate</span>
              <span className="text-slate-400">Ctrl+D</span>
            </div>
            <div
              onClick={(e) => { e.stopPropagation(); setActionLog('Inspect Telemetry'); setMenu(null); }}
              className="px-2 py-1 hover:bg-indigo-600 hover:text-white rounded cursor-pointer font-bold flex justify-between"
            >
              <span>Inspect</span>
              <span className="text-slate-400">Alt+I</span>
            </div>
            <div className="border-t border-slate-200 dark:border-slate-800 my-0.5" />
            <div
              onClick={(e) => { e.stopPropagation(); setActionLog('Delete Node'); setMenu(null); }}
              className="px-2 py-1 text-red-600 hover:bg-red-600 hover:text-white rounded cursor-pointer font-bold"
            >
              Delete Node
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// #435 Middle-Click Scroll / Pan - Wheel button pan navigation
export const LiveMiddleClickPanLab: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const startRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 1) { // Middle button
      e.preventDefault();
      setIsPanning(true);
      startRef.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning) {
      setOffset({
        x: e.clientX - startRef.current.x,
        y: e.clientY - startRef.current.y
      });
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#435 MIDDLE-CLICK PAN (WHEEL)</span>
        <button onClick={() => setOffset({ x: 0, y: 0 })} className="text-[10px] text-indigo-600 hover:underline">
          Reset (0, 0)
        </button>
      </div>

      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => setIsPanning(false)}
        onMouseLeave={() => setIsPanning(false)}
        className="relative h-28 bg-slate-900 border-2 border-slate-700 rounded-lg overflow-hidden cursor-move select-none p-2"
      >
        <div className="absolute top-1 left-2 text-[8px] text-slate-400 z-10 font-bold">
          [ Press Middle Wheel Button & Drag ] | Offset: ({Math.round(offset.x)}, {Math.round(offset.y)})
        </div>

        {/* Floating Canvas Grid Map */}
        <div
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
          className="absolute inset-0 flex items-center justify-center transition-transform duration-75"
        >
          <div className="w-32 h-16 bg-indigo-900/80 border-2 border-indigo-400 rounded-lg flex flex-col items-center justify-center text-white shadow-xl">
            <Navigation className="w-4 h-4 text-indigo-300 mb-0.5" />
            <span className="font-bold text-[9px]">Servo Stage Map</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// #436 Mouse Wheel Zoom - Zoom in/out via Ctrl+Wheel or Slider
export const LiveMouseWheelZoomLab: React.FC = () => {
  const [zoom, setZoom] = useState(100);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom(z => Math.min(250, z + 15));
    } else {
      setZoom(z => Math.max(50, z - 15));
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#436 MOUSE WHEEL ZOOM</span>
        <span className="text-[10px] text-indigo-600 font-bold">Scale: {zoom}%</span>
      </div>

      <div
        onWheel={handleWheel}
        className="relative h-28 bg-slate-200 dark:bg-slate-900 border-2 border-slate-400 dark:border-slate-700 rounded-lg overflow-hidden flex items-center justify-center p-2 select-none"
      >
        <div className="absolute top-1 right-2 text-[7px] text-slate-500 z-10">
          Scroll Wheel inside here ⇅
        </div>

        <div
          style={{ transform: `scale(${zoom / 100})` }}
          className="w-28 h-14 bg-indigo-600 text-white rounded-lg flex flex-col items-center justify-center font-bold text-[9px] shadow-2xl transition-transform duration-100 border border-indigo-300"
        >
          <span>CAD Blueprint</span>
          <span className="text-[7px] text-indigo-200 font-normal">Vector Scale {zoom}%</span>
        </div>
      </div>
    </div>
  );
};

// #437 Cursor: Crosshair - CAD precision wiring crosshair cursor
export const LiveCursorCrosshairLab: React.FC = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#437 CURSOR: CROSSHAIR</span>
        <button onClick={() => setActive(!active)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          {active ? 'Crosshair ON' : 'Default Cursor'}
        </button>
      </div>

      <div className={`h-28 bg-slate-900 border-2 border-slate-700 rounded-lg p-2 flex flex-col items-center justify-center text-slate-200 select-none ${active ? 'cursor-crosshair' : 'cursor-default'}`}>
        <Crosshair className="w-6 h-6 text-indigo-400 mb-1 animate-pulse" />
        <div className="font-bold text-[10px]">Precision Wire Drafting Stage</div>
        <div className="text-[8px] text-slate-400 mt-0.5">
          Cursor is set to: {active ? 'cursor-crosshair (✛)' : 'default'}
        </div>
      </div>
    </div>
  );
};

// #438 Cursor: Grab / Grabbing - Hand grab & pan feedback cursor
export const LiveCursorGrabLab: React.FC = () => {
  const [grabbing, setGrabbing] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#438 CURSOR: GRAB / GRABBING</span>
        <span className="text-[10px] text-indigo-600 font-bold">{grabbing ? '✊ GRABBING' : '✋ GRAB'}</span>
      </div>

      <div
        onMouseDown={() => setGrabbing(true)}
        onMouseUp={() => setGrabbing(false)}
        onMouseLeave={() => setGrabbing(false)}
        className={`h-28 bg-white dark:bg-slate-900 border-2 border-dashed border-indigo-500 rounded-lg p-2 flex flex-col items-center justify-center select-none transition-colors ${grabbing ? 'cursor-grabbing bg-indigo-50 dark:bg-indigo-950/60' : 'cursor-grab'}`}
      >
        <Hand className={`w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-1 transition-transform ${grabbing ? 'scale-90' : ''}`} />
        <div className="font-bold text-[10px]">
          {grabbing ? 'Holding Object (cursor-grabbing)' : 'Click and Drag (cursor-grab)'}
        </div>
        <div className="text-[8px] text-slate-500 mt-0.5">Click & hold mouse to test cursor shift</div>
      </div>
    </div>
  );
};

// #439 Cursor: Col-Resize / Row-Resize - Splitter resize cursor
export const LiveCursorResizeLab: React.FC = () => {
  const [split, setSplit] = useState(50);
  const [dragging, setDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      setSplit(Math.max(20, Math.min(80, pct)));
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#439 CURSOR: COL / ROW RESIZE</span>
        <span className="text-[10px] text-indigo-600 font-bold">Split: {Math.round(split)}%</span>
      </div>

      <div
        onMouseMove={handleMouseMove}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        className="h-28 bg-slate-900 border-2 border-slate-700 rounded-lg flex select-none overflow-hidden"
      >
        <div style={{ width: `${split}%` }} className="bg-slate-800 p-2 flex items-center justify-center text-[9px] text-slate-300 font-bold">
          Pane A ({Math.round(split)}%)
        </div>

        {/* Splitter Handle */}
        <div
          onMouseDown={() => setDragging(true)}
          className="w-3 bg-indigo-600 hover:bg-indigo-500 cursor-col-resize flex items-center justify-center text-white"
        >
          <ArrowLeftRight className="w-2.5 h-2.5 pointer-events-none" />
        </div>

        <div style={{ width: `${100 - split}%` }} className="bg-slate-800/80 p-2 flex items-center justify-center text-[9px] text-slate-400 font-bold">
          Pane B ({Math.round(100 - split)}%)
        </div>
      </div>
    </div>
  );
};

// #440 Pointer Capture (setPointerCapture) - Retains mouse tracking even outside container
export const LivePointerCaptureLab: React.FC = () => {
  const [pos, setPos] = useState(50);
  const [isCapturing, setIsCapturing] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setIsCapturing(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isCapturing && trackRef.current) {
      const rect = trackRef.current.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      setPos(Math.max(0, Math.min(100, pct)));
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    setIsCapturing(false);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#440 POINTER CAPTURE</span>
        <span className={`text-[10px] font-bold ${isCapturing ? 'text-emerald-500' : 'text-slate-500'}`}>
          {isCapturing ? '● CAPTURED' : '○ IDLE'}
        </span>
      </div>

      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-3 flex flex-col justify-center gap-3 select-none">
        <div className="text-[8px] text-slate-500">
          Drag thumb. Notice tracking continues even if cursor leaves browser window!
        </div>

        <div ref={trackRef} className="relative h-6 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center px-1">
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={{ left: `calc(${pos}% - 14px)` }}
            className={`absolute w-7 h-7 rounded-full cursor-pointer flex items-center justify-center text-white font-bold text-[8px] shadow-xl transition-transform ${isCapturing ? 'bg-emerald-600 scale-125 ring-4 ring-emerald-500/30' : 'bg-indigo-600'}`}
          >
            {Math.round(pos)}
          </div>
        </div>
      </div>
    </div>
  );
};

// #441 Pointer Lock API (FPS Mouse Look) - Infinite delta mouse
export const LivePointerLockFPSLab: React.FC = () => {
  const [locked, setLocked] = useState(false);
  const [coords] = useState({ yaw: 14, pitch: -8 });

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#441 POINTER LOCK (FPS LOOK)</span>
        <span className={`text-[10px] font-bold ${locked ? 'text-emerald-400' : 'text-slate-500'}`}>{locked ? 'LOCKED' : 'RELEASED'}</span>
      </div>

      <div 
        onClick={() => setLocked(!locked)}
        className="h-32 bg-slate-900 border border-slate-700 rounded-lg p-2 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden text-white"
      >
        <div className="text-center space-y-1 z-10">
          <div className="text-xs font-bold text-indigo-400">{locked ? '🎯 Pointer Locked (FPS Mode)' : 'Click to Request Pointer Lock'}</div>
          <div className="text-[8px] text-slate-400">Yaw: {coords.yaw}° | Pitch: {coords.pitch}°</div>
        </div>
        {locked && (
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <span className="text-4xl text-emerald-400">+</span>
          </div>
        )}
      </div>
    </div>
  );
};

// #442 Momentum Inertia Scroll Physics - Flick drag inertia
export const LiveMomentumInertiaScrollLab: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [velocity, setVelocity] = useState(0);

  const triggerFlick = () => {
    setVelocity(35);
    let v = 35;
    const interval = setInterval(() => {
      v = v * 0.88;
      setOffset((o) => (o + v) % 200);
      if (v < 0.5) {
        clearInterval(interval);
        setVelocity(0);
      }
    }, 30);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#442 MOMENTUM INERTIA SCROLL</span>
        <span className="text-[10px] text-indigo-600 font-bold">{velocity > 0 ? `V: ${velocity.toFixed(1)}px/s` : 'At Rest'}</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex flex-col justify-between overflow-hidden">
        <div className="flex gap-2 overflow-hidden py-4" style={{ transform: `translateX(-${offset}px)` }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="w-20 h-16 shrink-0 bg-indigo-900/80 border border-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
              Item #{i + 1}
            </div>
          ))}
        </div>
        <button onClick={triggerFlick} className="w-full py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-[9px] font-bold">
          ⚡ Trigger Inertia Flick Drag
        </button>
      </div>
    </div>
  );
};

// #443 Elastic Edge Rubber Banding - Overscroll bounce
export const LiveElasticRubberBandingLab: React.FC = () => {
  const [bounce, setBounce] = useState(0);

  const triggerRubberBand = () => {
    setBounce(28);
    setTimeout(() => setBounce(-12), 150);
    setTimeout(() => setBounce(6), 300);
    setTimeout(() => setBounce(0), 450);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#443 ELASTIC RUBBER BANDING</span>
        <button onClick={triggerRubberBand} className="text-[9px] text-indigo-600 font-bold hover:underline">Simulate Pull</button>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex items-center justify-center overflow-hidden">
        <div 
          style={{ transform: `translateY(${bounce}px)` }} 
          className="w-56 bg-slate-800 border-2 border-indigo-400 text-white rounded-lg p-3 text-center transition-transform duration-150 ease-out shadow-2xl"
        >
          <div className="text-[9px] font-bold text-indigo-300">📱 Edge of Scroll Boundary</div>
          <div className="text-[7px] text-slate-400 mt-1">Spring physics resistance: {bounce}px</div>
        </div>
      </div>
    </div>
  );
};

// #444 Magnetic Cursor Snapping - Snap pointer to buttons
export const LiveMagneticCursorSnapLab: React.FC = () => {
  const [cursorOffset, setCursorOffset] = useState({ x: 0, y: 0 });

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#444 MAGNETIC CURSOR SNAPPING</span>
        <span className="text-[10px] text-indigo-600 font-bold">Snap Gravity</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex items-center justify-center">
        <button 
          onMouseEnter={() => setCursorOffset({ x: 6, y: -4 })}
          onMouseLeave={() => setCursorOffset({ x: 0, y: 0 })}
          style={{ transform: `translate(${cursorOffset.x}px, ${cursorOffset.y}px)` }}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs shadow-2xl transition-transform duration-200 flex items-center gap-2"
        >
          <span>🧲 Magnetic Target Button</span>
        </button>
      </div>
    </div>
  );
};

// #445 Smooth Custom Canvas Cursor Trail - Particle follower
export const LiveCustomCursorTrailLab: React.FC = () => {
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newPt = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setTrail((prev) => [...prev.slice(-6), newPt]);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#445 CUSTOM CURSOR TRAIL</span>
        <span className="text-[10px] text-slate-500">Move mouse inside</span>
      </div>

      <div 
        onMouseMove={handleMouseMove}
        className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 relative overflow-hidden cursor-none flex items-center justify-center"
      >
        <div className="text-[8px] text-slate-500 pointer-events-none">Particle Trail Active Area</div>
        {trail.map((pt, idx) => (
          <span
            key={idx}
            style={{ left: `${pt.x}px`, top: `${pt.y}px`, opacity: (idx + 1) / trail.length }}
            className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400 pointer-events-none transition-all duration-75 shadow-lg shadow-indigo-500/50"
          />
        ))}
      </div>
    </div>
  );
};

// #446 Stylus Pressure Sensitivity & Tilt - Pressure gauge
export const LiveStylusPressureTiltLab: React.FC = () => {
  const [pressure, setPressure] = useState(0.75);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#446 STYLUS PRESSURE SENSITIVITY</span>
        <span className="text-[10px] text-indigo-600 font-bold">{(pressure * 100).toFixed(0)}% Force</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-3 border border-slate-700 flex flex-col justify-between text-white">
        <div className="flex items-center justify-center h-16">
          <div 
            style={{ width: `${pressure * 60 + 10}px`, height: `${pressure * 60 + 10}px` }}
            className="rounded-full bg-indigo-500 transition-all flex items-center justify-center font-bold text-[8px] shadow-2xl"
          >
            ✏️
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[8px] text-slate-400">Force:</span>
          <input 
            type="range" min="0.1" max="1" step="0.05" value={pressure} onChange={(e) => setPressure(Number(e.target.value))}
            className="w-full accent-indigo-400 h-1.5"
          />
        </div>
      </div>
    </div>
  );
};

// #447 Hover Scrub Video Frame Timeline - Scrubbing preview
export const LiveHoverScrubTimelineLab: React.FC = () => {
  const [scrubPct, setScrubPct] = useState(40);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    setScrubPct(Math.max(0, Math.min(100, pct)));
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#447 HOVER SCRUB TIMELINE</span>
        <span className="text-[10px] text-indigo-600 font-bold">{scrubPct.toFixed(0)}% Time</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex flex-col justify-between text-white">
        <div className="h-16 bg-slate-800 rounded flex items-center justify-center text-[9px] text-indigo-300 font-bold border border-slate-700">
          🎬 Frame #{(scrubPct * 2.4).toFixed(0)} (00:{Math.floor(scrubPct * 0.6).toString().padStart(2, '0')}:14)
        </div>

        {/* Hover Scrubbing Bar */}
        <div 
          onMouseMove={handleMouseMove}
          className="relative h-6 bg-slate-800 rounded-lg cursor-ew-resize flex items-center px-1 border border-slate-700"
        >
          <div style={{ width: `${scrubPct}%` }} className="h-full bg-indigo-600/60 rounded" />
          <div style={{ left: `${scrubPct}%` }} className="absolute w-1.5 h-6 bg-white rounded -translate-x-1/2 shadow-lg" />
        </div>
      </div>
    </div>
  );
};

// #448 Multi-Touch Pinch & Spread Zoom Gesture
export const LivePinchSpreadZoomLab: React.FC = () => {
  const [scale, setScale] = useState(1);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#448 PINCH & SPREAD ZOOM</span>
        <span className="text-[10px] text-indigo-600 font-bold">{scale.toFixed(1)}x Scale</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex items-center justify-center overflow-hidden">
        <div 
          style={{ transform: `scale(${scale})` }} 
          className="w-24 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-black text-[9px] shadow-2xl transition-transform duration-200 select-none"
        >
          🔍 Pinch Box
        </div>
      </div>

      <div className="flex justify-center gap-2">
        <button onClick={() => setScale((s) => Math.max(0.6, s - 0.2))} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[8px]">Pinch In (-)</button>
        <button onClick={() => setScale(1)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[8px]">Reset 1.0x</button>
        <button onClick={() => setScale((s) => Math.min(2.2, s + 0.2))} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[8px]">Spread Out (+)</button>
      </div>
    </div>
  );
};

// #449 Multi-Touch 2-Finger Rotation Gesture
export const LiveMultiTouchRotationLab: React.FC = () => {
  const [angle, setAngle] = useState(0);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#449 2-FINGER ROTATION</span>
        <span className="text-[10px] text-indigo-600 font-bold">{angle}° Rotated</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex items-center justify-center">
        <div 
          style={{ transform: `rotate(${angle}deg)` }} 
          className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xs shadow-2xl transition-transform duration-200"
        >
          🔄 {angle}°
        </div>
      </div>

      <div className="flex justify-center gap-2">
        <button onClick={() => setAngle((a) => a - 45)} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[8px]">↺ -45°</button>
        <button onClick={() => setAngle(0)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[8px]">0°</button>
        <button onClick={() => setAngle((a) => a + 45)} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[8px]">↻ +45°</button>
      </div>
    </div>
  );
};

// #450 Touch Long-Press Haptic Vibration Wave
export const LiveTouchLongPressHapticLab: React.FC = () => {
  const [pressed, setPressed] = useState(false);
  const [triggered, setTriggered] = useState(false);

  const startPress = () => {
    setPressed(true);
    setTriggered(false);
    setTimeout(() => {
      setTriggered(true);
    }, 600);
  };

  const endPress = () => {
    setPressed(false);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#450 LONG-PRESS HAPTIC WAVE</span>
        <span className={`text-[10px] font-bold ${triggered ? 'text-amber-400' : 'text-slate-500'}`}>
          {triggered ? '💥 HAPTIC TRIGGERED' : 'Hold button'}
        </span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex items-center justify-center">
        <button
          onMouseDown={startPress}
          onMouseUp={endPress}
          onTouchStart={startPress}
          onTouchEnd={endPress}
          className={`px-6 py-3 rounded-xl font-bold text-xs transition-all select-none ${
            triggered 
              ? 'bg-amber-500 text-slate-950 scale-110 shadow-2xl shadow-amber-500/50' 
              : pressed 
              ? 'bg-indigo-700 text-white scale-95 ring-4 ring-indigo-400/60' 
              : 'bg-indigo-600 text-white hover:bg-indigo-500'
          }`}
        >
          {triggered ? '📳 Haptic Pulse Sent (500ms)' : pressed ? 'Charging Hold (600ms)...' : 'Press & Hold (Long-Press)'}
        </button>
      </div>
    </div>
  );
};

// #451 Direct Canvas Spatial Pan/Drag - Middle click canvas pan
export const LiveDirectCanvasPanLab: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#451 DIRECT CANVAS SPATIAL PAN</span>
        <button onClick={() => setPos({ x: 0, y: 0 })} className="text-[9px] text-indigo-600 font-bold hover:underline">Reset 0,0</button>
      </div>

      <div className="h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center">
        <div 
          style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
          className="absolute p-4 border border-indigo-500/40 rounded-xl bg-indigo-950/40 text-center text-white transition-transform"
        >
          <div className="text-[9px] font-bold text-indigo-300">🗺️ CAD Blueprint Origin [0, 0]</div>
          <div className="text-[7px] text-slate-400">X: {pos.x}px | Y: {pos.y}px</div>
        </div>
      </div>

      <div className="flex justify-center gap-1.5">
        <button onClick={() => setPos((p) => ({ ...p, x: p.x - 20 }))} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[8px]">← Pan Left</button>
        <button onClick={() => setPos((p) => ({ ...p, y: p.y - 20 }))} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[8px]">↑ Pan Up</button>
        <button onClick={() => setPos((p) => ({ ...p, y: p.y + 20 }))} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[8px]">↓ Pan Down</button>
        <button onClick={() => setPos((p) => ({ ...p, x: p.x + 20 }))} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[8px]">→ Pan Right</button>
      </div>
    </div>
  );
};

// #452 Snap to Vector Guide Alignment Grid
export const LiveSnapToGuideGridLab: React.FC = () => {
  const [posX, setPosX] = useState(80);

  const snappedX = Math.round(posX / 40) * 40;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#452 SNAP TO GUIDE GRID</span>
        <span className="text-[10px] text-indigo-600 font-bold">Snapped: {snappedX}px</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 relative overflow-hidden flex flex-col justify-between">
        {/* Grid lines */}
        <div className="absolute inset-0 grid grid-cols-6 gap-0 pointer-events-none opacity-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-r border-indigo-400 h-full" />
          ))}
        </div>

        {/* Snapped Block */}
        <div 
          style={{ left: `${snappedX}px` }}
          className="absolute top-4 w-12 h-12 bg-indigo-600 border-2 border-white rounded-lg shadow-xl flex items-center justify-center text-white font-bold text-[8px] transition-all"
        >
          📍 {snappedX}
        </div>

        <div className="z-10 mt-auto">
          <input 
            type="range" min="20" max="220" value={posX} onChange={(e) => setPosX(Number(e.target.value))}
            className="w-full accent-indigo-400 h-1.5"
          />
          <div className="text-[7px] text-slate-400 text-center mt-1">40px magnetic interval snapping</div>
        </div>
      </div>
    </div>
  );
};

// #453 Smart Alignment Distribute Guides (CAD alignment hints)
export const LiveSmartDistributeGuidesLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#453 SMART DISTRIBUTE GUIDES</span>
        <span className="text-[10px] text-pink-500 font-bold">d = 24px (Equal)</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 relative flex items-center justify-center gap-6">
        {/* Pink Distribute Guides */}
        <span className="absolute h-0.5 bg-pink-500 w-48 top-1/2 -translate-y-1/2 pointer-events-none" />
        
        {['Box A', 'Box B', 'Box C'].map((box) => (
          <div key={box} className="w-14 h-14 bg-slate-800 border-2 border-pink-400 rounded-lg text-white text-[8px] font-bold flex items-center justify-center z-10 shadow-xl">
            {box}
          </div>
        ))}
      </div>
    </div>
  );
};

// #454 Multi-Touch 3-Finger Swipe History Navigation
export const LiveThreeFingerSwipeLab: React.FC = () => {
  const [historyIdx, setHistoryIdx] = useState(2);
  const pages = ['Dashboard', 'CAD View', 'Schematics', 'Export PDF'];

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#454 3-FINGER SWIPE HISTORY</span>
        <span className="text-[10px] text-indigo-600 font-bold">{pages[historyIdx]}</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex flex-col justify-between text-white">
        <div className="flex justify-between items-center text-[8px] text-slate-400">
          <span>Trackpad: 3-finger horizontal gesture</span>
          <span>History: {historyIdx + 1}/{pages.length}</span>
        </div>
        <div className="text-center font-bold text-sm text-indigo-300">
          📄 {pages[historyIdx]} Page
        </div>
        <div className="flex justify-center gap-2">
          <button 
            disabled={historyIdx === 0}
            onClick={() => setHistoryIdx((i) => Math.max(0, i - 1))}
            className="px-2 py-0.5 bg-slate-800 disabled:opacity-30 rounded text-[8px]"
          >
            ← Swipe Back
          </button>
          <button 
            disabled={historyIdx === pages.length - 1}
            onClick={() => setHistoryIdx((i) => Math.min(pages.length - 1, i + 1))}
            className="px-2 py-0.5 bg-slate-800 disabled:opacity-30 rounded text-[8px]"
          >
            Swipe Next →
          </button>
        </div>
      </div>
    </div>
  );
};

// #455 Touch Target Hit Expansion (Fitts's Law 44x44px hit slop)
export const LiveTouchHitExpansionLab: React.FC = () => {
  const [clicked, setClicked] = useState(0);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#455 TOUCH TARGET EXPANSION</span>
        <span className="text-[10px] text-indigo-600 font-bold">Hits: {clicked}</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex items-center justify-center gap-6">
        {/* Visual 16px icon with 44px invisible hit target */}
        <div 
          onClick={() => setClicked((c) => c + 1)}
          className="w-11 h-11 border border-dashed border-emerald-500/60 rounded-xl flex items-center justify-center cursor-pointer hover:bg-emerald-950/40 relative group"
        >
          <div className="w-4 h-4 bg-emerald-500 rounded flex items-center justify-center text-slate-950 text-[8px] font-bold">
            ✓
          </div>
          <span className="absolute -bottom-4 text-[6px] text-emerald-400 opacity-80 whitespace-nowrap">44px Hit Target</span>
        </div>
      </div>
    </div>
  );
};

// #456 Mouse Wheel Shift-Key Horizontal Scroll
export const LiveWheelShiftHorizontalLab: React.FC = () => {
  const [scrollX, setScrollX] = useState(0);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#456 WHEEL SHIFT HORIZONTAL</span>
        <span className="text-[10px] text-indigo-600 font-bold">Offset: {scrollX}px</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex flex-col justify-between overflow-hidden">
        <div className="flex gap-2" style={{ transform: `translateX(-${scrollX}px)` }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-24 h-16 shrink-0 bg-slate-800 border border-slate-700 rounded-lg p-2 text-white text-[8px] flex flex-col justify-between">
              <span className="font-bold text-indigo-400">Card #{i + 1}</span>
              <span className="text-[7px] text-slate-400">Shift + Wheel</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          <button onClick={() => setScrollX((x) => Math.max(0, x - 50))} className="px-2 py-0.5 bg-slate-800 text-white rounded text-[8px]">← Scroll Left</button>
          <button onClick={() => setScrollX((x) => Math.min(300, x + 50))} className="px-2 py-0.5 bg-slate-800 text-white rounded text-[8px]">Scroll Right →</button>
        </div>
      </div>
    </div>
  );
};

// #457 Drag & Drop Ghost Image Custom Offset Preview
export const LiveCustomDragGhostLab: React.FC = () => {
  const [dragging, setDragging] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#457 CUSTOM DRAG GHOST PREVIEW</span>
        <span className={`text-[10px] font-bold ${dragging ? 'text-indigo-400' : 'text-slate-500'}`}>{dragging ? 'DRAGGING' : 'IDLE'}</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex items-center justify-center gap-6">
        <div 
          draggable
          onDragStart={() => setDragging(true)}
          onDragEnd={() => setDragging(false)}
          className="w-24 h-14 bg-indigo-600 border-2 border-indigo-400 rounded-xl text-white font-bold text-[8px] flex items-center justify-center cursor-grab active:cursor-grabbing shadow-xl"
        >
          📦 Drag Me
        </div>
        <div className="w-24 h-14 border-2 border-dashed border-slate-700 rounded-xl flex items-center justify-center text-[8px] text-slate-500">
          📥 Drop Target
        </div>
      </div>
    </div>
  );
};

// #458 Right-Click Drag Orbit Camera (3D gimbal)
export const LiveRightClickOrbitCameraLab: React.FC = () => {
  const [orbit, setOrbit] = useState({ rotX: 20, rotY: 35 });

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#458 RIGHT-CLICK ORBIT CAMERA</span>
        <span className="text-[10px] text-indigo-600 font-bold">{orbit.rotX}° / {orbit.rotY}°</span>
      </div>

      <div className="h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 flex items-center justify-center perspective-500">
        <div 
          style={{ transform: `rotateX(${orbit.rotX}deg) rotateY(${orbit.rotY}deg)` }}
          className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl border-2 border-white/40 shadow-2xl flex items-center justify-center text-white font-black text-xs transition-transform duration-200"
        >
          3D CUBE
        </div>
      </div>

      <div className="flex justify-center gap-2">
        <button onClick={() => setOrbit((o) => ({ ...o, rotY: o.rotY - 30 }))} className="px-2 py-0.5 bg-slate-800 text-white rounded text-[8px]">↺ Rotate Left</button>
        <button onClick={() => setOrbit({ rotX: 20, rotY: 35 })} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[8px]">Reset Orbit</button>
        <button onClick={() => setOrbit((o) => ({ ...o, rotY: o.rotY + 30 }))} className="px-2 py-0.5 bg-slate-800 text-white rounded text-[8px]">Rotate Right ↻</button>
      </div>
    </div>
  );
};

// #459 Double-Click Header Maximize/Restore Toggle
export const LiveDoubleClickMaximizeLab: React.FC = () => {
  const [max, setMax] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#459 DBL-CLICK HEADER MAXIMIZE</span>
        <span className="text-[10px] text-indigo-600 font-bold">{max ? 'MAXIMIZED' : 'WINDOWED'}</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-1.5 border border-slate-700 flex items-center justify-center">
        <div className={`bg-slate-800 border border-slate-700 rounded-lg overflow-hidden transition-all duration-300 flex flex-col ${max ? 'w-full h-full' : 'w-48 h-20'}`}>
          <div 
            onDoubleClick={() => setMax(!max)}
            className="h-6 bg-slate-700 px-2 flex items-center justify-between text-[8px] text-white font-bold cursor-pointer select-none"
          >
            <span>Inspector Title Bar</span>
            <span className="text-[6px] text-indigo-300">Dbl-Click Header</span>
          </div>
          <div className="p-2 text-[7px] text-slate-400 text-center flex-1 flex items-center justify-center">
            {max ? 'Full Stage Maximized View' : 'Standard 200px Floating Frame'}
          </div>
        </div>
      </div>
    </div>
  );
};

// #460 Triple-Click Paragraph Auto-Selection
export const LiveTripleClickSelectLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#460 TRIPLE-CLICK PARAGRAPH</span>
        <span className="text-[10px] text-slate-500">Selection standard</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-3 border border-slate-700 text-slate-300 text-[8px] leading-relaxed select-text flex flex-col justify-center">
        <p className="bg-slate-800/80 p-2 rounded border border-slate-700 selection:bg-indigo-600 selection:text-white">
          Triple-click anywhere in this paragraph to highlight the entire block instantly. Standard desktop UX behavior across text processors.
        </p>
      </div>
    </div>
  );
};

// #461 Drag & Drop Auto-Scroll at Viewport Edge
export const LiveDragAutoScrollLab: React.FC = () => {
  const [scrollEdge, setScrollEdge] = useState<'top' | 'bottom' | null>(null);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#461 DRAG AUTO-SCROLL EDGE</span>
        <span className="text-[10px] text-indigo-600 font-bold">{scrollEdge ? `Auto-scrolling ${scrollEdge}` : 'Hover threshold'}</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex flex-col justify-between relative overflow-hidden">
        {/* Top Edge Threshold */}
        <div 
          onMouseEnter={() => setScrollEdge('top')}
          onMouseLeave={() => setScrollEdge(null)}
          className="h-6 bg-indigo-950/60 border border-dashed border-indigo-400/60 rounded text-[7px] text-indigo-300 flex items-center justify-center cursor-pointer"
        >
          ▲ Hover to Auto-Scroll Up
        </div>

        <div className="text-center text-[8px] text-slate-500">Long Table Rows (Item #14 ~ #28)</div>

        {/* Bottom Edge Threshold */}
        <div 
          onMouseEnter={() => setScrollEdge('bottom')}
          onMouseLeave={() => setScrollEdge(null)}
          className="h-6 bg-indigo-950/60 border border-dashed border-indigo-400/60 rounded text-[7px] text-indigo-300 flex items-center justify-center cursor-pointer"
        >
          ▼ Hover to Auto-Scroll Down
        </div>
      </div>
    </div>
  );
};

// #462 Click Ripple Wavefront Shockwave FX
export const LiveClickRippleEffectLab: React.FC = () => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const triggerRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newRipple = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: Date.now(),
    };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#462 CLICK RIPPLE SHOCKWAVE</span>
        <span className="text-[10px] text-slate-500">Click anywhere</span>
      </div>

      <div 
        onClick={triggerRipple}
        className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 relative overflow-hidden flex items-center justify-center cursor-pointer select-none"
      >
        <span className="text-[9px] text-slate-400 font-bold z-10">Click surface to emit Material ripple</span>
        {ripples.map((r) => (
          <span
            key={r.id}
            style={{ left: `${r.x}px`, top: `${r.y}px` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-indigo-500/40 animate-ping pointer-events-none"
          />
        ))}
      </div>
    </div>
  );
};

// #463 Bezier Curve Handle Tangent Manipulation
export const LiveBezierTangentHandleLab: React.FC = () => {
  const [handle, setHandle] = useState(40);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#463 BEZIER TANGENT HANDLES</span>
        <span className="text-[10px] text-indigo-600 font-bold">Curvature: {handle}</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex flex-col justify-between">
        <svg className="w-full h-20">
          <path d={`M 20 60 Q 120 ${60 - handle} 220 60`} fill="transparent" stroke="#6366f1" strokeWidth="3" />
          <circle cx="20" cy="60" r="4" fill="#a855f7" />
          <circle cx="120" cy={60 - handle} r="4" fill="#38bdf8" />
          <circle cx="220" cy="60" r="4" fill="#a855f7" />
        </svg>

        <div className="flex items-center gap-2">
          <span className="text-[8px] text-slate-400">Handle Y:</span>
          <input 
            type="range" min="-40" max="60" value={handle} onChange={(e) => setHandle(Number(e.target.value))}
            className="w-full accent-indigo-400 h-1.5"
          />
        </div>
      </div>
    </div>
  );
};

// #464 Freeform Lasso Multi-Select Loop
export const LiveFreeformLassoSelectLab: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([1, 2]);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#464 FREEFORM LASSO SELECT</span>
        <span className="text-[10px] text-indigo-600 font-bold">{selectedItems.length} Enclosed</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex items-center justify-around relative">
        {[1, 2, 3, 4].map((id) => (
          <div
            key={id}
            onClick={() => setSelectedItems((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])}
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xs cursor-pointer border-2 transition-all ${
              selectedItems.includes(id) ? 'bg-indigo-600 border-indigo-300 scale-110 shadow-lg' : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            #{id}
          </div>
        ))}
      </div>
    </div>
  );
};

// #465 Context-Aware Hover Tooltip Delay (300ms Safe Timer)
export const LiveHoverTooltipDelayLab: React.FC = () => {
  const [showTip, setShowTip] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setShowTip(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setShowTip(false);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#465 300MS HOVER TOOLTIP DELAY</span>
        <span className="text-[10px] text-indigo-600 font-bold">{showTip ? 'TOOLTIP ACTIVE' : '300ms Delay Guard'}</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex items-center justify-center relative">
        <button 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold text-xs shadow-lg"
        >
          Hover Me (300ms)
        </button>

        {showTip && (
          <div className="absolute top-4 bg-slate-950 border border-indigo-400 text-white px-2 py-1 rounded shadow-2xl text-[8px] animate-fadeIn">
            ℹ️ Intentional dwell detected. Safe tooltip content displayed.
          </div>
        )}
      </div>
    </div>
  );
};

// #466 Hover Card Rich Preview Flyout
export const LiveHoverCardRichFlyoutLab: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#466 HOVER CARD RICH FLYOUT</span>
        <span className="text-[10px] text-slate-500">Avatar inspection</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex items-center justify-center relative">
        <div 
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-full cursor-pointer text-white text-[9px] border border-slate-700"
        >
          <span className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center font-bold">JD</span>
          <span>@johndoe</span>
        </div>

        {hovered && (
          <div className="absolute top-2 w-48 bg-slate-950 border border-indigo-500 rounded-xl p-2 shadow-2xl text-white text-[7px] space-y-1 z-20 animate-fadeIn">
            <div className="font-bold text-[8px] text-indigo-400">John Doe (Principal Eng)</div>
            <div className="text-slate-400">Maintains 12 UI core packages. Last commit 10m ago.</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #467 Click Outside / Backdrop Dismiss Detection
export const LiveClickOutsideBackdropLab: React.FC = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#467 CLICK OUTSIDE DISMISS</span>
        <span className="text-[10px] text-indigo-600 font-bold">{popoverOpen ? 'POPOVER OPEN' : 'DISMISSED'}</span>
      </div>

      <div 
        onClick={() => setPopoverOpen(false)}
        className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex items-center justify-center relative"
      >
        <button 
          onClick={(e) => { e.stopPropagation(); setPopoverOpen(!popoverOpen); }}
          className="px-3 py-1.5 bg-indigo-600 text-white font-bold rounded-lg text-[9px]"
        >
          Toggle Popover
        </button>

        {popoverOpen && (
          <div 
            onClick={(e) => e.stopPropagation()}
            className="absolute top-4 w-44 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 shadow-2xl text-white text-[8px] space-y-1 animate-scaleUp z-20"
          >
            <div className="font-bold text-indigo-300 border-b border-slate-800 pb-0.5">Quick Settings</div>
            <div className="text-[7px] text-slate-400">Click anywhere outside to dismiss automatically.</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #468 Right-Drag Canvas Measurement Ruler Tool
export const LiveRightDragMeasurementLab: React.FC = () => {
  const [dist, setDist] = useState(148);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#468 RIGHT-DRAG MEASUREMENT RULER</span>
        <span className="text-[10px] text-amber-400 font-bold">L = {dist}mm</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex flex-col justify-between">
        <div className="relative h-16 flex items-center justify-center">
          <div style={{ width: `${dist}px` }} className="h-1 bg-amber-400 relative flex items-center justify-between">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 -translate-x-1/2" />
            <span className="text-[8px] font-bold text-amber-300 -translate-y-4 bg-slate-950 px-1 border border-amber-400 rounded">
              {dist} mm (ΔX)
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 translate-x-1/2" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[8px] text-slate-400">Span:</span>
          <input 
            type="range" min="40" max="220" value={dist} onChange={(e) => setDist(Number(e.target.value))}
            className="w-full accent-amber-400 h-1.5"
          />
        </div>
      </div>
    </div>
  );
};

// #469 Drag Reorder Live Placeholder Projection
export const LiveDragReorderPlaceholderLab: React.FC = () => {
  const [items] = useState(['Module 1', 'Module 2', 'Module 3']);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#469 DRAG REORDER PLACEHOLDER</span>
        <span className="text-[10px] text-indigo-600 font-bold">List Order</span>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg p-2 border border-slate-700 flex flex-col justify-around">
        {items.map((item, idx) => (
          <div key={item} className="h-7 bg-slate-800 border border-slate-700 hover:border-indigo-500 rounded px-2 flex items-center justify-between text-white text-[8px] cursor-grab">
            <span className="font-bold text-indigo-300">{item}</span>
            <span className="text-slate-500">⋮⋮ [Slot {idx + 1}]</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #470 Pan/Zoom Spatial Compass Minimap HUD
export const LiveSpatialCompassMinimapLab: React.FC = () => {
  const [viewPos] = useState({ x: 25, y: 35 });

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#470 SPATIAL COMPASS MINIMAP</span>
        <span className="text-[10px] text-emerald-400 font-bold">HUD Active</span>
      </div>

      <div className="h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative overflow-hidden flex items-center justify-center">
        <div className="text-[8px] text-slate-600">Main CAD Drawing Viewport (10,000 x 10,000 px)</div>

        {/* Floating Minimap HUD in corner */}
        <div className="absolute bottom-2 right-2 w-24 h-16 bg-slate-900 border border-indigo-500 rounded-lg p-1 shadow-2xl">
          <div className="w-full h-full bg-slate-950 relative border border-slate-800 rounded">
            {/* Viewport Red Rectangle */}
            <div 
              style={{ left: `${viewPos.x}%`, top: `${viewPos.y}%` }}
              className="absolute w-8 h-5 border-2 border-emerald-400 bg-emerald-500/20 rounded-sm -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
