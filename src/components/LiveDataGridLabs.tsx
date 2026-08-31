import React, { useState } from 'react';
import { 
  Table, Grid, Edit3, CheckSquare, Square, Pin, 
  Eye, EyeOff, Maximize2, Minimize2, Check, AlertCircle, 
  Trash2, Copy, Plus, Calculator, ChevronDown, ChevronRight,
  TrendingUp, Layers, Sliders, ArrowUpDown, ShieldAlert, Sparkles,
  Filter, ArrowUp, ArrowDown, RotateCcw, Save, Search, Move,
  SlidersHorizontal, Split, Grid3X3, CornerDownRight, CheckCircle2
} from 'lucide-react';

/**
 * ----------------------------------------------------------------------------
 * Category 17: Table · Grid · High-Capacity Data Processing (#331 ~ #360) Dedicated 1:1 Labs
 * High-contrast, Light/Dark adaptive UI/UX Architecture Workbench
 * ----------------------------------------------------------------------------
 */

// #331 Editable Data Grid - Inline cell editing with keyboard commit
export const LiveEditableDataGridLab: React.FC = () => {
  const [data, setData] = useState([
    { id: 1, part: 'Servo Motor A4', rpm: '3,000', temp: '42' },
    { id: 2, part: 'Linear Actuator', rpm: '1,500', temp: '38' },
  ]);
  const [editing, setEditing] = useState<{ id: number; field: string } | null>(null);

  const updateVal = (id: number, field: string, val: string) => {
    setData(data.map(d => d.id === id ? { ...d, [field]: val } : d));
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#331 EDITABLE DATA GRID</span>
        <span className="text-[10px] text-slate-500">Double Click to Edit</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden text-[9px]">
        <div className="grid grid-cols-3 bg-slate-100 dark:bg-slate-800 p-1.5 font-bold border-b text-slate-600 dark:text-slate-300">
          <span>Component</span>
          <span>Target RPM</span>
          <span>Temp (°C)</span>
        </div>
        {data.map((row) => (
          <div key={row.id} className="grid grid-cols-3 p-1.5 border-b last:border-0 items-center">
            <span className="font-bold text-indigo-600">{row.part}</span>
            {editing?.id === row.id && editing?.field === 'rpm' ? (
              <input
                autoFocus
                value={row.rpm}
                onBlur={() => setEditing(null)}
                onChange={(e) => updateVal(row.id, 'rpm', e.target.value)}
                className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-500 rounded px-1 text-[9px] outline-none"
              />
            ) : (
              <span onClick={() => setEditing({ id: row.id, field: 'rpm' })} className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 p-0.5 rounded">
                {row.rpm} ✎
              </span>
            )}
            <span>{row.temp}°C</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #332 Spreadsheet Grid - Excel-style formula bar and active cell box
export const LiveSpreadsheetGridLab: React.FC = () => {
  const [activeCell, setActiveCell] = useState('B2');
  const [formulaVal, setFormulaVal] = useState('=SUM(B1:B10)');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#332 SPREADSHEET GRID (EXCEL)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Formula Mode</span>
      </div>

      {/* Formula Bar */}
      <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded p-1 text-[9px]">
        <span className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded font-bold">{activeCell}</span>
        <span className="font-bold text-indigo-500">fx</span>
        <input
          value={formulaVal}
          onChange={(e) => setFormulaVal(e.target.value)}
          className="flex-1 bg-transparent outline-none font-mono"
        />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden text-[8px] text-center">
        <div className="grid grid-cols-4 bg-slate-100 dark:bg-slate-800 font-bold border-b">
          <span className="p-1 border-r">#</span>
          <span className="p-1 border-r">A</span>
          <span className="p-1 border-r">B</span>
          <span className="p-1">C</span>
        </div>
        <div className="grid grid-cols-4 border-b">
          <span className="p-1 bg-slate-50 dark:bg-slate-950 border-r font-bold">1</span>
          <span className="p-1 border-r">120</span>
          <span className="p-1 border-r">340</span>
          <span className="p-1">500</span>
        </div>
        <div className="grid grid-cols-4 border-b">
          <span className="p-1 bg-slate-50 dark:bg-slate-950 border-r font-bold">2</span>
          <span className="p-1 border-r">450</span>
          <span className="p-1 border-2 border-indigo-500 bg-indigo-50/40 dark:bg-indigo-950/60 font-black text-indigo-600">890</span>
          <span className="p-1">1,200</span>
        </div>
      </div>
    </div>
  );
};

// #333 Cell Editor - Specialized editor dropdown/picker per data type
export const LiveCellEditorLab: React.FC = () => {
  const [status, setStatus] = useState('Operating');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#333 CELL EDITOR</span>
        <span className="text-[10px] text-slate-500">Custom Type Editor</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2.5 flex items-center justify-between text-[9px]">
        <div>
          <span className="text-slate-500 block">Active Status Cell:</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">Machine #04</span>
        </div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-indigo-50 dark:bg-indigo-950 border-2 border-indigo-500 rounded px-2 py-1 font-bold text-indigo-600 outline-none"
        >
          <option value="Operating">🟢 Operating</option>
          <option value="Maintenance">🟡 Maintenance</option>
          <option value="Emergency Stop">🔴 Emergency Stop</option>
        </select>
      </div>
    </div>
  );
};

// #334 Cell Renderer - Visual gauge & badge custom renderer
export const LiveCellRendererLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#334 CELL RENDERER</span>
        <span className="text-[10px] text-emerald-600 font-bold">Graphic Rendering</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 space-y-2 text-[9px]">
        <div className="flex items-center justify-between border-b pb-1.5">
          <span className="font-bold">CPU Load:</span>
          <div className="w-32 bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden flex">
            <div className="bg-emerald-500 h-full w-[75%]" />
          </div>
          <span className="font-bold text-emerald-600">75%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold">Torque Limit:</span>
          <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950 text-amber-600 rounded font-bold border border-amber-400">
            92.4 Nm [CRITICAL]
          </span>
        </div>
      </div>
    </div>
  );
};

// #335 Row Selection (Single/Multi) - Selection modes and active highlight
export const LiveRowSelectionLab: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState(1);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#335 ROW SELECTION</span>
        <span className="text-[10px] text-indigo-600 font-bold">Row #{selectedRow} Active</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden text-[9px]">
        {[1, 2, 3].map((r) => (
          <div
            key={r}
            onClick={() => setSelectedRow(r)}
            className={`p-2 border-b last:border-0 flex items-center justify-between cursor-pointer transition-colors ${
              selectedRow === r ? 'bg-indigo-600 text-white font-bold' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <span>Telemetry Feed #{r} (Inverter Drive)</span>
            <span>{selectedRow === r ? 'Selected ✓' : 'Click to select'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #336 Cell Selection (Range) - Multi-cell bounding rectangle selection
export const LiveCellRangeSelectionLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#336 CELL RANGE SELECTION</span>
        <span className="text-[10px] text-indigo-600 font-bold">Range [B1:C2] (4 Cells)</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-1 grid grid-cols-3 gap-1 text-center text-[8px]">
        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded">A1: 10</div>
        <div className="p-2 bg-indigo-500 text-white font-bold rounded ring-2 ring-indigo-400">B1: 20</div>
        <div className="p-2 bg-indigo-500 text-white font-bold rounded ring-2 ring-indigo-400">C1: 30</div>
        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded">A2: 40</div>
        <div className="p-2 bg-indigo-500 text-white font-bold rounded ring-2 ring-indigo-400">B2: 50</div>
        <div className="p-2 bg-indigo-500 text-white font-bold rounded ring-2 ring-indigo-400">C2: 60</div>
      </div>
    </div>
  );
};

// #337 Multi-Row Selection - Batch checkbox selection with select all
export const LiveMultiRowSelectionLab: React.FC = () => {
  const [selected, setSelected] = useState<number[]>([1, 3]);

  const toggle = (id: number) => {
    setSelected(selected.includes(id) ? selected.filter(x => x !== id) : [...selected, id]);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#337 MULTI-ROW SELECTION</span>
        <span className="text-[10px] text-indigo-600 font-bold">{selected.length} Selected</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden text-[9px]">
        {[1, 2, 3].map((id) => (
          <div key={id} onClick={() => toggle(id)} className="p-2 border-b last:border-0 flex items-center gap-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
            {selected.includes(id) ? <CheckSquare className="w-3.5 h-3.5 text-indigo-600" /> : <Square className="w-3.5 h-3.5 text-slate-400" />}
            <span className={selected.includes(id) ? 'font-bold text-indigo-600' : ''}>Machine Module #{id}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #338 Pinned Column (Freeze) - Fixed left pinned column during horizontal overflow
export const LivePinnedColumnLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#338 PINNED COLUMN (FREEZE)</span>
        <span className="text-[10px] text-slate-500">Pinned Left 📌</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex overflow-x-auto text-[8px]">
        {/* Pinned Left */}
        <div className="w-24 bg-indigo-50 dark:bg-indigo-950/80 border-r-2 border-indigo-500 p-1.5 shrink-0 font-bold text-indigo-600">
          <div>📌 Part ID</div>
          <div className="mt-1">AX-8490-Z</div>
        </div>
        {/* Scrollable Columns */}
        <div className="flex p-1.5 gap-4 shrink-0">
          <div><span>Voltage: 480V</span><div className="mt-1">Phase: 3P</div></div>
          <div><span>Load: 88%</span><div className="mt-1">Amp: 14.2A</div></div>
          <div><span>Temp: 44°C</span><div className="mt-1">RPM: 12k</div></div>
        </div>
      </div>
    </div>
  );
};

// #339 Pinned Row (Top/Bottom) - Sticky total row anchored at the bottom
export const LivePinnedRowLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#339 PINNED ROW (SUMMARY)</span>
        <span className="text-[10px] text-emerald-600 font-bold">Bottom Pinned</span>
      </div>

      <div className="h-24 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex flex-col justify-between overflow-hidden text-[8px]">
        <div className="p-1 space-y-1">
          <div className="flex justify-between text-slate-500"><span>Spindle #1:</span><span>$1,400</span></div>
          <div className="flex justify-between text-slate-500"><span>Servo #2:</span><span>$2,200</span></div>
        </div>
        <div className="bg-slate-900 text-white p-1.5 flex justify-between font-bold border-t border-indigo-400">
          <span>📌 TOTAL SUMMARY (PINNED)</span>
          <span className="text-emerald-400">$3,600</span>
        </div>
      </div>
    </div>
  );
};

// #340 Sticky Table Header - Table header staying fixed during scroll
export const LiveStickyTableHeaderLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#340 STICKY TABLE HEADER</span>
        <span className="text-[10px] text-indigo-600 font-bold">sticky top-0</span>
      </div>

      <div className="h-24 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-y-auto text-[8px]">
        <div className="sticky top-0 bg-indigo-600 text-white p-1.5 font-bold flex justify-between shadow">
          <span>Timestamp</span>
          <span>Event Code</span>
          <span>Status</span>
        </div>
        <div className="p-1.5 space-y-1 text-slate-600 dark:text-slate-400">
          <div className="flex justify-between border-b pb-0.5"><span>10:00:01</span><span>E-104</span><span>PASS</span></div>
          <div className="flex justify-between border-b pb-0.5"><span>10:00:02</span><span>E-105</span><span>PASS</span></div>
          <div className="flex justify-between border-b pb-0.5"><span>10:00:03</span><span>E-106</span><span>WARN</span></div>
          <div className="flex justify-between"><span>10:00:04</span><span>E-107</span><span>PASS</span></div>
        </div>
      </div>
    </div>
  );
};

// #341 Multi-Level Header - Nested stacked headers grouping columns
export const LiveMultiLevelHeaderLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#341 MULTI-LEVEL HEADER</span>
        <span className="text-[10px] text-slate-500">2-Tier Matrix</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden text-[8px] text-center">
        {/* Tier 1 Header */}
        <div className="grid grid-cols-3 bg-slate-200 dark:bg-slate-800 font-bold border-b">
          <span className="border-r p-1">Item</span>
          <span className="col-span-2 p-1 bg-indigo-600 text-white font-black">Electrical Specifications</span>
        </div>
        {/* Tier 2 Header */}
        <div className="grid grid-cols-3 bg-slate-100 dark:bg-slate-850 border-b text-slate-600 dark:text-slate-300 font-bold">
          <span className="border-r p-1">Part</span>
          <span className="border-r p-1">Voltage (V)</span>
          <span className="p-1">Current (A)</span>
        </div>
      </div>
    </div>
  );
};

// #342 Grouped Column - Visually linked adjacent column cluster
export const LiveGroupedColumnLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#342 GROUPED COLUMNS</span>
        <span className="text-[10px] text-indigo-600 font-bold">Thermal Group</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-1.5 flex gap-1 text-[8px] text-center">
        <div className="w-1/3 p-1.5 bg-slate-100 dark:bg-slate-800 rounded font-bold">Part ID</div>
        <div className="flex-1 p-1 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-400 rounded flex flex-col justify-center">
          <span className="font-bold text-indigo-600 mb-0.5">GROUP: Thermal Telemetry</span>
          <div className="flex justify-around text-slate-500">
            <span>Inlet: 32°C</span>
            <span>Outlet: 45°C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// #343 Column Visibility - Dynamic toggle showing/hiding specific columns
export const LiveColumnVisibilityLab: React.FC = () => {
  const [showTemp, setShowTemp] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#343 COLUMN VISIBILITY</span>
        <button onClick={() => setShowTemp(!showTemp)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold flex items-center gap-1">
          {showTemp ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
          {showTemp ? 'Hide Temp' : 'Show Temp'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex justify-between text-[9px]">
        <div className="font-bold text-indigo-600">Spindle Motor M1</div>
        <div>RPM: 12,000</div>
        {showTemp && <div className="text-rose-600 font-bold animate-fade-in">Temp: 48°C</div>}
      </div>
    </div>
  );
};

// #344 Column Chooser - Modal/Dropdown column selection matrix
export const LiveColumnChooserLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#344 COLUMN CHOOSER</span>
        <span className="text-[10px] text-slate-500">Pick Columns</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 space-y-1 text-[8px]">
        <div className="font-bold text-slate-500 mb-1">Visible Column Checklist:</div>
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input type="checkbox" defaultChecked className="accent-indigo-600" />
          <span>Part Number (Mandatory)</span>
        </label>
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input type="checkbox" defaultChecked className="accent-indigo-600" />
          <span>Operating Voltage</span>
        </label>
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input type="checkbox" className="accent-indigo-600" />
          <span>Supplier Warehouse Code</span>
        </label>
      </div>
    </div>
  );
};

// #345 Column Pinning - Pin column directly from column header menu
export const LiveColumnPinningLab: React.FC = () => {
  const [pinned, setPinned] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#345 COLUMN PINNING</span>
        <button onClick={() => setPinned(!pinned)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold flex items-center gap-1">
          <Pin className="w-3 h-3" /> {pinned ? 'Unpin Column' : 'Pin to Left'}
        </button>
      </div>

      <div className="p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex items-center justify-between text-[9px]">
        <span className="font-bold">Column: [Motor Type]</span>
        <span className={`px-2 py-0.5 rounded font-bold ${pinned ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>
          {pinned ? '📌 Pinned Left' : 'Unpinned'}
        </span>
      </div>
    </div>
  );
};

// #346 Column Autosize - Auto adjust column width to widest cell contents
export const LiveColumnAutosizeLab: React.FC = () => {
  const [width, setWidth] = useState(140);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#346 COLUMN AUTOSIZE</span>
        <button onClick={() => setWidth(width === 140 ? 220 : 140)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          {width === 140 ? 'Autosize to Content ➔' : 'Reset'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden text-[8px]">
        <div style={{ width: `${width}px` }} className="bg-indigo-50 dark:bg-indigo-950 p-2 border-r transition-all font-bold truncate text-indigo-600">
          Mitsubishi-Electric-HG-SR352B-AC-Servo
        </div>
      </div>
    </div>
  );
};

// #347 Fit Columns to View - 100% full width distribution with zero scroll
export const LiveFitColumnsToViewLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#347 FIT COLUMNS TO VIEW</span>
        <span className="text-[10px] text-emerald-600 font-bold">100% Fill Viewport</span>
      </div>

      <div className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex text-[8px] text-center font-bold">
        <div className="flex-1 p-2 border-r bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600">Col 1 (33%)</div>
        <div className="flex-1 p-2 border-r bg-slate-50 dark:bg-slate-950">Col 2 (33%)</div>
        <div className="flex-1 p-2 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600">Col 3 (34%)</div>
      </div>
    </div>
  );
};

// #348 Row Height Auto - Height stretches dynamically for multiline text
export const LiveRowHeightAutoLab: React.FC = () => {
  const [multiline, setMultiline] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#348 ROW HEIGHT AUTO</span>
        <button onClick={() => setMultiline(!multiline)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          {multiline ? 'Short Text' : 'Insert Multiline Log'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 text-[9px] transition-all">
        <div className="font-bold text-indigo-600">Audit Description Row:</div>
        <div className="text-slate-600 dark:text-slate-400 mt-1">
          {multiline
            ? 'Emergency maintenance completed on Spindle Drive #2. Replaced ball bearings, lubricated seal gasket, re-calibrated zero-point origin.'
            : 'Standard operational inspection passed.'}
        </div>
      </div>
    </div>
  );
};

// #349 Dense Table - Compact 28px row height for high data density
export const LiveDenseTableLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#349 DENSE TABLE (HIGH-DENSITY)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Height 24px/Row</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden text-[8px]">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-6 px-2 flex items-center justify-between border-b last:border-0 hover:bg-slate-100 dark:hover:bg-slate-800">
            <span>R#{i} | Inverter-Drive-0{i}</span>
            <span className="font-bold text-emerald-600">OK (48.2Hz)</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #350 Comfortable Table - Relaxed 48px row height for touch usability
export const LiveComfortableTableLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#350 COMFORTABLE TABLE</span>
        <span className="text-[10px] text-indigo-600 font-bold">Height 48px/Row</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden text-[9px]">
        <div className="h-12 px-3 flex items-center justify-between border-b">
          <div>
            <div className="font-bold text-indigo-600">Spindle Servo Drive</div>
            <div className="text-[8px] text-slate-400">ID: HG-SR352B</div>
          </div>
          <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 rounded font-bold">Active</span>
        </div>
      </div>
    </div>
  );
};

// #351 Zebra Striping - Alternating light/dark row backgrounds
export const LiveZebraStripingLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#351 ZEBRA STRIPING</span>
        <span className="text-[10px] text-slate-500">Alternating Rows</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden text-[8px]">
        <div className="p-1.5 bg-slate-100 dark:bg-slate-800/80 font-bold">Row 1: Odd Background (Light Gray)</div>
        <div className="p-1.5 bg-white dark:bg-slate-900">Row 2: Even Background (Pure White)</div>
        <div className="p-1.5 bg-slate-100 dark:bg-slate-800/80 font-bold">Row 3: Odd Background (Light Gray)</div>
      </div>
    </div>
  );
};

