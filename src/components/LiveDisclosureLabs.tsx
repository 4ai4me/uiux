// -------------------------------------------------------------
// Category 07: Dedicated Disclosure & Hierarchy Labs (#121 ~ #140)
// -------------------------------------------------------------
import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Folder,
  FileCode,
  Layers,
  Settings,
  Shield,
  Activity,
  Maximize2,
  Minimize2,
  Info,
  CornerDownRight,
  Minus,
  Plus,
  ChevronsDown,
  ChevronsUp,
  ArrowRight,
  ArrowLeft,
  ListTree,
  FileText,
  Compass,
  Search,
} from 'lucide-react';

// #121 Accordion (Mutually exclusive or independent multi-collapsible list)
export const LiveAccordionLab = () => {
  const [openSection, setOpenSection] = useState<string | null>('kinematics');

  const sections = [
    {
      id: 'kinematics',
      title: '1. Axis Kinematics & Limits',
      content: 'Max Velocity: 3,200 mm/s | Accel: 4.5 m/s² | Jitter Limit: 0.02ms',
    },
    {
      id: 'pid',
      title: '2. Servo PID Tuning Loop',
      content: 'Position Kp: 145.0 | Velocity Ki: 18.2 | Derivative Kd: 0.045',
    },
    {
      id: 'safety',
      title: '3. Safety Interlocks & E-Stop',
      content: 'Hardware Dual-Channel SIL3 Certified | Latency: < 1.2ms',
    },
  ];

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Accordion (Grouped):</span>
        <span className="text-indigo-400 font-bold">Open: {openSection || 'None'}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 shadow-xl space-y-1.5">
        {sections.map((sec) => {
          const isOpen = openSection === sec.id;
          return (
            <div key={sec.id} className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900/80">
              <button
                onClick={() => setOpenSection(isOpen ? null : sec.id)}
                className="w-full px-2.5 py-1.5 flex justify-between items-center text-left font-bold text-slate-200 hover:bg-slate-800/80 transition"
              >
                <span className="text-[11px]">{sec.title}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-indigo-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <div className="p-2.5 bg-slate-950/70 border-t border-slate-800 text-[10px] text-slate-300 animate-in fade-in">
                  {sec.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <span className="text-[9px] text-slate-400 text-center">Toggling one item can collapse other sections automatically.</span>
    </div>
  );
};

// #122 Collapsible Panel (Standalone autonomous open/close panel)
export const LiveCollapsiblePanelLab = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Collapsible Panel (Solo):</span>
        <span className={collapsed ? 'text-amber-400 font-bold' : 'text-emerald-400 font-bold'}>
          {collapsed ? 'COLLAPSED' : 'EXPANDED'}
        </span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-xl">
        <div
          onClick={() => setCollapsed(!collapsed)}
          className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex justify-between items-center cursor-pointer hover:bg-slate-850"
        >
          <div className="flex items-center gap-1.5 font-bold text-white text-[11px]">
            <Settings className="w-3.5 h-3.5 text-indigo-400" />
            <span>Advanced Motor Diagnostic Panel</span>
          </div>
          <button className="text-indigo-400 text-xs font-black">
            {collapsed ? '▼' : '▲'}
          </button>
        </div>
        {!collapsed && (
          <div className="p-3 space-y-1.5 bg-slate-950 text-[10px] text-slate-300 animate-in fade-in">
            <div className="flex justify-between">
              <span className="text-slate-400">Bus Voltage:</span>
              <span className="font-bold text-white">380.2 V AC</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Encoder Thermal Offset:</span>
              <span className="font-bold text-emerald-400">+0.014°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Phase Jitter:</span>
              <span className="font-bold text-indigo-300">0.012 ms</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// #123 Expandable Panel (Compact summary card expanding into full detail modal/surface)
export const LiveExpandablePanelLab = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Expandable Panel (Summary → Detail):</span>
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-2 py-0.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] font-bold flex items-center gap-1"
        >
          {expanded ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
          <span>{expanded ? 'Shrink' : 'Expand'}</span>
        </button>
      </div>
      <div
        className={`w-full bg-slate-950 border-2 border-indigo-500 rounded-xl transition-all duration-300 shadow-xl overflow-hidden p-3 ${
          expanded ? 'h-40 bg-indigo-950/30' : 'h-24'
        }`}
      >
        <div className="flex justify-between items-center border-b border-slate-800 pb-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-black text-white text-[11px]">Spindle Drive #01</span>
          </div>
          <span className="text-[10px] text-indigo-300 font-bold">12,500 RPM</span>
        </div>
        {expanded ? (
          <div className="mt-2 space-y-1.5 text-[10px] text-slate-300 animate-in fade-in">
            <div className="grid grid-cols-2 gap-2 bg-slate-900 p-2 rounded-lg border border-slate-800">
              <div>Torque: <span className="font-bold text-white">4.8 Nm</span></div>
              <div>Temp: <span className="font-bold text-amber-300">48.2°C</span></div>
              <div>Vibration: <span className="font-bold text-emerald-400">0.03 G</span></div>
              <div>Bearing Life: <span className="font-bold text-indigo-300">98%</span></div>
            </div>
            <div className="text-[9px] text-slate-400 text-center">Full wide telemetry plane loaded</div>
          </div>
        ) : (
          <div className="mt-2 text-[10px] text-slate-400 flex justify-between items-center">
            <span>Summary: Optimal Run State</span>
            <span className="text-indigo-400 text-[9px]">Click Expand for telemetry</span>
          </div>
        )}
      </div>
    </div>
  );
};

// #124 Disclosure (Lightweight inline progressive disclosure text/formula trigger)
export const LiveDisclosureLab = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Inline Disclosure (Formula/Help):</span>
        <span className="text-indigo-400 font-bold">{open ? 'Expanded' : 'Hidden'}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-[11px] text-slate-200 font-bold">Total Kinetic Torque: 18.4 Nm</span>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 text-[10px] text-indigo-400 hover:text-indigo-300 font-bold bg-indigo-950/60 px-2 py-1 rounded border border-indigo-500/40"
          >
            <ChevronRight className={`w-3 h-3 transition-transform ${open ? 'rotate-90' : ''}`} />
            <span>Show Calculation Formula</span>
          </button>
        </div>
        {open && (
          <div className="p-2.5 bg-slate-900 border-l-2 border-indigo-400 rounded-r-lg text-[10px] text-slate-300 space-y-1 animate-in fade-in">
            <div className="text-indigo-300 font-bold">τ = J · α + τ_load + τ_friction</div>
            <div className="text-slate-400 text-[9px]">J = Rotor Inertia (0.0042 kg·m²), α = Angular Accel (120 rad/s²)</div>
          </div>
        )}
      </div>
      <span className="text-[9px] text-slate-400 text-center">Lightest weight inline trigger for contextual formulas or explanations.</span>
    </div>
  );
};

// #125 Chevron (Angle bracket icon indicating expansion state)
export const LiveChevronLab = () => {
  const [angle, setAngle] = useState(0);

  const rotate = () => {
    setAngle((prev) => (prev + 90) % 360);
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Chevron Icon Angle (⌄/›):</span>
        <span className="text-indigo-400 font-bold">Rotation: {angle}°</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex items-center justify-between">
        <div className="space-y-1">
          <div className="text-[11px] font-bold text-white">Interactive Chevron Node</div>
          <div className="text-[9px] text-slate-400">
            {angle === 0 && '0°: Collapsed Right (›)'}
            {angle === 90 && '90°: Expanded Down (⌄)'}
            {angle === 180 && '180°: Inverted Up (⌃)'}
            {angle === 270 && '270°: Back Left (‹)'}
          </div>
        </div>
        <button
          onClick={rotate}
          className="w-10 h-10 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-lg transition"
        >
          <ChevronRight
            className="w-6 h-6 transition-transform duration-300"
            style={{ transform: `rotate(${angle}deg)` }}
          />
        </button>
      </div>
      <span className="text-[9px] text-slate-400 text-center">Click the button to rotate chevron through standard directional states.</span>
    </div>
  );
};

// #126 Caret (Solid filled triangle indicator ▲/▼)
export const LiveCaretLab = () => {
  const [dir, setDir] = useState<'down' | 'up'>('down');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Solid Caret (▲/▼):</span>
        <span className="text-emerald-400 font-bold">Direction: {dir.toUpperCase()}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex items-center justify-between">
        <div className="space-y-1">
          <div className="text-[11px] font-bold text-white">Dropdown Sort Column</div>
          <div className="text-[9px] text-slate-400">Solid polygon glyph (Caret vs thin Chevron)</div>
        </div>
        <button
          onClick={() => setDir(dir === 'down' ? 'up' : 'down')}
          className="px-3 py-1.5 bg-slate-900 border-2 border-indigo-400 rounded-lg text-indigo-300 hover:text-white flex items-center gap-1.5 font-bold"
        >
          <span>Sort Key</span>
          <span className="text-xs">{dir === 'down' ? '▼' : '▲'}</span>
        </button>
      </div>
    </div>
  );
};

// #127 Tree Node (Atomic tree unit with selection, icon & state)
export const LiveTreeNodeLab = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Tree Node Item:</span>
        <span className={selected ? 'text-emerald-400 font-bold' : 'text-slate-400 font-bold'}>
          {selected ? 'NODE SELECTED' : 'UNSELECTED'}
        </span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl space-y-2">
        <div
          onClick={() => setSelected(!selected)}
          className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer border transition ${
            selected
              ? 'bg-indigo-600/30 border-indigo-400 text-white shadow-lg'
              : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
          }`}
        >
          <span className="text-sm">⚙️</span>
          <div className="flex-1">
            <div className="font-bold text-[11px]">Servo_Driver_Axis_X.step</div>
            <div className="text-[8px] text-slate-400">Node ID: #ND-84920 | Size: 4.2MB</div>
          </div>
          {selected && <span className="text-xs text-emerald-400 font-bold">✓ Active</span>}
        </div>
      </div>
      <span className="text-[9px] text-slate-400 text-center">Atomic node encapsulates icon, text label, metadata and selected state.</span>
    </div>
  );
};

// #128 Parent Node (Branch folder node with child count & expander)
export const LiveParentNodeLab = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Parent Node (Folder Branch):</span>
        <span className="text-indigo-400 font-bold">{expanded ? '3 Children Visible' : 'Folded'}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2.5 shadow-xl space-y-1">
        <div
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-lg cursor-pointer hover:bg-slate-850"
        >
          <ChevronRight className={`w-4 h-4 text-indigo-400 transition-transform ${expanded ? 'rotate-90' : ''}`} />
          <Folder className="w-4 h-4 text-amber-400 fill-amber-400/30" />
          <span className="font-bold text-white text-[11px]">Factory_Line_A (Parent)</span>
          <span className="ml-auto text-[9px] bg-slate-800 text-indigo-300 px-1.5 py-0.5 rounded font-bold">3 items</span>
        </div>
        {expanded && (
          <div className="pl-6 space-y-1 text-[10px] text-slate-300 border-l-2 border-slate-800 ml-3">
            <div className="p-1 hover:bg-slate-900 rounded">• Gantry Robot #01</div>
            <div className="p-1 hover:bg-slate-900 rounded">• Conveyor Infeed</div>
            <div className="p-1 hover:bg-slate-900 rounded">• Optical Sorter</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #129 Child Node (Indented leaf/branch subordinate to parent)
export const LiveChildNodeLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Child Node Representation:</span>
        <span className="text-emerald-400 font-bold">Depth: Level 2</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl space-y-1.5">
        <div className="flex items-center gap-2 text-slate-400 text-[10px]">
          <span>📁 Parent: Gantry_Controller</span>
        </div>
        <div className="flex items-center gap-2 pl-6 bg-indigo-950/40 border-l-2 border-indigo-400 p-2 rounded-r-lg">
          <CornerDownRight className="w-3.5 h-3.5 text-indigo-400" />
          <FileCode className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-white font-bold text-[11px]">Child: Motor_X_PWM.c</span>
        </div>
      </div>
      <span className="text-[9px] text-slate-400 text-center">Subordinated to parent via visual indentation and branch relationship.</span>
    </div>
  );
};

// #130 Leaf Node (Terminal node with no expandable children)
export const LiveLeafNodeLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Leaf Node (Terminal Endpoint):</span>
        <span className="text-indigo-400 font-bold">No Children</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 flex items-center justify-center text-slate-600">•</div>
          <FileText className="w-4 h-4 text-sky-400" />
          <div>
            <div className="font-bold text-white text-[11px]">Thermistor_Calibration.json</div>
            <div className="text-[9px] text-slate-400">Terminal leaf document (no expand chevron)</div>
          </div>
        </div>
        <span className="text-[9px] bg-slate-900 border border-slate-700 px-1.5 py-0.5 rounded text-slate-400">LEAF</span>
      </div>
    </div>
  );
};

// #131 Indentation (Depth padding measurement per level)
export const LiveIndentationLab = () => {
  const [indentPx, setIndentPx] = useState(20);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Tree Indentation Scale:</span>
        <span className="text-indigo-400 font-bold">{indentPx}px per Level</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2.5 shadow-xl space-y-1">
        <div className="p-1 bg-slate-900 rounded font-bold text-slate-200 text-[10px]">Level 0: Factory Root</div>
        <div
          style={{ paddingLeft: `${indentPx}px` }}
          className="p-1 bg-slate-900/80 rounded text-indigo-300 text-[10px]"
        >
          Level 1: Assembly Line A
        </div>
        <div
          style={{ paddingLeft: `${indentPx * 2}px` }}
          className="p-1 bg-slate-900/60 rounded text-emerald-400 text-[10px]"
        >
          Level 2: Servo Station #04
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-slate-900">
          <span className="text-[9px] text-slate-400">Adjust Indent:</span>
          <div className="flex gap-1">
            {[12, 20, 32].map((px) => (
              <button
                key={px}
                onClick={() => setIndentPx(px)}
                className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                  indentPx === px ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400'
                }`}
              >
                {px}px
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// #132 Hierarchy Line (Tree connecting vertical and horizontal guide lines)
export const LiveHierarchyLineLab = () => {
  const [showLines, setShowLines] = useState(true);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Hierarchy Connecting Lines:</span>
        <button
          onClick={() => setShowLines(!showLines)}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
        >
          {showLines ? 'Hide Lines' : 'Show Lines'}
        </button>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl font-mono text-[10px]">
        <div className="font-bold text-white">📁 Root Controller</div>
        <div className="relative pl-4 mt-1 space-y-1">
          {showLines && (
            <div className="absolute left-1.5 top-0 bottom-2 w-0.5 bg-indigo-500/60" />
          )}
          <div className="relative flex items-center gap-1.5 text-slate-300">
            {showLines && <div className="w-2.5 h-0.5 bg-indigo-500/60 -ml-2.5" />}
            <span>├── ⚙️ Encoder Feedback</span>
          </div>
          <div className="relative flex items-center gap-1.5 text-slate-300">
            {showLines && <div className="w-2.5 h-0.5 bg-indigo-500/60 -ml-2.5" />}
            <span>└── ⚡ PWM Inverter Gate</span>
          </div>
        </div>
      </div>
      <span className="text-[9px] text-slate-400 text-center">Visual guide lines clearly anchor deep child nodes to their respective parents.</span>
    </div>
  );
};

