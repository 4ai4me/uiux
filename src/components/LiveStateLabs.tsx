import React, { useState, useRef } from 'react';
import { 
  Check, X, AlertTriangle, AlertCircle, CheckCircle2, RotateCcw, 
  Copy, Loader2, ChevronDown, ChevronRight, MousePointer, 
  Grid, Magnet, ShieldCheck, CornerDownRight, Move
} from 'lucide-react';

/**
 * ----------------------------------------------------------------------------
 * Category 10: States & Interaction (#181 ~ #200) Dedicated 1:1 Interactive Labs
 * High-contrast, Light/Dark adaptive UI/UX Architecture Workbench
 * ----------------------------------------------------------------------------
 */

// #181 Default State (Normal State) - Base neutral state of UI components
export const LiveDefaultStateLab: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#181 DEFAULT (NORMAL) STATE</span>
        <span className="text-[10px] text-slate-500">Baseline Resting State</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-3">
        <div className="space-y-1">
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300">
            Standard Input Field (Default)
          </label>
          <input
            type="text"
            defaultValue="Axis-X Acceleration: 1.2G"
            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-xs font-mono outline-none"
            placeholder="Type value..."
          />
        </div>

        <div className="flex items-center justify-between pt-1">
          <button
            onClick={() => setClickCount((c) => c + 1)}
            className="px-3 py-1.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 font-bold text-xs transition"
          >
            Default Action Button
          </button>
          <span className="text-[10px] text-slate-500">Clicks: {clickCount}</span>
        </div>
      </div>
    </div>
  );
};

// #182 Hover State - Pointer entry feedback with brightness and cursor change
export const LiveHoverStateLab: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#182 HOVER STATE</span>
        <span className={`text-[10px] font-bold ${isHovered ? 'text-indigo-600 dark:text-indigo-400 animate-pulse' : 'text-slate-500'}`}>
          {isHovered ? '● Cursor Inside' : '○ Cursor Outside'}
        </span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div
          onMouseEnter={() => { setIsHovered(true); setHoverCount((c) => c + 1); }}
          onMouseLeave={() => setIsHovered(false)}
          className={`p-3 rounded-lg border-2 transition-all duration-150 cursor-pointer flex items-center justify-between ${
            isHovered
              ? 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-500 text-indigo-900 dark:text-indigo-200 shadow-md scale-[1.01]'
              : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
          }`}
        >
          <div className="flex items-center gap-2">
            <MousePointer className={`w-4 h-4 transition ${isHovered ? 'text-indigo-600 dark:text-indigo-400 rotate-12' : 'text-slate-400'}`} />
            <div>
              <div className="font-bold text-xs">Hover Sensor Card</div>
              <div className="text-[10px] opacity-80">Move mouse over this card to trigger hover</div>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-300 dark:border-slate-700">
            {isHovered ? ':hover Active' : ':normal'}
          </span>
        </div>
        <div className="text-[10px] text-slate-500 text-right">Hover Entries Recorded: {hoverCount}</div>
      </div>
    </div>
  );
};

// #183 Focus State - Keyboard focus ring & focus glow outline
export const LiveFocusStateLab: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#183 FOCUS STATE</span>
        <button
          onClick={() => inputRef.current?.focus()}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
        >
          Trigger Focus Programmatically
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2.5">
        <div>
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Motor Feedrate (mm/min)
          </label>
          <input
            ref={inputRef}
            type="text"
            defaultValue="2500"
            onFocus={() => setFocusedField('input-1')}
            onBlur={() => setFocusedField(null)}
            className="w-full px-3 py-1.5 rounded-lg border-2 border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-mono text-xs outline-none transition"
          />
        </div>

        <div className="p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[10px] flex justify-between items-center">
          <span>Active Focus Element:</span>
          <span className="font-bold text-indigo-600 dark:text-indigo-400 font-mono">
            {focusedField ? 'input#motor-feedrate (:focus ring ON)' : 'None (Blurred)'}
          </span>
        </div>
      </div>
    </div>
  );
};