// #352 Hover Row Highlight - Smooth highlight bar following the mouse
export const LiveHoverRowHighlightLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#352 HOVER ROW HIGHLIGHT</span>
        <span className="text-[10px] text-slate-500">Hover Cursor</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden text-[9px]">
        {[1, 2, 3].map((r) => (
          <div key={r} className="p-2 border-b last:border-0 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 cursor-pointer transition-colors">
            Hover over this Machine Row #{r}
          </div>
        ))}
      </div>
    </div>
  );
};

// #353 Active Cell (Focused) - 2px blue boundary around the single focused cell
export const LiveActiveCellLab: React.FC = () => {
  const [cell, setCell] = useState('B2');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#353 ACTIVE CELL (FOCUSED)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Active: {cell}</span>
      </div>

      <div className="grid grid-cols-3 gap-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-1.5 text-center text-[8px]">
        {['A1', 'B1', 'C1', 'A2', 'B2', 'C2'].map((c) => (
          <div
            key={c}
            onClick={() => setCell(c)}
            className={`p-2 rounded cursor-pointer ${
              cell === c ? 'border-2 border-indigo-500 bg-indigo-50 dark:bg-indigo-950/80 font-black text-indigo-600 ring-2 ring-indigo-300' : 'bg-slate-50 dark:bg-slate-800'
            }`}
          >
            Cell {c}
          </div>
        ))}
      </div>
    </div>
  );
};