// #133 Expander (Dedicated chevron/plus click target separate from label selection)
export const LiveExpanderLab = () => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Expander Hit Zone:</span>
        <span className="text-indigo-400 font-bold">
          Exp: {expanded ? 'YES' : 'NO'} | Sel: {selected ? 'YES' : 'NO'}
        </span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl space-y-2">
        <div
          className={`flex items-center gap-1.5 p-1 rounded-lg border transition ${
            selected ? 'bg-indigo-950 border-indigo-400' : 'bg-slate-900 border-slate-800'
          }`}
        >
          {/* Expander Box */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            className="w-6 h-6 rounded bg-slate-800 hover:bg-indigo-600 text-indigo-300 hover:text-white flex items-center justify-center font-bold text-xs"
            title="Click Expander Only"
          >
            {expanded ? '-' : '+'}
          </button>

          {/* Node Text */}
          <div
            onClick={() => setSelected(!selected)}
            className="flex-1 px-2 py-1 cursor-pointer hover:underline text-slate-200 text-[11px]"
          >
            Kinematics Package [Click to Select]
          </div>
        </div>
        {expanded && (
          <div className="p-2 bg-slate-900 rounded-lg text-[9px] text-slate-300 animate-in fade-in">
            • Sub-Item: Delta Robot 3-Axis Inverse Kinematics Core
          </div>
        )}
      </div>
      <span className="text-[9px] text-slate-400 text-center">Click [+] to toggle subtree without triggering node row selection.</span>
    </div>
  );
};