// #184 Active State (Pressed State) - Instant physical depression on mousedown
export const LiveActivePressedStateLab: React.FC = () => {
  const [isPressing, setIsPressing] = useState(false);
  const [pressCount, setPressCount] = useState(0);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#184 ACTIVE (PRESSED) STATE</span>
        <span className="text-[10px] text-slate-500">Mousedown Moment</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 flex flex-col items-center gap-3">
        <button
          onMouseDown={() => { setIsPressing(true); setPressCount((c) => c + 1); }}
          onMouseUp={() => setIsPressing(false)}
          onMouseLeave={() => setIsPressing(false)}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-black text-xs shadow-lg hover:bg-indigo-500 active:bg-indigo-800 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer select-none"
        >
          <span>PRESS & HOLD (ACTIVE DEMO)</span>
        </button>

        <div className="w-full p-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded text-[11px] flex justify-between items-center">
          <span>Physical Key Depth:</span>
          <span className={`font-bold ${isPressing ? 'text-amber-500' : 'text-slate-400'}`}>
            {isPressing ? '▼ 1px Depressed (:active)' : '▲ Resting (0px)'}
          </span>
        </div>
        <div className="text-[10px] text-slate-500">Total Key Depressions: {pressCount}</div>
      </div>
    </div>
  );
};

// #185 Selected State - Persistent active highlight selection
export const LiveSelectedStateLab: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('spindle-02');

  const tools = [
    { id: 'spindle-01', name: 'Endmill 6mm Carbide', rpm: '12,000 RPM' },
    { id: 'spindle-02', name: 'Ballnose 4mm HSS', rpm: '18,000 RPM' },
    { id: 'spindle-03', name: 'Drill Bit 3.2mm Cobalt', rpm: '6,500 RPM' },
  ];

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#185 SELECTED STATE</span>
        <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold">Persistent Active</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 space-y-1.5">
        {tools.map((t) => (
          <div
            key={t.id}
            onClick={() => setSelectedId(t.id)}
            className={`p-2 rounded-lg border-2 cursor-pointer transition flex items-center justify-between text-xs ${
              selectedId === t.id
                ? 'bg-indigo-50 dark:bg-indigo-950 border-indigo-600 text-indigo-950 dark:text-indigo-200 font-bold shadow-sm'
                : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                selectedId === t.id ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-400'
              }`}>
                {selectedId === t.id && <Check className="w-2.5 h-2.5" />}
              </div>
              <span>{t.name}</span>
            </div>
            <span className="text-[10px] font-normal opacity-75">{t.rpm}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #186 Disabled State - Locked interaction with 40% opacity and not-allowed cursor
export const LiveDisabledStateLab: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#186 DISABLED STATE</span>
        <button
          onClick={() => setIsDisabled(!isDisabled)}
          className={`px-2 py-0.5 rounded text-[10px] font-bold border transition ${
            isDisabled ? 'bg-rose-600 text-white border-rose-600' : 'bg-emerald-600 text-white border-emerald-600'
          }`}
        >
          {isDisabled ? 'State: Disabled (Click to Enable)' : 'State: Enabled'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2.5">
        <div className="space-y-1">
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300">
            Spindle Overdrive Target
          </label>
          <input
            type="text"
            disabled={isDisabled}
            defaultValue="24,000 RPM (Locked)"
            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono text-xs disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-slate-200 dark:disabled:bg-slate-900"
          />
        </div>

        <button
          disabled={isDisabled}
          className="w-full py-2 bg-indigo-600 text-white rounded-lg font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-indigo-600 transition"
        >
          {isDisabled ? '🚫 Action Locked (disabled)' : '✓ Ready to Execute'}
        </button>
      </div>
    </div>
  );
};

// #187 Read-only State - Immutable text with selectable & copyable privilege
export const LiveReadonlyStateLab: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const secretKey = 'RECIPE_SHA256_9F88A23B00C1';

  const handleCopy = () => {
    navigator.clipboard.writeText(secretKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#187 READ-ONLY STATE</span>
        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Copyable (Ctrl+C)</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300">
          Cryptographic Hardware Token (Read-only)
        </label>
        <div className="flex items-center gap-1.5">
          <input
            type="text"
            readOnly
            value={secretKey}
            className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-mono text-xs font-bold cursor-text select-all outline-none"
          />
          <button
            onClick={handleCopy}
            className="px-2.5 py-1.5 bg-slate-200 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white rounded-lg text-xs font-bold transition flex items-center gap-1"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
        <div className="text-[10px] text-slate-500">
          Note: Cannot be edited, but text can be highlighted and copied freely.
        </div>
      </div>
    </div>
  );
};

// #188 Checked State - Checked checkbox & radio button
export const LiveCheckedStateLab: React.FC = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#188 CHECKED STATE</span>
        <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold">Value: true</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <label
          onClick={() => setIsChecked(!isChecked)}
          className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 transition select-none"
        >
          <div className="flex items-center gap-2.5">
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition ${
              isChecked ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-400 bg-white dark:bg-slate-800'
            }`}>
              {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>
            <span className="font-bold text-xs text-slate-800 dark:text-slate-200">
              Flood Coolant High-Pressure Circuit
            </span>
          </div>
          <span className={`text-[10px] font-bold ${isChecked ? 'text-indigo-600' : 'text-slate-400'}`}>
            {isChecked ? 'CHECKED' : 'UNCHECKED'}
          </span>
        </label>
      </div>
    </div>
  );
};

// #189 Unchecked State - Unselected resting state
export const LiveUncheckedStateLab: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#189 UNCHECKED STATE</span>
        <span className="text-[10px] text-slate-500">Value: false</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <label
          onClick={() => setIsChecked(!isChecked)}
          className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 transition select-none"
        >
          <div className="flex items-center gap-2.5">
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition ${
              isChecked ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-400 bg-white dark:bg-slate-800'
            }`}>
              {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>
            <span className="font-bold text-xs text-slate-800 dark:text-slate-200">
              Debug Telemetry Verbose Dump
            </span>
          </div>
          <span className={`text-[10px] font-bold ${isChecked ? 'text-indigo-600' : 'text-slate-400'}`}>
            {isChecked ? 'CHECKED' : 'UNCHECKED'}
          </span>
        </label>
      </div>
    </div>
  );
};