// #354 Dirty Cell Indicator - Small corner marker signaling unsaved modification
export const LiveDirtyCellLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#354 DIRTY CELL INDICATOR</span>
        <span className="text-[10px] text-amber-500 font-bold">▲ Modified</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-3 flex justify-around text-[9px]">
        <div className="p-2 border rounded bg-slate-50 dark:bg-slate-950">Original: 1,200 RPM</div>
        <div className="relative p-2 border-2 border-amber-400 bg-amber-50 dark:bg-amber-950/50 rounded font-bold text-amber-800 dark:text-amber-200">
          <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-amber-500 rounded-bl" />
          Edited: 1,800 RPM (Dirty)
        </div>
      </div>
    </div>
  );
};

// #355 Validation Cell - Red stroke and inline tooltip for invalid input
export const LiveValidationCellLab: React.FC = () => {
  const [val, setVal] = useState('99999');
  const isErr = Number(val) > 20000;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#355 VALIDATION CELL</span>
        <span className={`text-[10px] font-bold ${isErr ? 'text-rose-600' : 'text-emerald-600'}`}>
          {isErr ? '⚠ Validation Error' : 'Valid'}
        </span>
      </div>

      <div className="space-y-1">
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={`w-full p-2 rounded text-xs font-bold outline-none border-2 ${
            isErr ? 'border-rose-500 bg-rose-50 dark:bg-rose-950 text-rose-600' : 'border-slate-300'
          }`}
        />
        {isErr && <div className="text-[8px] text-rose-600 font-bold">RPM cannot exceed 20,000 max motor rating!</div>}
      </div>
    </div>
  );
};