// #134 Collapse All (One-click collapse of all deep branches)
export const LiveCollapseAllLab = () => {
  const [state, setState] = useState({ f1: true, f2: true, f3: true });

  const collapseAll = () => setState({ f1: false, f2: false, f3: false });
  const expandAll = () => setState({ f1: true, f2: true, f3: true });

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Bulk Tree Controls:</span>
        <div className="flex gap-1">
          <button
            onClick={collapseAll}
            className="px-2 py-0.5 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 rounded text-[9px] font-bold flex items-center gap-1"
          >
            <ChevronsUp className="w-3 h-3 text-rose-400" />
            <span>Collapse All</span>
          </button>
          <button
            onClick={expandAll}
            className="px-2 py-0.5 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 rounded text-[9px] font-bold flex items-center gap-1"
          >
            <ChevronsDown className="w-3 h-3 text-emerald-400" />
            <span>Expand All</span>
          </button>
        </div>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2.5 shadow-xl space-y-1 text-[10px]">
        <div>
          <span className="font-bold text-white">📁 Line A {state.f1 ? '(-)' : '(+)'}</span>
          {state.f1 && <div className="pl-4 text-slate-400">• Motor 1, Motor 2</div>}
        </div>
        <div>
          <span className="font-bold text-white">📁 Line B {state.f2 ? '(-)' : '(+)'}</span>
          {state.f2 && <div className="pl-4 text-slate-400">• Valve Solenoid 1~4</div>}
        </div>
        <div>
          <span className="font-bold text-white">📁 Line C {state.f3 ? '(-)' : '(+)'}</span>
          {state.f3 && <div className="pl-4 text-slate-400">• Vision Inspection Cam</div>}
        </div>
      </div>
    </div>
  );
};