// #190 Indeterminate State - 3-state checkbox with horizontal bar [-]
export const LiveIndeterminateStateLab: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Spindle Drive Inverter', checked: true },
    { id: 2, name: 'Coolant Chiller Pump', checked: false },
    { id: 3, name: 'Chip Conveyor Belt', checked: false },
  ]);

  const checkedCount = items.filter((i) => i.checked).length;
  const isAll = checkedCount === items.length;
  const isNone = checkedCount === 0;
  const isIndeterminate = !isAll && !isNone;

  const handleParentToggle = () => {
    const nextState = !isAll;
    setItems(items.map((i) => ({ ...i, checked: nextState })));
  };

  const handleChildToggle = (id: number) => {
    setItems(items.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i)));
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#190 INDETERMINATE STATE</span>
        <span className={`text-[10px] font-bold ${isIndeterminate ? 'text-amber-500' : isAll ? 'text-emerald-500' : 'text-slate-400'}`}>
          {isIndeterminate ? '[-] Indeterminate' : isAll ? '[✓] All Checked' : '[ ] Unchecked'}
        </span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        {/* Parent Checkbox */}
        <div
          onClick={handleParentToggle}
          className="p-2 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 rounded-lg flex items-center justify-between cursor-pointer font-bold select-none"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border-2 border-indigo-600 bg-indigo-600 text-white flex items-center justify-center">
              {isAll && <Check className="w-3 h-3 stroke-[3]" />}
              {isIndeterminate && <span className="w-2 h-0.5 bg-white rounded-full" />}
            </div>
            <span>Select All Peripherals ({checkedCount}/{items.length})</span>
          </div>
          <span className="text-[10px] text-indigo-600 font-normal">Click to toggle all</span>
        </div>

        {/* Children Checkboxes */}
        <div className="pl-6 space-y-1.5 border-l-2 border-slate-200 dark:border-slate-800 ml-2">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleChildToggle(item.id)}
              className="flex items-center gap-2 p-1.5 rounded hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer select-none text-xs"
            >
              <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                item.checked ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-400'
              }`}>
                {item.checked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
              </div>
              <span className={item.checked ? 'text-slate-900 dark:text-slate-100 font-semibold' : 'text-slate-500'}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// #191 Expanded State - Open tree/accordion with downward arrow ⌄
export const LiveExpandedStateLab: React.FC = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#191 EXPANDED STATE</span>
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
        >
          {expanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 space-y-1.5">
        <div
          onClick={() => setExpanded(!expanded)}
          className="p-2 bg-slate-50 dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800 flex items-center justify-between cursor-pointer font-bold"
        >
          <div className="flex items-center gap-1.5">
            <ChevronDown className={`w-4 h-4 text-indigo-600 transition-transform duration-200 ${expanded ? 'rotate-0' : '-rotate-90'}`} />
            <span>📁 G-Code Production Scripts (Expanded)</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">aria-expanded="{expanded.toString()}"</span>
        </div>

        {expanded && (
          <div className="pl-6 space-y-1 text-[11px] text-slate-600 dark:text-slate-400 animate-in fade-in duration-150 border-l-2 border-indigo-300 dark:border-indigo-800 ml-3">
            <div className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">📄 Pass1_Roughing.tap (4.2MB)</div>
            <div className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">📄 Pass2_Finishing.tap (8.1MB)</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #192 Collapsed State - Compact header with rightward arrow ›
export const LiveCollapsedStateLab: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#192 COLLAPSED STATE</span>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="px-2 py-0.5 bg-white dark:bg-slate-800 border rounded text-[10px] font-bold"
        >
          {collapsed ? 'Open Panel' : 'Close Panel'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 space-y-1.5">
        <div
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 bg-slate-50 dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800 flex items-center justify-between cursor-pointer font-bold"
        >
          <div className="flex items-center gap-1.5">
            <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${collapsed ? 'rotate-0' : 'rotate-90'}`} />
            <span>📁 Archived Calibration Runs (Collapsed)</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">aria-expanded="{(!collapsed).toString()}"</span>
        </div>

        {!collapsed && (
          <div className="pl-6 space-y-1 text-[11px] text-slate-600 dark:text-slate-400 border-l-2 border-slate-300 dark:border-slate-800 ml-3">
            <div className="p-1">📄 2025_Q4_Benchmark.csv</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #193 Loading State - Spinner animation and interaction lock
export const LiveLoadingStateLab: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSimulate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#193 LOADING STATE</span>
        <button
          onClick={handleSimulate}
          disabled={isLoading}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold disabled:opacity-50"
        >
          {isLoading ? 'Processing...' : 'Simulate Async Save'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-3">
        <button
          onClick={handleSimulate}
          disabled={isLoading}
          className="w-full py-2.5 px-4 bg-indigo-600 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-2 shadow transition disabled:bg-indigo-700 disabled:cursor-wait"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Synthesizing Mesh Geometry (2.5s)...</span>
            </>
          ) : (
            <span>Commit 3D Spatial Partition</span>
          )}
        </button>

        <div className="text-[10px] text-slate-500 text-center">
          {isLoading ? '🔒 User interactions temporarily queued/blocked' : 'Idle and ready for user action'}
        </div>
      </div>
    </div>
  );
};