// #356 Computed Column - Dynamic calculation from other columns [Qty * Price]
export const LiveComputedColumnLab: React.FC = () => {
  const [qty, setQty] = useState(4);
  const price = 250;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#356 COMPUTED COLUMN</span>
        <span className="text-[10px] text-emerald-600 font-bold">[Qty × Unit Price]</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-between text-[9px]">
        <div>
          <span className="text-slate-500">Qty: </span>
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="w-10 bg-indigo-50 dark:bg-indigo-950 border rounded px-1 font-bold"
          />
        </div>
        <div>Price: ${price}</div>
        <div className="font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded border border-indigo-400">
          Total: ${qty * price}
        </div>
      </div>
    </div>
  );
};

// #357 Aggregate Row - SUM, AVG, MIN, MAX summary computation
export const LiveAggregateRowLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#357 AGGREGATE ROW (SUM/AVG)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Live Aggregation</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden text-[8px]">
        <div className="p-1 border-b flex justify-between"><span>Part 1: 12 kW</span><span>Part 2: 18 kW</span></div>
        <div className="bg-slate-900 text-white p-1.5 flex justify-between font-bold">
          <span>SUM: 30 kW</span>
          <span className="text-emerald-400">AVG: 15 kW</span>
        </div>
      </div>
    </div>
  );
};

