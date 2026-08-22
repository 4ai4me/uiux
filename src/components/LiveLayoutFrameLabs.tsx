import React, { useState } from 'react';
import { 
  Layout, Maximize2, Minimize2, SplitSquareVertical, 
  Layers, Sliders, Settings, Monitor, ArrowRight, 
  Move, ShieldCheck, ChevronLeft, ChevronRight, Lock, 
  Unlock, Eye, RefreshCw, Box, Sidebar, Compass, Grid
} from 'lucide-react';

/**
 * ----------------------------------------------------------------------------
 * Category 16: Layout Frame & Panes (#301 ~ #330) Dedicated 1:1 Labs
 * High-contrast, Light/Dark adaptive UI/UX Architecture Workbench
 * ----------------------------------------------------------------------------
 */

// #301 Application Shell - Header + Left Sidebar + Main Content persistent frame
export const LiveAppShellLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#301 APPLICATION SHELL</span>
        <span className="text-[10px] text-slate-500">Global Scaffold</span>
      </div>

      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex flex-col overflow-hidden">
        <div className="h-6 bg-slate-200 dark:bg-slate-800 border-b px-2 flex items-center justify-between text-[9px] font-bold">
          <span>Top App Header (Sticky)</span>
          <span className="text-indigo-600 dark:text-indigo-400">User: Admin</span>
        </div>
        <div className="flex-1 flex">
          <div className="w-20 bg-slate-100 dark:bg-slate-950 border-r p-1 text-[8px] space-y-1">
            <div className="bg-indigo-600 text-white p-0.5 rounded">Dashboard</div>
            <div className="text-slate-500 p-0.5">Telemetry</div>
            <div className="text-slate-500 p-0.5">Settings</div>
          </div>
          <div className="flex-1 p-2 bg-white dark:bg-slate-900 text-[10px]">
            <div className="font-bold text-indigo-600">Main Content Canvas</div>
            <div className="text-[9px] text-slate-500 mt-1">Shell persists while content switches.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// #302 App Frame - Desktop OS frame with title bar, min/max buttons, status bar
export const LiveAppFrameLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#302 APP FRAME (OS WINDOW)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Window Deco</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border-2 border-slate-400 dark:border-slate-700 rounded-lg overflow-hidden shadow-lg">
        {/* Title Bar */}
        <div className="h-6 bg-slate-200 dark:bg-slate-800 border-b px-2 flex items-center justify-between text-[9px] font-bold">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="ml-1 text-slate-700 dark:text-slate-200">CNC Controller v4.2</span>
          </div>
          <span className="text-slate-400 text-[8px]">PID: 8490</span>
        </div>
        {/* Body */}
        <div className="p-3 text-[10px] text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950">
          Enclosed Native/Electron window chrome framing UI viewports.
        </div>
        {/* Status Bar */}
        <div className="h-4 bg-slate-100 dark:bg-slate-900 border-t px-2 flex items-center justify-between text-[8px] text-slate-500">
          <span>Ready</span>
          <span>Port: COM3 115200</span>
        </div>
      </div>
    </div>
  );
};