// #194 Error State (Invalid State) - Validation failure red boundary and text
export const LiveErrorStateLab: React.FC = () => {
  const [rpmVal, setRpmVal] = useState('32000');

  const isError = Number(rpmVal) > 24000;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#194 ERROR (INVALID) STATE</span>
        <span className="text-[10px] text-rose-600 font-bold">aria-invalid="true"</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-1.5">
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
          Max Velocity RPM (Limit: 24,000)
        </label>
        <input
          type="number"
          value={rpmVal}
          onChange={(e) => setRpmVal(e.target.value)}
          className={`w-full px-3 py-1.5 rounded-lg border-2 text-xs font-mono font-bold outline-none transition ${
            isError
              ? 'border-rose-500 bg-rose-50/50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 focus:ring-2 focus:ring-rose-500/20'
              : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950'
          }`}
        />
        {isError && (
          <div className="text-[10px] text-rose-600 dark:text-rose-400 flex items-center gap-1 font-semibold">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Exceeds safety limit of 24,000 RPM for Bearing Type A.</span>
          </div>
        )}
      </div>
    </div>
  );
};

// #195 Warning State (Caution State) - Non-blocking amber caution banner
export const LiveWarningStateLab: React.FC = () => {
  const [pressure, setPressure] = useState(85);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#195 WARNING (CAUTION) STATE</span>
        <div className="flex items-center gap-1">
          <input
            type="range"
            min="40"
            max="100"
            value={pressure}
            onChange={(e) => setPressure(Number(e.target.value))}
            className="w-16 accent-amber-500"
          />
          <span className="font-bold text-xs">{pressure} PSI</span>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/60 border-2 border-amber-500/80 rounded-lg p-3 text-amber-950 dark:text-amber-200 space-y-1">
        <div className="flex items-center gap-1.5 font-bold text-xs text-amber-800 dark:text-amber-300">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>High Line Pressure Advisory ({pressure} PSI)</span>
        </div>
        <p className="text-[11px] opacity-90 leading-tight">
          Non-standard pressure detected. Operation is permitted, but gasket seal degradation may accelerate.
        </p>
      </div>
    </div>
  );
};