// #135 Expand All (Recursive full expansion to leaf endpoints)
export const LiveExpandAllLab = () => {
  const [allExpanded, setAllExpanded] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Expand All Recursion:</span>
        <button
          onClick={() => setAllExpanded(!allExpanded)}
          className="px-2 py-0.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] font-bold"
        >
          {allExpanded ? 'Reset Root' : 'Expand All (Deep)'}
        </button>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl font-mono text-[10px] space-y-1">
        <div className="font-black text-indigo-300">🏭 Gantry_Complex</div>
        {allExpanded ? (
          <div className="pl-3 space-y-1 text-slate-300 border-l border-slate-800 animate-in fade-in">
            <div>├── 📁 Electrical Cabinet</div>
            <div className="pl-4 text-slate-400">├── 📄 24V_PSU.step</div>
            <div className="pl-4 text-slate-400">└── 📄 Circuit_Breaker_16A</div>
            <div>└── 📁 Axis Motion Subsystem</div>
            <div className="pl-4 text-emerald-400">└── ⚙️ BallScrew_Lead_10mm</div>
          </div>
        ) : (
          <div className="text-slate-500 pl-3">[2 Folders Collapsed]</div>
        )}
      </div>
    </div>
  );
};

// #136 Drill Down (Deep dive into child hierarchy view)
export const LiveDrillDownLab = () => {
  const [level, setLevel] = useState<'factory' | 'line' | 'motor'>('factory');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Drill Down (Context Dive):</span>
        <span className="text-indigo-400 font-bold">Scope: {level.toUpperCase()}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex flex-col justify-between h-32">
        {level === 'factory' && (
          <div>
            <div className="text-[11px] font-bold text-white">🏭 Mega Plant #01 (Overview)</div>
            <div className="text-[10px] text-slate-400 mt-1">Total Output: 14,200 units/day</div>
            <button
              onClick={() => setLevel('line')}
              className="mt-2 px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] font-bold flex items-center gap-1"
            >
              <span>Drill Down to Line A</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        )}
        {level === 'line' && (
          <div>
            <div className="text-[11px] font-bold text-indigo-300">⚙️ Line A (Robotics Cell)</div>
            <div className="text-[10px] text-slate-400 mt-1">4 Robots Active | Cycle Time: 12.4s</div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setLevel('factory')}
                className="px-2 py-0.5 bg-slate-900 border border-slate-700 text-slate-300 rounded text-[9px]"
              >
                ← Back
              </button>
              <button
                onClick={() => setLevel('motor')}
                className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] font-bold flex items-center gap-1"
              >
                <span>Drill Down to Motor X</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}
        {level === 'motor' && (
          <div>
            <div className="text-[11px] font-bold text-emerald-400">🩺 Motor X Telemetry (Lowest Level)</div>
            <div className="text-[10px] text-slate-300 mt-1">RPM: 4,500 | Current: 14.2A | Temp: 42°C</div>
            <button
              onClick={() => setLevel('line')}
              className="mt-2 px-2 py-0.5 bg-slate-900 border border-slate-700 text-slate-300 rounded text-[9px]"
            >
              ← Drill Up to Line A
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// #137 Drill Up (Ascend back to parent summary perspective)
export const LiveDrillUpLab = () => {
  const [depth, setDepth] = useState(3);

  const levels = ['Root Plant', 'Gantry Line', 'Servo Axis'];

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Drill Up (Ascension):</span>
        <span className="text-emerald-400 font-bold">{levels[depth - 1]}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex items-center justify-between">
        <div>
          <div className="text-[11px] font-black text-white">{levels[depth - 1]} View</div>
          <div className="text-[9px] text-slate-400">Depth Level {depth} of 3</div>
        </div>
        <button
          disabled={depth === 1}
          onClick={() => setDepth(depth - 1)}
          className="px-3 py-1.5 bg-indigo-600 disabled:opacity-30 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Drill Up</span>
        </button>
      </div>
    </div>
  );
};

// #138 Nested List (Lightweight ordered/unordered indented hierarchy)
export const LiveNestedListLab = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Semantic Nested List:</span>
        <span className="text-indigo-400 font-bold">ul &gt; li &gt; ol</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl text-[10px] text-slate-300 space-y-1">
        <div className="font-bold text-white">• 1. Calibration Protocol</div>
        <div className="pl-4 space-y-0.5 text-slate-400">
          <div>a. Zero optical homing switches</div>
          <div>b. Measure backlash offset (0.005mm)</div>
          <div className="pl-4 text-indigo-300">i. Check lead-screw pre-load</div>
        </div>
        <div className="font-bold text-white">• 2. Burn-in Diagnostic</div>
      </div>
    </div>
  );
};

