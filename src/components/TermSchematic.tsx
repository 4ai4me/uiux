import React from 'react';
import { TermItem } from '../types';

interface Props {
  term: TermItem;
  className?: string;
  isCompact?: boolean;
}

export const TermSchematic: React.FC<Props> = ({ term, className = '', isCompact = false }) => {
  const type = term.schematicType || 'generic';

  // Render dedicated, distinct visual schematics based on exact schematicType
  return (
    <div
      className={`relative w-full rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 p-3 flex flex-col items-center justify-center overflow-hidden select-none shadow-inner transition-colors duration-150 ${
        isCompact ? 'h-28' : 'h-40'
      } ${className}`}
    >
      {/* Background Subtle High-Contrast Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:14px_14px] opacity-40 dark:opacity-30 pointer-events-none" />

      {/* Dynamic Schematic Renderers */}
      {renderSchematicContent(type, term, isCompact)}

      {/* Type Tag Footer */}
      <div className="absolute bottom-1.5 right-2.5 flex items-center gap-1.5 opacity-90 z-20">
        <span className="w-2 h-2 rounded-full bg-indigo-500" />
        <span className="text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300">.{type}</span>
      </div>
    </div>
  );
};


function renderSchematicContent(type: string, term: TermItem, isCompact: boolean) {
  switch (type) {
    // 1. Basic Inputs
    case 'textfield':
    case 'input_text':
      return (
        <div className="w-full max-w-[200px] flex flex-col gap-1.5 z-10">
          <div className="flex justify-between items-center text-xs font-mono font-bold text-slate-200">
            <span>Input Label</span>
            <span className="text-[10px] text-indigo-400">text</span>
          </div>
          <div className="w-full h-9 bg-slate-900 border-2 border-indigo-500 rounded-lg px-2.5 flex items-center justify-between shadow-[0_0_12px_rgba(99,102,241,0.25)]">
            <span className="text-xs text-slate-100 font-mono font-bold">Value|</span>
            <span className="text-[11px] text-indigo-400 font-mono font-bold">Aa</span>
          </div>
        </div>
      );

    case 'textarea':
      return (
        <div className="w-full max-w-[200px] flex flex-col gap-1 z-10">
          <span className="text-xs font-mono font-bold text-slate-200">Multiline Field</span>
          <div className="w-full h-16 bg-slate-900 border-2 border-indigo-500/80 rounded-lg p-2 flex flex-col justify-between font-mono text-[11px] text-slate-300">
            <div>Line 1: Log entry...</div>
            <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-800 pt-1">
              <span>3 lines</span>
              <span>↘ Resize</span>
            </div>
          </div>
        </div>
      );

    case 'password':
    case 'input_password':
      return (
        <div className="w-full max-w-[200px] flex flex-col gap-1.5 z-10">
          <div className="flex justify-between items-center text-xs font-mono font-bold text-slate-200">
            <span>Password Field</span>
            <span className="text-[10px] text-emerald-400">Masked</span>
          </div>
          <div className="w-full h-9 bg-slate-900 border-2 border-slate-600 rounded-lg px-2.5 flex items-center justify-between">
            <span className="text-sm tracking-widest text-indigo-300 font-mono font-black">••••••••</span>
            <span className="text-xs text-indigo-400 font-bold">👁</span>
          </div>
        </div>
      );

    case 'numberinput':
    case 'input_number':
      return (
        <div className="w-full max-w-[200px] flex flex-col gap-1 z-10">
          <span className="text-xs font-mono font-bold text-slate-200">Number Input (Min/Max)</span>
          <div className="w-full h-9 bg-slate-900 border-2 border-indigo-500/80 rounded-lg flex items-center justify-between px-3">
            <span className="text-xs font-mono font-black text-slate-100">120 mm/s</span>
            <div className="flex flex-col border-l-2 border-slate-700 pl-2 -mr-1">
              <span className="text-xs text-indigo-400 font-bold leading-none cursor-pointer">▲</span>
              <span className="text-xs text-slate-400 font-bold leading-none cursor-pointer">▼</span>
            </div>
          </div>
        </div>
      );

    case 'searchfield':
    case 'input_search':
      return (
        <div className="w-full max-w-[200px] flex flex-col gap-1 z-10">
          <span className="text-xs font-mono font-bold text-slate-200">Search Field</span>
          <div className="w-full h-9 bg-slate-900 border-2 border-indigo-500 rounded-lg px-2.5 flex items-center justify-between">
            <span className="text-xs text-indigo-300 font-mono font-bold">🔍 Spindle|</span>
            <span className="text-xs text-slate-400 font-bold cursor-pointer">✕</span>
          </div>
        </div>
      );

    case 'checkbox':
      return (
        <div className="flex items-center gap-3 z-10 bg-slate-900/90 border border-slate-700 px-3 py-2 rounded-xl">
          <div className="w-6 h-6 rounded bg-indigo-600 border-2 border-indigo-400 flex items-center justify-center text-white text-xs font-black shadow">
            ✓
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-100 font-bold">Auto-Homing [X]</span>
            <span className="text-[10px] text-slate-400 font-mono">Independent Multi-Select</span>
          </div>
        </div>
      );

    case 'radio':
      return (
        <div className="flex flex-col gap-2 z-10 bg-slate-900/90 border border-slate-700 p-2.5 rounded-xl">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full border-2 border-indigo-400 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
            </div>
            <span className="text-xs font-bold text-indigo-200">3-Phase 380V (Selected)</span>
          </div>
          <div className="flex items-center gap-2.5 opacity-60">
            <div className="w-5 h-5 rounded-full border-2 border-slate-500" />
            <span className="text-xs text-slate-300">1-Phase 220V</span>
          </div>
        </div>
      );

    case 'switch':
    case 'toggle_switch':
      return (
        <div className="flex items-center gap-3 z-10 bg-slate-900/90 border border-slate-700 px-3.5 py-2.5 rounded-xl">
          <div className="w-12 h-6 bg-indigo-600 rounded-full p-0.5 flex items-center justify-end shadow-inner border border-indigo-400">
            <div className="w-5 h-5 bg-white rounded-full shadow-md" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-mono font-black text-indigo-300">STATUS: ON</span>
            <span className="text-[10px] text-slate-400">Immediate State Toggle</span>
          </div>
        </div>
      );

    case 'select':
      return (
        <div className="w-full max-w-[200px] flex flex-col gap-1 z-10">
          <span className="text-xs font-mono font-bold text-slate-200">Form Select Box</span>
          <div className="w-full h-9 bg-slate-900 border-2 border-indigo-500 rounded-lg px-2.5 flex items-center justify-between text-xs font-bold text-slate-100">
            <span>Fanuc R-30iB</span>
            <span className="text-indigo-400 text-xs">▼</span>
          </div>
        </div>
      );

    case 'dropdown':
      return (
        <div className="w-full max-w-[200px] flex flex-col gap-1 z-10">
          <span className="text-xs font-mono font-bold text-slate-200">Action Menu Dropdown</span>
          <div className="w-full bg-slate-900 border-2 border-indigo-500 rounded-lg p-1.5 flex flex-col gap-1 text-xs">
            <div className="flex justify-between items-center text-slate-100 font-bold px-1">
              <span>⚡ Actions</span>
              <span className="text-indigo-400 text-xs">▲</span>
            </div>
            <div className="bg-indigo-950/80 border border-indigo-500/40 rounded px-2 py-1 text-[11px] text-indigo-200 font-mono">
              • Duplicate Node
            </div>
          </div>
        </div>
      );

    case 'combobox':
      return (
        <div className="w-full max-w-[200px] flex flex-col gap-1 z-10">
          <span className="text-xs font-mono font-bold text-slate-200">Combobox (Type + Pick)</span>
          <div className="w-full h-9 bg-slate-900 border-2 border-indigo-500 rounded-lg px-2 flex items-center justify-between">
            <span className="text-xs text-indigo-300 font-mono font-bold">Siemens|</span>
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-slate-400 font-mono">Filter</span>
              <span className="text-indigo-400 text-xs">▼</span>
            </div>
          </div>
        </div>
      );

    case 'autocomplete':
      return (
        <div className="w-full max-w-[200px] flex flex-col gap-1 z-10">
          <span className="text-xs font-mono font-bold text-slate-200">Autocomplete Search</span>
          <div className="w-full h-8 bg-slate-900 border-2 border-indigo-500/80 rounded-lg px-2 flex items-center gap-1.5">
            <span className="text-xs text-slate-100 font-mono">Mo</span>
            <span className="text-xs text-indigo-400 font-mono font-bold bg-indigo-950 px-1 rounded">tor [Tab]</span>
          </div>
        </div>
      );

    case 'slider':
      return (
        <div className="w-full max-w-[190px] flex flex-col gap-1.5 z-10">
          <div className="flex justify-between text-xs font-mono font-bold text-slate-200">
            <span>Single Value Slider</span>
            <span className="text-indigo-400 font-black">65%</span>
          </div>
          <div className="relative w-full h-3 bg-slate-800 rounded-full flex items-center">
            <div className="h-full bg-indigo-500 rounded-full w-[65%]" />
            <div className="absolute left-[65%] -translate-x-1/2 w-5 h-5 rounded-full bg-white border-2 border-indigo-600 shadow-md" />
          </div>
        </div>
      );

    case 'rangeslider':
    case 'range_slider':
      return (
        <div className="w-full max-w-[190px] flex flex-col gap-1.5 z-10">
          <div className="flex justify-between text-xs font-mono font-bold text-slate-200">
            <span>Range (Min ~ Max)</span>
            <span className="text-indigo-400 font-black">20° ~ 85°C</span>
          </div>
          <div className="relative w-full h-3 bg-slate-800 rounded-full flex items-center">
            <div className="absolute left-[20%] right-[15%] h-full bg-indigo-500" />
            <div className="absolute left-[20%] -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-indigo-600 shadow" />
            <div className="absolute left-[85%] -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-indigo-600 shadow" />
          </div>
        </div>
      );

    case 'stepperinput':
    case 'stepper':
      return (
        <div className="w-full max-w-[190px] flex flex-col gap-1 z-10">
          <span className="text-xs font-mono font-bold text-slate-200">Chunky Stepper [-] [+]</span>
          <div className="flex items-center justify-between bg-slate-900 border-2 border-indigo-500 rounded-lg p-1">
            <div className="w-7 h-7 bg-slate-800 text-indigo-300 font-black text-sm rounded flex items-center justify-center">-</div>
            <span className="text-xs font-mono font-black text-white">450 RPM</span>
            <div className="w-7 h-7 bg-slate-800 text-indigo-300 font-black text-sm rounded flex items-center justify-center">+</div>
          </div>
        </div>
      );

    case 'datepicker':
    case 'date_picker':
      return (
        <div className="w-full max-w-[190px] flex flex-col gap-1 z-10">
          <span className="text-xs font-mono font-bold text-slate-200">Calendar Date Picker</span>
          <div className="w-full h-8 bg-slate-900 border-2 border-indigo-500 rounded-lg px-2.5 flex items-center justify-between text-xs font-bold text-indigo-200">
            <span>📅 2026-08-17</span>
            <span className="text-[10px] text-slate-400 font-mono">Cal</span>
          </div>
        </div>
      );

    case 'timepicker':
    case 'time_picker':
      return (
        <div className="w-full max-w-[190px] flex flex-col gap-1 z-10">
          <span className="text-xs font-mono font-bold text-slate-200">Time Picker (HH:MM:SS)</span>
          <div className="w-full h-8 bg-slate-900 border-2 border-indigo-500 rounded-lg px-2.5 flex items-center justify-between text-xs font-mono font-black text-indigo-300">
            <span>🕒 14 : 30 : 00</span>
            <span className="text-[10px] bg-indigo-950 px-1.5 py-0.5 rounded text-indigo-400">PM</span>
          </div>
        </div>
      );

    case 'datetimepicker':
    case 'datetime_picker':
      return (
        <div className="w-full max-w-[200px] flex flex-col gap-1 z-10">
          <span className="text-xs font-mono font-bold text-slate-200">Integrated Date & Time</span>
          <div className="w-full h-8 bg-slate-900 border-2 border-indigo-500 rounded-lg px-2 flex items-center justify-between text-[11px] font-mono font-bold text-indigo-200">
            <span>2026-08-17</span>
            <span className="text-indigo-400 font-black">|</span>
            <span>14:30 PM</span>
          </div>
        </div>
      );

    case 'colorpicker':
    case 'color_picker':
      return (
        <div className="flex items-center gap-3 z-10 bg-slate-900 border-2 border-indigo-500 px-3 py-2 rounded-xl">
          <div className="w-7 h-7 rounded-lg bg-indigo-500 border-2 border-white shadow" />
          <div className="flex flex-col">
            <span className="text-xs font-mono font-black text-indigo-300">#6366F1</span>
            <span className="text-[10px] text-slate-400 font-mono">RGB (99, 102, 241)</span>
          </div>
        </div>
      );

    case 'fileupload':
    case 'file_upload':
      return (
        <div className="w-full max-w-[190px] border-2 border-dashed border-indigo-400 rounded-lg p-2 bg-indigo-950/20 flex flex-col items-center justify-center gap-1 z-10">
          <span className="text-base text-indigo-400">📤</span>
          <span className="text-xs font-mono font-bold text-slate-200">Drop CAD / File</span>
        </div>
      );

    // 2. Buttons & Actions (#021 ~ #040)
    case 'btn_default':
    case 'btn_primary':
    case 'primary_btn':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-400 font-bold">Primary Hierarchy</span>
          <div className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black rounded-xl shadow-lg shadow-indigo-600/40 flex items-center gap-2 border-2 border-indigo-400">
            <span>Commit Order</span>
            <span className="text-xs">➔</span>
          </div>
        </div>
      );

    case 'btn_secondary':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-400 font-bold">Secondary (Outline)</span>
          <div className="px-4 py-2 bg-slate-900 border-2 border-indigo-400/80 text-indigo-300 text-xs font-bold rounded-xl shadow flex items-center gap-1.5">
            <span>👁 Preview BOM</span>
          </div>
        </div>
      );

    case 'btn_tertiary':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-400 font-bold">Tertiary (Subtle Tint)</span>
          <div className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl border border-slate-700">
            <span>Advanced Settings</span>
          </div>
        </div>
      );

    case 'btn_ghost':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-400 font-bold">Ghost (Transparent)</span>
          <div className="px-4 py-2 bg-transparent border border-dashed border-slate-600 hover:bg-slate-800 text-slate-300 text-xs font-mono font-bold rounded-xl flex items-center gap-1">
            <span>[⟲ Reset State]</span>
          </div>
        </div>
      );

    case 'btn_text':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-400 font-bold">Text Only (No Border)</span>
          <div className="px-2 py-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/60 decoration-2 underline-offset-4 cursor-pointer">
            Skip Step &rarr;
          </div>
        </div>
      );

    case 'btn_icon':
      return (
        <div className="flex items-center gap-2 z-10">
          <div className="w-9 h-9 rounded-xl bg-slate-900 border-2 border-indigo-500 text-indigo-300 flex items-center justify-center text-sm font-black shadow-md">
            ⚙
          </div>
          <div className="w-9 h-9 rounded-xl bg-slate-900 border-2 border-slate-700 text-slate-400 flex items-center justify-center text-sm font-black">
            🗑
          </div>
        </div>
      );

    case 'btn_toggle':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-400 font-bold">Latch State [ON]</span>
          <div className="px-4 py-2 bg-indigo-600 border-2 border-white text-white text-xs font-black rounded-xl shadow-lg shadow-indigo-600/50 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Grid Snap : ON</span>
          </div>
        </div>
      );

    case 'btngroup':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-400 font-bold">Connected Button Bar</span>
          <div className="inline-flex rounded-xl overflow-hidden border-2 border-indigo-500 bg-slate-900">
            <div className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-black">Left</div>
            <div className="px-3 py-1.5 bg-slate-900 text-slate-400 text-xs font-bold border-l border-slate-700">Mid</div>
            <div className="px-3 py-1.5 bg-slate-900 text-slate-400 text-xs font-bold border-l border-slate-700">Right</div>
          </div>
        </div>
      );

    case 'segmented':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-400 font-bold">1-of-N Radio Capsule</span>
          <div className="inline-flex p-1 rounded-full bg-slate-900 border-2 border-indigo-500/80">
            <div className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-black shadow">Day</div>
            <div className="px-3 py-1 rounded-full text-slate-400 text-xs font-bold">Week</div>
            <div className="px-3 py-1 rounded-full text-slate-400 text-xs font-bold">Month</div>
          </div>
        </div>
      );

    case 'split_btn':
    case 'splitbtn':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-400 font-bold">Main Action + Menu</span>
          <div className="flex rounded-xl overflow-hidden border-2 border-indigo-500 shadow-md">
            <div className="px-3.5 py-2 bg-indigo-600 text-white text-xs font-black">Save Project</div>
            <div className="px-2.5 py-2 bg-indigo-700 text-white text-xs font-bold border-l border-indigo-500 flex items-center">
              ▼
            </div>
          </div>
        </div>
      );

    case 'fab':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-400 font-bold">Corner Floating +</span>
          <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-black shadow-xl shadow-indigo-600/50 border-2 border-indigo-400">
            +
          </div>
        </div>
      );

    case 'btn_contextual':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-400 font-bold">Appears on Selection</span>
          <div className="px-3 py-1.5 bg-indigo-950 border-2 border-indigo-400 text-indigo-200 text-xs font-bold rounded-xl flex items-center gap-2 shadow-lg">
            <span className="w-5 h-5 rounded-full bg-indigo-500 text-white text-[10px] flex items-center justify-center font-black">3</span>
            <span>Bulk Delete Selected</span>
          </div>
        </div>
      );

    case 'btn_destructive':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-rose-400 font-bold">Danger / Destructive</span>
          <div className="px-4 py-2 bg-rose-600 text-white text-xs font-black rounded-xl border-2 border-rose-400 shadow-lg shadow-rose-600/40 flex items-center gap-1.5">
            <span>⚠ Wipe Node Database</span>
          </div>
        </div>
      );

    case 'btn_loading':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-400 font-bold">In-Flight Spinner</span>
          <div className="px-4 py-2 bg-indigo-950/80 text-indigo-300 border-2 border-indigo-500 rounded-xl text-xs font-bold flex items-center gap-2">
            <span className="w-3.5 h-3.5 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
            <span>Flashing EEPROM...</span>
          </div>
        </div>
      );

    case 'btn_disabled':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-500 font-bold">Disabled (Not-Allowed)</span>
          <div className="px-4 py-2 bg-slate-800 border-2 border-slate-700 text-slate-500 text-xs font-bold rounded-xl cursor-not-allowed opacity-60 flex items-center gap-1.5">
            <span>🚫 Execute Calibration</span>
          </div>
        </div>
      );

    case 'btn_confirm':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-emerald-400 font-bold">Confirm / Commit</span>
          <div className="px-4 py-2 bg-emerald-600 text-white text-xs font-black rounded-xl border-2 border-emerald-400 shadow flex items-center gap-1.5">
            <span>✓ Confirm Changes</span>
          </div>
        </div>
      );

    case 'btn_cancel':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-400 font-bold">Cancel / Revert</span>
          <div className="px-4 py-2 bg-slate-900 border-2 border-slate-700 text-slate-300 text-xs font-bold rounded-xl flex items-center gap-1.5">
            <span>✕ Discard Draft</span>
          </div>
        </div>
      );

    case 'btn_back':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-400 font-bold">Hierarchy Navigation</span>
          <div className="px-3.5 py-2 bg-slate-900 border-2 border-slate-700 text-slate-200 text-xs font-bold rounded-xl flex items-center gap-2">
            <span>← Back to Clusters</span>
          </div>
        </div>
      );

    case 'btn_undo':
      return (
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] font-mono text-slate-400 font-bold">Undo / Redo Stack</span>
          <div className="flex items-center gap-1 bg-slate-900 border-2 border-indigo-500/80 p-1 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-slate-800 text-indigo-300 flex items-center justify-center font-bold text-sm">↶</div>
            <div className="w-8 h-8 rounded-lg bg-slate-800 text-indigo-300 flex items-center justify-center font-bold text-sm">↷</div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 3. Navigation & Menus (#041 ~ #060) Dedicated High-Contrast Schematics
    // -------------------------------------------------------------
    case 'navbar':
      return (
        <div className="w-full max-w-[210px] bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 flex flex-col gap-1.5 z-10 shadow-lg">
          <div className="flex items-center justify-between border-b border-slate-700 pb-1.5 px-1">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 bg-indigo-500 rounded-md flex items-center justify-center text-[10px] text-white font-black">N</div>
              <span className="text-xs font-mono font-bold text-white">LOGO</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono">
              <span className="text-indigo-400 font-bold border-b border-indigo-400">Dash</span>
              <span className="text-slate-400">BOM</span>
              <span className="text-slate-400">Docs</span>
            </div>
            <div className="w-4 h-4 rounded-full bg-slate-700 border border-slate-500" />
          </div>
          <span className="text-[9px] font-mono text-slate-400 text-center">Global Top App Navigation Bar</span>
        </div>
      );

    case 'menubar':
      return (
        <div className="w-full max-w-[210px] bg-slate-950 border-2 border-indigo-500/80 rounded-xl p-1.5 flex flex-col gap-1 z-10 font-mono shadow-lg">
          <div className="flex items-center gap-2 bg-slate-900 px-2 py-1 rounded border border-slate-800 text-[11px] font-bold">
            <span className="text-indigo-300 bg-indigo-950 px-1 rounded">File</span>
            <span className="text-slate-400">Edit</span>
            <span className="text-slate-400">View</span>
            <span className="text-slate-400">Tools</span>
            <span className="text-slate-400">Help</span>
          </div>
          <div className="w-28 bg-slate-900 border border-indigo-500/60 rounded p-1 text-[9px] text-slate-300 shadow-md ml-1 space-y-0.5">
            <div className="text-indigo-300 font-bold">New Project... ^N</div>
            <div>Open Recent ➔</div>
            <div className="text-rose-400">Exit App</div>
          </div>
        </div>
      );

    case 'sidebar':
      return (
        <div className="w-48 h-24 bg-slate-950 border-2 border-indigo-500/70 rounded-xl flex overflow-hidden z-10 font-mono shadow-lg">
          <div className="w-20 bg-slate-900 border-r-2 border-indigo-500/60 p-1.5 flex flex-col gap-1 text-[10px]">
            <span className="font-bold text-indigo-300 border-b border-slate-800 pb-0.5">Sidebar</span>
            <div className="text-[9px] text-slate-300">📁 Assets</div>
            <div className="text-[9px] text-slate-400">📁 Filters</div>
            <div className="text-[9px] text-slate-400">⚙ Specs</div>
          </div>
          <div className="flex-1 p-2 flex flex-col items-center justify-center text-center">
            <span className="text-[11px] font-bold text-slate-200">Main Canvas</span>
            <span className="text-[9px] text-slate-500">Multi-panel dock</span>
          </div>
        </div>
      );

    case 'sidenav':
      return (
        <div className="w-48 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl flex overflow-hidden z-10 font-mono shadow-lg">
          <div className="w-20 bg-slate-900 border-r-2 border-indigo-500 p-1.5 flex flex-col gap-1 text-[10px]">
            <div className="bg-indigo-600 text-white font-bold px-1.5 py-0.5 rounded text-[9px] flex items-center gap-1">
              <span>●</span> <span>Fleet</span>
            </div>
            <div className="text-slate-400 px-1 py-0.5 text-[9px]">■ Telemetry</div>
            <div className="text-slate-400 px-1 py-0.5 text-[9px]">▲ Alerts</div>
          </div>
          <div className="flex-1 p-2 flex flex-col justify-center items-center text-center">
            <span className="text-[11px] font-bold text-indigo-300">Primary Nav</span>
            <span className="text-[9px] text-slate-400">7+ Section List</span>
          </div>
        </div>
      );

    case 'drawer':
      return (
        <div className="relative w-48 h-24 bg-slate-950/80 border-2 border-indigo-500/80 rounded-xl overflow-hidden z-10 font-mono shadow-lg flex">
          <div className="w-24 h-full bg-slate-900 border-r-2 border-indigo-400 p-2 flex flex-col justify-between shadow-2xl animate-in slide-in-from-left">
            <div className="flex justify-between items-center text-[10px] font-bold text-indigo-300 border-b border-slate-800 pb-1">
              <span>Drawer</span>
              <span className="text-rose-400 text-xs">✕</span>
            </div>
            <div className="space-y-1 text-[9px] text-slate-300">
              <div>• Account</div>
              <div>• Settings</div>
            </div>
            <span className="text-[8px] text-emerald-400">Slide Overlay</span>
          </div>
          <div className="flex-1 bg-black/40 p-2 flex items-center justify-center text-[10px] text-slate-500 text-center">
            Backdrop
          </div>
        </div>
      );

    case 'hamburger':
      return (
        <div className="flex flex-col items-center gap-1.5 z-10 font-mono">
          <span className="text-[10px] font-bold text-slate-400">Compact Trigger</span>
          <div className="w-12 h-12 bg-slate-900 border-2 border-indigo-500 rounded-xl p-2.5 flex flex-col justify-between items-center shadow-lg cursor-pointer">
            <div className="w-full h-1 bg-indigo-400 rounded-full" />
            <div className="w-full h-1 bg-indigo-400 rounded-full" />
            <div className="w-full h-1 bg-indigo-400 rounded-full" />
          </div>
        </div>
      );

    case 'dropdownmenu':
      return (
        <div className="w-44 bg-slate-950 border-2 border-indigo-500 rounded-xl p-1.5 flex flex-col gap-1 z-10 font-mono shadow-xl">
          <div className="bg-indigo-600 text-white px-2 py-1 rounded text-xs font-bold flex justify-between items-center">
            <span>👤 User Profile</span>
            <span className="text-[10px]">▼</span>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded p-1 text-[10px] space-y-0.5">
            <div className="text-slate-200 hover:text-white px-1">My Account</div>
            <div className="text-slate-200 hover:text-white px-1">Preferences</div>
            <div className="text-rose-400 border-t border-slate-800 pt-0.5 px-1">Sign Out</div>
          </div>
        </div>
      );

    case 'contextmenu':
      return (
        <div className="relative w-44 h-24 bg-slate-950 border-2 border-indigo-500/70 rounded-xl p-2 z-10 font-mono flex items-center justify-center">
          <div className="absolute top-2 left-4 w-32 bg-slate-900 border-2 border-indigo-400 rounded-lg p-1.5 shadow-2xl text-[10px] space-y-1">
            <div className="text-[9px] text-slate-400 border-b border-slate-800 pb-0.5">🖱 Right-Click Menu</div>
            <div className="text-indigo-300 font-bold">Copy Identifier</div>
            <div className="text-slate-300">Inspect Node</div>
            <div className="text-rose-400">Delete Object</div>
          </div>
        </div>
      );

    case 'overflowmenu':
      return (
        <div className="w-44 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 flex items-center justify-between z-10 font-mono shadow-lg">
          <span className="text-xs font-bold text-slate-200">Table Row #04</span>
          <div className="relative flex items-center">
            <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex flex-col items-center justify-center gap-0.5 text-slate-300 font-black text-xs">
              <span>•</span><span>•</span><span>•</span>
            </div>
          </div>
        </div>
      );

    case 'verticaltabs':
      return (
        <div className="w-48 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl flex overflow-hidden z-10 font-mono shadow-lg">
          <div className="w-20 bg-slate-900 border-r-2 border-slate-800 p-1 flex flex-col gap-1">
            <div className="bg-indigo-600 text-white font-bold px-1.5 py-0.5 rounded text-[9px] border-l-2 border-indigo-300">
              General
            </div>
            <div className="text-slate-400 px-1.5 py-0.5 text-[9px]">Security</div>
            <div className="text-slate-400 px-1.5 py-0.5 text-[9px]">Network</div>
          </div>
          <div className="flex-1 p-2 flex flex-col justify-center items-center text-center">
            <span className="text-[10px] font-bold text-indigo-300">Vertical Pane</span>
            <span className="text-[8px] text-slate-400">For 8+ Tab Lists</span>
          </div>
        </div>
      );

    case 'breadcrumb':
    case 'breadcrumbs':
      return (
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold z-10 bg-slate-950 px-3 py-2 rounded-xl border-2 border-indigo-500/80 shadow-lg">
          <span className="text-slate-400">Org</span>
          <span className="text-indigo-400 font-black">›</span>
          <span className="text-slate-400">Gantry</span>
          <span className="text-indigo-400 font-black">›</span>
          <span className="text-indigo-300 bg-indigo-950 px-1.5 py-0.5 rounded border border-indigo-500/40">Servo #01</span>
        </div>
      );

    case 'pagination':
      return (
        <div className="flex items-center gap-1 z-10 font-mono bg-slate-950 p-1.5 rounded-xl border-2 border-indigo-500 shadow-lg">
          <div className="w-6 h-6 rounded bg-slate-900 border border-slate-700 text-slate-400 text-xs flex items-center justify-center font-bold">‹</div>
          <div className="w-6 h-6 rounded bg-indigo-600 text-white text-xs flex items-center justify-center font-black shadow">1</div>
          <div className="w-6 h-6 rounded bg-slate-900 border border-slate-800 text-slate-400 text-xs flex items-center justify-center font-bold">2</div>
          <div className="w-6 h-6 rounded bg-slate-900 border border-slate-800 text-slate-400 text-xs flex items-center justify-center font-bold">3</div>
          <div className="w-6 h-6 rounded bg-slate-900 border border-slate-700 text-slate-400 text-xs flex items-center justify-center font-bold">›</div>
        </div>
      );

    case 'wizard':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-[9px] text-slate-400 border-b border-slate-800 pb-1">
            <span className="text-indigo-300 font-bold">Step 2 of 4</span>
            <span className="text-emerald-400">50% Completed</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-indigo-500 rounded-full" />
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-[8px] text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">‹ Prev</span>
            <span className="text-[8px] text-white bg-indigo-600 px-2 py-0.5 rounded font-bold">Next ›</span>
          </div>
        </div>
      );

    case 'anchor':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500/80 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col gap-1">
          <span className="text-[9px] text-slate-400 font-bold">On-Page TOC Anchor</span>
          <div className="pl-2 border-l-2 border-indigo-500 space-y-0.5 text-[10px]">
            <div className="text-indigo-300 font-bold">#overview</div>
            <div className="text-slate-500">#kinematics</div>
            <div className="text-slate-500">#pinouts</div>
          </div>
        </div>
      );

    case 'bottomnav':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex justify-around items-center">
          <div className="flex flex-col items-center gap-0.5 text-indigo-400">
            <span className="text-xs">🏠</span>
            <span className="text-[8px] font-bold">Home</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-slate-500">
            <span className="text-xs">📊</span>
            <span className="text-[8px]">Stats</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-slate-500">
            <span className="text-xs">⚙</span>
            <span className="text-[8px]">Config</span>
          </div>
        </div>
      );

    case 'navrail':
      return (
        <div className="w-48 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl flex overflow-hidden z-10 font-mono shadow-lg">
          <div className="w-10 bg-slate-900 border-r-2 border-indigo-500 p-1 flex flex-col items-center gap-2">
            <div className="w-6 h-6 rounded bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold">■</div>
            <div className="w-6 h-6 rounded bg-slate-800 text-slate-400 flex items-center justify-center text-[10px]">●</div>
            <div className="w-6 h-6 rounded bg-slate-800 text-slate-400 flex items-center justify-center text-[10px]">▲</div>
          </div>
          <div className="flex-1 p-2 flex flex-col justify-center items-center text-center">
            <span className="text-[10px] font-bold text-slate-200">Ultra-Slim Rail</span>
            <span className="text-[8px] text-indigo-400">56px Icon Column</span>
          </div>
        </div>
      );

    case 'megamenu':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-xl flex flex-col gap-1">
          <div className="text-[9px] font-bold text-indigo-300 border-b border-slate-800 pb-0.5">Mega 2D Matrix Menu</div>
          <div className="grid grid-cols-2 gap-1.5 text-[8px] pt-0.5">
            <div className="bg-slate-900 p-1 rounded border border-slate-800">
              <span className="font-bold text-slate-200">Actuators</span>
              <div className="text-slate-400">• Stepper</div>
              <div className="text-slate-400">• Servo</div>
            </div>
            <div className="bg-slate-900 p-1 rounded border border-slate-800">
              <span className="font-bold text-slate-200">Sensors</span>
              <div className="text-slate-400">• Optical</div>
              <div className="text-slate-400">• Pressure</div>
            </div>
          </div>
        </div>
      );

    case 'commandpalette':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-400 rounded-xl p-2 z-10 font-mono shadow-2xl flex flex-col gap-1.5">
          <div className="flex items-center gap-1 bg-slate-900 border border-indigo-500/60 rounded px-1.5 py-0.5 text-[9px] text-slate-200">
            <span className="text-indigo-400 font-bold">⌘K</span>
            <span className="text-slate-400">Type command...</span>
          </div>
          <div className="space-y-0.5 text-[8px]">
            <div className="bg-indigo-950 text-indigo-200 p-1 rounded font-bold border border-indigo-500/40">➔ Jump to Gantry Axis 3</div>
            <div className="text-slate-400 px-1">Export STEP Model</div>
          </div>
        </div>
      );

    case 'tabs':
      return (
        <div className="w-full max-w-[200px] flex border-b-2 border-slate-700 z-10">
          <div className="px-3 py-1.5 text-xs font-black text-indigo-400 border-b-2 border-indigo-500 -mb-0.5">
            Tab 1
          </div>
          <div className="px-3 py-1.5 text-xs font-bold text-slate-400">Tab 2</div>
          <div className="px-3 py-1.5 text-xs font-bold text-slate-400">Tab 3</div>
        </div>
      );

    // 4. Layout & Containers (#061 ~ #080)
    case 'container':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500/80 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col items-center">
          <span className="text-[9px] text-slate-400 font-bold mb-1">Viewport Boundary</span>
          <div className="w-36 bg-slate-900 border-2 border-dashed border-indigo-400 p-1.5 rounded-lg flex flex-col items-center">
            <span className="text-[10px] text-indigo-300 font-bold">max-w-7xl mx-auto</span>
            <span className="text-[8px] text-slate-500">Margin: Auto (Centered)</span>
          </div>
        </div>
      );

    case 'panel':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg">
          <div className="bg-slate-900 px-2 py-1 border-b border-slate-800 flex justify-between items-center text-[10px]">
            <span className="text-indigo-300 font-bold">⚙ Telemetry Panel</span>
            <span className="text-slate-500">Docked</span>
          </div>
          <div className="p-2 space-y-1 text-[9px] text-slate-400">
            <div>• Independent Border Box</div>
            <div>• Header + Body Unit</div>
          </div>
        </div>
      );

    case 'pane':
      return (
        <div className="w-48 h-24 bg-slate-950 border-2 border-slate-800 rounded-xl flex overflow-hidden z-10 font-mono shadow-lg">
          <div className="w-1/2 bg-indigo-950/80 border-2 border-indigo-400 p-1.5 flex flex-col justify-center items-center text-center">
            <span className="text-[10px] font-bold text-indigo-200">Active Pane</span>
            <span className="text-[8px] text-indigo-400">1 Discrete Slot</span>
          </div>
          <div className="w-1/2 bg-slate-900/60 p-1.5 flex flex-col justify-center items-center text-slate-600 text-[9px]">
            Other Pane
          </div>
        </div>
      );

    case 'splitpane':
      return (
        <div className="w-48 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl flex overflow-hidden z-10 font-mono shadow-lg">
          <div className="flex-1 bg-slate-900 p-1.5 flex flex-col justify-center items-center text-center">
            <span className="text-[10px] font-bold text-slate-300">Pane A</span>
            <span className="text-[8px] text-slate-500">50% Width</span>
          </div>
          <div className="w-1 bg-indigo-500 shadow-lg" />
          <div className="flex-1 bg-slate-900 p-1.5 flex flex-col justify-center items-center text-center">
            <span className="text-[10px] font-bold text-slate-300">Pane B</span>
            <span className="text-[8px] text-slate-500">50% Width</span>
          </div>
        </div>
      );

    case 'resizepane':
      return (
        <div className="w-48 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl flex overflow-hidden z-10 font-mono shadow-lg">
          <div className="w-24 bg-slate-900 p-1.5 flex flex-col justify-center items-center text-center border-r-2 border-indigo-400">
            <span className="text-[10px] font-bold text-indigo-300">Variable Width</span>
            <span className="text-[8px] text-emerald-400">200px ~ 600px</span>
          </div>
          <div className="flex-1 p-1.5 flex flex-col justify-center items-center text-center">
            <span className="text-xs text-indigo-400 font-bold">⟷</span>
            <span className="text-[8px] text-slate-400">Drag Handle</span>
          </div>
        </div>
      );

    case 'resizablesplit':
      return (
        <div className="w-48 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl flex overflow-hidden z-10 font-mono shadow-lg">
          <div className="w-20 bg-slate-900 p-1.5 flex flex-col justify-center items-center text-center">
            <span className="text-[9px] font-bold text-slate-300">Editor (40%)</span>
          </div>
          <div className="w-2 bg-indigo-600 hover:bg-indigo-400 flex items-center justify-center cursor-col-resize shadow">
            <span className="text-[8px] text-white font-bold">⋮</span>
          </div>
          <div className="flex-1 bg-slate-900 p-1.5 flex flex-col justify-center items-center text-center">
            <span className="text-[9px] font-bold text-slate-300">Terminal (60%)</span>
          </div>
        </div>
      );

    case 'splitter':
      return (
        <div className="w-48 bg-slate-950 border-2 border-slate-800 rounded-xl p-2 z-10 font-mono shadow-lg flex items-center justify-center gap-2">
          <div className="w-16 h-16 bg-slate-900 rounded flex items-center justify-center text-[10px] text-slate-500">Left</div>
          <div className="w-3 h-16 bg-indigo-600 rounded-full flex flex-col items-center justify-center shadow-lg shadow-indigo-600/50">
            <span className="text-[9px] text-white font-black">↔</span>
          </div>
          <div className="w-16 h-16 bg-slate-900 rounded flex items-center justify-center text-[10px] text-slate-500">Right</div>
        </div>
      );

    case 'resizehandle':
      return (
        <div className="relative w-44 h-22 bg-slate-900 border-2 border-indigo-500/80 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col justify-between">
          <span className="text-[10px] text-slate-300 font-bold">Floating Card Frame</span>
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-indigo-600 text-white rounded-br-lg flex items-center justify-center text-[10px] font-bold shadow">
            ⌟
          </div>
        </div>
      );

    case 'divider':
      return (
        <div className="w-48 bg-slate-950 border-2 border-slate-800 rounded-xl p-3 z-10 font-mono shadow-lg flex flex-col gap-2">
          <span className="text-[10px] text-slate-400">Top Content Group</span>
          <div className="w-full h-0.5 bg-indigo-500/80 shadow-sm" />
          <span className="text-[10px] text-slate-400">Bottom Content Group</span>
        </div>
      );

    case 'section':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col gap-1">
          <div className="text-[10px] font-bold text-indigo-300 border-b border-slate-800 pb-0.5">
            § H2 Semantic Section
          </div>
          <div className="text-[9px] text-slate-400 space-y-0.5">
            <div>• Form input field A</div>
            <div>• Form input field B</div>
          </div>
        </div>
      );

    case 'card':
      return (
        <div className="w-44 bg-slate-900 border-2 border-indigo-500 rounded-2xl p-2.5 z-10 font-mono shadow-xl flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-slate-400 font-bold">Spindle Speed</span>
            <span className="text-indigo-400">RPM</span>
          </div>
          <div className="text-base font-black text-white">12,450</div>
          <div className="text-[9px] text-emerald-400 font-bold">▲ +4.2% Optimal</div>
        </div>
      );

    case 'gridlayout':
      return (
        <div className="w-44 grid grid-cols-2 gap-1.5 p-2 bg-slate-950 border-2 border-indigo-500 rounded-xl z-10 font-mono shadow-lg">
          <div className="bg-indigo-950 border border-indigo-500/60 rounded p-1.5 text-[9px] text-indigo-300 text-center font-bold">Cell (0,0)</div>
          <div className="bg-slate-900 border border-slate-800 rounded p-1.5 text-[9px] text-slate-400 text-center">Cell (0,1)</div>
          <div className="bg-slate-900 border border-slate-800 rounded p-1.5 text-[9px] text-slate-400 text-center">Cell (1,0)</div>
          <div className="bg-indigo-950 border border-indigo-500/60 rounded p-1.5 text-[9px] text-indigo-300 text-center font-bold">Cell (1,1)</div>
        </div>
      );

    case 'flexlayout':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex justify-between items-center">
          <div className="px-2 py-1 bg-indigo-600 text-white rounded text-[9px] font-bold">Left Pin</div>
          <div className="px-2 py-1 bg-slate-800 text-slate-400 rounded text-[9px]">Flex Gap</div>
          <div className="px-2 py-1 bg-indigo-600 text-white rounded text-[9px] font-bold">Right Pin</div>
        </div>
      );

    case 'stacklayout':
      return (
        <div className="w-44 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col gap-1.5">
          <div className="bg-slate-900 border border-indigo-500/50 rounded px-2 py-1 text-[9px] text-slate-300">Stack Item 1 (Gap 8px)</div>
          <div className="bg-slate-900 border border-indigo-500/50 rounded px-2 py-1 text-[9px] text-slate-300">Stack Item 2 (Gap 8px)</div>
          <div className="bg-slate-900 border border-indigo-500/50 rounded px-2 py-1 text-[9px] text-slate-300">Stack Item 3 (Gap 8px)</div>
        </div>
      );

    case 'masonry':
      return (
        <div className="w-44 flex gap-1.5 p-2 bg-slate-950 border-2 border-indigo-500 rounded-xl z-10 font-mono shadow-lg">
          <div className="w-1/2 flex flex-col gap-1.5">
            <div className="h-10 bg-indigo-950 border border-indigo-500/60 rounded p-1 text-[8px] text-indigo-300 font-bold">Tall Card</div>
            <div className="h-6 bg-slate-900 border border-slate-800 rounded p-1 text-[8px] text-slate-400">Short</div>
          </div>
          <div className="w-1/2 flex flex-col gap-1.5">
            <div className="h-6 bg-slate-900 border border-slate-800 rounded p-1 text-[8px] text-slate-400">Short</div>
            <div className="h-10 bg-indigo-950 border border-indigo-500/60 rounded p-1 text-[8px] text-indigo-300 font-bold">Tall Card</div>
          </div>
        </div>
      );

    case 'responsive':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col gap-1">
          <div className="flex justify-between items-center text-[9px] text-slate-400 border-b border-slate-800 pb-0.5">
            <span className="text-indigo-300 font-bold">Breakpoints</span>
            <span className="text-emerald-400">Fluid Fluidity</span>
          </div>
          <div className="flex justify-between text-[8px] pt-0.5">
            <span className="bg-slate-900 px-1 py-0.5 rounded text-slate-300">🖥 3 Cols</span>
            <span className="bg-slate-900 px-1 py-0.5 rounded text-slate-300">📱 2 Cols</span>
            <span className="bg-indigo-950 px-1 py-0.5 rounded text-indigo-300 font-bold">📲 1 Col</span>
          </div>
        </div>
      );

    case 'adaptive':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col gap-1">
          <span className="text-[9px] text-indigo-300 font-bold">Template Switch</span>
          <div className="flex gap-1 text-[8px]">
            <div className="w-1/2 bg-slate-900 p-1 rounded border border-slate-800 text-slate-400 text-center">Desktop: Table Grid</div>
            <div className="w-1/2 bg-indigo-950 p-1 rounded border border-indigo-500/50 text-indigo-200 text-center font-bold">Mobile: Card Stack</div>
          </div>
        </div>
      );

    case 'fluid':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col items-center">
          <div className="w-full bg-indigo-950/80 border-2 border-indigo-400 p-1.5 rounded-lg text-center">
            <span className="text-[10px] text-indigo-200 font-black">Width: 100% (No Max-W)</span>
            <div className="text-[8px] text-indigo-400">Stretches with Browser Viewport</div>
          </div>
        </div>
      );

    case 'fixed':
      return (
        <div className="w-48 bg-slate-950 border-2 border-amber-500/80 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col items-center">
          <div className="w-32 bg-slate-900 border-2 border-amber-400 p-1.5 rounded text-center shadow">
            <span className="text-[10px] text-amber-300 font-bold">1920 x 1080 Fixed</span>
            <div className="text-[8px] text-slate-500">Scrolls if window &lt; 1920px</div>
          </div>
        </div>
      );

    case 'aspectratio':
      return (
        <div className="w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex items-center justify-center">
          <div className="w-36 h-20 bg-indigo-950 border-2 border-indigo-400 rounded-lg flex flex-col items-center justify-center text-center shadow">
            <span className="text-xs font-black text-indigo-200">16 : 9 Ratio</span>
            <span className="text-[8px] text-indigo-400">Locked Aspect Geometry</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 5. Scrolling, Positioning & Virtualization (#081 ~ #100) Schematics
    // -------------------------------------------------------------
    case 'scrollbar':
      return (
        <div className="w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex items-center justify-between">
          <div className="flex-1 text-[9px] text-slate-400 space-y-1">
            <div>• Track Element</div>
            <div>• Thumb Handle</div>
            <div>• Scroll Offset</div>
          </div>
          <div className="w-3 h-full bg-slate-900 border border-slate-700 rounded-full p-0.5 flex flex-col justify-start">
            <div className="w-full h-8 bg-indigo-500 rounded-full shadow" />
          </div>
        </div>
      );

    case 'v_scrollbar':
      return (
        <div className="w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-lg flex">
          <div className="flex-1 p-1 text-[9px] text-slate-300 flex flex-col justify-center">
            <span className="font-bold text-indigo-300">Y-Axis Only</span>
            <span className="text-slate-500 text-[8px]">Vertical Scroll</span>
          </div>
          <div className="w-2.5 h-full bg-slate-900 rounded-full border border-slate-700 p-0.5">
            <div className="w-full h-6 bg-indigo-500 rounded-full" />
          </div>
        </div>
      );

    case 'h_scrollbar':
      return (
        <div className="w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col justify-between">
          <div className="text-[10px] font-bold text-indigo-300">X-Axis Timeline Scroll</div>
          <div className="w-full h-2.5 bg-slate-900 rounded-full border border-slate-700 p-0.5">
            <div className="w-12 h-full bg-indigo-500 rounded-full" />
          </div>
        </div>
      );

    case 'float_scrollbar':
      return (
        <div className="relative w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col justify-between">
          <span className="text-[9px] text-slate-400">Tall Table Body (Rows 1~500)</span>
          <div className="w-full bg-slate-900/90 border border-indigo-400 rounded-lg p-1 shadow-2xl flex items-center">
            <div className="w-16 h-1.5 bg-indigo-400 rounded-full" />
            <span className="ml-auto text-[7px] text-indigo-300 font-bold">Floating Bar</span>
          </div>
        </div>
      );

    case 'overlay_scrollbar':
      return (
        <div className="relative w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg">
          <div className="text-[9px] text-slate-300">Content width = 100% (No layout jump)</div>
          <div className="absolute top-2 right-1.5 w-1.5 h-14 bg-indigo-500/80 rounded-full shadow-lg" />
        </div>
      );

    case 'scrollcontainer':
      return (
        <div className="w-44 h-24 bg-slate-950 border-2 border-dashed border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col justify-between">
          <div className="text-[9px] text-indigo-300 font-bold">overflow: auto container</div>
          <div className="h-10 bg-slate-900 rounded border border-slate-800 p-1 text-[8px] text-slate-400 overflow-hidden">
            Local scroll boundaries
          </div>
        </div>
      );

    case 'scrollablepane':
      return (
        <div className="w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl flex overflow-hidden z-10 font-mono shadow-lg">
          <div className="w-20 bg-slate-900 border-r border-slate-800 p-1 text-[8px] text-slate-500">Fixed Sidebar</div>
          <div className="flex-1 p-1.5 flex flex-col justify-between bg-indigo-950/40">
            <span className="text-[9px] text-indigo-300 font-bold">Scrollable Pane</span>
            <div className="w-full h-1 bg-indigo-500 rounded" />
          </div>
        </div>
      );

    case 'viewport':
      return (
        <div className="relative w-44 h-24 bg-slate-950 border-2 border-slate-800 rounded-xl p-1 z-10 font-mono flex items-center justify-center">
          <div className="absolute inset-2 border border-slate-700 rounded text-[7px] text-slate-600 p-1">
            Infinite 10,000px Plane
          </div>
          <div className="w-28 h-16 bg-indigo-950/90 border-2 border-indigo-400 rounded-lg p-1 flex flex-col justify-center items-center text-center shadow-xl">
            <span className="text-[9px] font-bold text-indigo-200">Active Viewport</span>
            <span className="text-[7px] text-emerald-400">Render Window</span>
          </div>
        </div>
      );

    case 'overflow':
      return (
        <div className="w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col justify-between">
          <div className="text-[9px] font-bold text-indigo-300">overflow: hidden | auto</div>
          <div className="w-full h-10 bg-slate-900 border border-rose-500/60 rounded p-1 overflow-hidden text-[8px] text-rose-300">
            SuperLongTextExceedingBoxBoundsThatClips
          </div>
        </div>
      );

    case 'sticky':
      return (
        <div className="w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg flex flex-col">
          <div className="bg-indigo-600 text-white px-2 py-1 text-[9px] font-bold shadow-md">
            📌 Sticky Filter (top: 0)
          </div>
          <div className="p-2 text-[8px] text-slate-400 space-y-1">
            <div>Row 1</div>
            <div>Row 2</div>
          </div>
        </div>
      );

    case 'stickyheader':
      return (
        <div className="w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg flex flex-col">
          <div className="bg-slate-900 border-b-2 border-indigo-500 px-2 py-1 text-[9px] font-black text-indigo-300 flex justify-between">
            <span>ID</span>
            <span>Name</span>
            <span>RPM</span>
          </div>
          <div className="p-1.5 text-[8px] text-slate-400 space-y-0.5">
            <div className="flex justify-between"><span>01</span><span>Motor X</span><span>4000</span></div>
            <div className="flex justify-between"><span>02</span><span>Motor Y</span><span>4200</span></div>
          </div>
        </div>
      );

    case 'stickycol':
      return (
        <div className="w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg flex">
          <div className="w-16 bg-slate-900 border-r-2 border-indigo-500 p-1.5 text-[8px] font-bold text-indigo-300 shadow-xl">
            Sticky Col #1 (ID)
          </div>
          <div className="flex-1 p-1.5 text-[8px] text-slate-400 space-y-1">
            <div>Wide Data Col 1</div>
            <div>Wide Data Col 2</div>
          </div>
        </div>
      );

    case 'fixedelement':
      return (
        <div className="relative w-44 h-24 bg-slate-950 border-2 border-slate-800 rounded-xl p-2 z-10 font-mono">
          <span className="text-[8px] text-slate-500">Document Body (Scrolling)</span>
          <div className="absolute top-2 right-2 px-2 py-1 bg-indigo-600 text-white rounded text-[8px] font-bold shadow-2xl border border-indigo-400">
            Fixed: Top-Right
          </div>
        </div>
      );

    case 'floating':
      return (
        <div className="relative w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono flex items-center justify-center">
          <div className="w-36 bg-slate-900 border-2 border-indigo-400 rounded-xl p-2 shadow-2xl flex items-center justify-around text-indigo-300 text-[9px] font-bold">
            <span>✂ Cut</span>
            <span>📄 Copy</span>
            <span>⚙ Prop</span>
          </div>
        </div>
      );

    case 'overlay':
      return (
        <div className="relative w-44 h-24 bg-slate-900 rounded-xl overflow-hidden z-10 font-mono flex items-center justify-center">
          <div className="absolute inset-0 bg-indigo-950/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-2">
            <span className="text-xs font-black text-indigo-200">DROP STEP FILE</span>
            <span className="text-[8px] text-indigo-400">Dimmed Backdrop Overlay</span>
          </div>
        </div>
      );

    case 'scrollsnap':
      return (
        <div className="w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-lg flex items-center gap-1.5 overflow-hidden">
          <div className="w-24 h-16 bg-indigo-950 border-2 border-indigo-400 rounded-lg p-1 flex flex-col justify-center items-center text-center shrink-0 shadow-lg">
            <span className="text-[9px] font-bold text-white">Snapped Card</span>
            <span className="text-[7px] text-emerald-400">Magnet Center</span>
          </div>
          <div className="w-20 h-16 bg-slate-900 border border-slate-800 rounded-lg shrink-0 opacity-50" />
        </div>
      );

    case 'infinitescroll':
      return (
        <div className="w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col justify-between">
          <div className="text-[8px] text-slate-400 space-y-0.5">
            <div>Log Event #104</div>
            <div>Log Event #105</div>
          </div>
          <div className="flex items-center justify-center gap-1 text-[8px] text-indigo-400 font-bold bg-slate-900 py-0.5 rounded border border-slate-800">
            <span className="animate-spin">⟳</span>
            <span>Fetching next 50 logs...</span>
          </div>
        </div>
      );

    case 'virtualscroll':
      return (
        <div className="w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col justify-between">
          <div className="flex justify-between text-[8px] text-indigo-300 font-bold">
            <span>Total: 100,000</span>
            <span className="text-emerald-400">DOM: Only 4</span>
          </div>
          <div className="bg-slate-900 border border-indigo-400/50 rounded p-1 text-[8px] text-slate-200 text-center">
            Rendering Rows 4,500 ~ 4,504
          </div>
        </div>
      );

    case 'scrollshadow':
      return (
        <div className="relative w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col justify-between">
          <span className="text-[9px] text-slate-300">Scrollable Card List</span>
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-indigo-950 to-transparent flex items-end justify-center pb-0.5">
            <span className="text-[7px] text-indigo-400 font-bold">▼ Scroll Hint Shadow</span>
          </div>
        </div>
      );

    case 'autoscroll':
      return (
        <div className="w-44 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex items-center justify-between">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow">
            📦
          </div>
          <span className="text-[8px] text-indigo-300 animate-pulse font-bold">➔ Edge Auto-Scroll</span>
          <div className="w-2 h-16 bg-indigo-500/40 rounded-full" />
        </div>
      );

    // -------------------------------------------------------------
    // 6. Tables & Data Grids (#101 ~ #120) Schematics
    // -------------------------------------------------------------
    case 'table_basic':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg">
          <div className="bg-slate-900 border-b border-indigo-500/60 px-2 py-1 flex justify-between text-[9px] font-bold text-indigo-300">
            <span>Part #</span>
            <span>Qty</span>
            <span>Status</span>
          </div>
          <div className="p-1.5 space-y-1 text-[8px] text-slate-300">
            <div className="flex justify-between border-b border-slate-900 pb-0.5"><span>MTR-01</span><span>4 pcs</span><span className="text-emerald-400">OK</span></div>
            <div className="flex justify-between"><span>DRV-02</span><span>2 pcs</span><span className="text-indigo-400">READY</span></div>
          </div>
        </div>
      );

    case 'datatable':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg flex flex-col justify-between">
          <div className="bg-slate-900 border-b-2 border-indigo-500 px-2 py-1 flex justify-between text-[9px] font-bold text-indigo-300">
            <span>Name ↕</span>
            <span>RPM ▲</span>
            <span>Filter ⚲</span>
          </div>
          <div className="p-1.5 text-[8px] text-slate-300 space-y-0.5">
            <div className="flex justify-between"><span>Servo X</span><span>4000</span></div>
            <div className="flex justify-between"><span>Servo Y</span><span>4200</span></div>
          </div>
          <div className="bg-slate-900 border-t border-slate-800 px-2 py-0.5 flex justify-between text-[7px] text-slate-500">
            <span>Page 1/5</span>
            <span className="text-indigo-400 font-bold">&lt; 1 2 3 &gt;</span>
          </div>
        </div>
      );

    case 'datagrid':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg">
          <div className="bg-slate-900 border-b border-indigo-500 px-2 py-1 flex justify-between text-[8px] font-bold text-indigo-300">
            <span>A | Spec</span>
            <span>B | Val</span>
            <span>C | Qty</span>
          </div>
          <div className="p-1 text-[8px] text-slate-300 space-y-0.5">
            <div className="flex justify-between items-center bg-indigo-950/80 border border-indigo-400 rounded px-1">
              <span>Voltage</span>
              <span className="text-white font-bold bg-slate-900 px-1">220V|</span>
              <span>1</span>
            </div>
            <div className="flex justify-between px-1 text-slate-500">
              <span>Current</span><span>14A</span><span>2</span>
            </div>
          </div>
        </div>
      );

    case 'treeview':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg text-[9px] space-y-1">
          <div className="text-indigo-300 font-bold flex items-center gap-1">
            <span>⌄</span> <span>📁 Line A (Factory 1)</span>
          </div>
          <div className="pl-3 text-slate-300 flex items-center gap-1">
            <span>⌄</span> <span>📁 Gantry Axis System</span>
          </div>
          <div className="pl-6 text-slate-400 flex items-center gap-1">
            <span>•</span> <span className="text-emerald-400">Servo Motor X-01</span>
          </div>
        </div>
      );

    case 'treegrid':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg">
          <div className="bg-slate-900 border-b border-indigo-500 px-1.5 py-1 flex justify-between text-[8px] font-bold text-indigo-300">
            <span>Hierarchy Tree</span>
            <span>Qty</span>
            <span>Power</span>
          </div>
          <div className="p-1 space-y-0.5 text-[8px]">
            <div className="flex justify-between text-indigo-200 font-bold">
              <span>⌄ 📁 Gantry Robot</span><span>1</span><span>3.2kW</span>
            </div>
            <div className="flex justify-between text-slate-400 pl-2">
              <span>› ⚙ Servo Motor</span><span>3</span><span>750W</span>
            </div>
          </div>
        </div>
      );

    case 'row':
      return (
        <div className="w-48 bg-slate-950 border-2 border-slate-800 rounded-xl p-1.5 z-10 font-mono shadow-lg flex flex-col gap-1">
          <div className="p-1 bg-slate-900 rounded text-[8px] text-slate-500">Row #01 (Unselected)</div>
          <div className="p-1.5 bg-indigo-950 border-2 border-indigo-400 rounded-lg text-[9px] font-bold text-indigo-200 flex justify-between shadow-lg">
            <span>● Row #02 (Selected)</span>
            <span className="text-emerald-400">ACTIVE</span>
          </div>
          <div className="p-1 bg-slate-900 rounded text-[8px] text-slate-500">Row #03 (Unselected)</div>
        </div>
      );

    case 'column':
      return (
        <div className="w-48 bg-slate-950 border-2 border-slate-800 rounded-xl p-1.5 z-10 font-mono shadow-lg flex gap-1">
          <div className="flex-1 p-1 bg-slate-900 rounded text-[8px] text-slate-500 text-center">Col A</div>
          <div className="flex-1 p-1 bg-indigo-950 border-2 border-indigo-400 rounded-lg text-[8px] font-bold text-indigo-200 text-center shadow-lg">
            <div>Col B (Power)</div>
            <div className="text-emerald-400 text-[7px] mt-1">Right-Align</div>
          </div>
          <div className="flex-1 p-1 bg-slate-900 rounded text-[8px] text-slate-500 text-center">Col C</div>
        </div>
      );

    case 'cell':
      return (
        <div className="w-48 bg-slate-950 border-2 border-slate-800 rounded-xl p-2 z-10 font-mono shadow-lg flex items-center justify-center">
          <div className="w-24 h-12 bg-indigo-950 border-2 border-indigo-400 rounded-lg p-1 flex flex-col justify-center items-center text-center shadow-2xl">
            <span className="text-[10px] font-bold text-white">450 RPM|</span>
            <span className="text-[7px] text-indigo-300">Active Focus Cell</span>
          </div>
        </div>
      );

    case 'colheader':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col justify-between">
          <div className="bg-slate-900 border-2 border-indigo-400 rounded-lg p-1.5 flex justify-between items-center text-[10px] font-bold text-white shadow-lg">
            <span>Torque (Nm)</span>
            <span className="text-indigo-400 text-xs">▲ Sort</span>
          </div>
          <span className="text-[8px] text-slate-400 text-center">Header Sort & Resize Anchor</span>
        </div>
      );

    case 'rowheader':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg flex">
          <div className="w-12 bg-slate-900 border-r-2 border-indigo-400 p-1 flex flex-col gap-1 text-[8px] font-bold text-indigo-300 text-center">
            <div className="bg-indigo-950 rounded">☑ 01</div>
            <div>☐ 02</div>
            <div>☐ 03</div>
          </div>
          <div className="flex-1 p-1 text-[8px] text-slate-400 space-y-1">
            <div>Data Record Line 1</div>
            <div>Data Record Line 2</div>
            <div>Data Record Line 3</div>
          </div>
        </div>
      );

    case 'frozenrow':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg flex flex-col">
          <div className="bg-indigo-600 text-white px-2 py-1 text-[9px] font-black flex justify-between shadow-md">
            <span>📌 Frozen Header Row</span>
            <span>Pinned</span>
          </div>
          <div className="p-1.5 text-[8px] text-slate-400 space-y-0.5">
            <div>Scrolling data row 104</div>
            <div>Scrolling data row 105</div>
          </div>
        </div>
      );

    case 'frozencol':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg flex">
          <div className="w-16 bg-slate-900 border-r-2 border-indigo-400 p-1.5 text-[8px] font-bold text-indigo-200 shadow-2xl">
            📌 ID (Fixed)
          </div>
          <div className="flex-1 p-1.5 text-[8px] text-slate-400 space-y-0.5">
            <div>Wide Stat 1</div>
            <div>Wide Stat 2</div>
          </div>
        </div>
      );

    case 'sortablecol':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex items-center justify-between">
          <div className="bg-slate-900 border border-indigo-400 rounded-lg p-2 flex items-center justify-between w-full">
            <span className="text-[10px] font-bold text-slate-200">Price ($)</span>
            <div className="px-1.5 py-0.5 bg-indigo-600 text-white rounded text-[9px] font-bold">
              DESC ▼
            </div>
          </div>
        </div>
      );

    case 'filterablecol':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col gap-1">
          <div className="bg-slate-900 border border-indigo-400 rounded p-1 flex justify-between items-center text-[9px] font-bold text-indigo-300">
            <span>Vendor</span>
            <span className="bg-indigo-600 text-white px-1 rounded text-[8px]">⚲ Filter</span>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded p-1 text-[8px] space-y-0.5">
            <div className="text-emerald-400">☑ Siemens (4)</div>
            <div className="text-slate-400">☐ Mitsubishi (2)</div>
          </div>
        </div>
      );

    case 'colresize':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col justify-between">
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded border border-slate-800">
            <div className="w-20 text-[8px] font-bold text-indigo-300">Name</div>
            <div className="w-2 bg-indigo-500 text-white text-[8px] text-center cursor-col-resize font-bold">↔</div>
            <div className="flex-1 text-[8px] text-slate-400">Type</div>
          </div>
          <span className="text-[8px] text-emerald-400 text-center font-bold">Drag boundary ↔ to resize</span>
        </div>
      );

    case 'colreorder':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col justify-between">
          <div className="flex items-center gap-1 text-[8px]">
            <div className="bg-slate-900 p-1 rounded border border-slate-800 text-slate-400">Col 1</div>
            <div className="bg-indigo-600 text-white p-1 rounded font-bold shadow-lg">Col 2 (Drag) ➔</div>
            <div className="w-0.5 h-6 bg-emerald-400" />
            <div className="bg-slate-900 p-1 rounded border border-slate-800 text-slate-400">Col 3</div>
          </div>
          <span className="text-[8px] text-indigo-300 text-center">Drop line indicates destination</span>
        </div>
      );

    case 'rowreorder':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col gap-1">
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded text-[8px] text-slate-400">
            <span>⠿</span> <span>Step 1: Calibration</span>
          </div>
          <div className="flex items-center gap-1 bg-indigo-950 border border-indigo-400 p-1 rounded text-[8px] text-indigo-200 font-bold shadow-lg">
            <span>⠿</span> <span>Step 2: Laser Cutting (Dragging) ⬍</span>
          </div>
        </div>
      );

    case 'inlineedit':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex items-center justify-center">
          <div className="w-full bg-slate-900 border-2 border-emerald-400 rounded-lg p-1.5 flex justify-between items-center text-[9px]">
            <span className="text-white font-black bg-indigo-950 px-1 rounded">3,850 RPM|</span>
            <span className="text-emerald-400 font-bold">[Enter ↵]</span>
          </div>
        </div>
      );

    case 'expandrow':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg text-[8px]">
          <div className="bg-slate-900 p-1.5 flex justify-between font-bold text-indigo-200 border-b border-slate-800">
            <span>⌄ Machine Axis X</span>
            <span className="text-emerald-400">Expanded</span>
          </div>
          <div className="p-2 bg-indigo-950/60 border-l-2 border-indigo-400 space-y-1 text-slate-300">
            <div>• Motor: AC Servo 750W</div>
            <div>• Encoder: 24-bit Optical</div>
          </div>
        </div>
      );

    case 'summaryrow':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg flex flex-col justify-between">
          <div className="p-1 text-[8px] text-slate-400 space-y-0.5">
            <div className="flex justify-between"><span>Part A</span><span>12 pcs</span><span>$120</span></div>
            <div className="flex justify-between"><span>Part B</span><span>8 pcs</span><span>$80</span></div>
          </div>
          <div className="bg-indigo-900/90 border-t-2 border-indigo-400 p-1.5 flex justify-between text-[9px] font-black text-white">
            <span>TOTAL SUMMARY</span>
            <span>20 pcs | $200</span>
          </div>
        </div>
      );

    // 4. Layout & Panes (Fallback)
    case 'two_pane':
    case 'split_view':
      return (
        <div className="w-44 h-22 bg-slate-900 border-2 border-slate-700 rounded-xl flex overflow-hidden z-10">
          <div className="w-[35%] bg-slate-800 p-1.5 flex flex-col gap-1 border-r-2 border-indigo-500">
            <div className="w-full h-2.5 bg-slate-700 rounded" />
            <div className="w-3/4 h-2 bg-slate-700 rounded" />
          </div>
          <div className="flex-1 bg-slate-900 p-2 flex flex-col justify-center items-center">
            <span className="text-xs font-bold text-indigo-300">Main Content</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 7. Disclosure & Hierarchy (#121 ~ #140) Dedicated Schematics
    // -------------------------------------------------------------
    case 'accordion':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg text-[9px] space-y-0.5">
          <div className="bg-slate-900 px-2 py-1 flex justify-between items-center text-indigo-300 font-bold border-b border-slate-800">
            <span>1. Kinematics Limit</span>
            <span>▼</span>
          </div>
          <div className="p-1.5 bg-indigo-950/60 text-slate-300 text-[8px] border-b border-slate-800">
            • Max Accel: 4.5 m/s²
          </div>
          <div className="bg-slate-900 px-2 py-1 flex justify-between items-center text-slate-400">
            <span>2. PID Parameters</span>
            <span>▶</span>
          </div>
        </div>
      );

    case 'collapsible':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg">
          <div className="bg-slate-900 px-2 py-1 flex justify-between items-center text-[9px] font-bold text-white border-b border-slate-800">
            <span>⚙ Standalone Diagnostic</span>
            <span className="text-indigo-400">▲</span>
          </div>
          <div className="p-1.5 space-y-0.5 text-[8px] text-slate-400 bg-slate-950">
            <div>Bus: 380V | Jitter: 0.01ms</div>
          </div>
        </div>
      );

    case 'expandpanel':
    case 'expandable_panel':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-xl flex flex-col justify-between">
          <div className="flex justify-between items-center text-[9px] font-bold text-indigo-300 border-b border-slate-800 pb-1">
            <span>Spindle Summary Card</span>
            <span className="text-emerald-400 text-xs font-bold">⤢ Wide</span>
          </div>
          <div className="text-[8px] text-slate-300 bg-slate-900 p-1 rounded mt-1">
            Card expands to full telemetry modal
          </div>
        </div>
      );

    case 'disclosure':
      return (
        <div className="w-48 bg-slate-950 border-2 border-amber-500/80 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-[9px] font-black text-amber-300">
            <span>▼</span>
            <span>Show Formula (Inline)</span>
          </div>
          <div className="pl-3 border-l-2 border-amber-500 text-[8px] text-slate-300">
            τ = J · α + τ_friction
          </div>
        </div>
      );

    case 'chevron':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-300">Chevron Glyph</span>
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-sm font-black shadow">
            ›
          </div>
        </div>
      );

    case 'caret':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-300">Solid Polygon Caret</span>
          <div className="px-2 py-1 bg-slate-900 border border-indigo-400 rounded text-indigo-300 text-xs font-black">
            Sort ▼
          </div>
        </div>
      );

    case 'treenode':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg">
          <div className="flex items-center gap-1.5 bg-indigo-950/80 border border-indigo-400 rounded p-1 text-[9px] text-white font-bold">
            <span>⚙</span>
            <span>Servo_X.step (Active Node)</span>
          </div>
        </div>
      );

    case 'parentnode':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg text-[9px]">
          <div className="flex items-center gap-1 font-bold text-amber-300">
            <span>⌄</span> <span>📁 Assembly Line A (Parent)</span>
          </div>
          <div className="pl-4 text-slate-400 text-[8px] mt-0.5">
            <div>• Sub-Station 1</div>
            <div>• Sub-Station 2</div>
          </div>
        </div>
      );

    case 'childnode':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg text-[8px]">
          <div className="text-slate-500">Parent Folder</div>
          <div className="pl-4 border-l-2 border-indigo-400 text-emerald-400 font-bold mt-1">
            └── 📄 Child_Node_PWM.c
          </div>
        </div>
      );

    case 'leafnode':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[9px] font-bold text-white">
            <span className="text-slate-600">•</span>
            <span>📄 Calibration.json</span>
          </div>
          <span className="text-[7px] bg-slate-900 border border-slate-700 px-1 py-0.5 rounded text-slate-400">LEAF</span>
        </div>
      );

    case 'indentation':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg space-y-1 text-[8px]">
          <div className="bg-slate-900 p-0.5 text-slate-400">Level 0 (0px)</div>
          <div className="pl-3 bg-slate-900 p-0.5 text-indigo-300 font-bold">Level 1 (16px indent)</div>
          <div className="pl-6 bg-slate-900 p-0.5 text-emerald-400 font-bold">Level 2 (32px indent)</div>
        </div>
      );

    case 'hierachyline':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg text-[8px] text-slate-300">
          <div className="font-bold text-white">📁 Root Controller</div>
          <div className="pl-3 text-indigo-300">├── ⚙️ Encoder Guide Line</div>
          <div className="pl-3 text-indigo-300">└── ⚡ Power Switch Line</div>
        </div>
      );

    case 'expander':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex items-center gap-1.5">
          <div className="w-5 h-5 bg-indigo-600 text-white rounded flex items-center justify-center text-[10px] font-black shadow">
            +
          </div>
          <span className="text-[9px] font-bold text-slate-200">Expander Click Hit Target</span>
        </div>
      );

    case 'collapseall':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col gap-1">
          <div className="flex justify-between items-center text-[8px]">
            <span className="text-slate-400">Tree Toolbar:</span>
            <span className="bg-rose-950 border border-rose-500 text-rose-300 px-1 py-0.5 rounded font-bold">⌃⌃ Collapse All</span>
          </div>
          <div className="bg-slate-900 p-1 rounded text-[8px] text-slate-500">
            📁 All 4 branches collapsed
          </div>
        </div>
      );

    case 'expandall':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col gap-1">
          <div className="flex justify-between items-center text-[8px]">
            <span className="text-slate-400">Tree Toolbar:</span>
            <span className="bg-emerald-950 border border-emerald-500 text-emerald-300 px-1 py-0.5 rounded font-bold">⌄⌄ Expand All</span>
          </div>
          <div className="bg-slate-900 p-1 rounded text-[8px] text-emerald-400">
            📁 All 12 leaf nodes opened
          </div>
        </div>
      );

    case 'drilldown':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col justify-between">
          <div className="text-[8px] text-slate-400">Overview Block (Double Click)</div>
          <div className="bg-indigo-600 text-white p-1 rounded text-[9px] font-bold text-center shadow">
            ➔ Drill Down into Sub-View
          </div>
        </div>
      );

    case 'drillup':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col justify-between">
          <div className="text-[8px] text-slate-400">Sub-level Telemetry View</div>
          <div className="bg-slate-900 border border-indigo-400 text-indigo-300 p-1 rounded text-[9px] font-bold text-center">
            ← Drill Up to Root Dashboard
          </div>
        </div>
      );

    case 'nestedlist':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg text-[8px] text-slate-300 space-y-0.5">
          <div className="font-bold text-white">• 1. Calibration Step</div>
          <div className="pl-3 text-slate-400">a. Check limit switch</div>
          <div className="pl-5 text-indigo-300">i. Measure resistance</div>
        </div>
      );

    case 'outlineview':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg space-y-1 text-[8px]">
          <div className="text-indigo-300 font-bold border-b border-slate-800 pb-0.5">§ Outline Sidebar</div>
          <div className="text-slate-200">§ 1. Abstract</div>
          <div className="text-slate-400 pl-2">• 1.1 Motion Spec</div>
        </div>
      );

    case 'hierachybreadcrumb':
    case 'hierarchybreadcrumb':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex items-center gap-1 text-[8px] flex-wrap">
          <span className="text-slate-500">Root</span>
          <span className="text-indigo-400">/</span>
          <span className="text-slate-400">Line A</span>
          <span className="text-indigo-400">/</span>
          <span className="text-indigo-300 font-bold bg-indigo-950 px-1 rounded">Motor X</span>
        </div>
      );

    // -------------------------------------------------------------
    // 8. Dialogs, Popups & Overlays (#141 ~ #160) Dedicated Schematics
    // -------------------------------------------------------------
    case 'modal':
      return (
        <div className="relative w-48 h-24 bg-black/85 rounded-xl flex items-center justify-center z-10 border border-slate-700">
          <div className="w-40 bg-slate-900 border-2 border-indigo-500 rounded-lg p-1.5 shadow-2xl flex flex-col gap-1 font-mono text-[8px]">
            <div className="flex justify-between items-center text-white font-black border-b border-slate-800 pb-0.5">
              <span>Modal (Locked)</span>
              <span className="text-rose-400 font-bold">✕</span>
            </div>
            <div className="text-slate-400 text-[7px]">Focus Trapped Overlay</div>
            <div className="flex justify-end gap-1">
              <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold">OK</span>
            </div>
          </div>
        </div>
      );

    case 'dialog':
    case 'modal_dialog':
    case 'modal_window':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col gap-1 text-[8px]">
          <div className="flex justify-between items-center font-bold text-white border-b border-slate-800 pb-0.5">
            <span>Dialog Window</span>
            <span className="text-slate-400">✕</span>
          </div>
          <div className="bg-slate-900 p-1 rounded text-slate-300">Name: [Servo_X]</div>
          <div className="flex justify-end gap-1">
            <span className="bg-slate-800 text-slate-400 px-1 rounded">Cancel</span>
            <span className="bg-indigo-600 text-white px-1 rounded font-bold">Save</span>
          </div>
        </div>
      );

    case 'alertdialog':
      return (
        <div className="w-48 bg-slate-950 border-2 border-rose-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col gap-1 text-[8px] text-center">
          <div className="text-rose-400 font-black flex items-center justify-center gap-1">
            <span>⚠</span> <span>CRITICAL ALERT</span>
          </div>
          <div className="text-slate-300 text-[7px]">Thermal Limit Exceeded (85°C)</div>
          <div className="bg-rose-600 text-white p-1 rounded font-black mt-0.5 shadow">
            Acknowledge [OK]
          </div>
        </div>
      );

    case 'confirmdialog':
      return (
        <div className="w-48 bg-slate-950 border-2 border-rose-500/80 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col gap-1 text-[8px]">
          <div className="text-rose-300 font-bold">Delete Recipe Record?</div>
          <div className="text-slate-400 text-[7px]">Irreversible action</div>
          <div className="flex justify-end gap-1 mt-0.5">
            <span className="bg-slate-900 text-slate-400 px-1 py-0.5 rounded">Cancel</span>
            <span className="bg-rose-600 text-white px-1.5 py-0.5 rounded font-bold">Delete</span>
          </div>
        </div>
      );

    case 'popover':
      return (
        <div className="relative w-48 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col justify-start">
          <div className="bg-indigo-600 text-white px-1.5 py-0.5 rounded text-[8px] font-bold self-start">
            Filter ▾
          </div>
          <div className="absolute top-8 left-4 w-36 bg-slate-900 border-2 border-indigo-400 rounded-lg p-1 text-[7px] text-slate-200 shadow-2xl">
            <div className="font-bold text-indigo-300">Popover Card (Beak ▲)</div>
            <div>☑ Servos (4x)</div>
          </div>
        </div>
      );

    case 'popup':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex items-center justify-between">
          <span className="text-[8px] text-slate-400">Trigger Button</span>
          <div className="w-28 bg-slate-900 border-2 border-indigo-400 rounded-lg p-1 text-[8px] text-center shadow-xl text-white font-bold">
            Floating Popup
          </div>
        </div>
      );

    case 'tooltip':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col items-center justify-center gap-1">
          <div className="bg-black text-white text-[7px] font-bold px-1.5 py-0.5 rounded border border-slate-700 shadow-xl">
            Tooltip: Offset 0.005mm
          </div>
          <div className="w-6 h-6 rounded-lg bg-indigo-600/30 border border-indigo-400 text-white flex items-center justify-center text-[10px]">
            ?
          </div>
        </div>
      );

    case 'contextpopover':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col items-center justify-center">
          <div className="bg-slate-900 border border-indigo-400 rounded p-1 text-[7px] text-indigo-300 font-bold mb-1 shadow">
            Node #1 (120ms)
          </div>
          <div className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[8px] font-bold">
            Timeline Block
          </div>
        </div>
      );

    case 'draweroverlay':
      return (
        <div className="relative w-48 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg flex">
          <div className="flex-1 bg-black/70 p-1 text-[7px] text-slate-500">Backdrop</div>
          <div className="w-20 bg-slate-900 border-l-2 border-indigo-400 p-1 text-[7px] text-white font-bold space-y-0.5 shadow-2xl">
            <div>Drawer Panel</div>
            <div className="text-slate-400 text-[6px]">• Diagnostics</div>
          </div>
        </div>
      );

    case 'backdrop':
      return (
        <div className="relative w-48 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center">
            <span className="text-[9px] font-bold text-indigo-300 bg-slate-900 border border-indigo-500 px-2 py-1 rounded">
              Backdrop 70% Dim
            </span>
          </div>
        </div>
      );

    case 'scrim':
      return (
        <div className="relative w-48 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg flex items-center justify-center">
          <div className="absolute inset-0 bg-slate-950/75 flex flex-col items-center justify-center text-center p-1">
            <span className="text-[8px] text-indigo-300 font-bold bg-indigo-950 border border-indigo-400 px-1.5 py-0.5 rounded">
              Tap Scrim to Dismiss
            </span>
          </div>
        </div>
      );

    case 'lightbox':
      return (
        <div className="relative w-48 h-24 bg-black/95 border-2 border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-2xl flex flex-col justify-between text-[8px]">
          <div className="flex justify-between text-white font-bold border-b border-slate-800 pb-0.5">
            <span>Lightbox Viewer (95% Dim)</span>
            <span className="text-rose-400">✕</span>
          </div>
          <div className="text-center text-indigo-400 font-black text-[9px]">[ CAD Vector Viewport ]</div>
          <div className="text-[7px] text-slate-500 text-right">Zoom: 100%</div>
        </div>
      );

    case 'sheet':
      return (
        <div className="relative w-48 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg flex">
          <div className="flex-1 p-1 text-[7px] text-slate-500">Main Canvas</div>
          <div className="w-20 bg-slate-900 border-l-2 border-indigo-400 p-1 text-[8px] text-indigo-200 font-bold">
            Sheet Panel ➔
          </div>
        </div>
      );

    case 'bottomsheet':
      return (
        <div className="relative w-48 h-24 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg flex flex-col justify-end">
          <div className="bg-slate-900 border-t-2 border-indigo-400 rounded-t-xl p-1.5 text-center space-y-1">
            <div className="w-6 h-0.5 bg-slate-600 rounded-full mx-auto" />
            <div className="text-[8px] font-bold text-white">Bottom Sheet (Grabber ㅡ)</div>
          </div>
        </div>
      );

    case 'sidesheet':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden z-10 font-mono shadow-lg flex h-24">
          <div className="flex-1 p-1 text-[7px] text-slate-400">Main Workspace</div>
          <div className="w-20 bg-slate-900 border-l-2 border-indigo-400 p-1 text-[7px] text-slate-200 space-y-0.5">
            <div className="font-bold text-indigo-300">Side Sheet</div>
            <div>• BOM Spec</div>
          </div>
        </div>
      );

    case 'anchoredpopup':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col items-center justify-center">
          <div className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[8px] font-bold">
            Target Anchor [0,0]
          </div>
          <div className="w-32 bg-slate-900 border border-indigo-400 rounded p-1 text-[7px] text-slate-300 mt-1 shadow-xl text-center">
            Anchored to Corner
          </div>
        </div>
      );

    case 'nonmodaldialog':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg flex flex-col justify-between">
          <div className="text-[7px] text-emerald-400">Background Clickable ✓</div>
          <div className="bg-slate-900 border border-indigo-400 rounded p-1 text-[8px] text-white font-bold flex justify-between shadow-xl">
            <span>Find/Replace (Modeless)</span>
            <span className="text-slate-500">_</span>
          </div>
        </div>
      );

    case 'fullscreenmodal':
      return (
        <div className="w-48 bg-slate-950 border-2 border-emerald-400 rounded-xl p-1.5 z-10 font-mono shadow-2xl flex flex-col justify-between h-24 text-[8px]">
          <div className="flex justify-between items-center text-emerald-400 font-bold border-b border-slate-800 pb-0.5">
            <span>FULLSCREEN (100vw/vh)</span>
            <span className="text-rose-400">✕</span>
          </div>
          <div className="text-center text-slate-300 text-[7px]">
            Complex Multi-Step Report Wizard
          </div>
          <div className="bg-emerald-600 text-white text-center py-0.5 rounded font-bold text-[7px]">
            Save & Exit
          </div>
        </div>
      );

    case 'inlinedialog':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-lg space-y-1 text-[8px]">
          <div className="text-slate-400">Row #01 (Normal)</div>
          <div className="bg-rose-950 border border-rose-500 p-1 rounded text-[7px] text-rose-200 flex justify-between items-center">
            <span>Delete Row?</span>
            <span className="bg-rose-600 text-white px-1 rounded font-bold">[Yes]</span>
          </div>
        </div>
      );

    case 'coachmark':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex flex-col justify-between h-24">
          <div className="flex justify-between text-[7px]">
            <span className="border border-emerald-500 px-1 rounded text-emerald-700 dark:text-emerald-300 font-bold">🎯 Button</span>
            <span className="text-slate-500">Tour 1/3</span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-950 border border-emerald-500 rounded p-1 text-[7px] text-slate-800 dark:text-slate-200">
            <div className="font-bold text-emerald-700 dark:text-emerald-300">Coachmark Tip</div>
            <div className="flex justify-end mt-0.5">
              <span className="bg-emerald-600 text-white px-1 rounded font-bold text-[6px]">Next ➔</span>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 9. Feedback & Status (#161 ~ #180) Dedicated Schematics
    // -------------------------------------------------------------
    case 'alert_banner':
    case 'alertbanner':
    case 'alert':
      return (
        <div className="w-48 bg-amber-50 dark:bg-amber-950/60 border-2 border-amber-500 rounded-xl p-2 z-10 font-mono shadow-md flex flex-col gap-1 text-[8px] text-amber-950 dark:text-amber-200">
          <div className="flex justify-between items-center font-bold">
            <span className="flex items-center gap-1">⚠ Alert Banner</span>
            <span className="text-xs">✕</span>
          </div>
          <div className="text-[7px] text-slate-700 dark:text-slate-300">
            Inline persistent notification block
          </div>
        </div>
      );

    case 'toast':
      return (
        <div className="relative w-48 h-24 bg-white/90 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 rounded-xl p-2 z-10 font-mono shadow-md flex flex-col justify-end">
          <div className="bg-emerald-500 text-white p-1.5 rounded-lg text-[8px] font-bold flex justify-between items-center shadow-lg animate-bounce">
            <span>✓ Saved to Cloud</span>
            <span className="text-[7px] opacity-80">3s</span>
          </div>
        </div>
      );

    case 'snackbar':
      return (
        <div className="relative w-48 h-24 bg-white/90 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 rounded-xl p-2 z-10 font-mono shadow-md flex flex-col justify-end">
          <div className="bg-slate-900 text-white p-1.5 rounded-lg text-[8px] font-bold flex justify-between items-center shadow-xl border border-slate-700">
            <span>Item deleted</span>
            <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded text-[7px]">UNDO</span>
          </div>
        </div>
      );

    case 'notification':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex flex-col gap-1 text-[8px]">
          <div className="flex justify-between items-center font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 pb-0.5">
            <span>🔔 Notification Center</span>
            <span className="bg-rose-600 text-white px-1 rounded text-[7px]">3</span>
          </div>
          <div className="text-[7px] text-slate-600 dark:text-slate-400 space-y-0.5">
            <div>• New system log available</div>
            <div>• Backup sync completed</div>
          </div>
        </div>
      );

    case 'badge':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-around">
          <div className="relative">
            <span className="text-xl">🔔</span>
            <span className="absolute -top-1 -right-2 bg-rose-600 text-white text-[8px] font-bold px-1 rounded-full border border-white dark:border-slate-900">
              5
            </span>
          </div>
          <div className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-400 rounded-full text-[8px] font-bold">
            ● Active
          </div>
        </div>
      );

    case 'statusindicator':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-emerald-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <div className="text-[8px]">
            <div className="font-bold text-emerald-700 dark:text-emerald-400">ONLINE (60Hz)</div>
            <div className="text-[7px] text-slate-500">Live Heartbeat</div>
          </div>
        </div>
      );

    case 'statusdot':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-around">
          <div className="flex items-center gap-1 text-[8px] font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <span>Node 1</span>
          </div>
          <div className="flex items-center gap-1 text-[8px] font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            <span>Node 2</span>
          </div>
          <div className="flex items-center gap-1 text-[8px] font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
            <span>Node 3</span>
          </div>
        </div>
      );

    case 'progressbar':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex flex-col gap-1.5">
          <div className="flex justify-between text-[8px] font-bold text-slate-800 dark:text-slate-200">
            <span>Progress Bar</span>
            <span className="text-indigo-600 dark:text-indigo-400">68%</span>
          </div>
          <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-600 rounded-full w-[68%]" />
          </div>
        </div>
      );

    case 'progressring':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-center gap-2">
          <div className="w-10 h-10 rounded-full border-4 border-slate-200 dark:border-slate-800 border-t-indigo-600 border-r-indigo-600 flex items-center justify-center text-[9px] font-black text-indigo-600 dark:text-indigo-400">
            75%
          </div>
          <span className="text-[8px] font-bold text-slate-800 dark:text-slate-200">Progress Ring</span>
        </div>
      );

    case 'spinner':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-center gap-2">
          <div className="w-8 h-8 rounded-full border-3 border-slate-200 dark:border-slate-800 border-t-indigo-600 animate-spin" />
          <div className="text-[8px]">
            <div className="font-bold text-slate-800 dark:text-slate-200">Loading...</div>
            <div className="text-[7px] text-slate-500">Indeterminate</div>
          </div>
        </div>
      );

    case 'skeleton':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md space-y-1.5 animate-pulse">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-slate-300 dark:bg-slate-800" />
            <div className="h-2.5 bg-slate-300 dark:bg-slate-800 rounded w-20" />
          </div>
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full" />
        </div>
      );

    case 'emptystate':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-dashed border-slate-400 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-sm flex flex-col items-center justify-center text-center gap-1">
          <span className="text-base">📂</span>
          <div className="text-[8px] font-bold text-slate-700 dark:text-slate-300">No Data Found</div>
          <div className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[7px] font-bold">+ Create New</div>
        </div>
      );

    case 'errorstate':
      return (
        <div className="w-48 bg-rose-50 dark:bg-rose-950/60 border-2 border-rose-500 rounded-xl p-2 z-10 font-mono shadow-md flex flex-col items-center justify-center text-center gap-1">
          <span className="text-rose-600 text-sm font-black">⚠ 500 ERROR</span>
          <div className="text-[7px] text-slate-700 dark:text-slate-300">Connection Failed</div>
          <div className="bg-rose-600 text-white px-2 py-0.5 rounded text-[7px] font-bold">↻ Retry</div>
        </div>
      );

    case 'successstate':
      return (
        <div className="w-48 bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-500 rounded-xl p-2 z-10 font-mono shadow-md flex flex-col items-center justify-center text-center gap-1">
          <span className="text-emerald-600 text-base font-black">✓</span>
          <div className="text-[8px] font-bold text-emerald-800 dark:text-emerald-300">Task Completed!</div>
          <div className="text-[7px] text-slate-600 dark:text-slate-400">All records verified</div>
        </div>
      );

    case 'warningstate':
      return (
        <div className="w-48 bg-amber-50 dark:bg-amber-950/60 border-2 border-amber-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-start gap-1.5">
          <span className="text-amber-600 font-black text-sm">⚠</span>
          <div className="text-[8px]">
            <div className="font-bold text-amber-800 dark:text-amber-300">Warning State</div>
            <div className="text-[7px] text-slate-700 dark:text-slate-400">Torque approaching 90%</div>
          </div>
        </div>
      );

    case 'infostate':
      return (
        <div className="w-48 bg-sky-50 dark:bg-sky-950/60 border-2 border-sky-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-start gap-1.5">
          <span className="text-sky-600 font-black text-sm">ℹ</span>
          <div className="text-[8px]">
            <div className="font-bold text-sky-800 dark:text-sky-300">Info Notice</div>
            <div className="text-[7px] text-slate-700 dark:text-slate-400">IEC 60204-1 Compliant</div>
          </div>
        </div>
      );

    case 'callout':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-l-4 border-l-indigo-600 border border-slate-300 dark:border-slate-800 rounded-r-xl p-2 z-10 font-mono shadow-md flex flex-col gap-0.5">
          <div className="font-bold text-[8px] text-indigo-600 dark:text-indigo-400">💡 PRO TIP</div>
          <div className="text-[7px] text-slate-700 dark:text-slate-300">Callout note with left line</div>
        </div>
      );

    case 'inlinevalidation':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex flex-col gap-1">
          <div className="w-full h-5 bg-white dark:bg-slate-950 border-2 border-rose-500 rounded px-1 text-[8px] font-bold text-rose-600 flex items-center">
            Value: 90V ✕
          </div>
          <div className="text-[7px] text-rose-600 dark:text-rose-400 font-bold">
            ⚠ Must be 200V ~ 480V
          </div>
        </div>
      );

    case 'errormessage':
      return (
        <div className="w-48 bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 rounded-xl p-2 z-10 font-mono shadow-md space-y-0.5">
          <div className="text-[8px] font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1">
            <span>✕</span> <span>Error: Port COM3 Busy</span>
          </div>
          <div className="text-[7px] text-slate-600 dark:text-slate-400">
            Fix: Select COM4 or restart driver.
          </div>
        </div>
      );

    case 'successmessage':
      return (
        <div className="w-48 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 rounded-xl p-2 z-10 font-mono shadow-md space-y-0.5">
          <div className="text-[8px] font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
            <span>✓</span> <span>Config saved (14:32:09)</span>
          </div>
          <div className="text-[7px] text-slate-600 dark:text-slate-400">
            Hash: 0x8F9A32 Verified
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 10. States & Interaction (#181 ~ #200) Schematics
    // -------------------------------------------------------------
    case 'state_default':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[9px] font-bold text-slate-800 dark:text-slate-200">Default (Normal)</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700">Resting</span>
        </div>
      );

    case 'state_hover':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950/80 border-2 border-indigo-500 rounded-xl p-2.5 z-10 font-mono shadow-lg flex items-center justify-between scale-105">
          <span className="text-[9px] font-bold text-indigo-900 dark:text-indigo-200">Hover State 👆</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-indigo-600 text-white font-bold">:hover</span>
        </div>
      );

    case 'state_focus':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 ring-4 ring-indigo-500/25 rounded-xl p-2.5 z-10 font-mono shadow-xl flex items-center justify-between">
          <span className="text-[9px] font-bold text-slate-900 dark:text-slate-100">Focus Ring ⚡</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-indigo-600 text-white font-bold">:focus</span>
        </div>
      );

    case 'state_active':
      return (
        <div className="w-48 bg-indigo-800 text-white border-2 border-indigo-900 rounded-xl p-2.5 z-10 font-mono shadow-inner flex items-center justify-between translate-y-1">
          <span className="text-[9px] font-bold">Active Pressed ▼</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-200 font-bold">:active</span>
        </div>
      );

    case 'state_selected':
      return (
        <div className="w-48 bg-indigo-600 text-white border-2 border-indigo-700 rounded-xl p-2.5 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[9px] font-bold flex items-center gap-1"><span>✓</span> Selected Row</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-white text-indigo-900 font-bold">Active</span>
        </div>
      );

    case 'state_disabled':
      return (
        <div className="w-48 bg-slate-200 dark:bg-slate-850 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 z-10 font-mono opacity-40 cursor-not-allowed flex items-center justify-between">
          <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400">🚫 Disabled</span>
          <span className="text-[8px] text-slate-500">Locked</span>
        </div>
      );

    case 'state_readonly':
      return (
        <div className="w-48 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[9px] font-bold text-slate-800 dark:text-slate-200 select-all">Read-only (Copyable)</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">Ctrl+C</span>
        </div>
      );

    case 'state_checked':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2.5 z-10 font-mono shadow-md flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold">✓</span>
            <span className="text-[9px] font-bold text-slate-800 dark:text-slate-200">Checked</span>
          </div>
          <span className="text-[8px] font-bold text-indigo-600 dark:text-indigo-400">true</span>
        </div>
      );

    case 'state_unchecked':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 z-10 font-mono shadow-md flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded border-2 border-slate-400 bg-white dark:bg-slate-800 flex items-center justify-center text-[10px]" />
            <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400">Unchecked</span>
          </div>
          <span className="text-[8px] text-slate-400">false</span>
        </div>
      );

    case 'state_indeterminate':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2.5 z-10 font-mono shadow-md flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-indigo-600 text-white flex items-center justify-center text-[10px] font-black">−</span>
            <span className="text-[9px] font-bold text-indigo-900 dark:text-indigo-300">Partial [−]</span>
          </div>
          <span className="text-[8px] font-bold text-amber-500">Mixed</span>
        </div>
      );

    case 'state_expanded':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-300 dark:border-indigo-800 rounded-xl p-2 z-10 font-mono shadow-md space-y-1">
          <div className="text-[9px] font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
            <span>⌄</span> <span>Expanded (Open)</span>
          </div>
          <div className="pl-3 text-[7px] text-slate-600 dark:text-slate-400 border-l border-indigo-400">
            <div>• Sub-item 1</div>
            <div>• Sub-item 2</div>
          </div>
        </div>
      );

    case 'state_collapsed':
      return (
        <div className="w-48 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 z-10 font-mono shadow-md flex items-center justify-between">
          <div className="text-[9px] font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
            <span>›</span> <span>Collapsed (Closed)</span>
          </div>
          <span className="text-[8px] text-slate-400">Compact</span>
        </div>
      );

    case 'state_loading':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-2.5 z-10 font-mono shadow-md flex items-center justify-center gap-2">
          <span className="animate-spin text-sm">⟳</span>
          <span className="text-[9px] font-bold">Processing (Async)...</span>
        </div>
      );

    case 'state_error':
      return (
        <div className="w-48 bg-rose-50 dark:bg-rose-950/60 border-2 border-rose-500 rounded-xl p-2 z-10 font-mono shadow-md space-y-0.5">
          <div className="text-[9px] font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1">
            <span>✕</span> <span>Invalid (Error)</span>
          </div>
          <div className="text-[7px] text-rose-600 dark:text-rose-400 font-semibold">
            Validation failed
          </div>
        </div>
      );

    case 'state_warning':
      return (
        <div className="w-48 bg-amber-50 dark:bg-amber-950/60 border-2 border-amber-500 rounded-xl p-2 z-10 font-mono shadow-md space-y-0.5">
          <div className="text-[9px] font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1">
            <span>⚠</span> <span>Caution (Warning)</span>
          </div>
          <div className="text-[7px] text-amber-700 dark:text-amber-400">
            Advisory notice
          </div>
        </div>
      );

    case 'state_success':
      return (
        <div className="w-48 bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-500 rounded-xl p-2 z-10 font-mono shadow-md space-y-0.5">
          <div className="text-[9px] font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
            <span>✓</span> <span>Valid (Success)</span>
          </div>
          <div className="text-[7px] text-emerald-600 dark:text-emerald-400">
            Verification passed
          </div>
        </div>
      );

    case 'state_pressed':
      return (
        <div className="w-48 bg-indigo-700 text-white border-2 border-indigo-900 rounded-xl p-2.5 z-10 font-mono shadow-inner flex items-center justify-between">
          <span className="text-[9px] font-bold">Pressed Toggle</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-white text-indigo-900 font-bold">aria-pressed</span>
        </div>
      );

    case 'state_dragged':
      return (
        <div className="w-48 bg-indigo-100 dark:bg-indigo-950/60 border-2 border-dashed border-indigo-500 rounded-xl p-2.5 z-10 font-mono opacity-40 shadow-xl scale-95 flex items-center justify-between">
          <span className="text-[9px] font-bold text-indigo-900 dark:text-indigo-300">Dragged ✥</span>
          <span className="text-[8px] text-slate-500">opacity: 0.4</span>
        </div>
      );

    case 'state_droptarget':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950/80 border-2 border-dashed border-indigo-500 ring-4 ring-indigo-500/20 rounded-xl p-2.5 z-10 font-mono shadow-xl flex items-center justify-center gap-1 text-indigo-700 dark:text-indigo-300">
          <span className="text-xs">📥</span>
          <span className="text-[9px] font-bold">Drop Target Zone</span>
        </div>
      );

    case 'state_focusvisible':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-600 ring-4 ring-offset-2 ring-indigo-500 rounded-xl p-2.5 z-10 font-mono shadow-xl flex items-center justify-between">
          <span className="text-[9px] font-bold text-indigo-700 dark:text-indigo-300">⌨ :focus-visible</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-indigo-600 text-white font-bold">Tab Only</span>
        </div>
      );

    // -------------------------------------------------------------
    // 11. Drag, Drop & Direct Manipulation (#201 ~ #220) Schematics
    // -------------------------------------------------------------
    case 'dnd':
      return (
        <div className="w-52 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <div className="p-1 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-300">
            Source 📦
          </div>
          <span className="text-indigo-500 font-bold">━━━ ➔</span>
          <div className="p-1 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-400">
            Target 📥
          </div>
        </div>
      );

    case 'draggable':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-2.5 z-10 font-mono shadow-md flex items-center justify-between cursor-grab">
          <span className="text-[9px] font-bold">⠿ Draggable Item</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-indigo-800">true</span>
        </div>
      );

    case 'droppable':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950/80 border-2 border-dashed border-indigo-500 rounded-xl p-2.5 z-10 font-mono shadow-md flex items-center justify-center gap-1.5 text-indigo-700 dark:text-indigo-300">
          <span className="text-xs">🎯</span>
          <span className="text-[9px] font-bold">Droppable Target</span>
        </div>
      );

    case 'dropzone':
      return (
        <div className="w-48 bg-slate-50 dark:bg-slate-950 border-2 border-dashed border-indigo-500 rounded-xl p-3 z-10 font-mono shadow-md flex flex-col items-center gap-1">
          <span className="text-sm">📁</span>
          <span className="text-[8px] font-bold text-slate-800 dark:text-slate-200">Drop Zone (Upload)</span>
        </div>
      );

    case 'draghandle':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center gap-2">
          <span className="p-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 rounded font-black text-xs cursor-grab">⠿</span>
          <span className="text-[9px] font-bold text-slate-800 dark:text-slate-200">Row Title (Handle Only)</span>
        </div>
      );

    case 'grabhandle':
      return (
        <div className="w-48 bg-slate-900 text-white rounded-xl overflow-hidden z-10 font-mono shadow-lg border border-slate-700">
          <div className="bg-indigo-600 px-2 py-1 flex items-center justify-between text-[8px] font-bold cursor-move">
            <span>✥ Grab Bar</span>
            <span>TitleBar</span>
          </div>
          <div className="p-1.5 text-[7px] text-slate-400">Modal Window Body</div>
        </div>
      );

    case 'grip':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-center gap-1">
          <div className="w-4 h-8 bg-slate-200 dark:bg-slate-800 rounded flex flex-col items-center justify-center gap-0.5 border border-slate-300 dark:border-slate-700">
            <span className="w-1 h-1 rounded-full bg-slate-500" />
            <span className="w-1 h-1 rounded-full bg-slate-500" />
            <span className="w-1 h-1 rounded-full bg-slate-500" />
          </div>
          <span className="text-[8px] font-bold text-slate-700 dark:text-slate-300">Tactile Splitter Grip</span>
        </div>
      );

    case 'dropindicator':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-2 z-10 font-mono shadow-md space-y-1">
          <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded text-[7px] px-1 flex items-center">Node A</div>
          <div className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            <span className="w-full h-0.5 bg-indigo-600" />
          </div>
          <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded text-[7px] px-1 flex items-center">Node B</div>
        </div>
      );

    case 'dragpreview':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-2 z-10 font-mono shadow-2xl opacity-85 rotate-3 scale-95 flex items-center justify-between">
          <span className="text-[9px] font-bold">🗂 Drag Preview</span>
          <span className="text-[7px] bg-indigo-800 px-1 rounded">3 Items</span>
        </div>
      );

    case 'ghostelement':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950/40 border-2 border-dashed border-indigo-400 opacity-40 rounded-xl p-2.5 z-10 font-mono shadow-none flex items-center justify-center text-indigo-700 dark:text-indigo-300 text-[8px] font-bold">
          👻 Ghost (Origin 30% Opacity)
        </div>
      );

    case 'placeholder_dnd':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950/60 border-2 border-dashed border-indigo-500 rounded-xl p-2.5 z-10 font-mono shadow-inner flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-[8px] font-bold">
          [ Expanding Reserved Space ]
        </div>
      );

    case 'snap':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[8px] font-bold text-slate-700 dark:text-slate-300">Target Line</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-600 text-white font-bold">🧲 Snapped</span>
        </div>
      );

    case 'snappoint':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-around">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 border" />
          <span className="w-3.5 h-3.5 rounded-full bg-indigo-600 ring-4 ring-indigo-500/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 border" />
        </div>
      );

    case 'snapgrid':
      return (
        <div className="w-48 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:10px_10px] border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-center">
          <span className="px-2 py-1 bg-indigo-600 text-white rounded text-[8px] font-bold">20px Grid Snap</span>
        </div>
      );

    case 'magneticsnap':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-2.5 z-10 font-mono shadow-md flex items-center justify-center gap-1.5 animate-pulse">
          <span className="text-xs">🧲</span>
          <span className="text-[8px] font-bold">Magnetic Auto-Coupling</span>
        </div>
      );

    case 'freedrag':
      return (
        <div className="w-48 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500 rounded-xl p-2.5 z-10 font-mono shadow-md flex items-center justify-between text-emerald-800 dark:text-emerald-300">
          <span className="text-[8px] font-bold">Free Drag</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-600 text-white font-bold">1px Mode</span>
        </div>
      );

    case 'direct_resize':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[8px] font-bold">Width: 240px</span>
          <span className="w-1.5 h-4 bg-white/70 rounded cursor-ew-resize" />
        </div>
      );

    case 'direct_move':
      return (
        <div className="w-48 bg-emerald-600 text-white rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-center gap-1.5 cursor-move">
          <span>↔</span>
          <span className="text-[8px] font-bold">Direct Move (+40ms)</span>
        </div>
      );

    case 'pan':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2.5 z-10 font-mono shadow-md flex items-center justify-center gap-1 text-indigo-700 dark:text-indigo-300">
          <span className="text-xs">🖐</span>
          <span className="text-[8px] font-bold">Viewport Pan (Hand Tool)</span>
        </div>
      );

    case 'rubberband':
      return (
        <div className="w-48 bg-indigo-500/20 border-2 border-indigo-500 rounded-xl p-2.5 z-10 font-mono shadow-md flex items-center justify-center text-indigo-700 dark:text-indigo-300 text-[8px] font-bold">
          ⬚ Marquee Selection Box
        </div>
      );

    // -------------------------------------------------------------
    // 12. Timeline, Charts & Visualization (#221 ~ #240) Schematics
    // -------------------------------------------------------------
    case 'timeline':
      return (
        <div className="w-52 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md space-y-1">
          <div className="flex justify-between text-[7px] text-slate-400 border-b pb-0.5">
            <span>0ms</span><span>250ms</span><span>500ms</span>
          </div>
          <div className="h-3 bg-indigo-600 text-white rounded text-[7px] px-1 flex items-center font-bold">
            Multi-track Sequence
          </div>
        </div>
      );

    case 'gantt':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md space-y-1">
          <div className="h-2.5 w-20 bg-indigo-600 rounded" />
          <div className="text-[7px] text-indigo-500 pl-4">↳ Link</div>
          <div className="h-2.5 w-20 bg-emerald-600 rounded ml-16" />
        </div>
      );

    case 'timeaxis':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md">
          <div className="border-b-2 border-slate-800 dark:border-slate-200 flex justify-between text-[7px] font-bold pb-0.5">
            <span>0ms</span><span>100ms</span><span>200ms</span>
          </div>
        </div>
      );

    case 'timescale':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span>Scale Ratio</span>
          <span className="bg-indigo-800 px-1.5 py-0.5 rounded">1px = 10ms</span>
        </div>
      );

    case 'timelineheader':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span>📌 Sticky Header</span>
          <span>00:00 - 00:30</span>
        </div>
      );

    case 'timelinerow':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[8px] font-bold text-slate-800 dark:text-slate-200">Track Lane (40px)</span>
          <span className="text-[7px] bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-1 rounded font-bold">Row #1</span>
        </div>
      );

    case 'timelinebar':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span>Clip: 160ms</span>
          <span className="text-[7px] opacity-75">Width = Dur</span>
        </div>
      );

    case 'playhead':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md relative h-10 flex items-center">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-rose-600 flex flex-col items-center">
            <span className="text-[6px] text-rose-600 -mt-1">▼</span>
          </div>
          <span className="text-[7px] text-slate-400 pl-2">Playhead Needle</span>
        </div>
      );

    case 'timecursor':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[8px] font-bold text-slate-700 dark:text-slate-300">Time Cursor</span>
          <span className="text-[7px] px-1 bg-indigo-600 text-white rounded font-bold">240ms</span>
        </div>
      );

    case 'marker':
      return (
        <div className="w-48 bg-amber-50 dark:bg-amber-950/80 border border-amber-400 rounded-xl p-2 z-10 font-mono shadow-md flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
          <span>🚩</span>
          <span className="text-[8px] font-bold">Event Marker (80ms)</span>
        </div>
      );

    case 'milestone':
      return (
        <div className="w-48 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
          <span className="rotate-45 inline-block text-xs">◆</span>
          <span className="text-[8px] font-bold">Milestone Gate</span>
        </div>
      );

    case 'guideline_tl':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[7px] font-bold text-slate-700 dark:text-slate-300">Guide Projection</span>
          <span className="text-[7px] text-indigo-500 font-bold border-l-2 border-dashed border-indigo-500 pl-1">Snap Line</span>
        </div>
      );

    case 'gridline':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex justify-around text-[7px] text-slate-400">
          <span>│ 50ms</span><span>│ 100ms</span><span>│ 150ms</span>
        </div>
      );

    case 'majortick':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-black">
          <span>1.0s Major Tick</span>
          <span>❘</span>
        </div>
      );

    case 'minortick':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex justify-around text-[6px] text-slate-400 items-end">
          <span className="text-slate-800 dark:text-slate-200 font-bold text-[7px]">❙</span>
          <span>❘</span><span>❘</span><span>❘</span>
          <span className="text-slate-800 dark:text-slate-200 font-bold text-[7px]">❙</span>
        </div>
      );

    case 'zoomcontrol':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-slate-800 dark:text-slate-200">🔍 Zoom</span>
          <span className="px-1.5 py-0.5 rounded bg-indigo-600 text-white font-bold">150%</span>
        </div>
      );

    case 'zoomtofit':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-center gap-1.5 text-[8px] font-bold">
          <span>⤢</span>
          <span>Zoom to Fit (100%)</span>
        </div>
      );

    case 'timerange':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950/80 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-center text-indigo-700 dark:text-indigo-300 text-[8px] font-bold">
          [ Selected Loop Region ]
        </div>
      );

    case 'brush':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md space-y-1">
          <div className="h-2 bg-indigo-100 dark:bg-indigo-900 rounded" />
          <div className="h-3 bg-indigo-600/30 border border-indigo-600 rounded flex items-center justify-center text-[7px] font-bold text-indigo-600">
            Brush Slider
          </div>
        </div>
      );

    case 'minimap':
      return (
        <div className="w-48 bg-slate-900 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[7px]">
          <span className="text-slate-400">Mini Map</span>
          <div className="w-12 h-4 border border-indigo-400 bg-indigo-600/40 rounded flex items-center justify-center font-bold">
            Viewport
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 13. Canvas, Nodes & Diagramming (#241 ~ #260) Schematics
    // -------------------------------------------------------------
    case 'canvas':
      return (
        <div className="w-48 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:12px_12px] bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[8px] font-bold text-slate-700 dark:text-slate-200">2D Canvas</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded font-bold">X, Y Space</span>
        </div>
      );

    case 'workspace':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex gap-1 text-[7px]">
          <div className="w-10 bg-slate-100 dark:bg-slate-800 rounded p-1 text-center font-bold">Tool</div>
          <div className="flex-1 bg-indigo-50 dark:bg-indigo-950 rounded p-1 text-center font-bold text-indigo-600">Canvas</div>
          <div className="w-12 bg-slate-100 dark:bg-slate-800 rounded p-1 text-center font-bold">Inspect</div>
        </div>
      );

    case 'node':
      return (
        <div className="w-48 bg-slate-50 dark:bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md relative flex items-center justify-between">
          <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full -ml-3" />
          <span className="text-[8px] font-bold text-indigo-900 dark:text-indigo-200">Graph Node</span>
          <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full -mr-3" />
        </div>
      );

    case 'edge':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">Src</span>
          <div className="flex-1 h-0.5 bg-indigo-500 mx-2" />
          <span className="text-[7px] bg-emerald-600 text-white px-1 rounded">Dst</span>
        </div>
      );

    case 'connector':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[7px] font-bold text-slate-700 dark:text-slate-300">Connector Tool</span>
          <span className="text-[7px] text-indigo-600 font-bold border-t-2 border-dashed border-indigo-500 px-2">Drag Wire ➔</span>
        </div>
      );

    case 'port':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-around">
          <div className="w-4 h-4 rounded-full bg-indigo-600 border-2 border-white ring-2 ring-indigo-400 flex items-center justify-center text-[7px] text-white">IN</div>
          <span className="text-[8px] font-bold text-slate-600 dark:text-slate-400">Terminal</span>
          <div className="w-4 h-4 rounded-full bg-emerald-600 border-2 border-white ring-2 ring-emerald-400 flex items-center justify-center text-[7px] text-white">OUT</div>
        </div>
      );

    case 'anchorpoint':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-center gap-2">
          <div className="w-5 h-5 rounded-full border-2 border-indigo-600 flex items-center justify-center text-indigo-600 font-black text-xs">+</div>
          <span className="text-[8px] font-bold text-slate-800 dark:text-slate-200">Rotation Anchor</span>
        </div>
      );

    case 'controlpoint':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[7px] text-slate-500">P1</span>
          <div className="flex items-center gap-1 text-[7px] text-indigo-600 font-bold bg-indigo-50 dark:bg-indigo-950 px-1.5 py-0.5 rounded border border-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            <span>Bezier Tangent</span>
          </div>
          <span className="text-[7px] text-slate-500">P2</span>
        </div>
      );

    case 'transformhandle':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950 border-2 border-indigo-600 rounded-xl p-2 z-10 font-mono shadow-md relative flex items-center justify-center">
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-indigo-600" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-indigo-600" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-indigo-600" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-indigo-600" />
          <span className="text-[8px] font-bold text-indigo-900 dark:text-indigo-200">8 Transform Handles</span>
        </div>
      );

    case 'boundingbox':
      return (
        <div className="w-48 bg-indigo-50/40 dark:bg-indigo-950/30 border-2 border-dashed border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-center text-[8px] font-bold text-indigo-600">
          [ Bounding Box Boundary ]
        </div>
      );

    case 'selectionbox':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold ring-4 ring-indigo-500/30">
          <span>Selected Entity</span>
          <span>✓ Active</span>
        </div>
      );

    case 'marqueeselect':
      return (
        <div className="w-48 bg-indigo-500/20 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-center text-[8px] font-bold text-indigo-600">
          ⬚ Marquee Selection Box
        </div>
      );

    case 'lassoselect':
      return (
        <div className="w-48 bg-indigo-500/20 border-2 border-dashed border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-center text-[8px] font-bold text-indigo-600">
          ➰ Lasso Freehand Loop
        </div>
      );

    case 'canvasgrid':
      return (
        <div className="w-48 bg-[radial-gradient(#94a3b8_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#475569_1.5px,transparent_1.5px)] [background-size:16px_16px] bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md text-center text-[8px] font-bold text-slate-600 dark:text-slate-400">
          Dot Grid (20px)
        </div>
      );

    case 'rulers':
      return (
        <div className="w-48 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex justify-between text-[7px] text-slate-700 dark:text-slate-300 font-bold">
          <span>0px</span><span>100px</span><span>200px</span>
        </div>
      );

    case 'customguide':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[7px] font-bold text-slate-700 dark:text-slate-300">Custom Guide</span>
          <span className="text-[7px] bg-cyan-600 text-white px-1.5 py-0.5 rounded font-bold">X:140 Line</span>
        </div>
      );

    case 'smartguide':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[7px] font-bold text-slate-700 dark:text-slate-300">Smart Guide</span>
          <span className="text-[7px] bg-rose-600 text-white px-1.5 py-0.5 rounded font-bold">Center Matched</span>
        </div>
      );

    case 'alignment':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex justify-around text-[8px] font-bold text-indigo-600">
          <span>⇤ Left</span><span>❙ Center</span><span>⇥ Right</span>
        </div>
      );

    case 'distribution':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex justify-between items-center text-[7px] font-bold text-indigo-600">
          <span>[Box]</span><span>⟷ 24px</span><span>[Box]</span>
        </div>
      );

    case 'autolayout':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-center gap-1 text-[8px] font-bold">
          <span>⚡ Auto Layout (Dagre)</span>
        </div>
      );

    // -------------------------------------------------------------
    // 14. Forms, Validation & Data Entry (#261 ~ #280) Schematics
    // -------------------------------------------------------------
    case 'form_container':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md space-y-1">
          <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="flex justify-end">
            <span className="text-[7px] bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold">Submit Form</span>
          </div>
        </div>
      );

    case 'formgroup':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md space-y-0.5 text-[7px]">
          <span className="font-bold text-slate-800 dark:text-slate-200">1. Label</span>
          <div className="h-3 bg-slate-100 dark:bg-slate-800 border rounded px-1 flex items-center text-slate-400">2. Input</div>
          <span className="text-rose-600 font-bold">3. Inline Error</span>
        </div>
      );

    case 'fieldset':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-400 rounded-xl p-2 z-10 font-mono shadow-md relative">
          <span className="text-[7px] font-bold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-900 px-1 -mt-3.5 inline-block">
            &lt;fieldset&gt;
          </span>
          <div className="text-[7px] text-slate-600 dark:text-slate-400 pt-1">Enclosed Input Group</div>
        </div>
      );

    case 'legend':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[8px] font-bold text-indigo-600 dark:text-indigo-400 border border-indigo-400 px-1 rounded">Legend Title</span>
          <span className="text-[7px] text-slate-400">Fieldset Head</span>
        </div>
      );

    case 'label':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between">
          <span className="text-[8px] font-bold text-indigo-600 dark:text-indigo-400">htmlFor Label</span>
          <span className="text-[7px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 px-1 rounded font-bold">➔ Input Focus</span>
        </div>
      );

    case 'helpertext':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md space-y-1">
          <div className="h-3 bg-slate-100 dark:bg-slate-800 border rounded" />
          <span className="text-[7px] text-slate-500 block">ℹ Helper: Enter 200~480V</span>
        </div>
      );

    case 'placeholder_form':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md">
          <div className="h-4 bg-slate-50 dark:bg-slate-950 border border-dashed border-slate-400 rounded px-1.5 flex items-center text-[7px] text-slate-400">
            e.g. HG-SR352B
          </div>
        </div>
      );

    case 'requiredfield':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-slate-800 dark:text-slate-200">Name <span className="text-rose-600 font-black">*</span></span>
          <span className="text-[7px] bg-rose-100 dark:bg-rose-950 text-rose-600 px-1 rounded font-bold">Required</span>
        </div>
      );

    case 'optionalfield':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-600 dark:text-slate-400">Notes (Optional)</span>
          <span className="text-[7px] text-emerald-600 font-bold">Non-blocking</span>
        </div>
      );

    case 'validation':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-indigo-600">Zod Schema</span>
          <span className="text-[7px] bg-emerald-600 text-white px-1.5 rounded font-bold">VALID ✓</span>
        </div>
      );

    case 'clientval':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-700 dark:text-slate-300 font-bold">Browser 0ms</span>
          <span className="text-[7px] bg-emerald-600 text-white px-1.5 py-0.5 rounded font-bold">RegEx Passed</span>
        </div>
      );

    case 'serverval':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-700 dark:text-slate-300 font-bold">Backend DB</span>
          <span className="text-[7px] bg-rose-600 text-white px-1.5 py-0.5 rounded font-bold">409 Conflict</span>
        </div>
      );

    case 'inlineerror':
      return (
        <div className="w-48 bg-rose-50/50 dark:bg-rose-950/40 border border-rose-500 rounded-xl p-2 z-10 font-mono shadow-md space-y-0.5">
          <div className="h-3 bg-white dark:bg-slate-900 border border-rose-500 rounded" />
          <span className="text-[7px] text-rose-600 font-bold block">⚠ Offending field error</span>
        </div>
      );

    case 'inputmask':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md text-center text-[8px] font-bold text-indigo-600">
          010-8849-2041 (Auto-mask)
        </div>
      );

    case 'charcounter':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Textarea</span>
          <span className="text-[7px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 px-1.5 py-0.5 rounded font-bold">45 / 80 Chars</span>
        </div>
      );

    case 'clearbtn':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-700 dark:text-slate-300">Search text...</span>
          <span className="w-3.5 h-3.5 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center font-bold text-[8px]">✕</span>
        </div>
      );

    case 'resetform':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-700 dark:text-slate-300">Rollback All</span>
          <span className="text-[7px] bg-rose-600 text-white px-1.5 py-0.5 rounded font-bold">↺ Form Reset</span>
        </div>
      );

    case 'dirtystate':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-700 dark:text-slate-300">Config</span>
          <span className="text-[7px] bg-amber-500 text-white px-1.5 py-0.5 rounded font-bold">● isDirty</span>
        </div>
      );

    case 'autosave':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-700 dark:text-slate-300">Editor</span>
          <span className="text-[7px] text-emerald-600 font-bold">✓ Autosaved</span>
        </div>
      );

    case 'draftstate':
      return (
        <div className="w-48 bg-amber-50 dark:bg-amber-950/50 border-2 border-amber-400 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span className="text-amber-800 dark:text-amber-200">Document Mode</span>
          <span className="text-[7px] bg-amber-500 text-white px-1.5 rounded">DRAFT</span>
        </div>
      );

    // -------------------------------------------------------------
    // 15. Accessibility, System & Advanced Patterns (#281 ~ #300) Schematics
    // -------------------------------------------------------------
    case 'focusring':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-center">
          <div className="px-3 py-1 bg-indigo-600 text-white font-bold text-[8px] rounded ring-4 ring-indigo-400 ring-offset-2">
            Focus Ring Active
          </div>
        </div>
      );

    case 'keynav':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-indigo-600">Tab / Arrows</span>
          <span className="text-[7px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 px-1.5 py-0.5 rounded font-bold">0ms Keynav</span>
        </div>
      );

    case 'taborder':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-around text-[8px] font-bold">
          <span className="w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[7px]">1</span>
          <span className="text-slate-400">➔</span>
          <span className="w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[7px]">2</span>
          <span className="text-slate-400">➔</span>
          <span className="w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[7px]">3</span>
        </div>
      );

    case 'skiplink':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md">
          <div className="bg-indigo-600 text-white text-[7px] font-bold py-1 px-1.5 rounded text-center">
            ⏩ Skip to Content (#main)
          </div>
        </div>
      );

    case 'arialabel':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-700 dark:text-slate-300">[🗑 Trash Button]</span>
          <span className="text-[7px] text-indigo-600 font-bold">aria-label="Delete"</span>
        </div>
      );

    case 'sronly':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-700 dark:text-slate-300 font-bold">Status: OK</span>
          <span className="text-[7px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 px-1 rounded">.sr-only Narrator</span>
        </div>
      );

    case 'highcontrast':
      return (
        <div className="w-48 bg-black border-2 border-yellow-400 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-black text-yellow-300">
          <span>HIGH CONTRAST</span>
          <span className="text-[7px] bg-yellow-400 text-black px-1 rounded font-bold">19.5:1</span>
        </div>
      );

    case 'darkmode':
      return (
        <div className="w-48 bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-slate-100">
          <span className="font-bold text-indigo-400">Dark Deck</span>
          <span className="text-[7px] text-slate-400">#18202A Slate</span>
        </div>
      );

    case 'lightmode':
      return (
        <div className="w-48 bg-white border-2 border-slate-300 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-slate-900">
          <span className="font-bold text-indigo-600">Light Deck</span>
          <span className="text-[7px] text-slate-500">#F8FAFC White</span>
        </div>
      );

    case 'theme':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-slate-700 dark:text-slate-300">Theme Engine</span>
          <div className="flex gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
          </div>
        </div>
      );

    case 'designtoken':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">--color-primary</span>
          <span className="text-indigo-600 font-bold">#4F46E5</span>
        </div>
      );

    case 'component':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-indigo-600">&lt;MachineCard /&gt;</span>
          <span className="text-[7px] text-slate-400">props: {'{...}'}</span>
        </div>
      );

    case 'variant':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-around text-[7px] font-bold">
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded">Primary</span>
          <span className="bg-rose-600 text-white px-1.5 py-0.5 rounded">Destructive</span>
          <span className="border border-slate-400 px-1.5 py-0.5 rounded">Ghost</span>
        </div>
      );

    case 'statemachine':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[7px] font-bold">
          <span className="text-slate-500">IDLE</span>
          <span className="text-slate-400">➔</span>
          <span className="text-amber-500">RUNNING</span>
          <span className="text-slate-400">➔</span>
          <span className="text-emerald-500">DONE</span>
        </div>
      );

    case 'breakpoint':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold text-indigo-600">
          <span>sm:640px</span>
          <span>md:768px</span>
          <span>xl:1280px</span>
        </div>
      );

    case 'lazyloading':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-700 dark:text-slate-300">Code Split</span>
          <span className="text-[7px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 px-1 rounded font-bold">Dynamic import()</span>
        </div>
      );

    case 'virtualization_dom':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-700 dark:text-slate-300">100,000 Records</span>
          <span className="text-[7px] bg-emerald-600 text-white px-1.5 py-0.5 rounded font-bold">5 Nodes Rendered</span>
        </div>
      );

    case 'optimisticui':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-emerald-600">0ms UI Update</span>
          <span className="text-[7px] text-slate-400">Background Sync</span>
        </div>
      );

    case 'undostack':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-around text-[8px] font-bold">
          <span className="text-slate-400">Past[3]</span>
          <span className="text-indigo-600">Present</span>
          <span className="text-slate-400">Future[1]</span>
        </div>
      );

    case 'commandbar':
      return (
        <div className="w-48 bg-slate-900 border-2 border-indigo-400 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-white text-[8px]">
          <span className="text-indigo-400 font-bold">2 Selected</span>
          <span className="text-[7px] bg-indigo-600 px-1 py-0.5 rounded font-bold">Actions ➔</span>
        </div>
      );

    // -------------------------------------------------------------
    // 16. Layout Frame & Panes (#301 ~ #330) Schematics
    // -------------------------------------------------------------
    case 'app_shell':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex flex-col gap-1 text-[7px]">
          <div className="h-2 bg-indigo-600 rounded flex items-center px-1 text-white font-bold">Shell Top</div>
          <div className="flex gap-1 h-5">
            <div className="w-8 bg-slate-200 dark:bg-slate-800 rounded p-0.5 font-bold">Nav</div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-950 rounded p-0.5">Content</div>
          </div>
        </div>
      );

    case 'app_frame':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-slate-400 rounded-xl p-1 z-10 font-mono shadow-md text-[7px]">
          <div className="flex items-center gap-1 border-b pb-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-slate-600 dark:text-slate-300 font-bold ml-1">OS Chrome</span>
          </div>
          <div className="p-1 text-slate-400">Desktop Viewport</div>
        </div>
      );

    case 'master_detail':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1 z-10 font-mono shadow-md flex gap-1 text-[7px]">
          <div className="w-16 bg-slate-100 dark:bg-slate-800 rounded p-0.5 space-y-0.5">
            <div className="bg-indigo-600 text-white rounded px-0.5 font-bold">Item 1 ✓</div>
            <div className="text-slate-400 px-0.5">Item 2</div>
          </div>
          <div className="flex-1 bg-indigo-50 dark:bg-indigo-950/40 rounded p-0.5 font-bold text-indigo-600">
            Detail Specs
          </div>
        </div>
      );

    case 'two_pane':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1 z-10 font-mono shadow-md flex gap-1 text-[7px] text-center font-bold">
          <div className="flex-1 bg-indigo-50 dark:bg-indigo-950/40 p-1.5 rounded text-indigo-600">Pane A (50%)</div>
          <div className="flex-1 bg-slate-100 dark:bg-slate-800 p-1.5 rounded text-slate-700 dark:text-slate-300">Pane B (50%)</div>
        </div>
      );

    case 'three_pane':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1 z-10 font-mono shadow-md flex gap-0.5 text-[6px] text-center font-bold">
          <div className="w-10 bg-slate-200 dark:bg-slate-800 p-1 rounded">Tree</div>
          <div className="flex-1 bg-indigo-600 text-white p-1 rounded">Canvas</div>
          <div className="w-10 bg-slate-200 dark:bg-slate-800 p-1 rounded">Inspect</div>
        </div>
      );

    case 'split_view':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1 z-10 font-mono shadow-md flex items-center justify-between text-[7px]">
          <span className="font-bold text-indigo-600">Left 40%</span>
          <span className="w-1.5 h-6 bg-indigo-500 rounded flex items-center justify-center text-white text-[6px]">⋮</span>
          <span className="font-bold text-slate-600 dark:text-slate-400">Right 60%</span>
        </div>
      );

    case 'nested_split':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1 z-10 font-mono shadow-md flex gap-1 text-[6px] text-center font-bold">
          <div className="w-12 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center">Outer</div>
          <div className="flex-1 flex flex-col gap-0.5">
            <div className="bg-indigo-600 text-white rounded p-0.5">Sub Top</div>
            <div className="bg-slate-100 dark:bg-slate-800 rounded p-0.5">Sub Bottom</div>
          </div>
        </div>
      );

    case 'dockable_panel':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-indigo-600">Docked Panel</span>
          <span className="text-[7px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 px-1 rounded font-bold">⇄ Float</span>
        </div>
      );

    case 'docking_layout':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-center">
          <div className="w-12 h-6 border-2 border-dashed border-indigo-500 rounded flex items-center justify-center text-[7px] font-bold text-indigo-600">
            Dock Cross
          </div>
        </div>
      );

    case 'collapsible_sb':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-indigo-600">Sidebar (200px)</span>
          <span className="text-[7px] bg-slate-200 dark:bg-slate-800 px-1 rounded font-bold">◀ 0px Collapse</span>
        </div>
      );

    case 'resizable_sb':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-indigo-600">Resizable</span>
          <span className="text-[7px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 px-1 rounded font-bold">↔ 180~450px</span>
        </div>
      );

    case 'inspector_panel':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Selected Node</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold">Inspector</span>
        </div>
      );

    case 'properties_panel':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Key: Value</span>
          <span className="text-[7px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 px-1 rounded font-bold">Form Props</span>
        </div>
      );

    case 'utility_panel':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-slate-700 dark:text-slate-300">Layers / History</span>
          <span className="text-[7px] text-indigo-600 font-bold">Utility Deck</span>
        </div>
      );

    case 'workspace_reg':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-md text-center text-[8px] font-bold text-indigo-600">
          Central Workspace Canvas
        </div>
      );

    case 'content_reg':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Route URL</span>
          <span className="text-[7px] bg-emerald-600 text-white px-1.5 rounded font-bold">Routed Body</span>
        </div>
      );

    case 'header_reg':
      return (
        <div className="w-48 bg-slate-900 border-2 border-indigo-400 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-white text-[8px] font-bold">
          <span className="text-indigo-400">Header Bar</span>
          <span className="text-[7px] bg-indigo-600 px-1 rounded">h:64px</span>
        </div>
      );

    case 'footer_reg':
      return (
        <div className="w-48 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-2 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-600 dark:text-slate-400">Ground Metadata</span>
          <span className="text-[7px] font-bold text-slate-700 dark:text-slate-300">Footer</span>
        </div>
      );

    case 'status_bar':
      return (
        <div className="w-48 bg-slate-900 border border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold text-slate-200">
          <span>X:1420 Y:850</span>
          <span className="text-[7px] text-emerald-400">STATUS BAR ●</span>
        </div>
      );

    case 'toolbar_reg':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-around text-[7px] font-bold">
          <span className="px-1 bg-slate-100 dark:bg-slate-800 rounded">Select</span>
          <span className="px-1 bg-indigo-600 text-white rounded">Pen</span>
          <span className="px-1 bg-slate-100 dark:bg-slate-800 rounded">Wire</span>
        </div>
      );

    case 'context_toolbar':
      return (
        <div className="w-48 bg-slate-900 border-2 border-amber-400 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[7px] text-white font-bold">
          <span className="text-amber-400">Node Selected</span>
          <span className="bg-indigo-600 px-1 rounded">Context Bar</span>
        </div>
      );

    case 'panel_stack':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-indigo-600">[Tab 1] Tab 2</span>
          <span className="text-[7px] text-slate-400">Stacked Panel</span>
        </div>
      );

    case 'panel_group':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-slate-700 dark:text-slate-300">Calibration Group</span>
          <span className="text-[7px] bg-slate-200 dark:bg-slate-800 px-1 rounded">Accordion</span>
        </div>
      );

    case 'resp_split':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold text-indigo-600">
          <span>Desktop: Row</span>
          <span>➔ Mobile: Col</span>
        </div>
      );

    case 'minmax_pane':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Min 100px</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1.5 rounded font-bold">Clamped</span>
          <span className="text-slate-500">Max 240px</span>
        </div>
      );

    case 'collapse_thresh':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">&lt;70px Width</span>
          <span className="text-[7px] bg-rose-600 text-white px-1.5 rounded font-bold">Auto Snap 0px</span>
        </div>
      );

    case 'sticky_ws_header':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="bg-indigo-600 text-white px-1 rounded font-bold text-[7px]">Sticky top-0</span>
          <span className="text-slate-400">Scrollable Body</span>
        </div>
      );

    case 'indep_scroll':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-indigo-600 font-bold">Left Scroll</span>
          <span className="text-slate-400">|</span>
          <span className="text-emerald-600 font-bold">Right Scroll</span>
        </div>
      );

    case 'sync_scroll':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-indigo-600">Dual Sync</span>
          <span className="text-[7px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 px-1 rounded font-bold">1:1 Linked Offset</span>
        </div>
      );

    case 'scroll_boundary':
      return (
        <div className="w-48 bg-rose-50 dark:bg-rose-950/40 border-2 border-dashed border-rose-400 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-rose-600 font-bold">
          <span>Overscroll Limit</span>
          <span className="text-[7px] bg-rose-600 text-white px-1 rounded">Boundary</span>
        </div>
      );

    // 17. Table · Grid · High-Capacity Data Processing (#331 ~ #360)
    case 'editable_grid':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Cell Edit:</span>
          <span className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-500 text-indigo-600 px-1 rounded font-bold">3,000 RPM ✎</span>
        </div>
      );

    case 'spreadsheet_grid':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-indigo-500">fx =SUM(B1:B9)</span>
          <span className="bg-indigo-600 text-white px-1 rounded font-bold text-[7px]">B2: 890</span>
        </div>
      );

    case 'cell_editor':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Editor UI:</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">Dropdown ▾</span>
        </div>
      );

    case 'cell_renderer':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold">Gauge:</span>
          <div className="w-20 bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden flex">
            <div className="bg-emerald-500 h-full w-[80%]" />
          </div>
          <span className="text-emerald-600 font-bold text-[7px]">80%</span>
        </div>
      );

    case 'row_select':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950 border border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold text-indigo-600">
          <span>☑ Row #1 Active</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">Selected</span>
        </div>
      );

    case 'cell_select':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Range:</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">[B2:D5] (8 Cells)</span>
        </div>
      );

    case 'multi_row_select':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Multi Check:</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">3 Rows Checked</span>
        </div>
      );

    case 'pinned_col':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="bg-indigo-50 dark:bg-indigo-950 text-indigo-600 border-r border-indigo-400 pr-1 font-bold">📌 Part ID</span>
          <span className="text-slate-400">Scrollable Cols ➔</span>
        </div>
      );

    case 'pinned_row':
      return (
        <div className="w-48 bg-slate-900 text-white border border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-emerald-400 font-bold">📌 TOTAL (PINNED)</span>
          <span className="text-white font-bold">$3,600</span>
        </div>
      );

    case 'sticky_th':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span>th Header (Sticky)</span>
          <span className="text-[7px] bg-white text-indigo-600 px-1 rounded">top-0</span>
        </div>
      );

    case 'multilevel_header':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1 z-10 font-mono shadow-md text-center text-[7px]">
          <div className="bg-indigo-600 text-white font-bold py-0.5 rounded-t">Electrical Specs</div>
          <div className="grid grid-cols-2 gap-0.5 bg-slate-100 dark:bg-slate-800 p-0.5 font-bold text-slate-600 dark:text-slate-300">
            <span>Voltage</span>
            <span>Current</span>
          </div>
        </div>
      );

    case 'grouped_col':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950 border border-indigo-400 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-indigo-600 font-bold">
          <span>GROUP: Thermal</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">2 Cols</span>
        </div>
      );

    case 'col_visibility':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Col Visibility:</span>
          <span className="bg-indigo-600 text-white px-1.5 rounded font-bold text-[7px]">Temp: Shown 👁</span>
        </div>
      );

    case 'col_chooser':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Column Chooser:</span>
          <span className="bg-indigo-50 dark:bg-indigo-950 text-indigo-600 px-1 rounded font-bold">Checked (4/6)</span>
        </div>
      );

    case 'col_pinning':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Pin Action:</span>
          <span className="bg-indigo-600 text-white px-1.5 rounded font-bold text-[7px]">📌 Pin to Left</span>
        </div>
      );

    case 'col_autosize':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Autosize:</span>
          <span className="bg-indigo-50 dark:bg-indigo-950 text-indigo-600 px-1 rounded font-bold">Width: 220px (Fit)</span>
        </div>
      );

    case 'fit_columns':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-indigo-600">Fit to View</span>
          <span className="text-[7px] bg-emerald-600 text-white px-1 rounded font-bold">100% Width</span>
        </div>
      );

    case 'row_height_auto':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Row Stretch:</span>
          <span className="bg-indigo-50 dark:bg-indigo-950 text-indigo-600 px-1 rounded font-bold">Auto Multi-line</span>
        </div>
      );

    case 'dense_table':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-indigo-600">Dense Mode</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded font-bold">24px/Row</span>
        </div>
      );

    case 'comfortable_table':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-indigo-600">Comfortable</span>
          <span className="text-[7px] bg-emerald-600 text-white px-1 rounded font-bold">48px/Row</span>
        </div>
      );

    case 'zebra_striping':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1 z-10 font-mono shadow-md text-[7px]">
          <div className="bg-slate-100 dark:bg-slate-800 p-0.5 font-bold">Odd Row: #F8FAFC</div>
          <div className="p-0.5">Even Row: #FFFFFF</div>
        </div>
      );

    case 'hover_row':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-400 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-indigo-600 font-bold">
          <span>Row Hover</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">Highlight</span>
        </div>
      );

    case 'active_cell':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Focused:</span>
          <span className="border-2 border-indigo-500 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 px-1.5 py-0.5 rounded font-black text-[7px]">Cell B2</span>
        </div>
      );

    case 'dirty_cell':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Cell Status:</span>
          <span className="bg-amber-100 dark:bg-amber-950 text-amber-600 border border-amber-400 px-1 rounded font-bold text-[7px]">▲ Dirty (Modified)</span>
        </div>
      );

    case 'validation_cell':
      return (
        <div className="w-48 bg-rose-50 dark:bg-rose-950/60 border border-rose-400 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-rose-600 font-bold">
          <span>Validation Cell</span>
          <span className="text-[7px] bg-rose-600 text-white px-1 rounded">⚠ Invalid</span>
        </div>
      );

    case 'computed_col':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Formula:</span>
          <span className="bg-indigo-50 dark:bg-indigo-950 text-indigo-600 px-1 rounded font-bold">[Qty × Unit Price]</span>
        </div>
      );

    case 'aggregate_row':
      return (
        <div className="w-48 bg-slate-900 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span>SUM / AVG (Aggregate)</span>
          <span className="text-emerald-400">Total: 30 kW</span>
        </div>
      );

    case 'group_row':
      return (
        <div className="w-48 bg-slate-200 dark:bg-slate-800 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold text-slate-800 dark:text-slate-100">
          <span>⌄ Group: Servo Drives</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">2 Items</span>
        </div>
      );

    case 'row_detail':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950 border border-indigo-400 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-indigo-600 font-bold">
          <span>Row Detail</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">Sub-Table</span>
        </div>
      );

    case 'inline_row_actions':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-slate-600 dark:text-slate-300">Row #1</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">[Edit] [Clone] [Del]</span>
        </div>
      );

    // 18. Textbox · Memo & Text Editing (#361 ~ #390)
    case 'single_line_box':
    case 'single_line_tb':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-indigo-600 font-bold">Input Tag...</span>
          <span className="text-[7px] bg-slate-200 dark:bg-slate-800 text-slate-500 px-1 rounded">Enter ↵</span>
        </div>
      );

    case 'multi_line_box':
    case 'multi_line_tb':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1 z-10 font-mono shadow-md text-[7px]">
          <div className="text-slate-500 border-b pb-0.5 mb-0.5">Multi-Line Memo:</div>
          <div className="text-indigo-600 font-bold">Line 1: Log Data...<br />Line 2: Routine OK</div>
        </div>
      );

    case 'auto_growing_textarea':
    case 'autogrow_ta':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950 border border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-indigo-600 font-bold">
          <span>Auto Expand</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">3 Lines Height</span>
        </div>
      );

    case 'fixed_height_textarea':
    case 'fixed_ta':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Fixed 70px:</span>
          <span className="text-[7px] bg-slate-200 dark:bg-slate-800 px-1 rounded font-bold">Scrollable ⇅</span>
        </div>
      );

    case 'resizable_textarea':
    case 'resizable_ta':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Resizable:</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">Corner ⇲</span>
        </div>
      );

    case 'inline_text_editor':
    case 'inline_text_edit':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950 border border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-indigo-600 font-bold">
          <span>Editable Title</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">✎ Click</span>
        </div>
      );

    case 'contenteditable_field':
    case 'contenteditable':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold">Rich HTML:</span>
          <span className="text-indigo-600 font-black text-[7px]"><b>B</b> <i>I</i> <u>U</u></span>
        </div>
      );

    case 'floating_text_box':
    case 'floating_tb':
      return (
        <div className="w-48 bg-amber-100 dark:bg-amber-950 border border-amber-400 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-amber-900 dark:text-amber-200 font-bold">
          <span>📌 Floating Card</span>
          <span className="text-[7px] bg-amber-500 text-white px-1 rounded">Canvas Note</span>
        </div>
      );

    case 'anchored_text_box':
    case 'anchored_tb':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span>Anchored Node</span>
          <span className="text-[7px] bg-white text-indigo-600 px-1 rounded">+14.2mm Pin</span>
        </div>
      );

    case 'viewport_fixed_text_box':
    case 'vp_fixed_tb':
      return (
        <div className="w-48 bg-slate-900 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span className="text-emerald-400">HUD (Viewport)</span>
          <span className="text-[7px] bg-slate-800 text-slate-300 px-1 rounded">Top-Right Fixed</span>
        </div>
      );

    case 'draggable_text_box':
    case 'draggable_tb':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-indigo-600 font-bold">✛ Drag Header</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">Moveable</span>
        </div>
      );

    case 'resizable_text_box':
    case 'resizable_tb':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">2D Frame:</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">Resize Knobs</span>
        </div>
      );

    case 'editable_overlay_label':
    case 'overlay_label':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">CAD Dim:</span>
          <span className="bg-indigo-600 text-white px-1 rounded font-bold text-[7px]">120.5 mm ✎</span>
        </div>
      );

    case 'text_box_handle':
    case 'tb_handle':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-dashed border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-indigo-600 font-bold">
          <span>Transform Box</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">↺ Rotate Knob</span>
        </div>
      );

    case 'text_overflow':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-indigo-600 font-bold truncate max-w-[120px]">/var/log/sensor_data...</span>
          <span className="text-[7px] bg-slate-200 dark:bg-slate-800 px-1 rounded text-slate-500">Clip</span>
        </div>
      );

    case 'text_wrapping':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Wrap Mode:</span>
          <span className="bg-indigo-600 text-white px-1 rounded font-bold text-[7px]">break-words</span>
        </div>
      );

    case 'nowrap_text':
    case 'no_wrap':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">No Wrap:</span>
          <span className="bg-indigo-600 text-white px-1 rounded font-bold text-[7px]">whitespace-nowrap</span>
        </div>
      );

    case 'ellipsis_text':
    case 'ellipsis':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-indigo-600 font-bold">Path\...</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded font-bold">&quot;...&quot; Marker</span>
        </div>
      );

    case 'expandable_text':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Summary...</span>
          <span className="bg-indigo-600 text-white px-1 rounded font-bold text-[7px]">Read More ▾</span>
        </div>
      );

    case 'readonly_text':
    case 'readonly_tf':
      return (
        <div className="w-48 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500 font-bold">API_KEY_...</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">Read Only</span>
        </div>
      );

    case 'disabled_text':
    case 'disabled_tf':
      return (
        <div className="w-48 bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-slate-400">
          <span>Locked Input</span>
          <span className="text-[7px] bg-slate-300 dark:bg-slate-800 text-slate-500 px-1 rounded">Disabled</span>
        </div>
      );

    case 'prefix_suffix_field':
    case 'prefix_suffix':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="bg-slate-200 dark:bg-slate-800 px-1 rounded font-bold">https://</span>
          <span className="font-bold text-indigo-600">host</span>
          <span className="bg-slate-200 dark:bg-slate-800 px-1 rounded font-bold">:8080</span>
        </div>
      );

    case 'unit_input':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-indigo-600">150.0</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">mm ▾</span>
        </div>
      );

    case 'masked_text_input':
    case 'masked_input':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-indigo-600 font-bold">
          <span>120-81-49201</span>
          <span className="text-[7px] bg-slate-200 dark:bg-slate-800 text-slate-500 px-1 rounded">Mask</span>
        </div>
      );

    case 'monospace_text':
    case 'mono_tf':
      return (
        <div className="w-48 bg-slate-900 text-emerald-400 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span>ADDR: 0x7FFF</span>
          <span className="text-[7px] bg-slate-800 text-slate-300 px-1 rounded">Mono Font</span>
        </div>
      );

    case 'searchable_text':
    case 'searchable_tb':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Search:</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">3 Matches 🔍</span>
        </div>
      );

    case 'debounced_input':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Debounce:</span>
          <span className="bg-amber-100 dark:bg-amber-950 text-amber-600 border border-amber-400 px-1 rounded font-bold text-[7px]">400ms Delay</span>
        </div>
      );

    case 'text_selection_toolbar':
    case 'text_sel_toolbar':
      return (
        <div className="w-48 bg-slate-900 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-indigo-400 font-bold">Text Highlight</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">[B | I | Link]</span>
        </div>
      );

    case 'wysiwyg_editor':
    case 'rich_text_editor':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-black text-indigo-600">WYSIWYG</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold">Toolbar Ribbon</span>
        </div>
      );

    case 'markdown_editor':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">## Code</span>
          <span className="bg-emerald-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">Preview Pane</span>
        </div>
      );

    // 19. Window & Menu Bars (#391 ~ #410)
    case 'title_bar':
      return (
        <div className="w-48 bg-slate-800 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="font-bold text-indigo-400">Editor_01.dwg</span>
          <span className="text-[7px] text-slate-400">ㅡ □ ✕</span>
        </div>
      );

    case 'window_controls':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500 font-bold">Window Chrome</span>
          <span className="bg-red-500 text-white px-1 rounded font-bold text-[7px]">✕ Close</span>
        </div>
      );

    case 'menu_bar':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span className="text-indigo-600">File Edit View</span>
          <span className="text-[7px] bg-slate-200 dark:bg-slate-800 text-slate-500 px-1 rounded">Menu Bar</span>
        </div>
      );

    case 'menu_item':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span>Save As...</span>
          <span className="text-indigo-200 text-[7px]">Ctrl+Shift+S</span>
        </div>
      );

    case 'menu_separator':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1 z-10 font-mono shadow-md text-[7px] space-y-0.5">
          <div className="font-bold text-slate-600 dark:text-slate-300">Copy (Ctrl+C)</div>
          <div className="border-t border-slate-300 dark:border-slate-700 my-0.5" />
          <div className="font-bold text-red-500">Delete (Del)</div>
        </div>
      );

    case 'submenu':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span className="text-indigo-600">Export ➔</span>
          <span className="bg-indigo-600 text-white px-1 rounded text-[7px]">Submenu ▶</span>
        </div>
      );

    case 'checked_menu_item':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span className="text-indigo-600">✓ Show Grid</span>
          <span className="text-[7px] bg-slate-200 dark:bg-slate-800 px-1 rounded text-slate-500">Toggle</span>
        </div>
      );

    case 'radio_menu_item':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span className="text-indigo-600">● Korean (KO)</span>
          <span className="text-[7px] bg-slate-200 dark:bg-slate-800 px-1 rounded text-slate-500">Radio</span>
        </div>
      );

    case 'disabled_menu_item':
      return (
        <div className="w-48 bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-slate-400">
          <span>Paste (Empty)</span>
          <span className="text-[7px] bg-slate-300 dark:bg-slate-800 text-slate-500 px-1 rounded">Disabled</span>
        </div>
      );

    case 'modal_window':
      return (
        <div className="w-48 bg-slate-900 border-2 border-red-500 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span className="text-red-400">⚠️ Modal Focus</span>
          <span className="text-[7px] bg-red-600 text-white px-1 rounded">Blocking</span>
        </div>
      );

    case 'modeless_dialog':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span className="text-indigo-600">Find Tool</span>
          <span className="text-[7px] bg-emerald-600 text-white px-1 rounded">Modeless</span>
        </div>
      );

    case 'backdrop_click':
      return (
        <div className="w-48 bg-black/80 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-300">Dimmed Backdrop</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded font-bold">Click Dismiss</span>
        </div>
      );

    case 'floating_palette':
      return (
        <div className="w-48 bg-slate-800 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span className="text-indigo-400">🎨 Tool Palette</span>
          <span className="text-[7px] bg-slate-700 text-slate-300 px-1 rounded">Top Z-Index</span>
        </div>
      );

    case 'window_snapping':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-dashed border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span className="text-indigo-600">🧲 Edge Snap</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">Magnetic</span>
        </div>
      );

    case 'window_minimize':
      return (
        <div className="w-48 bg-slate-900 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-400 font-bold">ㅡ Minimize</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">To Taskbar</span>
        </div>
      );

    case 'window_maximize':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span className="text-indigo-600">□ Maximize (100%)</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">Restore</span>
        </div>
      );

    case 'cascade_windows':
      return (
        <div className="w-48 bg-slate-900 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-indigo-400 font-bold">Deck 1 ➔ 2 ➔ 3</span>
          <span className="text-[7px] bg-slate-700 text-slate-300 px-1 rounded">Cascade</span>
        </div>
      );

    case 'tile_windows':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500 font-bold">50% | 50%</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">Tile Side</span>
        </div>
      );

    case 'bring_to_front':
      return (
        <div className="w-48 bg-indigo-900 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span>Active Window</span>
          <span className="text-[7px] bg-indigo-500 text-white px-1 rounded">Front Focus</span>
        </div>
      );

    case 'sticky_notes':
      return (
        <div className="w-48 bg-amber-100 dark:bg-amber-950 border border-amber-400 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-amber-900 dark:text-amber-200 font-bold">
          <span>📌 Sticky Memo</span>
          <span className="text-[7px] bg-amber-500 text-white px-1 rounded">Quick Note</span>
        </div>
      );

    // 20. Mouse & Pointer Controls (#431 ~ #440)
    case 'hover_pointer':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950 border border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-indigo-600 font-bold">
          <span>Pointer Hover</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">Glow / Elevate</span>
        </div>
      );

    case 'active_pointer':
      return (
        <div className="w-48 bg-indigo-900 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span>:active (Pressed)</span>
          <span className="text-[7px] bg-amber-400 text-slate-900 px-1 rounded">Depth Scale</span>
        </div>
      );

    case 'double_click':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">2x Fast Click:</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">Rename Node</span>
        </div>
      );

    case 'right_click':
      return (
        <div className="w-48 bg-slate-900 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-indigo-400 font-bold">Right Click</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">Context Menu</span>
        </div>
      );

    case 'middle_click':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Wheel Click:</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">Canvas Pan</span>
        </div>
      );

    case 'wheel_zoom':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span>Wheel Scroll</span>
          <span className="text-[7px] bg-white text-indigo-600 px-1 rounded">Zoom 50-300%</span>
        </div>
      );

    case 'cursor_crosshair':
      return (
        <div className="w-48 bg-slate-900 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-emerald-400 font-bold">Crosshair (✛)</span>
          <span className="text-[7px] bg-slate-800 text-slate-300 px-1 rounded">CAD Drafting</span>
        </div>
      );

    case 'cursor_grab':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500 font-bold">Hand Cursor:</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">✋ Grab / ✊</span>
        </div>
      );

    case 'cursor_resize':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Resize Cursor:</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">↔ Col / ↕ Row</span>
        </div>
      );

    case 'pointer_capture':
      return (
        <div className="w-48 bg-emerald-900 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span>setPointerCapture</span>
          <span className="text-[7px] bg-emerald-500 text-white px-1 rounded">Window Escape OK</span>
        </div>
      );

    // 21. Keyboard Shortcuts & Hotkeys (#471 ~ #510)
    case 'global_shortcut':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span>Ctrl+S / Ctrl+Z</span>
          <span className="text-[7px] bg-white text-indigo-600 px-1 rounded">Global Scope</span>
        </div>
      );

    case 'modifier_keys':
      return (
        <div className="w-48 bg-slate-900 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-amber-400 font-bold">Ctrl/Shift/Alt</span>
          <span className="text-[7px] bg-slate-800 text-slate-300 px-1 rounded">Combo Key</span>
        </div>
      );

    case 'key_chord':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Chord:</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">Ctrl+K ➔ S</span>
        </div>
      );

    case 'arrow_nudge':
      return (
        <div className="w-48 bg-slate-900 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-indigo-400 font-bold">Arrow Keys</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">1px Nudge</span>
        </div>
      );

    case 'focus_trap':
      return (
        <div className="w-48 bg-emerald-950 border border-emerald-500 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span>Focus Trap</span>
          <span className="text-[7px] bg-emerald-500 text-white px-1 rounded">Modal Cycle</span>
        </div>
      );

    case 'esc_dismiss':
      return (
        <div className="w-48 bg-red-950 border border-red-500 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span>Escape Key</span>
          <span className="text-[7px] bg-red-500 text-white px-1 rounded">Dismiss / Close</span>
        </div>
      );

    case 'shortcut_cheat_sheet':
    case 'kbd_badge':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500 font-bold">&lt;kbd&gt; Keycap:</span>
          <span className="bg-slate-800 text-white px-1.5 py-0.5 rounded font-bold text-[7px] shadow-inner">Ctrl + /</span>
        </div>
      );

    case 'conflict_resolution':
    case 'typeahead':
    case 'access_key':
    case 'global_hotkey':
    case 'scoped_shortcut':
    case 'shortcut_customizer':
    case 'spacebar_pan':
    case 'delete_selection':
    case 'duplicate_shortcut':
    case 'group_ungroup':
    case 'select_all':
    case 'invert_selection':
    case 'find_in_page':
    case 'replace_modal':
    case 'cmd_k_palette':
    case 'zoom_in_out':
    case 'zoom_to_fit':
    case 'zoom_100':
    case 'next_tab_switch':
    case 'prev_tab_switch':
    case 'close_tab':
    case 'new_tab':
    case 'reopen_closed_tab':
    case 'toggle_sidebar':
    case 'toggle_console':
    case 'lock_selection':
    case 'hide_show_element':
    case 'align_shortcuts':
    case 'distribute_spacing':
    case 'full_screen':
    case 'data_refresh':
    case 'accessibility_mode':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950 border border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-indigo-600 dark:text-indigo-400 font-bold">
          <span>Hotkey Engine</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">Mapped</span>
        </div>
      );

    // 22. Icons & Symbols (#511 ~ #550)
    case 'action_icon':
      return (
        <div className="w-48 bg-indigo-600 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] font-bold">
          <span>Action Buttons</span>
          <span className="text-[7px] bg-white text-indigo-600 px-1 rounded">💾 📋 🗑 ⬇</span>
        </div>
      );

    case 'status_icon':
      return (
        <div className="w-48 bg-slate-900 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-emerald-400 font-bold">Status Badge</span>
          <span className="text-[7px] bg-slate-800 text-slate-300 px-1 rounded">✓ ⚠ ✕ ◌</span>
        </div>
      );

    case 'kebab_icon':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Kebab Menu:</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">⋮ Vertical</span>
        </div>
      );

    case 'meatball_icon':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Meatball Menu:</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">… Horizontal</span>
        </div>
      );

    case 'hamburger_icon':
      return (
        <div className="w-48 bg-slate-900 text-white rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-indigo-400 font-bold">Hamburger</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">☰ Drawer</span>
        </div>
      );

    case 'grip_dots_icon':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Grip Dots:</span>
          <span className="bg-slate-800 text-white px-1.5 py-0.5 rounded font-bold text-[7px]">⠿ Drag</span>
        </div>
      );

    case 'chevron_vs_arrow':
    case 'file_type_icon':
    case 'bento_icon':
    case 'sort_indicator':
    case 'filter_badge':
    case 'search_magnifier':
    case 'clear_input':
    case 'eye_toggle':
    case 'external_link':
    case 'copy_clipboard':
    case 'download_icon':
    case 'upload_icon':
    case 'lock_icon':
    case 'bookmark_pin':
    case 'bell_badge':
    case 'settings_gear':
    case 'help_question':
    case 'info_icon':
    case 'warning_triangle':
    case 'error_icon':
    case 'success_check':
    case 'loading_spinner':
    case 'undo_redo_icons':
    case 'trash_icon':
    case 'edit_pencil':
    case 'add_plus':
    case 'folder_icons':
    case 'sync_icon':
    case 'maximize_icon':
    case 'minimize_icon':
    case 'play_pause_icons':
    case 'tag_icon':
    case 'avatar_icon':
    case 'aria_label_icon':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950 border border-indigo-500 rounded-xl p-1.5 z-10 font-mono shadow-md flex items-center justify-between text-[8px] text-indigo-600 dark:text-indigo-400 font-bold">
          <span>Icon Symbol</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">Visual Token</span>
        </div>
      );

    // -------------------------------------------------------------
    // 23. Text Hint & Placeholder (#551 ~ #590) Schematics
    // -------------------------------------------------------------
    case 'ghost_text':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-lg px-2.5 py-2 z-10 font-mono shadow-md flex items-center">
          <span className="text-xs font-bold text-slate-900 dark:text-slate-100">Mit</span>
          <span className="text-xs text-slate-400 dark:text-slate-600 bg-indigo-50 dark:bg-indigo-950/40 px-0.5 rounded">ubishi Electric</span>
          <span className="ml-auto text-[8px] bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-1 py-0.5 rounded font-bold">Tab ⇥</span>
        </div>
      );

    case 'floating_label':
      return (
        <div className="relative w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-lg p-2 z-10 shadow-md">
          <span className="absolute -top-2 left-2 bg-indigo-600 text-white text-[8px] font-mono font-bold px-1.5 py-0.2 rounded shadow">
            Workpiece ID *
          </span>
          <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 block mt-1">WP-9920-X</span>
        </div>
      );

    case 'example_chips':
      return (
        <div className="w-48 flex flex-col gap-1 z-10 font-mono">
          <div className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded px-2 py-1 text-[10px] text-slate-700 dark:text-slate-300">
            Search terms...
          </div>
          <div className="flex gap-1 overflow-hidden">
            <span className="bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-700 text-[8px] px-1.5 py-0.5 rounded-full font-bold">#Servo</span>
            <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[8px] px-1.5 py-0.5 rounded-full">#220V</span>
            <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[8px] px-1.5 py-0.5 rounded-full">#350ms</span>
          </div>
        </div>
      );

    case 'microcopy':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2 z-10 shadow-sm flex flex-col gap-1 text-center font-mono">
          <div className="bg-indigo-600 text-white text-[9px] font-bold py-1 rounded">Save Changes</div>
          <span className="text-[7.5px] text-slate-500 dark:text-slate-400">💡 No charges until next cycle. Auto-saved.</span>
        </div>
      );

    case 'pwd_strength':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2 z-10 shadow-sm flex flex-col gap-1.5 font-mono">
          <div className="flex justify-between items-center text-[9px] font-bold text-slate-700 dark:text-slate-300">
            <span>Password</span>
            <span className="text-emerald-500">Strong (85%)</span>
          </div>
          <div className="grid grid-cols-4 gap-1 h-1.5">
            <div className="bg-emerald-500 rounded-full" />
            <div className="bg-emerald-500 rounded-full" />
            <div className="bg-emerald-500 rounded-full" />
            <div className="bg-slate-300 dark:bg-slate-700 rounded-full" />
          </div>
        </div>
      );

    case 'help_text':
      return (
        <div className="w-48 flex flex-col gap-1 z-10 font-mono">
          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded px-2 py-1 text-[10px] text-slate-800 dark:text-slate-200">
            admin_operator
          </div>
          <span className="text-[8px] text-slate-500 dark:text-slate-400">ℹ Must be 4-16 alphanumeric lowercase chars.</span>
        </div>
      );

    case 'inline_error':
      return (
        <div className="w-48 flex flex-col gap-1 z-10 font-mono">
          <div className="bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-500 rounded px-2 py-1 text-[10px] text-rose-700 dark:text-rose-300 font-bold flex justify-between">
            <span>invalid-email@</span>
            <span className="text-rose-500 font-bold">✕</span>
          </div>
          <span className="text-[8px] text-rose-600 dark:text-rose-400 font-bold">⚠ Enter a valid email format.</span>
        </div>
      );

    case 'char_counter':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2 z-10 shadow-sm flex flex-col gap-1 font-mono">
          <div className="text-[9px] text-slate-700 dark:text-slate-300">Brief status summary note...</div>
          <div className="text-right text-[8px] font-bold text-indigo-600 dark:text-indigo-400 border-t border-slate-200 dark:border-slate-800 pt-0.5">
            42 / 100 max
          </div>
        </div>
      );

    case 'empty_state':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-dashed border-slate-400 dark:border-slate-700 rounded-lg p-2 z-10 flex flex-col items-center gap-1 text-center font-mono">
          <span className="text-lg opacity-60">📦</span>
          <span className="text-[8px] font-bold text-slate-700 dark:text-slate-300">No telemetry logs found</span>
          <span className="text-[7px] text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-950 px-1.5 py-0.5 rounded border border-indigo-300 dark:border-indigo-800">+ Add Sensor Node</span>
        </div>
      );

    case 'tooltip_hint':
      return (
        <div className="w-48 flex flex-col items-center gap-1 z-10 font-mono">
          <div className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[8px] font-bold px-2 py-1 rounded shadow-lg">
            Calculates 3-axis torque load
          </div>
          <div className="w-2 h-2 bg-slate-900 dark:bg-slate-100 rotate-45 -mt-2" />
          <div className="bg-indigo-600 text-white text-[9px] px-2 py-0.5 rounded font-bold">Target Icon [⚙]</div>
        </div>
      );

    case 'badge_count':
      return (
        <div className="w-48 flex items-center justify-center gap-2 z-10 font-mono bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-2 rounded-lg">
          <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Alerts Tab</span>
          <span className="bg-rose-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full shadow animate-pulse">99+</span>
        </div>
      );

    case 'format_mask':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-indigo-500 rounded-lg p-2 z-10 font-mono shadow-sm flex flex-col gap-1">
          <span className="text-[8px] text-slate-400">Date Format Mask</span>
          <div className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 tracking-wider">
            2026 - <span className="text-slate-400 underline">08</span> - <span className="text-slate-400 underline">17</span>
          </div>
        </div>
      );

    case 'prefix_suffix':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-lg px-2 py-1.5 z-10 font-mono shadow-sm flex items-center justify-between text-[10px]">
          <span className="text-slate-500 font-bold bg-slate-100 dark:bg-slate-800 px-1 rounded">₩</span>
          <span className="font-black text-slate-800 dark:text-slate-200">1,250,000</span>
          <span className="text-slate-500 font-bold bg-slate-100 dark:bg-slate-800 px-1 rounded">KRW</span>
        </div>
      );

    case 'breadcrumb_hint':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2 z-10 font-mono text-[8px] shadow-sm flex items-center gap-1 overflow-hidden">
          <span className="text-slate-500">Root</span>
          <span className="text-slate-400">›</span>
          <span className="text-slate-500">Press-A</span>
          <span className="text-slate-400">›</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-950/60 px-1 rounded">Motor-1</span>
        </div>
      );

    case 'shortcut_pill':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1.5 z-10 font-mono shadow-sm flex items-center justify-between text-[9px]">
          <span className="text-slate-500">Search commands...</span>
          <span className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-1.5 py-0.5 rounded text-[8px] font-bold shadow-sm">
            ⌘ K
          </span>
        </div>
      );

    case 'autosave_hint':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2 z-10 font-mono shadow-sm flex items-center justify-between text-[8px]">
          <span className="text-slate-700 dark:text-slate-300 font-bold">Cloud Buffer</span>
          <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Saved (just now)</span>
          </div>
        </div>
      );

    case 'required_asterisk':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2 z-10 font-mono shadow-sm flex flex-col gap-1">
          <div className="text-[9px] font-bold text-slate-800 dark:text-slate-200">
            Emergency Stop Protocol <span className="text-rose-500 font-black text-xs">*</span>
          </div>
          <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded border border-rose-300 dark:border-rose-900/60" />
        </div>
      );

    case 'optional_badge':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2 z-10 font-mono shadow-sm flex flex-col gap-1">
          <div className="flex justify-between items-center text-[9px] font-bold text-slate-800 dark:text-slate-200">
            <span>Secondary Remarks</span>
            <span className="text-[7.5px] font-normal text-slate-500 bg-slate-100 dark:bg-slate-800 px-1 rounded">(선택)</span>
          </div>
          <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded" />
        </div>
      );

    case 'range_limit':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2 z-10 font-mono shadow-sm flex flex-col gap-1">
          <div className="flex justify-between text-[9px] font-bold text-slate-800 dark:text-slate-200">
            <span>Pressure Valve</span>
            <span className="text-indigo-600 dark:text-indigo-400">120 PSI</span>
          </div>
          <span className="text-[7.5px] text-slate-500 dark:text-slate-400">⚡ Allowed Range: 10.0 ~ 250.0 PSI</span>
        </div>
      );

    case 'slash_command':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-indigo-500/80 rounded-lg p-2 z-10 font-mono shadow-sm flex flex-col gap-1">
          <div className="text-[9px] text-slate-800 dark:text-slate-200 font-bold">
            /<span className="text-slate-400 font-normal">Type for command prompt...</span>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-300 dark:border-indigo-700 rounded p-1 text-[7.5px] text-indigo-700 dark:text-indigo-300 flex flex-col gap-0.5">
            <span>• /table : Insert Matrix</span>
            <span>• /chart : Telemetry Gauge</span>
          </div>
        </div>
      );

    case 'dropzone_microcopy':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border-2 border-dashed border-indigo-400 rounded-lg p-2 z-10 font-mono text-center flex flex-col items-center gap-0.5">
          <span className="text-xs">📂</span>
          <span className="text-[8px] font-bold text-slate-800 dark:text-slate-200">Drag files here or Browse</span>
          <span className="text-[6.5px] text-slate-500">PDF, STEP, DWG (Max 50MB)</span>
        </div>
      );

    case 'destructive_warning':
      return (
        <div className="w-48 bg-rose-50 dark:bg-rose-950/50 border-2 border-rose-500 rounded-lg p-2 z-10 font-mono flex flex-col gap-1 shadow-md text-center">
          <span className="text-[8px] font-bold text-rose-600 dark:text-rose-400">⚠ Irreversible Action</span>
          <span className="text-[7px] text-slate-600 dark:text-slate-300">All data will be permanently wiped.</span>
          <div className="bg-rose-600 text-white text-[7.5px] font-bold py-0.5 rounded shadow-sm">Delete Forever</div>
        </div>
      );

    case 'search_highlight':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2 z-10 font-mono text-[8.5px] shadow-sm flex flex-col gap-1">
          <div className="text-slate-800 dark:text-slate-200">
            Model: <mark className="bg-amber-300 dark:bg-amber-500/40 text-slate-950 dark:text-amber-200 px-1 rounded font-bold">HG-SR352</mark> Servo
          </div>
          <span className="text-[7px] text-slate-500">Query matched: "SR352"</span>
        </div>
      );

    case 'pagination_status':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-1.5 z-10 font-mono shadow-sm flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Showing 1-20 of 636</span>
          <div className="flex gap-1">
            <span className="px-1 bg-slate-100 dark:bg-slate-800 rounded">‹</span>
            <span className="px-1 bg-indigo-600 text-white rounded font-bold">1</span>
            <span className="px-1 bg-slate-100 dark:bg-slate-800 rounded">›</span>
          </div>
        </div>
      );

    case 'undo_toast':
      return (
        <div className="w-48 bg-slate-950 border border-slate-700 rounded-lg p-1.5 z-10 font-mono shadow-xl flex items-center justify-between text-[8px] text-white">
          <span>Row #14 deleted.</span>
          <span className="text-amber-400 font-bold bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-500/50 cursor-pointer">Undo (5s)</span>
        </div>
      );

    case 'version_tag':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2 z-10 font-mono shadow-sm flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Build Tag</span>
          <span className="bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700">v2.4.0-stable#8b9f</span>
        </div>
      );

    case 'step_progress':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2 z-10 font-mono shadow-sm flex flex-col gap-1">
          <div className="flex justify-between text-[8px] font-bold text-slate-800 dark:text-slate-200">
            <span>Step 2 of 4</span>
            <span className="text-indigo-600 dark:text-indigo-400">50%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-indigo-600" />
          </div>
        </div>
      );

    case 'time_remaining':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2 z-10 font-mono shadow-sm flex items-center justify-between text-[8px]">
          <span className="text-slate-500">Firmware Flash</span>
          <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1">
            ⏱ ~3 min left
          </span>
        </div>
      );

    case 'read_only_tag':
      return (
        <div className="w-48 bg-amber-50 dark:bg-amber-950/40 border border-amber-400 rounded-lg p-1.5 z-10 font-mono shadow-sm flex items-center justify-between text-[8px] text-amber-700 dark:text-amber-300 font-bold">
          <span>🔒 Read-Only Buffer</span>
          <span className="text-[7px] bg-amber-200 dark:bg-amber-900 px-1 py-0.2 rounded">Locked</span>
        </div>
      );

    case 'unsaved_dot':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2 z-10 font-mono shadow-sm flex items-center justify-between text-[8.5px]">
          <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>schema_draft.sql</span>
          </div>
          <span className="text-[7px] text-amber-500 font-bold">● Unsaved</span>
        </div>
      );

    case 'conn_status':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2 z-10 font-mono shadow-sm flex items-center justify-between text-[8px]">
          <span className="text-slate-500">PLC WebSocket</span>
          <div className="flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>LIVE (18ms)</span>
          </div>
        </div>
      );

    case 'clear_all_filters':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-1.5 z-10 font-mono shadow-sm flex items-center justify-between text-[8px]">
          <span className="bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 px-1.5 py-0.5 rounded font-bold">Cat: 23 ✕</span>
          <span className="text-rose-600 dark:text-rose-400 font-bold cursor-pointer underline text-[7.5px]">Clear All (3)</span>
        </div>
      );

    case 'expand_all_link':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-1.5 z-10 font-mono shadow-sm flex items-center justify-between text-[8px]">
          <span className="text-slate-700 dark:text-slate-300 font-bold">BOM Structure</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold cursor-pointer">⊞ Expand All</span>
        </div>
      );

    case 'select_all_hint':
      return (
        <div className="w-48 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-300 dark:border-indigo-700 rounded-lg p-1.5 z-10 font-mono text-[7.5px] text-indigo-800 dark:text-indigo-300 flex flex-col gap-0.5">
          <span>✓ 20 items on page selected.</span>
          <span className="font-bold underline cursor-pointer">Select all 636 items in database</span>
        </div>
      );

    case 'copy_toast':
      return (
        <div className="w-48 bg-slate-950 text-white rounded-lg p-1.5 z-10 font-mono text-[8px] shadow-lg flex items-center gap-1.5">
          <span className="text-emerald-400 font-bold">✓</span>
          <span>Copied "HG-SR352" to clipboard</span>
        </div>
      );

    case 'did_you_mean':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-1.5 z-10 font-mono text-[8px] shadow-sm flex flex-col gap-0.5">
          <span className="text-slate-500">0 results for "motsubishi"</span>
          <span className="text-indigo-600 dark:text-indigo-400 italic font-bold cursor-pointer">Did you mean: Mitsubishi?</span>
        </div>
      );

    case 'filter_chip_remove':
      return (
        <div className="w-48 flex items-center gap-1.5 z-10 font-mono bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-2 rounded-lg">
          <span className="bg-indigo-600 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1">
            Status: Error <span className="bg-white/30 text-white rounded-full px-1 cursor-pointer">✕</span>
          </span>
        </div>
      );

    case 'nav_tip_pill':
      return (
        <div className="w-48 bg-slate-950 text-slate-300 rounded-lg p-1.5 z-10 font-mono text-[7.5px] shadow flex items-center justify-between">
          <span>↑↓ Navigate</span>
          <span>↵ Select</span>
          <span>ESC Close</span>
        </div>
      );

    case 'offline_banner':
      return (
        <div className="w-48 bg-rose-600 text-white font-mono p-1.5 rounded-lg z-10 text-[8px] font-bold text-center shadow-lg flex items-center justify-center gap-1">
          <span>⚡ Network Offline (Local Storage Active)</span>
        </div>
      );

    case 'aria_live_hint':
      return (
        <div className="w-48 bg-white dark:bg-slate-900 border border-indigo-500 rounded-lg p-1.5 z-10 font-mono text-[7.5px] shadow-sm flex flex-col gap-0.5">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">aria-live="polite"</span>
          <span className="text-slate-500">Screen-reader auto announces value updates</span>
        </div>
      );

    // -------------------------------------------------------------
    // 24. Overlay & Transparency (#591 ~ #636) Schematics
    // -------------------------------------------------------------
    case 'zindex_stack':
      return (
        <div className="w-48 bg-slate-900 border border-indigo-500 rounded-lg p-2 z-10 font-mono text-[8px] shadow-md flex flex-col gap-1">
          <div className="flex justify-between items-center text-rose-400 font-bold border-b border-slate-800 pb-0.5">
            <span>z-50 Toast Alert</span>
            <span className="text-[7px]">Top</span>
          </div>
          <div className="flex justify-between items-center text-indigo-300 font-bold border-b border-slate-800 pb-0.5">
            <span>z-40 Modal Dialog</span>
            <span className="text-[7px]">Mid</span>
          </div>
          <div className="flex justify-between items-center text-slate-400">
            <span>z-10 Base Canvas</span>
            <span className="text-[7px]">Base</span>
          </div>
        </div>
      );

    case 'dimmed_backdrop':
      return (
        <div className="relative w-48 h-20 bg-slate-950 border border-slate-700 rounded-lg overflow-hidden flex items-center justify-center p-2 z-10">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
          <div className="relative z-10 bg-slate-900 border border-indigo-500 rounded p-1.5 text-center shadow-lg">
            <span className="text-[8px] font-mono font-bold text-indigo-300 block">Focused Modal</span>
            <span className="text-[7px] font-mono text-slate-400">Backdrop Dimmed 80%</span>
          </div>
        </div>
      );

    case 'glassmorphism':
      return (
        <div className="relative w-48 h-20 bg-gradient-to-r from-indigo-900 to-purple-900 border border-slate-700 rounded-lg overflow-hidden flex items-center justify-center p-2 z-10">
          <div className="w-36 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-1.5 shadow-xl text-center">
            <span className="text-[8px] font-mono font-bold text-white block">Frosted Glass Panel</span>
            <span className="text-[7px] font-mono text-indigo-200">backdrop-blur-md</span>
          </div>
        </div>
      );

    case 'click_through':
      return (
        <div className="relative w-48 h-20 bg-slate-900 border border-slate-700 rounded-lg overflow-hidden flex items-center justify-center p-2 z-10 font-mono">
          <button className="bg-emerald-600 text-white text-[8px] font-bold px-2 py-1 rounded shadow">Click Target Node</button>
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center border-2 border-dashed border-indigo-500/40 bg-indigo-500/10">
            <span className="text-[7px] text-indigo-300/80 font-bold uppercase rotate-[-8deg]">pointer-events: none</span>
          </div>
        </div>
      );

    case 'react_portal':
      return (
        <div className="w-48 bg-slate-900 border border-indigo-500 rounded-lg p-2 z-10 font-mono text-[8px] shadow flex flex-col gap-1">
          <div className="text-slate-400">Local Box [overflow:hidden]</div>
          <div className="bg-indigo-600 text-white p-1 rounded font-bold text-center">
            createPortal ➔ document.body
          </div>
        </div>
      );

    case 'stacking_context':
      return (
        <div className="w-48 bg-slate-900 border-2 border-indigo-500 rounded-lg p-1.5 z-10 font-mono text-[8px] flex flex-col gap-1">
          <span className="text-indigo-400 font-bold">isolation: isolate;</span>
          <div className="bg-slate-800 p-1 rounded text-[7px] text-slate-300">Sandbox Inner z-999 won't leak</div>
        </div>
      );

    case 'backdrop_blur':
      return (
        <div className="relative w-48 h-18 bg-indigo-950 border border-slate-700 rounded-lg overflow-hidden flex items-center justify-center z-10">
          <span className="text-[8px] font-mono text-slate-500">Underlying Sharp Graphic</span>
          <div className="absolute inset-x-2 top-2 bottom-2 bg-slate-900/60 backdrop-blur-md border border-white/20 rounded flex items-center justify-center font-mono text-[8px] text-white font-bold">
            backdrop-blur-md
          </div>
        </div>
      );

    case 'backdrop_dismiss':
      return (
        <div className="w-48 bg-slate-950 border border-slate-800 rounded-lg p-2 z-10 font-mono text-[8px] flex items-center justify-between text-slate-300">
          <span>Click Backdrop ➔</span>
          <span className="bg-rose-600 text-white px-1.5 py-0.5 rounded font-bold">Dismiss Modal</span>
        </div>
      );

    case 'scrim_overlay':
      return (
        <div className="relative w-48 h-18 bg-indigo-700 rounded-lg overflow-hidden flex flex-col justify-end p-2 z-10 font-mono">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <span className="relative z-10 text-[9px] font-bold text-white">White Title Legible on Scrim</span>
        </div>
      );

    case 'skeleton_overlay':
      return (
        <div className="w-48 bg-slate-900 border border-slate-800 rounded-lg p-2 z-10 font-mono flex flex-col gap-1.5">
          <div className="h-2.5 bg-slate-700/60 rounded animate-pulse w-3/4" />
          <div className="h-2 bg-slate-700/60 rounded animate-pulse w-1/2" />
        </div>
      );

    case 'sticky_shadow':
      return (
        <div className="w-48 bg-slate-900 border-b border-indigo-500 rounded-t-lg p-2 z-10 font-mono text-[8px] shadow-[0_8px_16px_rgba(0,0,0,0.6)] flex justify-between text-indigo-300 font-bold">
          <span>Sticky Header</span>
          <span>shadow-lg (scrollY &gt; 0)</span>
        </div>
      );

    case 'toast_stack':
      return (
        <div className="w-48 flex flex-col items-center gap-1 z-10 font-mono">
          <div className="w-40 bg-slate-800 border border-slate-700 rounded p-1 text-[7px] text-slate-400 shadow">Toast #1 (Background)</div>
          <div className="w-44 bg-indigo-900 border border-indigo-500 rounded p-1 text-[8px] text-white font-bold shadow-lg">Toast #2 (Active Deck)</div>
        </div>
      );

    case 'drawer_sheet':
      return (
        <div className="relative w-48 h-18 bg-slate-950 border border-slate-800 rounded-lg overflow-hidden flex justify-end z-10 font-mono">
          <div className="w-24 h-full bg-slate-900 border-l-2 border-indigo-500 p-1 text-[8px] text-indigo-300 font-bold shadow-2xl flex flex-col justify-between">
            <span>Slide Sheet ➔</span>
            <span className="text-[6px] text-slate-400">Preserves Viewport</span>
          </div>
        </div>
      );

    case 'hover_card':
      return (
        <div className="w-48 bg-slate-900 border-2 border-indigo-500 rounded-lg p-2 z-10 font-mono text-[8px] shadow-2xl flex flex-col gap-1">
          <div className="flex justify-between font-bold text-white">
            <span>Servo HG-SR352</span>
            <span className="text-emerald-400">Online</span>
          </div>
          <span className="text-[7px] text-slate-400">Hover trigger (z-30 popover)</span>
        </div>
      );

    case 'canvas_grid':
      return (
        <div className="relative w-48 h-18 bg-slate-950 border border-slate-800 rounded-lg overflow-hidden flex items-center justify-center z-10 font-mono">
          <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:10px_10px] opacity-40 pointer-events-none" />
          <span className="text-[8px] text-indigo-300 font-bold bg-slate-900/80 px-2 py-0.5 rounded">Dot Grid (pointer-events: none)</span>
        </div>
      );

    case 'marquee_overlay':
      return (
        <div className="relative w-48 h-18 bg-slate-900 border border-slate-700 rounded-lg overflow-hidden p-2 z-10 font-mono">
          <div className="absolute left-3 top-2 w-32 h-14 border-2 border-indigo-400 border-dashed bg-indigo-500/20 rounded flex items-end justify-end p-1">
            <span className="text-[6px] text-indigo-300 bg-slate-950 px-1 rounded font-bold">Marquee Bounds</span>
          </div>
        </div>
      );

    case 'smart_guides':
      return (
        <div className="relative w-48 h-18 bg-slate-950 border border-slate-800 rounded-lg p-2 z-10 font-mono flex items-center justify-center">
          <div className="absolute left-1/2 inset-y-0 w-0.5 bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.8)]" />
          <span className="bg-fuchsia-950 border border-fuchsia-500 text-fuchsia-200 text-[7.5px] px-1.5 py-0.5 rounded font-bold z-10">Snap Align 0.0px</span>
        </div>
      );

    case 'watermark_overlay':
      return (
        <div className="relative w-48 h-18 bg-slate-900 border border-slate-800 rounded-lg overflow-hidden flex items-center justify-center z-10 font-mono">
          <span className="text-slate-500 text-[8px]">Proprietary Schematic Data</span>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none rotate-[-20deg]">
            <span className="text-white/20 text-xs font-black tracking-widest uppercase border border-white/20 px-2 py-0.5">CONFIDENTIAL</span>
          </div>
        </div>
      );

    case 'fullscreen_loading':
      return (
        <div className="w-48 bg-slate-950/90 border border-indigo-500 rounded-lg p-2 z-10 font-mono flex flex-col items-center gap-1 shadow-2xl">
          <span className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-[8px] font-bold text-indigo-300">Synchronizing Telemetry...</span>
        </div>
      );

    case 'lightbox_overlay':
      return (
        <div className="relative w-48 h-18 bg-black border border-slate-800 rounded-lg overflow-hidden flex items-center justify-center z-10 font-mono">
          <div className="w-24 h-12 bg-indigo-900/60 border border-indigo-400 rounded flex items-center justify-center text-[7px] text-white font-bold">
            Isolated Media
          </div>
          <span className="absolute top-1 right-1 text-slate-400 text-[8px]">✕</span>
        </div>
      );

    case 'context_menu_overlay':
      return (
        <div className="w-48 bg-slate-900 border-2 border-indigo-500 rounded-lg p-1.5 z-10 font-mono text-[7.5px] shadow-2xl flex flex-col gap-0.5 text-slate-200">
          <span className="hover:bg-indigo-600 px-1 py-0.5 rounded font-bold">• Inspect Node</span>
          <span className="hover:bg-indigo-600 px-1 py-0.5 rounded">• Duplicate (Ctrl+D)</span>
          <span className="text-rose-400 hover:bg-rose-900/40 px-1 py-0.5 rounded">• Delete Node</span>
        </div>
      );

    case 'spotlight_overlay':
      return (
        <div className="w-48 bg-slate-950 border-2 border-indigo-500 rounded-xl p-2 z-10 font-mono shadow-2xl flex flex-col gap-1">
          <div className="flex items-center gap-1 text-[8.5px] text-white font-bold border-b border-slate-800 pb-1">
            <span>🔍</span>
            <span>Search Telemetry...</span>
          </div>
          <span className="text-[6.5px] text-slate-500">Global modal dimming background</span>
        </div>
      );

    case 'resizer_ghost':
      return (
        <div className="relative w-48 h-18 bg-slate-900 border border-slate-800 rounded-lg p-2 z-10 font-mono flex items-center justify-between">
          <div className="w-16 h-full bg-slate-800 rounded flex items-center justify-center text-[7px] text-slate-400">Left Pane</div>
          <div className="w-1 h-full bg-indigo-500 animate-pulse shadow-[0_0_8px_#6366f1]" />
          <div className="w-24 h-full bg-slate-800 rounded flex items-center justify-center text-[7px] text-slate-400">Ghost Tracking</div>
        </div>
      );

    case 'tour_spotlight':
      return (
        <div className="relative w-48 h-18 bg-black/80 border border-slate-800 rounded-lg overflow-hidden flex items-center justify-center z-10 font-mono">
          <div className="w-20 h-10 border-2 border-amber-400 rounded bg-transparent shadow-[0_0_20px_rgba(251,191,36,0.6)] flex items-center justify-center text-[7px] text-amber-300 font-bold">
            Step 1 Target
          </div>
        </div>
      );

    case 'pulse_glow':
      return (
        <div className="w-48 flex items-center justify-center gap-2 z-10 font-mono bg-slate-900 border border-slate-800 p-2 rounded-lg">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500" />
          </span>
          <span className="text-[8px] font-bold text-rose-300">Urgent Telemetry Alert</span>
        </div>
      );

    case 'glass_border':
      return (
        <div className="w-48 bg-slate-900/60 backdrop-blur-md border-t-2 border-t-white/40 border-b border-b-black/40 border-x border-slate-700/50 rounded-lg p-2 z-10 font-mono text-[8px] text-center text-white shadow-xl">
          Top Rim 1px Optical Highlight
        </div>
      );

    case 'dropdown_shield':
      return (
        <div className="relative w-48 h-18 bg-slate-900 border border-slate-800 rounded-lg p-2 z-10 font-mono flex flex-col justify-between">
          <div className="bg-indigo-600 text-white text-[7.5px] px-2 py-0.5 rounded self-start font-bold">Menu Item</div>
          <div className="border border-dashed border-indigo-400/40 text-[6.5px] text-indigo-300 text-center py-0.5">
            Transparent fixed inset-0 shield
          </div>
        </div>
      );

    case 'text_fade_mask':
      return (
        <div className="relative w-48 h-16 bg-slate-900 border border-slate-800 rounded-lg p-2 z-10 font-mono overflow-hidden">
          <p className="text-[7.5px] text-slate-300 leading-tight">
            Extremely long telemetry error description exceeding container bounding box width and height...
          </p>
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
        </div>
      );

    case 'heatmap_overlay':
      return (
        <div className="w-48 h-18 bg-gradient-to-r from-blue-600 via-amber-500 to-rose-600 rounded-lg p-2 z-10 font-mono flex items-center justify-between text-white font-bold text-[8px] shadow-lg">
          <span>Cold: 24°C</span>
          <span>Hot: 95°C</span>
        </div>
      );

    case 'fab_elevation':
      return (
        <div className="w-48 bg-slate-900 border border-slate-800 rounded-lg p-2 z-10 font-mono flex items-center justify-between">
          <span className="text-[7.5px] text-slate-400">Canvas Base View</span>
          <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-[0_8px_20px_rgba(99,102,241,0.6)]">
            +
          </div>
        </div>
      );

    case 'curtain_swipe':
      return (
        <div className="relative w-48 h-18 bg-slate-900 border border-slate-800 rounded-lg overflow-hidden flex z-10 font-mono">
          <div className="w-1/2 h-full bg-slate-800 flex items-center justify-center text-[7px] text-slate-400">Before</div>
          <div className="w-0.5 h-full bg-indigo-400 shadow-[0_0_8px_#6366f1]" />
          <div className="w-1/2 h-full bg-indigo-950 flex items-center justify-center text-[7px] text-indigo-300 font-bold">After (Diff)</div>
        </div>
      );

    case 'target_spotlight':
      return (
        <div className="w-48 bg-slate-950 border border-slate-800 rounded-lg p-2 z-10 font-mono flex items-center justify-between">
          <span className="opacity-20 text-[7px] text-slate-400">Node A</span>
          <span className="bg-indigo-600 text-white px-2 py-1 rounded font-bold text-[8px] shadow-[0_0_12px_#6366f1]">Target Node B</span>
          <span className="opacity-20 text-[7px] text-slate-400">Node C</span>
        </div>
      );

    case 'translucent_table_hdr':
      return (
        <div className="w-48 bg-slate-900 border border-slate-800 rounded-lg overflow-hidden z-10 font-mono flex flex-col">
          <div className="bg-slate-950/80 backdrop-blur border-b border-indigo-500/50 p-1 flex justify-between text-[7px] text-indigo-300 font-bold">
            <span>Sticky Top Header</span>
            <span>blur-sm</span>
          </div>
          <div className="p-1 text-[6.5px] text-slate-500">Row item 1 ... 2 ... 3</div>
        </div>
      );

    case 'canvas_ruler':
      return (
        <div className="w-48 bg-slate-900 border border-slate-800 rounded-lg p-1.5 z-10 font-mono flex flex-col gap-1">
          <div className="flex justify-between border-b border-indigo-500 text-[6.5px] text-indigo-300 pb-0.5">
            <span>| 0px</span>
            <span>| 50px</span>
            <span>| 100px</span>
            <span>| 150px</span>
          </div>
          <span className="text-[7.5px] text-slate-400 text-center">Canvas Pixel Ruler</span>
        </div>
      );

    case 'cursor_coords':
      return (
        <div className="w-48 bg-slate-900 border border-slate-800 rounded-lg p-2 z-10 font-mono flex items-center justify-between">
          <span className="text-[7px] text-slate-500">Pointer Target</span>
          <span className="bg-indigo-950 border border-indigo-500 text-indigo-300 px-1.5 py-0.5 rounded text-[7.5px] font-bold">
            X: 1,024 | Y: 768
          </span>
        </div>
      );

    case 'multimodal_depth':
      return (
        <div className="relative w-48 h-18 bg-slate-950 border border-slate-800 rounded-lg overflow-hidden flex items-center justify-center z-10 font-mono">
          <div className="w-36 h-12 bg-slate-900 border border-slate-700 rounded scale-90 brightness-75 flex items-center justify-center text-[7px] text-slate-500">
            Parent Modal
          </div>
          <div className="absolute w-32 h-10 bg-indigo-900 border-2 border-indigo-500 rounded text-[8px] text-white font-bold flex items-center justify-center shadow-2xl">
            Sub-Modal (Focus)
          </div>
        </div>
      );

    case 'ghost_node':
      return (
        <div className="w-48 bg-slate-900 border border-slate-800 rounded-lg p-2 z-10 font-mono flex items-center justify-between">
          <div className="w-16 h-8 border-2 border-dashed border-slate-600 rounded flex items-center justify-center text-[6.5px] text-slate-500">
            Ghost Slot
          </div>
          <div className="w-16 h-8 bg-indigo-600 rounded text-white font-bold flex items-center justify-center text-[7.5px] shadow-lg">
            Dragging Node
          </div>
        </div>
      );

    case 'floating_toolbar':
      return (
        <div className="w-48 flex flex-col items-center gap-1 z-10 font-mono">
          <div className="bg-slate-950 border border-indigo-500 rounded px-2 py-0.5 text-[7px] text-indigo-300 font-bold flex gap-2 shadow-xl">
            <span>Bold</span>
            <span>Link</span>
            <span>Color</span>
          </div>
          <div className="w-32 bg-slate-900 border border-slate-700 rounded p-1 text-[7.5px] text-slate-300 text-center">
            Selected Diagram Node
          </div>
        </div>
      );

    case 'glass_navbar':
      return (
        <div className="w-48 bg-slate-900/60 backdrop-blur-md border border-slate-700/80 rounded-lg p-1.5 z-10 font-mono flex items-center justify-between shadow-lg text-[7.5px] text-slate-300">
          <span className="font-bold text-white">⚙ Console</span>
          <span>Status: 100%</span>
        </div>
      );

    case 'minimap_overlay':
      return (
        <div className="relative w-48 h-18 bg-slate-950 border border-slate-800 rounded-lg p-1 z-10 font-mono flex items-end justify-end">
          <div className="w-16 h-12 bg-slate-900 border border-indigo-500/80 rounded p-0.5 relative flex items-center justify-center">
            <div className="w-8 h-6 border-2 border-indigo-400 bg-indigo-500/30 rounded" />
            <span className="absolute bottom-0.5 text-[5px] text-indigo-300">Minimap</span>
          </div>
        </div>
      );

    case 'vignette_shadow':
      return (
        <div className="relative w-48 h-18 bg-indigo-950 border border-slate-800 rounded-lg overflow-hidden flex items-center justify-center z-10 font-mono">
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />
          <span className="text-[8px] font-bold text-white z-10">Center Focus Vignette</span>
        </div>
      );

    case 'opacity_slider':
      return (
        <div className="w-48 bg-slate-900 border border-indigo-500 rounded-lg p-2 z-10 font-mono text-[8px] shadow-md flex flex-col gap-1">
          <div className="flex justify-between text-indigo-300 font-bold">
            <span>Layer Opacity</span>
            <span>70% Alpha</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-indigo-500 h-full w-[70%]" />
          </div>
        </div>
      );

    case 'collision_flip':
      return (
        <div className="w-48 bg-slate-900 border border-slate-800 rounded-lg p-2 z-10 font-mono text-[7.5px] flex items-center justify-between text-slate-300">
          <span>Viewport Bottom ➔</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold">Auto-Flip Upward</span>
        </div>
      );

    case 'hover_glow':
      return (
        <div className="relative w-48 h-18 bg-slate-900 border border-slate-800 rounded-lg overflow-hidden flex items-center justify-center z-10 font-mono">
          <div className="absolute w-20 h-20 bg-indigo-500/30 rounded-full blur-xl pointer-events-none" />
          <span className="text-[8px] font-bold text-indigo-200 z-10">Radial Cursor Glow</span>
        </div>
      );

    case 'zindex_3d_stack':
      return (
        <div className="w-48 bg-slate-900 border border-slate-700 rounded-lg p-2 z-10 font-mono text-[8px] shadow-md flex items-center justify-between text-indigo-300 font-bold">
          <span>3D Isometric Stack</span>
          <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded text-[7px]">Deconstruct</span>
        </div>
      );

    case 'universal_system':
      return (
        <div className="w-48 bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 border-2 border-indigo-400 rounded-lg p-2 z-10 font-mono shadow-2xl flex flex-col items-center gap-1 text-center">
          <span className="text-[8.5px] font-black text-white">Lexicon Design System</span>
          <span className="text-[7px] text-indigo-300 font-bold">636 Tokens & Labs Master Engine</span>
        </div>
      );

    default:
      return (
        <div className="flex flex-col items-center gap-1.5 z-10">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border-2 border-indigo-500/60 flex items-center justify-center text-indigo-400 font-mono font-black text-base shadow">
            #{term.num}
          </div>
          <span className="text-xs font-mono font-bold text-slate-200">{term.term}</span>
          <span className="text-[10px] font-mono text-indigo-400">[{type}]</span>
        </div>
      );
  }
}
