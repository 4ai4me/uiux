import React, { useState } from 'react';
import { 
  Table, Grid, Edit3, CheckSquare, Square, Pin, 
  Eye, EyeOff, Maximize2, Minimize2, Check, AlertCircle, 
  Trash2, Copy, Plus, Calculator, ChevronDown, ChevronRight,
  TrendingUp, Layers, Sliders, ArrowUpDown, ShieldAlert, Sparkles
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