// #303 Master–Detail Layout - Left list items driving right detail view
export const LiveMasterDetailLab: React.FC = () => {
  const [selectedId, setSelectedId] = useState(1);
  const items = [
    { id: 1, name: 'Spindle Drive AC-1', temp: '42°C', rpm: '12,000' },
    { id: 2, name: 'Axis-X Linear Servo', temp: '38°C', rpm: '4,500' },
    { id: 3, name: 'Coolant Pump #2', temp: '29°C', rpm: '1,800' },
  ];
  const active = items.find((i) => i.id === selectedId)!;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#303 MASTER–DETAIL LAYOUT</span>
        <span className="text-[10px] text-emerald-600 font-bold">Live Synchronized</span>
      </div>

      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex overflow-hidden">
        {/* Master List */}
        <div className="w-1/2 bg-slate-50 dark:bg-slate-950 border-r p-1 space-y-1">
          <div className="text-[9px] font-bold text-slate-400 px-1">Master List</div>
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => setSelectedId(it.id)}
              className={`w-full text-left px-1.5 py-1 rounded text-[9px] font-bold truncate transition-colors ${
                selectedId === it.id ? 'bg-indigo-600 text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              {it.name}
            </button>
          ))}
        </div>
        {/* Detail Panel */}
        <div className="w-1/2 p-2 flex flex-col justify-center space-y-1 text-[9px]">
          <div className="font-bold text-indigo-600 dark:text-indigo-400 text-[10px]">{active.name}</div>
          <div className="text-slate-600 dark:text-slate-400">Temperature: <span className="font-bold text-slate-900 dark:text-slate-100">{active.temp}</span></div>
          <div className="text-slate-600 dark:text-slate-400">Velocity: <span className="font-bold text-slate-900 dark:text-slate-100">{active.rpm} RPM</span></div>
        </div>
      </div>
    </div>
  );
};

// #304 Two-Pane Layout - Equal 50/50 dual workspace columns
export const LiveTwoPaneLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#304 TWO-PANE LAYOUT</span>
        <span className="text-[10px] text-slate-500">50% / 50% Dual Split</span>
      </div>

      <div className="h-24 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex overflow-hidden">
        <div className="w-1/2 p-2 border-r bg-indigo-50/50 dark:bg-indigo-950/30 flex flex-col justify-center items-center text-center">
          <span className="font-bold text-indigo-600 text-xs">Pane A (Left)</span>
          <span className="text-[8px] text-slate-500">Schematic Editor</span>
        </div>
        <div className="w-1/2 p-2 bg-slate-50 dark:bg-slate-950 flex flex-col justify-center items-center text-center">
          <span className="font-bold text-slate-800 dark:text-slate-200 text-xs">Pane B (Right)</span>
          <span className="text-[8px] text-slate-500">Waveform Scope</span>
        </div>
      </div>
    </div>
  );
};

// #305 Three-Pane Layout - 20% Sidebar + 55% Main Canvas + 25% Inspector
export const LiveThreePaneLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#305 THREE-PANE LAYOUT</span>
        <span className="text-[10px] text-slate-500">IDE 3-Column Standard</span>
      </div>

      <div className="h-24 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex overflow-hidden text-[8px] text-center">
        <div className="w-1/4 bg-slate-100 dark:bg-slate-950 border-r flex flex-col justify-center items-center p-1">
          <span className="font-bold text-slate-700 dark:text-slate-300">Tree (25%)</span>
        </div>
        <div className="w-1/2 bg-white dark:bg-slate-900 border-r flex flex-col justify-center items-center p-1">
          <span className="font-bold text-indigo-600 text-[10px]">Center Canvas (50%)</span>
        </div>
        <div className="w-1/4 bg-slate-100 dark:bg-slate-950 flex flex-col justify-center items-center p-1">
          <span className="font-bold text-slate-700 dark:text-slate-300">Inspector (25%)</span>
        </div>
      </div>
    </div>
  );
};

// #306 Split View - Interactive draggable horizontal split pane
export const LiveSplitViewLab: React.FC = () => {
  const [splitPct, setSplitPct] = useState(45);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#306 SPLIT VIEW (VARIABLE)</span>
        <span className="text-[10px] text-indigo-600 font-bold">{splitPct}% / {100 - splitPct}%</span>
      </div>

      <div className="space-y-2">
        <input
          type="range"
          min={20}
          max={80}
          value={splitPct}
          onChange={(e) => setSplitPct(Number(e.target.value))}
          className="w-full accent-indigo-600 cursor-ew-resize"
        />
        <div className="h-20 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex overflow-hidden">
          <div style={{ width: `${splitPct}%` }} className="bg-indigo-50 dark:bg-indigo-950/40 p-2 flex items-center justify-center text-[9px] font-bold text-indigo-600 truncate border-r">
            Left ({splitPct}%)
          </div>
          <div style={{ width: `${100 - splitPct}%` }} className="bg-slate-50 dark:bg-slate-950 p-2 flex items-center justify-center text-[9px] font-bold text-slate-700 dark:text-slate-300 truncate">
            Right ({100 - splitPct}%)
          </div>
        </div>
      </div>
    </div>
  );
};

// #307 Nested Split Pane - Horizontal outer split containing vertical inner sub-split
export const LiveNestedSplitLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#307 NESTED SPLIT PANE</span>
        <span className="text-[10px] text-slate-500">Horizontal + Vertical Split</span>
      </div>

      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex overflow-hidden text-[8px] text-center">
        {/* Left Outer Pane */}
        <div className="w-1/3 border-r bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-1">
          <span className="font-bold text-slate-600 dark:text-slate-400">Outer Left Pane</span>
        </div>
        {/* Right Outer Pane with Nested Top/Bottom Sub-split */}
        <div className="w-2/3 flex flex-col">
          <div className="h-1/2 border-b bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center p-1 font-bold text-indigo-600">
            Nested Sub-Pane Top
          </div>
          <div className="h-1/2 bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-1 font-bold text-slate-700 dark:text-slate-300">
            Nested Sub-Pane Bottom
          </div>
        </div>
      </div>
    </div>
  );
};

// #308 Dockable Panel - Toggle between fixed docked state and floating window
export const LiveDockablePanelLab: React.FC = () => {
  const [isDocked, setIsDocked] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#308 DOCKABLE PANEL</span>
        <button onClick={() => setIsDocked(!isDocked)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          {isDocked ? 'Undock (Float) ➔' : 'Dock to Left ➔'}
        </button>
      </div>

      <div className="relative h-24 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 overflow-hidden flex">
        {isDocked ? (
          <div className="w-32 h-full bg-indigo-50 dark:bg-indigo-950 border-2 border-indigo-500 rounded p-1.5 flex flex-col justify-between text-[8px]">
            <span className="font-bold text-indigo-600">DOCKED PANEL</span>
            <span className="text-slate-500">Pinned to Left</span>
          </div>
        ) : (
          <div className="absolute top-2 right-2 w-32 bg-slate-900 text-white border-2 border-amber-400 shadow-xl rounded-lg p-1.5 z-10 text-[8px]">
            <span className="font-bold text-amber-400">FLOATING PANEL</span>
            <div className="text-slate-400 mt-1">Free-floating Window</div>
          </div>
        )}
        <div className="flex-1 flex items-center justify-center text-[10px] text-slate-400">
          Main Workspace Canvas
        </div>
      </div>
    </div>
  );
};

// #309 Docking Layout - Visual 4-directional docking cross drop zones
export const LiveDockingLayoutLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#309 DOCKING SYSTEM (CROSS)</span>
        <span className="text-[10px] text-indigo-600 font-bold">4-Way Cross Compass</span>
      </div>

      <div className="relative h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex items-center justify-center">
        {/* Docking Compass */}
        <div className="w-20 h-20 relative bg-slate-100 dark:bg-slate-800 border rounded-xl flex items-center justify-center shadow-md">
          <button className="absolute top-1 px-1.5 py-0.5 bg-indigo-600 text-white rounded text-[7px] font-bold">▲ Top</button>
          <button className="absolute bottom-1 px-1.5 py-0.5 bg-indigo-600 text-white rounded text-[7px] font-bold">▼ Bottom</button>
          <button className="absolute left-1 py-1.5 px-0.5 bg-indigo-600 text-white rounded text-[7px] font-bold">◀</button>
          <button className="absolute right-1 py-1.5 px-0.5 bg-indigo-600 text-white rounded text-[7px] font-bold">▶</button>
          <div className="w-6 h-6 bg-amber-500 text-white rounded flex items-center justify-center text-[7px] font-black">Tab</div>
        </div>
      </div>
    </div>
  );
};

// #310 Collapsible Sidebar - 1-click 0px collapse & expand toggle
export const LiveCollapsibleSidebarLab: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#310 COLLAPSIBLE SIDEBAR</span>
        <button onClick={() => setCollapsed(!collapsed)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold flex items-center gap-1">
          <Sidebar className="w-3 h-3" /> {collapsed ? 'Expand (200px)' : 'Collapse (0px)'}
        </button>
      </div>

      <div className="h-24 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex overflow-hidden">
        <div className={`transition-all duration-300 bg-slate-100 dark:bg-slate-950 border-r overflow-hidden flex flex-col justify-center ${
          collapsed ? 'w-0 p-0' : 'w-24 p-2'
        }`}>
          <span className="text-[8px] font-bold text-indigo-600 whitespace-nowrap">Navigation</span>
          <span className="text-[7px] text-slate-400 whitespace-nowrap">5 Sub-routes</span>
        </div>
        <div className="flex-1 p-2 flex items-center justify-center text-[10px] text-slate-500">
          Main Viewport ({collapsed ? '100% Full Width' : 'Responsive Width'})
        </div>
      </div>
    </div>
  );
};

// #311 Resizable Sidebar - Drag handle adjusting sidebar width (100px ~ 280px)
export const LiveResizableSidebarLab: React.FC = () => {
  const [width, setWidth] = useState(140);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#311 RESIZABLE SIDEBAR</span>
        <span className="text-[10px] text-indigo-600 font-bold">Width: {width}px</span>
      </div>

      <div className="space-y-2">
        <input
          type="range"
          min={80}
          max={200}
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          className="w-full accent-indigo-600 cursor-ew-resize"
        />
        <div className="h-20 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex overflow-hidden">
          <div style={{ width: `${width}px` }} className="bg-indigo-50 dark:bg-indigo-950/40 p-2 border-r flex items-center justify-center text-[9px] font-bold text-indigo-600 truncate">
            Sidebar ({width}px)
          </div>
          <div className="flex-1 p-2 flex items-center justify-center text-[9px] text-slate-500">
            Auto Flexible Content
          </div>
        </div>
      </div>
    </div>
  );
};

// #312 Inspector Panel - Dedicated contextual inspection panel for selected objects
export const LiveInspectorPanelLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#312 INSPECTOR PANEL</span>
        <span className="text-[10px] text-indigo-600 font-bold">Object Details</span>
      </div>

      <div className="h-24 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex overflow-hidden">
        <div className="flex-1 p-2 flex items-center justify-center text-[9px] text-slate-400 border-r">
          [Selected Node: Filter-DSP]
        </div>
        <div className="w-36 bg-slate-50 dark:bg-slate-950 p-2 text-[8px] space-y-1">
          <div className="font-bold text-indigo-600">Inspector Properties</div>
          <div className="text-slate-500">Sampling: 48 kHz</div>
          <div className="text-slate-500">Cutoff: 1,200 Hz</div>
        </div>
      </div>
    </div>
  );
};

// #313 Properties Panel - Form-based key/value properties editor
export const LivePropertiesPanelLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#313 PROPERTIES PANEL</span>
        <span className="text-[10px] text-slate-500">Key-Value Form</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 space-y-1.5 text-[9px]">
        <div className="flex justify-between items-center">
          <span className="text-slate-500">Fill Color:</span>
          <span className="px-2 py-0.5 bg-indigo-600 text-white rounded font-bold">#4F46E5</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-500">Corner Radius:</span>
          <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 border rounded font-bold">8px</span>
        </div>
      </div>
    </div>
  );
};

// #314 Utility Panel - Persistent layers, history, asset palette tools
export const LiveUtilityPanelLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#314 UTILITY PANEL</span>
        <span className="text-[10px] text-slate-500">Layers & Assets</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 space-y-1 text-[8px]">
        <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded flex justify-between items-center">
          <span className="font-bold text-slate-700 dark:text-slate-300">Layer 1: CAD Overlay</span>
          <Eye className="w-3 h-3 text-indigo-500" />
        </div>
        <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded flex justify-between items-center">
          <span className="font-bold text-slate-700 dark:text-slate-300">Layer 2: Sensor Wiring</span>
          <Eye className="w-3 h-3 text-indigo-500" />
        </div>
      </div>
    </div>
  );
};

// #315 Workspace Region - Central interactive design surface
export const LiveWorkspaceRegionLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#315 WORKSPACE REGION</span>
        <span className="text-[10px] text-indigo-600 font-bold">Main Stage</span>
      </div>

      <div className="h-24 bg-white dark:bg-slate-900 border-2 border-dashed border-indigo-400 rounded-lg flex flex-col items-center justify-center text-center p-2">
        <Grid className="w-5 h-5 text-indigo-500 mb-1 animate-pulse" />
        <span className="text-xs font-bold text-indigo-600">Active Workspace Region</span>
        <span className="text-[8px] text-slate-400">Direct user manipulations & canvas renders happen here</span>
      </div>
    </div>
  );
};

// #316 Content Region - Route-driven dynamic body container
export const LiveContentRegionLab: React.FC = () => {
  const [tab, setTab] = useState<'analytics' | 'logs'>('analytics');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#316 CONTENT REGION (ROUTED)</span>
        <div className="flex gap-1">
          <button onClick={() => setTab('analytics')} className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${tab === 'analytics' ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800'}`}>Analytics</button>
          <button onClick={() => setTab('logs')} className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${tab === 'logs' ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800'}`}>Logs</button>
        </div>
      </div>

      <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-center">
        {tab === 'analytics' ? (
          <div className="text-xs text-indigo-600 font-bold">Route: /app/analytics (Live Charts Displayed)</div>
        ) : (
          <div className="text-xs text-emerald-600 font-bold">Route: /app/logs (System Event Stream)</div>
        )}
      </div>
    </div>
  );
};