// #196 Success State (Valid State) - Green confirmation and check icon
export const LiveSuccessStateLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#196 SUCCESS (VALID) STATE</span>
        <span className="text-[10px] text-emerald-600 font-bold">Verified</span>
      </div>

      <div className="bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-500 rounded-lg p-3 text-emerald-950 dark:text-emerald-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <div>
            <div className="font-bold text-xs text-emerald-800 dark:text-emerald-300">
              Serial Number: SN-2026-X49
            </div>
            <div className="text-[10px] opacity-80">Device authenticated with Master Security Ring</div>
          </div>
        </div>
        <span className="px-2 py-0.5 bg-emerald-600 text-white rounded text-[10px] font-bold">
          VALID
        </span>
      </div>
    </div>
  );
};

// #197 Pressed State (Aria-Pressed) - Toggle button remaining depressed
export const LivePressedStateLab: React.FC = () => {
  const [isGridSnapped, setIsGridSnapped] = useState(true);
  const [isMagnetic, setIsMagnetic] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#197 PRESSED (ARIA-PRESSED)</span>
        <span className="text-[10px] text-slate-500">Toggle Persistence</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex gap-2">
        <button
          aria-pressed={isGridSnapped}
          onClick={() => setIsGridSnapped(!isGridSnapped)}
          className={`flex-1 py-2 px-3 rounded-lg border-2 font-bold text-xs flex items-center justify-center gap-1.5 transition ${
            isGridSnapped
              ? 'bg-indigo-600 text-white border-indigo-700 shadow-inner'
              : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-100'
          }`}
        >
          <Grid className="w-3.5 h-3.5" />
          <span>Snap Grid {isGridSnapped ? '(ON)' : '(OFF)'}</span>
        </button>

        <button
          aria-pressed={isMagnetic}
          onClick={() => setIsMagnetic(!isMagnetic)}
          className={`flex-1 py-2 px-3 rounded-lg border-2 font-bold text-xs flex items-center justify-center gap-1.5 transition ${
            isMagnetic
              ? 'bg-indigo-600 text-white border-indigo-700 shadow-inner'
              : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-100'
          }`}
        >
          <Magnet className="w-3.5 h-3.5" />
          <span>Magnetic {isMagnetic ? '(ON)' : '(OFF)'}</span>
        </button>
      </div>
    </div>
  );
};