// #139 Outline View (Document or CAD model structural outline)
export const LiveOutlineViewLab = () => {
  const [activeHeading, setActiveHeading] = useState('Specs');

  const headings = [
    { title: '1. Abstract & Scope', level: 1 },
    { title: '2. Hardware Specifications', level: 1 },
    { title: '2.1 Kinematic Calculations', level: 2 },
    { title: '2.2 Motor Power Requirements', level: 2 },
    { title: '3. Electrical Pinouts', level: 1 },
  ];

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Outline View (CAD/Doc):</span>
        <span className="text-indigo-400 font-bold">Focus: {activeHeading}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-2.5 shadow-xl space-y-1">
        {headings.map((h) => (
          <div
            key={h.title}
            onClick={() => setActiveHeading(h.title)}
            style={{ paddingLeft: `${(h.level - 1) * 16}px` }}
            className={`p-1 rounded cursor-pointer text-[10px] transition ${
              activeHeading === h.title
                ? 'bg-indigo-600 text-white font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            {h.level === 1 ? '§ ' : '• '}
            {h.title}
          </div>
        ))}
      </div>
    </div>
  );
};

// #140 Hierarchy Breadcrumb (Node trail synced to selected tree depth)
export const LiveHierarchyBreadcrumbLab = () => {
  const [trail, setTrail] = useState(['Factory 1', 'Line 4', 'Gantry Z', 'Encoder']);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Hierarchy Breadcrumb Trail:</span>
        <span className="text-emerald-400 font-bold">Active Depth: {trail.length}</span>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex items-center gap-1.5 flex-wrap">
        {trail.map((node, i) => (
          <React.Fragment key={node}>
            <button
              onClick={() => setTrail(trail.slice(0, i + 1))}
              className={`text-[10px] font-bold ${
                i === trail.length - 1
                  ? 'text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {node}
            </button>
            {i < trail.length - 1 && <span className="text-slate-600">/</span>}
          </React.Fragment>
        ))}
      </div>
      <span className="text-[9px] text-slate-400 text-center">Click ancestor crumbs to navigate up the hierarchical subtree.</span>
    </div>
  );
};