// #317 Header Region - Persistent 60px header holding title & actions
export const LiveHeaderRegionLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#317 HEADER REGION</span>
        <span className="text-[10px] text-slate-500">Top-level Anchor</span>
      </div>

      <div className="h-10 bg-slate-900 text-white px-3 rounded-lg flex items-center justify-between shadow-md">
        <span className="font-bold text-xs text-indigo-400">Industrial CNC Suite</span>
        <button className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[9px] font-bold">Emergency Stop</button>
      </div>
    </div>
  );
};

// #318 Footer Region - Ground-level metadata, copyright & status footer
export const LiveFooterRegionLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#318 FOOTER REGION</span>
        <span className="text-[10px] text-slate-500">Ground Level</span>
      </div>

      <div className="h-8 bg-slate-200 dark:bg-slate-800 border rounded-lg px-2 flex items-center justify-between text-[8px] text-slate-600 dark:text-slate-400">
        <span>© 2026 FA Platform Inc.</span>
        <span>Version 2.19.0-R16 (Build 20260817)</span>
      </div>
    </div>
  );
};

// #319 Status Bar - Persistent bottom diagnostic status readouts
export const LiveStatusBarLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#319 STATUS BAR</span>
        <span className="text-[10px] text-emerald-600 font-bold">ONLINE ●</span>
      </div>

      <div className="h-6 bg-slate-900 text-slate-300 px-2 rounded flex items-center justify-between text-[8px] font-bold">
        <span>X: 1,420mm | Y: 850mm</span>
        <span className="text-emerald-400">FEED: 100%</span>
        <span>MEM: 42%</span>
      </div>
    </div>
  );
};