// #198 Dragged State - 50% opacity resting shadow while dragging
export const LiveDraggedStateLab: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#198 DRAGGED STATE</span>
        <button
          onClick={() => setIsDragging(!isDragging)}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
        >
          {isDragging ? 'Stop Drag' : 'Simulate Drag'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
        <div
          draggable
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className={`p-3 rounded-lg border-2 cursor-grab transition-all ${
            isDragging
              ? 'opacity-40 border-dashed border-indigo-500 bg-indigo-50 dark:bg-indigo-950 shadow-2xl scale-95'
              : 'bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-700 shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold">
              <Move className="w-4 h-4 text-indigo-600" />
              <span>BOM Row #104 (Sub-Assembly Bracket)</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">
              {isDragging ? 'opacity: 0.4 (Dragged)' : 'opacity: 1.0'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// #199 Drop Target State - Dashed border & soft background highlight on hover
export const LiveDropTargetStateLab: React.FC = () => {
  const [isOver, setIsOver] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#199 DROP TARGET STATE</span>
        <button
          onClick={() => setIsOver(!isOver)}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
        >
          {isOver ? 'Leave Target' : 'Drag Over Target'}
        </button>
      </div>

      <div
        onDragOver={(e) => { e.preventDefault(); setIsOver(true); }}
        onDragLeave={() => setIsOver(false)}
        onDrop={() => setIsOver(false)}
        className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-1.5 text-center ${
          isOver
            ? 'border-dashed border-indigo-500 bg-indigo-100/70 dark:bg-indigo-950/70 text-indigo-900 dark:text-indigo-200 ring-4 ring-indigo-500/20'
            : 'border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500'
        }`}
      >
        <span className="text-xl">{isOver ? '📥' : '📂'}</span>
        <div className="font-bold text-xs">
          {isOver ? 'RELEASE TO DROP PAYLOAD' : 'Valid Drop Target Container'}
        </div>
        <div className="text-[10px] opacity-75">
          {isOver ? 'border: 2px dashed #4F46E5 + highlight' : 'Awaiting incoming dragover event'}
        </div>
      </div>
    </div>
  );
};

// #200 Focus-visible State - Keyboard-only prominent outline
export const LiveFocusVisibleStateLab: React.FC = () => {
  const [navMode, setNavMode] = useState<'mouse' | 'keyboard'>('keyboard');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#200 FOCUS-VISIBLE STATE</span>
        <div className="flex gap-1">
          <button
            onClick={() => setNavMode('mouse')}
            className={`px-2 py-0.5 rounded text-[10px] font-bold ${navMode === 'mouse' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border'}`}
          >
            Mouse Click
          </button>
          <button
            onClick={() => setNavMode('keyboard')}
            className={`px-2 py-0.5 rounded text-[10px] font-bold ${navMode === 'keyboard' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border'}`}
          >
            Tab Key
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <button
          className={`w-full py-2.5 px-4 rounded-lg font-bold text-xs transition outline-none ${
            navMode === 'keyboard'
              ? 'bg-indigo-600 text-white ring-4 ring-offset-2 ring-indigo-500 ring-offset-white dark:ring-offset-slate-900'
              : 'bg-indigo-600 text-white hover:bg-indigo-500 ring-0'
          }`}
        >
          {navMode === 'keyboard' ? '⌨️ Tab Navigation (:focus-visible 3px ring)' : '🖱️ Mouse Click (Clean, No Ring)'}
        </button>

        <div className="text-[10px] text-slate-500 text-center">
          Complies with WCAG 2.4.7 Focus Visible criteria for assistive devices.
        </div>
      </div>
    </div>
  );
};