// #358 Group Row - Category expandable group separator
export const LiveGroupRowLab: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#358 GROUP ROW</span>
        <span className="text-[10px] text-slate-500">Category Partition</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden text-[9px]">
        <button onClick={() => setOpen(!open)} className="w-full bg-slate-200 dark:bg-slate-800 p-1.5 font-bold flex items-center gap-1.5 text-left">
          {open ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          <span>CATEGORY: Servo Drives (2 Items)</span>
        </button>
        {open && (
          <div className="p-2 space-y-1 text-[8px] bg-slate-50 dark:bg-slate-950">
            <div>- HG-SR352B (3.5kW)</div>
            <div>- HG-KR13 (100W)</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #359 Row Detail (Master-Detail) - Expandable sub-table nested inside row
export const LiveRowDetailLab: React.FC = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#359 ROW DETAIL (EXPANDABLE)</span>
        <button onClick={() => setExpanded(!expanded)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          {expanded ? 'Collapse Detail' : 'Expand Detail'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden text-[8px]">
        <div className="p-1.5 flex justify-between font-bold bg-slate-100 dark:bg-slate-800">
          <span>Row #1: Inverter Subsystem</span>
          <span>Status: Normal</span>
        </div>
        {expanded && (
          <div className="p-2 bg-indigo-50 dark:bg-indigo-950/40 border-t space-y-1">
            <div className="font-bold text-indigo-600">Sub-Component Breakdown:</div>
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>- IGBT Module: 98% Life</span>
              <span>- Cooling Fan: 3,200 RPM</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// #360 Inline Row Actions - Edit, clone, delete quick action bar per row
export const LiveInlineRowActionsLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#360 INLINE ROW ACTIONS</span>
        <span className="text-[10px] text-slate-500">Quick Actions</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-between text-[9px]">
        <span className="font-bold">Part #8490-AX</span>
        <div className="flex gap-1">
          <button className="p-1 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white rounded border">
            <Edit3 className="w-3 h-3" />
          </button>
          <button className="p-1 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white rounded border">
            <Copy className="w-3 h-3" />
          </button>
          <button className="p-1 bg-slate-100 dark:bg-slate-800 hover:bg-rose-600 hover:text-white rounded border text-rose-500">
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Category 17 Advanced Enterprise Data Grid Labs (#641 ~ #646)
// ============================================================================

// #641 Header Filter Toolbox (Multi-Facet Column Popover)
export const LiveHeaderFilterToolboxLab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'sort' | 'values' | 'condition'>('values');
  const [sortOrder, setSortOrder] = useState<'none' | 'asc' | 'desc'>('asc');
  const [searchVal, setSearchVal] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>(['Sensor Alpha', 'Inverter Beta', 'Relay Gamma']);
  const [conditionOp, setConditionOp] = useState('contains');
  const [conditionVal, setConditionVal] = useState('');

  const allAvailableItems = ['Sensor Alpha', 'Inverter Beta', 'Relay Gamma', 'Actuator Delta', 'Switch Epsilon'];

  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const filteredItems = allAvailableItems.filter(i => 
    i.toLowerCase().includes(searchVal.toLowerCase())
  );

  return (
    <div className="w-full max-w-lg bg-slate-100 dark:bg-slate-950 border-2 border-indigo-500/80 rounded-2xl p-4 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-xl">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-1.5 font-black text-indigo-600 dark:text-indigo-400">
          <Filter className="w-4 h-4" />
          <span>#641 HEADER FILTER TOOLBOX</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="px-2 py-0.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-[10px] font-bold flex items-center gap-1"
        >
          <SlidersHorizontal className="w-3 h-3" />
          {isOpen ? 'Close Toolbox' : 'Open Toolbox'}
        </button>
      </div>

      {/* Simulated Grid Column Header with Toolbox Trigger */}
      <div className="relative">
        <div className="grid grid-cols-3 bg-slate-200 dark:bg-slate-800 p-2 rounded-lg font-bold text-[10px] text-slate-700 dark:text-slate-200 items-center border border-slate-300 dark:border-slate-700">
          <div className="flex items-center justify-between pr-2 border-r border-slate-300 dark:border-slate-700">
            <span>Model Name</span>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1 rounded transition-colors ${isOpen ? 'bg-indigo-600 text-white' : 'bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-indigo-500 hover:text-white'}`}
            >
              <Filter className="w-3 h-3" />
            </button>
          </div>
          <span className="px-2 border-r border-slate-300 dark:border-slate-700">Batch Code</span>
          <span className="px-2">Operating Temp</span>
        </div>

        {/* Dropdown Floating Toolbox Popover */}
        {isOpen && (
          <div className="absolute top-10 left-0 w-72 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl shadow-2xl z-30 p-3 flex flex-col gap-2.5 animate-in fade-in zoom-in-95 duration-100">
            {/* Popover Header & Tab Navigation */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <span className="text-[10px] font-bold text-slate-500">Column: Model Name</span>
              <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded text-[9px] font-bold">
                <button 
                  onClick={() => setActiveTab('sort')}
                  className={`px-1.5 py-0.5 rounded ${activeTab === 'sort' ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  Sort
                </button>
                <button 
                  onClick={() => setActiveTab('values')}
                  className={`px-1.5 py-0.5 rounded ${activeTab === 'values' ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  Values ({selectedItems.length})
                </button>
                <button 
                  onClick={() => setActiveTab('condition')}
                  className={`px-1.5 py-0.5 rounded ${activeTab === 'condition' ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  Condition
                </button>
              </div>
            </div>

            {/* Tab 1: Sort Section */}
            {activeTab === 'sort' && (
              <div className="flex flex-col gap-1.5 py-1 text-[10px]">
                <label className="flex items-center gap-2 p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                  <input 
                    type="radio" 
                    name="sort" 
                    checked={sortOrder === 'asc'} 
                    onChange={() => setSortOrder('asc')} 
                    className="accent-indigo-600"
                  />
                  <ArrowUp className="w-3 h-3 text-indigo-500" />
                  <span>Sort Ascending (A ➔ Z)</span>
                </label>
                <label className="flex items-center gap-2 p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                  <input 
                    type="radio" 
                    name="sort" 
                    checked={sortOrder === 'desc'} 
                    onChange={() => setSortOrder('desc')} 
                    className="accent-indigo-600"
                  />
                  <ArrowDown className="w-3 h-3 text-indigo-500" />
                  <span>Sort Descending (Z ➔ A)</span>
                </label>
                <label className="flex items-center gap-2 p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                  <input 
                    type="radio" 
                    name="sort" 
                    checked={sortOrder === 'none'} 
                    onChange={() => setSortOrder('none')} 
                    className="accent-indigo-600"
                  />
                  <RotateCcw className="w-3 h-3 text-slate-400" />
                  <span>Clear Sort Order</span>
                </label>
              </div>
            )}

            {/* Tab 2: Unique Values Filter Section */}
            {activeTab === 'values' && (
              <div className="flex flex-col gap-2 py-1 text-[10px]">
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded border border-slate-300 dark:border-slate-700">
                  <Search className="w-3 h-3 text-slate-400" />
                  <input 
                    placeholder="Search values..." 
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                    className="bg-transparent outline-none flex-1 text-[9px]"
                  />
                </div>
                <div className="flex justify-between text-[8px] text-indigo-600 dark:text-indigo-400 font-bold px-0.5">
                  <button onClick={() => setSelectedItems(allAvailableItems)}>Select All</button>
                  <button onClick={() => setSelectedItems([])}>Clear All</button>
                </div>
                <div className="max-h-24 overflow-y-auto space-y-1 pr-1 border border-slate-200 dark:border-slate-800 rounded p-1">
                  {filteredItems.map(item => (
                    <label key={item} className="flex items-center gap-2 text-[9px] hover:bg-indigo-50 dark:hover:bg-slate-800/80 p-0.5 rounded cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedItems.includes(item)}
                        onChange={() => toggleItem(item)}
                        className="rounded accent-indigo-600"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Expression Condition Filter Section */}
            {activeTab === 'condition' && (
              <div className="flex flex-col gap-2 py-1 text-[10px]">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] text-slate-500">Filter Logic:</span>
                  <select 
                    value={conditionOp} 
                    onChange={(e) => setConditionOp(e.target.value)}
                    className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded p-1 text-[9px] outline-none"
                  >
                    <option value="contains">Text Contains</option>
                    <option value="equals">Exact Equals</option>
                    <option value="startsWith">Starts With</option>
                    <option value="endsWith">Ends With</option>
                  </select>
                </div>
                <input 
                  placeholder="Enter condition keyword..."
                  value={conditionVal}
                  onChange={(e) => setConditionVal(e.target.value)}
                  className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded p-1 text-[9px] outline-none"
                />
              </div>
            )}

            {/* Popover Footer Action Buttons */}
            <div className="flex justify-between items-center border-t border-slate-200 dark:border-slate-800 pt-2 text-[9px]">
              <span className="text-slate-500 font-mono">Matched: {selectedItems.length} items</span>
              <div className="flex gap-1">
                <button 
                  onClick={() => { setSelectedItems(allAvailableItems); setSortOrder('none'); }}
                  className="px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded hover:bg-slate-300 font-bold"
                >
                  Reset
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="px-2.5 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 font-bold flex items-center gap-1"
                >
                  <Check className="w-3 h-3" />
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Grid Sample Body Preview */}
      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 text-[9px] space-y-1">
        <div className="flex justify-between text-slate-500 text-[8px] pb-1 border-b border-slate-200 dark:border-slate-800">
          <span>Active Filter: {selectedItems.length} selected ({sortOrder.toUpperCase()} sort)</span>
          <span className="text-emerald-500 font-bold">● Active Index</span>
        </div>
        {selectedItems.slice(0, 3).map((item, idx) => (
          <div key={item} className="flex justify-between p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
            <span className="font-bold text-indigo-600 dark:text-indigo-400">#0{idx+1} {item}</span>
            <span className="text-slate-500">BATCH-2026-X{idx}</span>
            <span className="font-mono">{(idx+1)*12 + 20}°C</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #642 Pivot Matrix Transform (Dynamic Multi-Dimensional Pivot Grid)
export const LivePivotMatrixTransformLab: React.FC = () => {
  const [rowDimension, setRowDimension] = useState<'Quarter' | 'Region'>('Quarter');
  const [colDimension, setColDimension] = useState<'Region' | 'Channel'>('Region');
  const [metric, setMetric] = useState<'Sum' | 'Avg'>('Sum');

  // Synthetic sample matrix values
  const matrixData = {
    Quarter: [
      { key: '2026 Q1', cols: [1420, 1850, 980, 2100] },
      { key: '2026 Q2', cols: [1680, 2040, 1150, 2350] },
      { key: '2026 Q3', cols: [1950, 2210, 1300, 2600] },
    ],
    Region: [
      { key: 'North Facility', cols: [1420, 1680, 1950, 1800] },
      { key: 'South Facility', cols: [1850, 2040, 2210, 2400] },
      { key: 'East Facility', cols: [980, 1150, 1300, 1450] },
    ]
  };

  const currentRows = matrixData[rowDimension];
  const colHeaders = colDimension === 'Region' ? ['Seoul', 'Busan', 'Incheon', 'Daejeon'] : ['Online', 'Retail', 'Direct', 'OEM'];

  return (
    <div className="w-full max-w-lg bg-slate-100 dark:bg-slate-950 border-2 border-indigo-500/80 rounded-2xl p-4 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-xl">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-1.5 font-black text-indigo-600 dark:text-indigo-400">
          <Grid3X3 className="w-4 h-4" />
          <span>#642 PIVOT MATRIX TRANSFORM</span>
        </div>
        <span className="text-[10px] bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded font-bold">
          2D Crosstab Engine
        </span>
      </div>

      {/* Interactive Pivot Dimension Pivot Configurator */}
      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-2.5 flex flex-wrap gap-2 items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5">
          <span className="text-slate-500 font-bold">Row Axis (↓):</span>
          <button 
            onClick={() => setRowDimension(rowDimension === 'Quarter' ? 'Region' : 'Quarter')}
            className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950 border border-indigo-400 text-indigo-700 dark:text-indigo-300 rounded font-bold hover:bg-indigo-100"
          >
            {rowDimension} ⇄
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-slate-500 font-bold">Col Axis (→):</span>
          <button 
            onClick={() => setColDimension(colDimension === 'Region' ? 'Channel' : 'Region')}
            className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950 border border-indigo-400 text-indigo-700 dark:text-indigo-300 rounded font-bold hover:bg-indigo-100"
          >
            {colDimension} ⇄
          </button>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-slate-500 font-bold">Metric:</span>
          <button 
            onClick={() => setMetric(metric === 'Sum' ? 'Avg' : 'Sum')}
            className="px-2 py-0.5 bg-emerald-600 text-white rounded font-bold text-[9px]"
          >
            {metric} (Qty)
          </button>
        </div>
      </div>

      {/* Rendered Pivot Matrix Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl overflow-hidden text-[9px]">
        <div className="grid grid-cols-6 bg-slate-200 dark:bg-slate-800 font-bold text-center border-b border-slate-300 dark:border-slate-700 py-1.5 text-slate-700 dark:text-slate-200">
          <div className="p-1 border-r border-slate-300 dark:border-slate-700 bg-slate-300 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300">
            {rowDimension} \ {colDimension}
          </div>
          {colHeaders.map(col => (
            <div key={col} className="p-1 border-r border-slate-300 dark:border-slate-700 last:border-0">{col}</div>
          ))}
          <div className="p-1 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">Total</div>
        </div>

        {currentRows.map((r, idx) => {
          const rowSum = r.cols.reduce((acc, val) => acc + val, 0);
          return (
            <div key={r.key} className="grid grid-cols-6 border-b border-slate-200 dark:border-slate-800 text-center items-center py-1 hover:bg-slate-50 dark:hover:bg-slate-800/60">
              <div className="p-1 font-bold text-left pl-2 bg-slate-100 dark:bg-slate-800/80 border-r border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">
                {r.key}
              </div>
              {r.cols.map((val, cIdx) => (
                <div key={cIdx} className="p-1 font-mono border-r border-slate-200 dark:border-slate-800 last:border-0">
                  {metric === 'Sum' ? val.toLocaleString() : Math.round(val / 1.2).toLocaleString()}
                </div>
              ))}
              <div className="p-1 font-mono font-bold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                {rowSum.toLocaleString()}
              </div>
            </div>
          );
        })}

        {/* Grand Summary Row */}
        <div className="grid grid-cols-6 bg-slate-100 dark:bg-slate-800/90 font-bold text-center items-center py-1.5 border-t-2 border-indigo-400 text-indigo-700 dark:text-indigo-300">
          <div className="p-1 text-left pl-2 font-black">Grand Total</div>
          <div className="p-1 font-mono">5,050</div>
          <div className="p-1 font-mono">6,100</div>
          <div className="p-1 font-mono">3,430</div>
          <div className="p-1 font-mono">7,050</div>
          <div className="p-1 font-mono font-black bg-indigo-600 text-white rounded">21,630</div>
        </div>
      </div>
    </div>
  );
};

// #643 Grid Cell Transaction Commit (Dirty Queue & Rollback Manager)
export const LiveGridCellTransactionCommitLab: React.FC = () => {
  const initialItems = [
    { id: 1, name: 'Inverter Main Core', rpm: '3200', duty: '85%' },
    { id: 2, name: 'Servo Feeder A2', rpm: '1800', duty: '60%' },
    { id: 3, name: 'Hydraulic Valve P4', rpm: '2400', duty: '72%' },
  ];

  const [items, setItems] = useState(initialItems);
  const [dirtyCells, setDirtyCells] = useState<Record<string, boolean>>({});
  const [committedMsg, setCommittedMsg] = useState(false);

  const handleCellChange = (id: number, field: string, value: string) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
    setDirtyCells(prev => ({ ...prev, [`${id}_${field}`]: true }));
    setCommittedMsg(false);
  };

  const handleRollback = () => {
    setItems(initialItems);
    setDirtyCells({});
    setCommittedMsg(false);
  };

  const handleCommit = () => {
    setDirtyCells({});
    setCommittedMsg(true);
    setTimeout(() => setCommittedMsg(false), 3000);
  };

  const dirtyCount = Object.keys(dirtyCells).length;

  return (
    <div className="w-full max-w-lg bg-slate-100 dark:bg-slate-950 border-2 border-indigo-500/80 rounded-2xl p-4 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-xl">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-1.5 font-black text-indigo-600 dark:text-indigo-400">
          <Save className="w-4 h-4" />
          <span>#643 CELL TRANSACTION COMMIT</span>
        </div>
        <span className="text-[10px] text-slate-500">Atomic Mutation Queue</span>
      </div>

      {/* Transaction Control Banner */}
      <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-2.5 text-[10px]">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${dirtyCount > 0 ? 'bg-amber-500 animate-ping' : 'bg-emerald-500'}`} />
          <span className="font-bold">
            {dirtyCount > 0 ? (
              <span className="text-amber-600 dark:text-amber-400 font-black">
                ⚡ Dirty Queue: {dirtyCount} cells modified
              </span>
            ) : (
              <span className="text-slate-500">All changes committed (Clean state)</span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button 
            onClick={handleRollback}
            disabled={dirtyCount === 0}
            className="px-2 py-1 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 disabled:opacity-40 rounded font-bold flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            Rollback
          </button>
          <button 
            onClick={handleCommit}
            disabled={dirtyCount === 0}
            className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded font-bold flex items-center gap-1 shadow"
          >
            <Check className="w-3 h-3" />
            Commit All
          </button>
        </div>
      </div>

      {committedMsg && (
        <div className="p-2 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-500 text-emerald-700 dark:text-emerald-300 rounded-lg text-[9px] flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Transaction Commit Complete: All changes written to primary record store!</span>
        </div>
      )}

      {/* Editable Grid with Dirty Cell Markers */}
      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl overflow-hidden text-[9px]">
        <div className="grid grid-cols-3 bg-slate-200 dark:bg-slate-800 p-2 font-bold border-b border-slate-300 dark:border-slate-700">
          <span>Component Node</span>
          <span>Target RPM (Editable)</span>
          <span>Duty Cycle (Editable)</span>
        </div>

        {items.map(item => {
          const isRpmDirty = dirtyCells[`${item.id}_rpm`];
          const isDutyDirty = dirtyCells[`${item.id}_duty`];

          return (
            <div key={item.id} className="grid grid-cols-3 p-2 border-b border-slate-200 dark:border-slate-800 items-center last:border-0">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">{item.name}</span>
              
              {/* RPM Cell */}
              <div className="relative pr-2">
                <input 
                  value={item.rpm}
                  onChange={(e) => handleCellChange(item.id, 'rpm', e.target.value)}
                  className={`w-full px-1.5 py-0.5 rounded border outline-none font-mono text-[9px] transition-colors ${
                    isRpmDirty 
                      ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-500 text-amber-900 dark:text-amber-200 font-bold' 
                      : 'bg-transparent border-slate-300 dark:border-slate-700'
                  }`}
                />
                {isRpmDirty && (
                  <span className="absolute top-0 right-3 w-1.5 h-1.5 bg-amber-500 rounded-full" title="Dirty Cell" />
                )}
              </div>

              {/* Duty Cell */}
              <div className="relative pr-2">
                <input 
                  value={item.duty}
                  onChange={(e) => handleCellChange(item.id, 'duty', e.target.value)}
                  className={`w-full px-1.5 py-0.5 rounded border outline-none font-mono text-[9px] transition-colors ${
                    isDutyDirty 
                      ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-500 text-amber-900 dark:text-amber-200 font-bold' 
                      : 'bg-transparent border-slate-300 dark:border-slate-700'
                  }`}
                />
                {isDutyDirty && (
                  <span className="absolute top-0 right-3 w-1.5 h-1.5 bg-amber-500 rounded-full" title="Dirty Cell" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// #644 Cell Navigation DOM Sync (Virtual Scrolling Focus Tracker)
export const LiveCellNavigationDomSyncLab: React.FC = () => {
  const totalVirtualRows = 20;
  const viewportVisibleCount = 4;
  const [selectedRow, setSelectedRow] = useState(2);
  const [selectedCol, setSelectedCol] = useState(1);
  const [viewportStart, setViewportStart] = useState(0);

  const moveFocus = (rowDelta: number, colDelta: number) => {
    const nextRow = Math.max(0, Math.min(totalVirtualRows - 1, selectedRow + rowDelta));
    const nextCol = Math.max(0, Math.min(2, selectedCol + colDelta));
    setSelectedRow(nextRow);
    setSelectedCol(nextCol);

    // Auto-scroll viewport if target row exceeds bounds
    if (nextRow < viewportStart) {
      setViewportStart(nextRow);
    } else if (nextRow >= viewportStart + viewportVisibleCount) {
      setViewportStart(nextRow - viewportVisibleCount + 1);
    }
  };

  const visibleIndices = Array.from({ length: viewportVisibleCount }, (_, i) => viewportStart + i);

  return (
    <div className="w-full max-w-lg bg-slate-100 dark:bg-slate-950 border-2 border-indigo-500/80 rounded-2xl p-4 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-xl">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-1.5 font-black text-indigo-600 dark:text-indigo-400">
          <Move className="w-4 h-4" />
          <span>#644 CELL NAVIGATION DOM SYNC</span>
        </div>
        <span className="text-[10px] text-slate-500">Virtual Focus Preserver</span>
      </div>

      {/* Keyboard Controls Navigator Bar */}
      <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-2.5 text-[10px]">
        <div className="space-y-0.5">
          <div className="font-bold text-indigo-600 dark:text-indigo-400">
            Active Coordinate: [Row #{selectedRow + 1}, Col #{selectedCol + 1}]
          </div>
          <div className="text-[8.5px] text-slate-500">
            Virtual Window: Rendering rows {viewportStart + 1} ~ {viewportStart + viewportVisibleCount} of {totalVirtualRows}
          </div>
        </div>

        {/* Direction Arrow Navigation Buttons */}
        <div className="grid grid-cols-3 gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
          <span />
          <button onClick={() => moveFocus(-1, 0)} className="px-2 py-0.5 bg-indigo-600 text-white rounded font-bold hover:bg-indigo-700">↑</button>
          <span />
          <button onClick={() => moveFocus(0, -1)} className="px-2 py-0.5 bg-indigo-600 text-white rounded font-bold hover:bg-indigo-700">←</button>
          <button onClick={() => moveFocus(1, 0)} className="px-2 py-0.5 bg-indigo-600 text-white rounded font-bold hover:bg-indigo-700">↓</button>
          <button onClick={() => moveFocus(0, 1)} className="px-2 py-0.5 bg-indigo-600 text-white rounded font-bold hover:bg-indigo-700">→</button>
        </div>
      </div>

      {/* Virtual Table Container */}
      <div className="bg-white dark:bg-slate-900 border-2 border-indigo-400/50 rounded-xl overflow-hidden text-[9px]">
        <div className="grid grid-cols-3 bg-slate-200 dark:bg-slate-800 p-1.5 font-bold border-b border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200">
          <span>Row Header / Index</span>
          <span>Register Address</span>
          <span>Sample Signal</span>
        </div>

        {visibleIndices.map(rowIdx => (
          <div 
            key={rowIdx} 
            className={`grid grid-cols-3 p-1.5 border-b border-slate-200 dark:border-slate-800 items-center last:border-0 transition-all ${
              rowIdx === selectedRow ? 'bg-indigo-50/80 dark:bg-indigo-950/60 font-bold' : ''
            }`}
          >
            <div className={`p-1 rounded ${selectedRow === rowIdx && selectedCol === 0 ? 'ring-2 ring-indigo-500 bg-white dark:bg-slate-900' : ''}`}>
              Virtual Row #{String(rowIdx + 1).padStart(2, '0')}
            </div>
            <div className={`p-1 font-mono rounded ${selectedRow === rowIdx && selectedCol === 1 ? 'ring-2 ring-indigo-500 bg-white dark:bg-slate-900' : ''}`}>
              0x004F{String(rowIdx).padStart(2, '0')}
            </div>
            <div className={`p-1 font-mono rounded ${selectedRow === rowIdx && selectedCol === 2 ? 'ring-2 ring-indigo-500 bg-white dark:bg-slate-900' : ''}`}>
              DATA_{rowIdx * 17 + 102}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// #645 Cascader Grid Editor (Hierarchical Multi-Level Cell Dropdown)
export const LiveCascaderGridEditorLab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedL1, setSelectedL1] = useState<string | null>('Facility Plant 01');
  const [selectedL2, setSelectedL2] = useState<string | null>('Production Line A');
  const [selectedL3, setSelectedL3] = useState<string | null>('Robotic Arm X-1');
  const [finalValue, setFinalValue] = useState('Plant 01 ➔ Line A ➔ Arm X-1');

  const hierarchyData = {
    'Facility Plant 01': {
      'Production Line A': ['Robotic Arm X-1', 'Laser Cutter LC-02', 'Conveyor Belt C-1'],
      'Assembly Line B': ['Torque Driver T-1', 'Vision Inspector V-4', 'Packing Station P-2'],
    },
    'Testing Plant 02': {
      'Thermal Chamber 01': ['Chamber Oven TC-1', 'Sensor Rig SR-09'],
      'Vibration Test 02': ['Shaker Table ST-3', 'Accelerometer AC-5'],
    }
  };

  const handleSelectL3 = (val: string) => {
    setSelectedL3(val);
    const formatted = `${selectedL1?.replace('Facility ', '')} ➔ ${selectedL2?.replace('Production ', '')} ➔ ${val}`;
    setFinalValue(formatted);
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-lg bg-slate-100 dark:bg-slate-950 border-2 border-indigo-500/80 rounded-2xl p-4 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-xl">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-1.5 font-black text-indigo-600 dark:text-indigo-400">
          <Split className="w-4 h-4" />
          <span>#645 CASCADER GRID EDITOR</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
        >
          {isOpen ? 'Close Flyout' : 'Edit Cell'}
        </button>
      </div>

      {/* Grid Cell Representation */}
      <div className="relative">
        <div className="bg-white dark:bg-slate-900 border-2 border-indigo-400 p-2.5 rounded-xl flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-bold">Target Machine:</span>
            <span className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded font-bold">
              {finalValue}
            </span>
          </div>
          <span className="text-slate-400 text-[9px]">Double Click to pick ✎</span>
        </div>

        {/* 3-Level Cascading Flyout Menu */}
        {isOpen && (
          <div className="absolute top-12 left-0 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl shadow-2xl z-30 p-2 flex gap-1 animate-in fade-in zoom-in-95 duration-100 text-[9px]">
            {/* Level 1: Plant */}
            <div className="w-32 border-r border-slate-200 dark:border-slate-800 pr-1 space-y-1">
              <div className="text-[8px] font-bold text-slate-400 px-1">1. Facility Level</div>
              {Object.keys(hierarchyData).map(p => (
                <button 
                  key={p}
                  onClick={() => { setSelectedL1(p); setSelectedL2(null); setSelectedL3(null); }}
                  className={`w-full text-left px-2 py-1 rounded flex items-center justify-between ${
                    selectedL1 === p ? 'bg-indigo-600 text-white font-bold' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="truncate">{p}</span>
                  <span>➔</span>
                </button>
              ))}
            </div>

            {/* Level 2: Line */}
            {selectedL1 && (
              <div className="w-36 border-r border-slate-200 dark:border-slate-800 pr-1 space-y-1">
                <div className="text-[8px] font-bold text-slate-400 px-1">2. Production Line</div>
                {Object.keys(hierarchyData[selectedL1 as keyof typeof hierarchyData]).map(l => (
                  <button 
                    key={l}
                    onClick={() => { setSelectedL2(l); setSelectedL3(null); }}
                    className={`w-full text-left px-2 py-1 rounded flex items-center justify-between ${
                      selectedL2 === l ? 'bg-indigo-600 text-white font-bold' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="truncate">{l}</span>
                    <span>➔</span>
                  </button>
                ))}
              </div>
            )}

            {/* Level 3: Leaf Unit */}
            {selectedL1 && selectedL2 && (
              <div className="w-36 space-y-1">
                <div className="text-[8px] font-bold text-slate-400 px-1">3. Specific Node</div>
                {((hierarchyData as any)[selectedL1]?.[selectedL2] || []).map((item: string) => (
                  <button 
                    key={item}
                    onClick={() => handleSelectL3(item)}
                    className={`w-full text-left px-2 py-1 rounded flex items-center justify-between ${
                      selectedL3 === item ? 'bg-emerald-600 text-white font-bold' : 'hover:bg-emerald-50 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold'
                    }`}
                  >
                    <span className="truncate">{item}</span>
                    <span>✓</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// #646 Bidirectional Freeze Matrix (4-Quadrant Split Pinned Grid)
export const LiveBidirectionalFreezeMatrixLab: React.FC = () => {
  const [scrollX, setScrollX] = useState(30);
  const [scrollY, setScrollY] = useState(20);

  const pinnedCols = ['Station Alpha', 'Station Beta'];
  const scrollCols = ['Metric-01', 'Metric-02', 'Metric-03', 'Metric-04', 'Metric-05', 'Metric-06'];
  const pinnedRows = ['Line-01 (Priority)', 'Line-02 (Standard)'];
  const scrollRows = ['Line-03', 'Line-04', 'Line-05', 'Line-06', 'Line-07'];

  return (
    <div className="w-full max-w-lg bg-slate-100 dark:bg-slate-950 border-2 border-indigo-500/80 rounded-2xl p-4 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-xl">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-1.5 font-black text-indigo-600 dark:text-indigo-400">
          <Pin className="w-4 h-4" />
          <span>#646 BIDIRECTIONAL FREEZE MATRIX</span>
        </div>
        <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold">4-Quadrant Pinned Matrix</span>
      </div>

      {/* Synchronized Offset Sliders */}
      <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-2 text-[9px] gap-3">
        <div className="flex items-center gap-1.5 flex-1">
          <span className="font-bold text-slate-500">X-Scroll:</span>
          <input 
            type="range" 
            min="0" 
            max="60" 
            value={scrollX} 
            onChange={(e) => setScrollX(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <span className="font-mono text-[8px]">{scrollX}px</span>
        </div>
        <div className="flex items-center gap-1.5 flex-1">
          <span className="font-bold text-slate-500">Y-Scroll:</span>
          <input 
            type="range" 
            min="0" 
            max="50" 
            value={scrollY} 
            onChange={(e) => setScrollY(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <span className="font-mono text-[8px]">{scrollY}px</span>
        </div>
      </div>

      {/* 4-Quadrant Visual Schematic Layout Grid */}
      <div className="bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl overflow-hidden text-[9px] relative">
        {/* Quadrant 1: Top-Left (Fixed Locked Corner) */}
        <div className="grid grid-cols-5 bg-slate-300 dark:bg-slate-800 font-bold border-b-2 border-r-2 border-indigo-500 text-center">
          <div className="col-span-2 p-1.5 bg-indigo-200 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 flex items-center justify-center gap-1">
            <Pin className="w-3 h-3 text-indigo-600" />
            <span>PINNED (X & Y)</span>
          </div>

          {/* Quadrant 2: Top-Right (Horizontal Scrolled Header) */}
          <div className="col-span-3 overflow-hidden bg-slate-200 dark:bg-slate-800">
            <div 
              className="flex font-bold py-1.5 transition-transform" 
              style={{ transform: `translateX(-${scrollX}px)` }}
            >
              {scrollCols.map(c => (
                <span key={c} className="w-20 shrink-0 text-center border-r border-slate-300 dark:border-slate-700">{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Body Section */}
        <div className="grid grid-cols-5">
          {/* Quadrant 3: Bottom-Left (Vertical Scrolled Pinned Column) */}
          <div className="col-span-2 bg-slate-100 dark:bg-slate-900/90 border-r-2 border-indigo-500 font-bold">
            <div 
              className="transition-transform space-y-0.5 p-1"
              style={{ transform: `translateY(-${scrollY}px)` }}
            >
              {scrollRows.map(r => (
                <div key={r} className="p-1.5 bg-indigo-50 dark:bg-indigo-950/40 rounded border border-indigo-200 dark:border-indigo-800/40 truncate">
                  {r}
                </div>
              ))}
            </div>
          </div>

          {/* Quadrant 4: Bottom-Right (2D Synchronized Scrolled Body Matrix) */}
          <div className="col-span-3 overflow-hidden bg-white dark:bg-slate-950 p-1">
            <div 
              className="transition-transform space-y-0.5"
              style={{ transform: `translate(-${scrollX}px, -${scrollY}px)` }}
            >
              {scrollRows.map((r, rIdx) => (
                <div key={r} className="flex gap-1">
                  {scrollCols.map((c, cIdx) => (
                    <div key={c} className="w-20 shrink-0 p-1.5 text-center font-mono bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded">
                      #{(rIdx + 1) * 10 + (cIdx + 1)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