// #320 Toolbar Region - Horizontal cluster of persistent action tools
export const LiveToolbarRegionLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#320 TOOLBAR REGION</span>
        <span className="text-[10px] text-slate-500">Action Strip</span>
      </div>

      <div className="p-1 bg-slate-200 dark:bg-slate-800 rounded-lg flex gap-1 items-center">
        <button className="px-2 py-1 bg-white dark:bg-slate-900 rounded text-[9px] font-bold shadow">Select</button>
        <button className="px-2 py-1 bg-indigo-600 text-white rounded text-[9px] font-bold shadow">Pen Tool</button>
        <button className="px-2 py-1 bg-white dark:bg-slate-900 rounded text-[9px] font-bold shadow">Wire</button>
        <button className="px-2 py-1 bg-white dark:bg-slate-900 rounded text-[9px] font-bold shadow">Measure</button>
      </div>
    </div>
  );
};

// #321 Context Toolbar - Appears only when specific entity is selected
export const LiveContextToolbarLab: React.FC = () => {
  const [selected, setSelected] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#321 CONTEXT TOOLBAR</span>
        <button onClick={() => setSelected(!selected)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          {selected ? 'Deselect Node' : 'Select Node'}
        </button>
      </div>

      <div className="relative h-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 flex flex-col justify-between">
        {selected ? (
          <div className="bg-slate-900 text-white p-1 rounded flex justify-between items-center text-[8px] animate-fade-in">
            <span className="text-amber-400 font-bold">Node Actions:</span>
            <div className="flex gap-1">
              <span className="bg-indigo-600 px-1.5 py-0.5 rounded">Duplicate</span>
              <span className="bg-rose-600 px-1.5 py-0.5 rounded">Delete</span>
            </div>
          </div>
        ) : (
          <div className="text-[9px] text-slate-400 text-center pt-2">No selection (Context toolbar hidden)</div>
        )}
      </div>
    </div>
  );
};

