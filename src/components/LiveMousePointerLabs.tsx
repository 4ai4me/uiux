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
