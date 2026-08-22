// -------------------------------------------------------------
// Category 03: Dedicated Navigation & Menus Labs (#041 ~ #060)
// -------------------------------------------------------------
import React, { useState } from 'react';
import {
  Menu,
  ChevronRight,
  ChevronDown,
  Layers,
  Home,
  Settings,
  User,
  Sliders,
  MoreVertical,
  Search,
  Command,
  HelpCircle,
  Folder,
  FileCode,
  Sparkles,
  Compass,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

// #041 Navbar (Global horizontal navigation with brand, links, and action)
export const LiveNavbarLab = () => {
  const [activeTab, setActiveTab] = useState<'Dash' | 'BOM' | 'Timeline' | 'Settings'>('Dash');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Top Navbar (Header Bar):</span>
        <span className="text-indigo-400 font-bold">Active: {activeTab}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-1.5 font-bold text-white">
          <span className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center text-[10px]">NJ</span>
          <span className="text-[11px]">VIBE</span>
        </div>
        <div className="flex gap-1">
          {(['Dash', 'BOM', 'Timeline', 'Settings'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-2 py-1 rounded text-[10px] font-bold transition ${
                activeTab === t ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-[9px] text-slate-300">
          👤
        </div>
      </div>
      <span className="text-[9px] text-slate-400 text-center">Global header bar persisting across top-level screens.</span>
    </div>
  );
};

// #042 Menu Bar (Desktop application command menus: File, Edit, View, Tools)
export const LiveMenuBarLab = () => {
  const [openMenu, setOpenMenu] = useState<string | null>('File');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Desktop Menu Bar:</span>
        <span className="text-indigo-400 font-bold">{openMenu ? `${openMenu} Menu Open` : 'Click item'}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-1.5 shadow-xl relative">
        <div className="flex gap-2 bg-slate-900 px-2 py-1 rounded border border-slate-800 text-[11px] font-bold">
          {['File', 'Edit', 'View', 'Tools', 'Help'].map((m) => (
            <button
              key={m}
              onClick={() => setOpenMenu(openMenu === m ? null : m)}
              className={`px-1.5 py-0.5 rounded transition ${
                openMenu === m ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        {openMenu === 'File' && (
          <div className="absolute top-10 left-2 w-44 bg-slate-900 border-2 border-indigo-400 rounded-lg p-1.5 shadow-2xl z-20 space-y-1 text-[10px]">
            <div className="flex justify-between hover:bg-slate-800 p-1 rounded cursor-pointer text-slate-200">
              <span>New Project</span>
              <span className="text-slate-500">Ctrl+N</span>
            </div>
            <div className="flex justify-between hover:bg-slate-800 p-1 rounded cursor-pointer text-slate-200">
              <span>Open STEP CAD...</span>
              <span className="text-slate-500">Ctrl+O</span>
            </div>
            <div className="border-t border-slate-800 my-0.5" />
            <div className="hover:bg-rose-950/60 text-rose-300 p-1 rounded cursor-pointer">Exit Application</div>
          </div>
        )}
      </div>
      <span className="text-[9px] text-slate-400 text-center">Dense command menu hierarchy for professional desktop-grade tools.</span>
    </div>
  );
};

// #043 Sidebar (Multi-purpose vertical pillar panel)
export const LiveSidebarLab = () => {
  const [activeSection, setActiveSection] = useState<'assets' | 'filters' | 'config'>('assets');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Multi-Purpose Sidebar:</span>
        <span className="text-indigo-400 font-bold">Pane: {activeSection.toUpperCase()}</span>
      </div>
      <div className="w-full h-32 bg-slate-950 border-2 border-indigo-500 rounded-xl flex overflow-hidden shadow-xl">
        <div className="w-28 bg-slate-900 border-r border-indigo-500/50 p-2 flex flex-col gap-1.5">
          <span className="text-[10px] font-bold text-indigo-300 border-b border-slate-800 pb-1">SIDEBAR</span>
          {(['assets', 'filters', 'config'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className={`text-left px-2 py-1 rounded text-[10px] font-bold transition ${
                activeSection === s ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              • {s.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex-1 p-3 flex flex-col justify-center items-center text-center text-slate-300">
          <span className="text-xs font-bold text-white">Main Canvas Workspace</span>
          <span className="text-[9px] text-slate-500 mt-1">Docked beside autonomous sidebar</span>
        </div>
      </div>
    </div>
  );
};

// #044 Side Navigation (Sidenav list of primary route destinations)
export const LiveSideNavLab = () => {
  const [selectedRoute, setSelectedRoute] = useState('Machines');

  const routes = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Machines', icon: '⚙️' },
    { name: 'Telemetry', icon: '📈' },
    { name: 'Diagnostics', icon: '🩺' },
  ];

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Side Navigation (Sidenav):</span>
        <span className="text-indigo-400 font-bold">Route: {selectedRoute}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 flex gap-3 shadow-xl">
        <div className="w-36 space-y-1 bg-slate-900 p-1.5 rounded-lg border border-slate-800">
          {routes.map((r) => (
            <button
              key={r.name}
              onClick={() => setSelectedRoute(r.name)}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-[10px] font-bold transition ${
                selectedRoute === r.name ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>{r.icon}</span>
              <span>{r.name}</span>
            </button>
          ))}
        </div>
        <div className="flex-1 bg-slate-900 rounded-lg p-2 flex flex-col items-center justify-center text-center">
          <span className="text-xs font-black text-indigo-300">{selectedRoute} Screen</span>
          <span className="text-[9px] text-slate-400">Target route active</span>
        </div>
      </div>
    </div>
  );
};

// #045 Drawer (Slide-in side modal panel)
export const LiveDrawerLab = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Slide Drawer Panel:</span>
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="px-2 py-0.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] font-bold"
        >
          {drawerOpen ? 'Close Drawer' : 'Open Drawer'}
        </button>
      </div>
      <div className="relative w-full h-32 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
        <span className="text-[10px] text-slate-500">Underlying Application Surface</span>
        {drawerOpen && (
          <div className="absolute inset-0 bg-black/60 flex">
            <div className="w-44 h-full bg-slate-900 border-r-2 border-indigo-400 p-2.5 flex flex-col justify-between shadow-2xl animate-in slide-in-from-left">
              <div>
                <div className="flex justify-between items-center text-indigo-300 font-bold border-b border-slate-800 pb-1">
                  <span>Quick Inspector</span>
                  <button onClick={() => setDrawerOpen(false)} className="text-rose-400 text-xs">✕</button>
                </div>
                <div className="mt-2 space-y-1 text-[9px] text-slate-300">
                  <div>• Motor Current: 14.2A</div>
                  <div>• Bus Voltage: 220V</div>
                  <div>• Temp: 42.5°C</div>
                </div>
              </div>
              <span className="text-[8px] text-emerald-400 font-bold">Slide Drawer Overlay</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// #046 Hamburger Menu (☰ compact collapse trigger)
export const LiveHamburgerLab = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Hamburger Menu (☰):</span>
        <span className="text-indigo-400 font-bold">{expanded ? 'Expanded' : 'Collapsed'}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2.5 shadow-xl flex flex-col gap-2">
        <div className="flex justify-between items-center bg-slate-900 p-2 rounded-lg border border-slate-800">
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 bg-indigo-950 hover:bg-indigo-900 border border-indigo-400 rounded-md flex flex-col gap-1 w-7 items-center"
          >
            <div className="w-4 h-0.5 bg-indigo-300 rounded-full" />
            <div className="w-4 h-0.5 bg-indigo-300 rounded-full" />
            <div className="w-4 h-0.5 bg-indigo-300 rounded-full" />
          </button>
          <span className="text-[10px] font-bold text-slate-300">Mobile Header Strip</span>
        </div>
        {expanded && (
          <div className="bg-slate-900 border border-indigo-500/50 rounded-lg p-2 space-y-1 text-[10px] text-slate-200 animate-in fade-in">
            <div className="hover:bg-slate-800 p-1 rounded cursor-pointer">📦 1. Component Library</div>
            <div className="hover:bg-slate-800 p-1 rounded cursor-pointer">⚡ 2. IO Pinout Mapping</div>
            <div className="hover:bg-slate-800 p-1 rounded cursor-pointer">🛡️ 3. Safety Interlocks</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #047 Dropdown Menu (Action-command floating menu)
export const LiveDropdownMenuLab = () => {
  const [open, setOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState('None');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Action Dropdown Menu:</span>
        <span className="text-emerald-400 font-bold">Executed: {selectedAction}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 relative shadow-xl flex items-center justify-between">
        <span className="text-[10px] text-slate-300">Project: Gantry_Controller_v2</span>
        <button
          onClick={() => setOpen(!open)}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold shadow flex items-center gap-1.5"
        >
          <span>Actions</span>
          <span>▼</span>
        </button>
        {open && (
          <div className="absolute right-3 top-12 w-48 bg-slate-900 border-2 border-indigo-400 rounded-xl p-1.5 shadow-2xl z-20 space-y-1 text-[10px]">
            {[
              { label: 'Export STEP CAD', code: 'EXPORT_STEP' },
              { label: 'Compile Firmware', code: 'COMPILE_FW' },
              { label: 'Run Diagnostic Loop', code: 'RUN_DIAG' },
            ].map((act) => (
              <button
                key={act.code}
                onClick={() => {
                  setSelectedAction(act.label);
                  setOpen(false);
                }}
                className="w-full text-left p-1.5 hover:bg-indigo-600 hover:text-white rounded text-slate-200 transition"
              >
                {act.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// #048 Context Menu (Target-specific right-click floating menu)
export const LiveContextMenuLab = () => {
  const [menuPos, setMenuPos] = useState<{ x: number; y: number } | null>(null);
  const [log, setLog] = useState('Right-click or click box below');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Context Menu (Right Click):</span>
        <span className="text-indigo-400 font-bold">{log}</span>
      </div>
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          const rect = e.currentTarget.getBoundingClientRect();
          setMenuPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onClick={() => setMenuPos(null)}
        className="relative w-full h-28 bg-slate-950 border-2 border-dashed border-indigo-500 rounded-xl p-2 flex items-center justify-center cursor-context-menu select-none shadow-xl"
      >
        <span className="text-[10px] text-slate-400 text-center">
          🖱️ Right-Click anywhere in this CAD Node Box
        </span>
        {menuPos && (
          <div
            style={{ left: `${menuPos.x}px`, top: `${menuPos.y}px` }}
            className="absolute bg-slate-900 border-2 border-indigo-400 rounded-xl p-1 shadow-2xl z-30 space-y-0.5 text-[9px] w-32"
          >
            <button
              onClick={() => { setLog('Copied Node'); setMenuPos(null); }}
              className="w-full text-left p-1 hover:bg-indigo-600 rounded text-slate-200"
            >
              📋 Copy Node
            </button>
            <button
              onClick={() => { setLog('Inverted Phase'); setMenuPos(null); }}
              className="w-full text-left p-1 hover:bg-indigo-600 rounded text-slate-200"
            >
              🔄 Invert Phase
            </button>
            <button
              onClick={() => { setLog('Deleted Node'); setMenuPos(null); }}
              className="w-full text-left p-1 hover:bg-rose-600 rounded text-rose-300"
            >
              🗑 Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// #049 Overflow Menu (⋮ compact secondary actions popover)
export const LiveOverflowMenuLab = () => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('Click ⋮ for overflow tools');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Overflow Menu (⋮):</span>
        <span className="text-emerald-400 font-bold">{msg}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2.5 relative shadow-xl flex items-center justify-between">
        <div className="space-y-0.5">
          <div className="text-[10px] font-bold text-slate-200">Servo Axis #04</div>
          <div className="text-[9px] text-slate-500">Telemetry Stream: ACTIVE</div>
        </div>
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-indigo-600 border border-slate-700 text-white font-black text-sm flex items-center justify-center transition"
          >
            ⋮
          </button>
          {open && (
            <div className="absolute right-0 top-9 w-36 bg-slate-900 border-2 border-indigo-400 rounded-xl p-1 shadow-2xl z-20 space-y-1 text-[9px]">
              <div onClick={() => { setMsg('Calibrated'); setOpen(false); }} className="p-1 hover:bg-indigo-600 rounded cursor-pointer text-slate-200">⚙ Recalibrate</div>
              <div onClick={() => { setMsg('Muted Alarm'); setOpen(false); }} className="p-1 hover:bg-indigo-600 rounded cursor-pointer text-slate-200">🔕 Mute Alarm</div>
              <div onClick={() => { setMsg('Wiped Log'); setOpen(false); }} className="p-1 hover:bg-rose-900 text-rose-300 rounded cursor-pointer">🧹 Flush Log</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// #050 Tabs (Horizontal tabs with active animated underline indicator)
export const LiveTabsLab = () => {
  const [tab, setTab] = useState<'Spec' | 'Logs' | 'Wiring'>('Spec');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Horizontal Tabs:</span>
        <span className="text-indigo-400 font-bold">Viewing: {tab}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 shadow-xl space-y-2">
        <div className="flex border-b border-slate-800 gap-2">
          {(['Spec', 'Logs', 'Wiring'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-1.5 px-3 font-bold text-xs transition border-b-2 ${
                tab === t ? 'border-indigo-400 text-white' : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="p-2 bg-slate-900 rounded-lg text-[10px] text-slate-300 min-h-[44px]">
          {tab === 'Spec' && '• 750W AC Servo | 24-bit Optical Encoder | 2.4 Nm'}
          {tab === 'Logs' && '• [10:24:01] Phase UVW Synchronized (0.02ms jitter)'}
          {tab === 'Wiring' && '• CN1: Pulse/Dir | CN2: Encoder Bus | CN3: RS485'}
        </div>
      </div>
    </div>
  );
};

// #051 Vertical Tabs (Left-hand column tabs for dense configurations)
export const LiveVerticalTabsLab = () => {
  const [selectedTab, setSelectedTab] = useState<'Kinematics' | 'Limits' | 'PID'>('PID');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Vertical Tabs (Config):</span>
        <span className="text-indigo-400 font-bold">Active: {selectedTab}</span>
      </div>
      <div className="w-full h-28 bg-slate-950 border-2 border-indigo-500 rounded-xl flex overflow-hidden shadow-xl">
        <div className="w-28 bg-slate-900 border-r border-slate-800 p-1 flex flex-col gap-1">
          {(['Kinematics', 'Limits', 'PID'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTab(t)}
              className={`text-left px-2 py-1 rounded text-[10px] font-bold transition ${
                selectedTab === t ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex-1 p-2 flex flex-col justify-center text-[10px] text-slate-300">
          {selectedTab === 'Kinematics' && 'Max Acceleration: 4.5 m/s²'}
          {selectedTab === 'Limits' && 'Soft Stop: -500mm ~ +500mm'}
          {selectedTab === 'PID' && 'Kp: 120.5 | Ki: 14.2 | Kd: 0.08'}
        </div>
      </div>
    </div>
  );
};

// #052 Breadcrumb (Hierarchical clickable path trail)
export const LiveBreadcrumbLab = () => {
  const [path, setPath] = useState(['Factory 1', 'Line A', 'Gantry #04', 'Servo X']);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Breadcrumb Trail:</span>
        <span className="text-indigo-400 font-bold">Depth: {path.length}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex items-center gap-1.5 flex-wrap">
        {path.map((segment, idx) => (
          <React.Fragment key={segment}>
            <button
              onClick={() => setPath(path.slice(0, idx + 1))}
              className={`text-[10px] font-bold transition ${
                idx === path.length - 1 ? 'text-emerald-400 font-black' : 'text-slate-400 hover:text-white hover:underline'
              }`}
            >
              {segment}
            </button>
            {idx < path.length - 1 && <span className="text-indigo-500 font-bold">›</span>}
          </React.Fragment>
        ))}
      </div>
      <span className="text-[9px] text-slate-400 text-center">Click any ancestor segment to instantly jump up the tree.</span>
    </div>
  );
};

// #053 Pagination (Page jump controls: [<] [1] [2] [3] [>])
export const LivePaginationLab = () => {
  const [page, setPage] = useState(3);
  const totalPages = 5;

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Numeric Pagination:</span>
        <span className="text-indigo-400 font-bold">Page {page} of {totalPages}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2.5 shadow-xl flex items-center justify-between">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg text-xs font-bold border border-slate-700"
        >
          &lt; Prev
        </button>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-7 h-7 rounded-lg text-xs font-black transition ${
                page === p ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40' : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <button
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg text-xs font-bold border border-slate-700"
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

// #054 Stepper (Sequential step progress indicator)
export const LiveStepperLab = () => {
  const [step, setStep] = useState(2);
  const steps = ['Specs', 'Kinematics', 'Safety', 'Deploy'];

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Progress Stepper:</span>
        <span className="text-emerald-400 font-bold">Stage: {steps[step - 1]}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-3.5 left-4 right-4 h-0.5 bg-slate-800 -z-0" />
          {steps.map((s, idx) => {
            const num = idx + 1;
            const isDone = num < step;
            const isCurrent = num === step;
            return (
              <button
                key={s}
                onClick={() => setStep(num)}
                className="flex flex-col items-center gap-1 z-10"
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black transition-all ${
                    isCurrent
                      ? 'bg-indigo-600 text-white ring-2 ring-indigo-400 scale-110 shadow-lg'
                      : isDone
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-900 text-slate-500 border border-slate-700'
                  }`}
                >
                  {isDone ? '✓' : num}
                </div>
                <span className={`text-[9px] font-bold ${isCurrent ? 'text-indigo-300' : 'text-slate-500'}`}>{s}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// #055 Wizard (Multi-step guided configuration flow)
export const LiveWizardLab = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Guided Setup Wizard:</span>
        <span className="text-indigo-400 font-bold">Step {currentStep} of 3</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex flex-col justify-between h-36">
        <div>
          <div className="text-[10px] font-black text-indigo-300">
            {currentStep === 1 && '1. Select Motion Controller Model'}
            {currentStep === 2 && '2. Set Maximum Velocity & Torque'}
            {currentStep === 3 && '3. Confirm Hardware Interlocks'}
          </div>
          <div className="mt-2 p-2 bg-slate-900 rounded-lg text-[10px] text-slate-300">
            {currentStep === 1 && 'Options: [Mitsubishi MR-J4] selected'}
            {currentStep === 2 && 'V_max = 3000 rpm | T_limit = 2.4 Nm'}
            {currentStep === 3 && 'E-Stop Circuit Status: [VERIFIED OK]'}
          </div>
        </div>
        <div className="flex justify-between pt-2 border-t border-slate-900">
          <button
            disabled={currentStep === 1}
            onClick={() => setCurrentStep(currentStep - 1)}
            className="px-2 py-1 bg-slate-900 disabled:opacity-30 text-slate-300 rounded text-[10px] font-bold"
          >
            ← Back
          </button>
          <button
            onClick={() => setCurrentStep(currentStep === 3 ? 1 : currentStep + 1)}
            className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] font-bold shadow"
          >
            {currentStep === 3 ? 'Finish & Deploy' : 'Next Step →'}
          </button>
        </div>
      </div>
    </div>
  );
};

// #056 Anchor Navigation (On-page table of contents jump)
export const LiveAnchorNavLab = () => {
  const [activeAnchor, setActiveAnchor] = useState<'#specs' | '#wiring' | '#safety'>('#specs');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Anchor Navigation (TOC):</span>
        <span className="text-indigo-400 font-bold">Jump: {activeAnchor}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2.5 shadow-xl flex gap-2">
        <div className="w-28 space-y-1 bg-slate-900 p-1.5 rounded-lg border border-slate-800">
          {(['#specs', '#wiring', '#safety'] as const).map((a) => (
            <button
              key={a}
              onClick={() => setActiveAnchor(a)}
              className={`w-full text-left px-2 py-1 rounded text-[10px] font-bold transition ${
                activeAnchor === a ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {a}
            </button>
          ))}
        </div>
        <div className="flex-1 bg-slate-900 rounded-lg p-2 text-[10px] text-slate-300 flex flex-col justify-center">
          <span className="font-bold text-emerald-400">{activeAnchor} Section View</span>
          <span className="text-[9px] text-slate-400 mt-1">Simulated on-page smooth scroll target</span>
        </div>
      </div>
    </div>
  );
};

// #057 Bottom Navigation (Thumb-reachable mobile app bar)
export const LiveBottomNavLab = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const items = [
    { label: 'Home', icon: '🏠' },
    { label: 'Motors', icon: '⚙️' },
    { label: 'Alerts', icon: '🔔' },
    { label: 'Profile', icon: '👤' },
  ];

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Bottom Navigation (Mobile):</span>
        <span className="text-emerald-400 font-bold">Tab: {activeNav}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 shadow-xl flex flex-col justify-between h-28">
        <div className="text-[10px] text-slate-400 text-center pt-2">Mobile Viewport Screen Area</div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-1 flex justify-around">
          {items.map((i) => (
            <button
              key={i.label}
              onClick={() => setActiveNav(i.label)}
              className={`flex flex-col items-center py-1 px-2 rounded-lg transition ${
                activeNav === i.label ? 'text-indigo-400 font-black' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <span className="text-sm">{i.icon}</span>
              <span className="text-[9px]">{i.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// #058 Navigation Rail (Ultra-compact 64px icon pillar)
export const LiveNavRailLab = () => {
  const [activeRail, setActiveRail] = useState('CAD');

  const railItems = [
    { label: 'CAD', icon: '📐' },
    { label: 'PLC', icon: '🎛️' },
    { label: 'CAM', icon: '⚡' },
  ];

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Navigation Rail (64px Compact):</span>
        <span className="text-indigo-400 font-bold">Tool: {activeRail}</span>
      </div>
      <div className="w-full h-28 bg-slate-950 border-2 border-indigo-500 rounded-xl flex overflow-hidden shadow-xl">
        <div className="w-16 bg-slate-900 border-r border-slate-800 p-1.5 flex flex-col items-center gap-2">
          {railItems.map((r) => (
            <button
              key={r.label}
              onClick={() => setActiveRail(r.label)}
              className={`w-10 h-10 rounded-xl flex flex-col items-center justify-center text-xs transition ${
                activeRail === r.label ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              <span>{r.icon}</span>
              <span className="text-[7px] font-bold">{r.label}</span>
            </button>
          ))}
        </div>
        <div className="flex-1 p-2 flex flex-col justify-center items-center text-center">
          <span className="text-xs font-black text-indigo-300">{activeRail} Workplane</span>
          <span className="text-[8px] text-slate-500">Wide workspace preserved</span>
        </div>
      </div>
    </div>
  );
};

// #059 Mega Menu (Wide multi-column category panel)
export const LiveMegaMenuLab = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Mega Menu (Multi-Column):</span>
        <button
          onClick={() => setOpen(!open)}
          className="text-[10px] text-indigo-400 hover:underline"
        >
          {open ? 'Hide Mega Panel' : 'Expand Mega Panel'}
        </button>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2.5 shadow-xl space-y-2">
        <div className="bg-indigo-900/40 p-1.5 rounded text-[10px] font-bold text-indigo-300 flex justify-between">
          <span>📚 Hardware Component Catalog</span>
          <span>▼</span>
        </div>
        {open && (
          <div className="grid grid-cols-3 gap-2 bg-slate-900 p-2 rounded-lg border border-slate-800 text-[9px]">
            <div className="space-y-1">
              <span className="font-bold text-indigo-300 border-b border-slate-800 block pb-0.5">Motors</span>
              <div className="text-slate-400 hover:text-white cursor-pointer">• AC Servo</div>
              <div className="text-slate-400 hover:text-white cursor-pointer">• Stepper</div>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-indigo-300 border-b border-slate-800 block pb-0.5">Sensors</span>
              <div className="text-slate-400 hover:text-white cursor-pointer">• Optical Enc</div>
              <div className="text-slate-400 hover:text-white cursor-pointer">• LVDT Probe</div>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-indigo-300 border-b border-slate-800 block pb-0.5">Drives</span>
              <div className="text-slate-400 hover:text-white cursor-pointer">• EtherCAT</div>
              <div className="text-slate-400 hover:text-white cursor-pointer">• Modbus RTU</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// #060 Command Palette (Ctrl+K instant keyboard command launcher)
export const LiveCommandPaletteLab = () => {
  const [query, setQuery] = useState('');
  const [executed, setExecuted] = useState('Type to search...');

  const commands = [
    { label: 'Jump to Servo Kinematics', shortcut: '⌘K > J' },
    { label: 'Re-zero All Encoders', shortcut: '⌘K > Z' },
    { label: 'Export STEP Geometry', shortcut: '⌘K > E' },
  ];

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Command Palette (Ctrl+K):</span>
        <span className="text-emerald-400 font-bold text-[10px]">{executed}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2.5 shadow-2xl space-y-2">
        <div className="flex items-center gap-2 bg-slate-900 border border-indigo-400 rounded-lg px-2.5 py-1.5">
          <Search className="w-4 h-4 text-indigo-400" />
          <input
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-white text-xs focus:outline-none"
          />
          <span className="bg-slate-800 text-[9px] text-slate-400 px-1.5 py-0.5 rounded font-bold">ESC</span>
        </div>
        <div className="space-y-1">
          {filtered.map((cmd) => (
            <div
              key={cmd.label}
              onClick={() => setExecuted(`Ran: ${cmd.label}`)}
              className="flex justify-between items-center p-1.5 hover:bg-indigo-600 rounded-lg cursor-pointer text-[10px] text-slate-200 transition"
            >
              <span>{cmd.label}</span>
              <span className="text-[8px] bg-slate-900 px-1.5 py-0.5 rounded text-indigo-300">{cmd.shortcut}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