// #322 Panel Stack - Tabbed stack sharing the exact same spatial footprint
export const LivePanelStackLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'layers' | 'history'>('layers');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#322 PANEL STACK (TABBED)</span>
        <span className="text-[10px] text-slate-500">Shared Footprint</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden">
        <div className="flex border-b text-[9px] font-bold">
          <button onClick={() => setActiveTab('layers')} className={`flex-1 py-1 ${activeTab === 'layers' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>Layers</button>
          <button onClick={() => setActiveTab('history')} className={`flex-1 py-1 ${activeTab === 'history' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>History</button>
        </div>
        <div className="p-3 text-[9px] text-center">
          {activeTab === 'layers' ? 'Layer 1, Layer 2 Active' : 'Step 1: Move, Step 2: Rotate'}
        </div>
      </div>
    </div>
  );
};

// #323 Panel Group - Accordion or clustered collapsible panel container
export const LivePanelGroupLab: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#323 PANEL GROUP</span>
        <span className="text-[10px] text-slate-500">Accordion Group</span>
      </div>

      <div className="border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden">
        <button onClick={() => setOpen(!open)} className="w-full h-7 bg-slate-200 dark:bg-slate-800 px-2 flex items-center justify-between text-[9px] font-bold">
          <span>Servo Motor Calibration Group</span>
          <span>{open ? '▲ Collapse' : '▼ Expand'}</span>
        </button>
        {open && (
          <div className="p-2 bg-white dark:bg-slate-900 text-[8px] space-y-1">
            <div className="p-1 bg-slate-50 dark:bg-slate-950 rounded border">Gain Tuning: 140%</div>
            <div className="p-1 bg-slate-50 dark:bg-slate-950 rounded border">Notch Filter: Active</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #324 Responsive Split Layout - Side-by-side on desktop ➔ Stacked vertical on mobile
export const LiveRespSplitLab: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#324 RESPONSIVE SPLIT</span>
        <button onClick={() => setIsMobile(!isMobile)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          Switch to {isMobile ? 'Desktop (Row)' : 'Mobile (Col)'}
        </button>
      </div>

      <div className={`border border-slate-300 dark:border-slate-800 rounded-lg p-1.5 flex gap-1.5 ${
        isMobile ? 'flex-col' : 'flex-row h-20'
      }`}>
        <div className="flex-1 p-2 bg-indigo-50 dark:bg-indigo-950/40 rounded flex items-center justify-center font-bold text-indigo-600 text-[9px]">
          Pane 1
        </div>
        <div className="flex-1 p-2 bg-slate-50 dark:bg-slate-950 rounded flex items-center justify-center font-bold text-slate-700 dark:text-slate-300 text-[9px]">
          Pane 2
        </div>
      </div>
    </div>
  );
};

// #325 Min/Max Pane Constraint - Strict min 100px & max 260px boundaries
export const LiveMinMaxConstraintLab: React.FC = () => {
  const [width, setWidth] = useState(160);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#325 MIN/MAX CONSTRAINT</span>
        <span className="text-[10px] text-indigo-600 font-bold">{width}px (Min 100 ~ Max 240)</span>
      </div>

      <div className="space-y-1.5">
        <input
          type="range"
          min={100}
          max={240}
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          className="w-full accent-indigo-600 cursor-ew-resize"
        />
        <div className="h-16 bg-white dark:bg-slate-900 border rounded flex overflow-hidden">
          <div style={{ width: `${width}px` }} className="bg-indigo-600 text-white p-2 flex items-center justify-center text-[9px] font-bold truncate">
            Clamped Width
          </div>
        </div>
      </div>
    </div>
  );
};

// #326 Pane Collapse Threshold - Auto snap-collapse to 0px when shrunk past 60px
export const LiveCollapseThresholdLab: React.FC = () => {
  const [val, setVal] = useState(120);
  const isSnapped = val < 70;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#326 COLLAPSE THRESHOLD</span>
        <span className={`text-[10px] font-bold ${isSnapped ? 'text-rose-600' : 'text-emerald-600'}`}>
          {isSnapped ? 'AUTO-COLLAPSED (0px)' : `Open (${val}px)`}
        </span>
      </div>

      <div className="space-y-1.5">
        <input
          type="range"
          min={40}
          max={160}
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
          className="w-full accent-indigo-600"
        />
        <div className="h-16 bg-white dark:bg-slate-900 border rounded flex overflow-hidden">
          <div style={{ width: isSnapped ? '0px' : `${val}px` }} className="bg-indigo-600 text-white flex items-center justify-center text-[9px] font-bold truncate transition-all">
            Sidebar
          </div>
          <div className="flex-1 p-2 flex items-center justify-center text-[8px] text-slate-400">
            Threshold: &lt;70px ➔ Snaps to 0px
          </div>
        </div>
      </div>
    </div>
  );
};

// #327 Sticky Workspace Header - Header stays fixed while content scrolls vertically
export const LiveStickyWorkspaceHeaderLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#327 STICKY WORKSPACE HEADER</span>
        <span className="text-[10px] text-indigo-600 font-bold">top-0 sticky</span>
      </div>

      <div className="h-24 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-y-auto relative">
        <div className="sticky top-0 bg-indigo-600 text-white px-2 py-1 text-[8px] font-bold shadow z-10">
          Sticky Header (Pinned during scroll)
        </div>
        <div className="p-2 space-y-2 text-[8px] text-slate-500">
          <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded">Row 1: Servo Telemetry</div>
          <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded">Row 2: Inverter Frequency</div>
          <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded">Row 3: PLC I/O Registers</div>
          <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded">Row 4: Safety Relays</div>
        </div>
      </div>
    </div>
  );
};

// #328 Independent Scroll Region - Dual panels each retaining their own scroll bar
export const LiveIndepScrollLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#328 INDEPENDENT SCROLL</span>
        <span className="text-[10px] text-slate-500">Isolated Overflows</span>
      </div>

      <div className="h-24 bg-white dark:bg-slate-900 border rounded flex overflow-hidden text-[8px]">
        <div className="w-1/2 p-1.5 overflow-y-auto border-r space-y-1">
          <div className="font-bold text-indigo-600">Left Scroll Area</div>
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="p-0.5 bg-slate-100 dark:bg-slate-800 rounded">Item {n}</div>
          ))}
        </div>
        <div className="w-1/2 p-1.5 overflow-y-auto space-y-1">
          <div className="font-bold text-emerald-600">Right Scroll Area</div>
          {['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'].map((s) => (
            <div key={s} className="p-0.5 bg-slate-100 dark:bg-slate-800 rounded">{s}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

// #329 Synchronized Scroll - Both code/preview columns scroll concurrently
export const LiveSyncScrollLab: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#329 SYNCHRONIZED SCROLL</span>
        <span className="text-[10px] text-indigo-600 font-bold">Ratio 1:1 Linked</span>
      </div>

      <div className="space-y-1.5">
        <input
          type="range"
          min={0}
          max={100}
          value={scrollY}
          onChange={(e) => setScrollY(Number(e.target.value))}
          className="w-full accent-indigo-600"
        />
        <div className="h-16 bg-white dark:bg-slate-900 border rounded flex overflow-hidden text-[8px] text-center font-bold">
          <div className="w-1/2 p-2 border-r bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 flex items-center justify-center">
            Source Code (Offset: {scrollY}px)
          </div>
          <div className="w-1/2 p-2 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 flex items-center justify-center">
            Markdown (Offset: {scrollY}px)
          </div>
        </div>
      </div>
    </div>
  );
};

// #330 Scroll Boundary - Edge overscroll indicator and boundary bounce feedback
export const LiveScrollBoundaryLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#330 SCROLL BOUNDARY (OVERSCROLL)</span>
        <span className="text-[10px] text-rose-600 font-bold">Boundary Edge</span>
      </div>

      <div className="h-20 bg-white dark:bg-slate-900 border-2 border-dashed border-rose-400 rounded-lg p-2 flex flex-col justify-between text-[8px]">
        <div className="text-rose-500 font-bold">▲ Top Overscroll Boundary</div>
        <div className="text-center font-bold text-slate-700 dark:text-slate-300 text-[10px]">Overscroll Containment Active</div>
        <div className="text-rose-500 font-bold text-right">▼ Bottom Boundary Reached</div>
      </div>
    </div>
  );
};
