import React, { useState } from 'react';
import { 
  AppWindow, Minus, Square, X, Check, Dot, Layers, 
  Move, Maximize2, Minimize2, Grid, Sparkles, Pin, Layout
} from 'lucide-react';

/**
 * ----------------------------------------------------------------------------
 * Category 19: Window & Menu Bars (#391 ~ #410) Dedicated 1:1 Labs
 * High-contrast, Light/Dark adaptive UI/UX Architecture Workbench
 * ----------------------------------------------------------------------------
 */

// #391 Window Title Bar - Drag handle with system title & window icons
export const LiveWindowTitleBarLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#391 WINDOW TITLE BAR</span>
        <span className="text-[10px] text-slate-500">Draggable Chrome</span>
      </div>

      <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden shadow-lg">
        <div className="h-8 bg-slate-800 border-b border-slate-700 px-3 flex items-center justify-between cursor-move text-[10px] text-slate-200 font-bold">
          <div className="flex items-center gap-2">
            <AppWindow className="w-3.5 h-3.5 text-indigo-400" />
            <span>Facility Layout Editor - Project_01.dwg</span>
          </div>
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          </div>
        </div>
        <div className="p-4 text-center text-slate-500 text-[9px]">
          [Main Window Canvas Stage]
        </div>
      </div>
    </div>
  );
};

// #392 Window Control Buttons - Minimize, Maximize, Close Buttons
export const LiveWindowControlButtonsLab: React.FC = () => {
  const [closed, setClosed] = useState(false);
  const [maximized, setMaximized] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#392 WINDOW CONTROL BUTTONS</span>
        {closed && (
          <button onClick={() => setClosed(false)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
            Reopen Window
          </button>
        )}
      </div>

      {!closed ? (
        <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden shadow-lg transition-all">
          <div className="h-8 bg-slate-800 border-b border-slate-700 px-3 flex items-center justify-between text-[10px] text-slate-200">
            <span className="font-bold">Diagnostics Tool</span>
            <div className="flex items-center">
              <button className="w-6 h-6 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Minus className="w-3 h-3" />
              </button>
              <button onClick={() => setMaximized(!maximized)} className="w-6 h-6 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Square className="w-2.5 h-2.5" />
              </button>
              <button onClick={() => setClosed(true)} className="w-6 h-6 hover:bg-red-600 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
          <div className={`p-3 text-[9px] text-slate-400 text-center ${maximized ? 'h-24' : 'h-12'} flex items-center justify-center`}>
            Status: {maximized ? 'Maximized View Mode' : 'Standard Window'}
          </div>
        </div>
      ) : (
        <div className="p-4 bg-slate-200 dark:bg-slate-900 rounded-lg text-center text-slate-500 text-[9px]">
          Window closed. Click &quot;Reopen Window&quot; to restore.
        </div>
      )}
    </div>
  );
};

// #393 Menu Bar (File/Edit/View) - Classic desktop top menu strip
export const LiveMenuBarLab: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#393 MENU BAR (FILE/EDIT/VIEW)</span>
        <span className="text-[10px] text-indigo-600 font-bold">{activeMenu ? `[${activeMenu}] Open` : 'Click menu'}</span>
      </div>

      <div className="bg-slate-200 dark:bg-slate-800 rounded-lg p-1 relative">
        <div className="flex items-center gap-1 text-[10px] font-bold">
          {['File', 'Edit', 'View', 'Tools', 'Help'].map(m => (
            <button
              key={m}
              onClick={() => setActiveMenu(activeMenu === m ? null : m)}
              className={`px-2 py-1 rounded transition-colors ${activeMenu === m ? 'bg-indigo-600 text-white' : 'hover:bg-slate-300 dark:hover:bg-slate-700'}`}
            >
              {m}
            </button>
          ))}
        </div>

        {activeMenu === 'File' && (
          <div className="absolute top-8 left-1 w-44 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg shadow-2xl p-1 z-30 text-[9px] space-y-0.5">
            <div className="px-2 py-1 hover:bg-indigo-600 hover:text-white rounded cursor-pointer flex justify-between font-bold">
              <span>New Project</span>
              <span className="text-slate-400">Ctrl+N</span>
            </div>
            <div className="px-2 py-1 hover:bg-indigo-600 hover:text-white rounded cursor-pointer flex justify-between font-bold">
              <span>Save</span>
              <span className="text-slate-400">Ctrl+S</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// #394 Drop-Down Menu Item - Item with icon, label, and keyboard shortcut
export const LiveDropdownMenuItemLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#394 DROP-DOWN MENU ITEM</span>
        <span className="text-[10px] text-slate-500">Shortcut Alignment</span>
      </div>

      <div className="w-56 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg shadow-xl p-1.5 space-y-1">
        <div className="px-2 py-1 bg-indigo-600 text-white rounded cursor-pointer flex items-center justify-between text-[9px] font-bold">
          <span>Save As...</span>
          <span className="text-indigo-200">Ctrl+Shift+S</span>
        </div>
        <div className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer flex items-center justify-between text-[9px]">
          <span>Export DXF</span>
          <span className="text-slate-500">Ctrl+E</span>
        </div>
      </div>
    </div>
  );
};

// #395 Menu Separator (Divider) - 1px horizontal group divider
export const LiveMenuSeparatorLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#395 MENU SEPARATOR (DIVIDER)</span>
        <span className="text-[10px] text-slate-500">1px Group Line</span>
      </div>

      <div className="w-52 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg shadow-lg p-1.5 space-y-1 text-[9px]">
        <div className="px-2 py-1 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 rounded font-bold">Cut (Ctrl+X)</div>
        <div className="px-2 py-1 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 rounded font-bold">Copy (Ctrl+C)</div>
        {/* 1px Divider */}
        <div className="border-t border-slate-300 dark:border-slate-700 my-1" />
        <div className="px-2 py-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 rounded font-bold">Delete (Del)</div>
      </div>
    </div>
  );
};

// #396 Submenu (Cascading Menu) - Multi-tier nested flyout menu
export const LiveSubmenuLab: React.FC = () => {
  const [openSub, setOpenSub] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#396 SUBMENU (CASCADING)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Flyout Tier ▶</span>
      </div>

      <div className="relative h-24 flex items-start">
        <div className="w-36 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg shadow-lg p-1 text-[9px]">
          <div
            onMouseEnter={() => setOpenSub(true)}
            className="px-2 py-1 bg-indigo-600 text-white rounded font-bold flex justify-between items-center cursor-pointer"
          >
            <span>Export</span>
            <span>▶</span>
          </div>
          <div className="px-2 py-1 text-slate-500">Print...</div>
        </div>

        {openSub && (
          <div className="absolute left-32 top-0 w-32 bg-white dark:bg-slate-900 border border-indigo-500 rounded-lg shadow-2xl p-1 text-[9px] z-20 space-y-0.5 animate-fade-in">
            <div className="px-2 py-0.5 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded font-bold">PDF Document</div>
            <div className="px-2 py-0.5 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded font-bold">DXF CAD File</div>
            <div className="px-2 py-0.5 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded font-bold">CSV Telemetry</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #397 Checked Menu Item - Menu item with toggle checkmark
export const LiveCheckedMenuItemLab: React.FC = () => {
  const [grid, setGrid] = useState(true);
  const [snap, setSnap] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#397 CHECKED MENU ITEM</span>
        <span className="text-[10px] text-slate-500">Toggle State</span>
      </div>

      <div className="w-52 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg shadow-lg p-1.5 space-y-1 text-[9px]">
        <div
          onClick={() => setGrid(!grid)}
          className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded flex items-center justify-between cursor-pointer font-bold"
        >
          <span className="flex items-center gap-2">
            <span className="w-3 text-indigo-600 font-black">{grid ? '✓' : ''}</span>
            <span>Show Gridlines</span>
          </span>
          <span className="text-slate-400">G</span>
        </div>
        <div
          onClick={() => setSnap(!snap)}
          className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded flex items-center justify-between cursor-pointer font-bold"
        >
          <span className="flex items-center gap-2">
            <span className="w-3 text-indigo-600 font-black">{snap ? '✓' : ''}</span>
            <span>Snap to Node</span>
          </span>
          <span className="text-slate-400">S</span>
        </div>
      </div>
    </div>
  );
};

// #398 Radio Menu Item - Exclusive single-choice radio menu
export const LiveRadioMenuItemLab: React.FC = () => {
  const [lang, setLang] = useState('ko');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#398 RADIO MENU ITEM</span>
        <span className="text-[10px] text-indigo-600 font-bold">Selected: {lang.toUpperCase()}</span>
      </div>

      <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg shadow-lg p-1.5 space-y-0.5 text-[9px]">
        {[
          { key: 'ko', label: '한국어 (Korean)' },
          { key: 'en', label: 'English (US)' },
          { key: 'ja', label: '日本語 (Japanese)' }
        ].map(item => (
          <div
            key={item.key}
            onClick={() => setLang(item.key)}
            className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded flex items-center gap-2 cursor-pointer font-bold"
          >
            <span className={`w-2.5 h-2.5 rounded-full border flex items-center justify-center ${lang === item.key ? 'border-indigo-600 bg-indigo-600' : 'border-slate-400'}`}>
              {lang === item.key && <span className="w-1 h-1 bg-white rounded-full" />}
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #399 Disabled Menu Item - Dimmed non-clickable menu command
export const LiveDisabledMenuItemLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#399 DISABLED MENU ITEM</span>
        <span className="text-[10px] text-slate-400 font-bold">Locked Items</span>
      </div>

      <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg shadow-lg p-1.5 space-y-1 text-[9px]">
        <div className="px-2 py-1 font-bold text-slate-800 dark:text-slate-200">Copy (Ctrl+C)</div>
        <div className="px-2 py-1 text-slate-400 cursor-not-allowed opacity-50 flex justify-between">
          <span>Paste (Nothing in buffer)</span>
          <span>Ctrl+V</span>
        </div>
        <div className="px-2 py-1 text-slate-400 cursor-not-allowed opacity-50 flex justify-between">
          <span>Undo (No history)</span>
          <span>Ctrl+Z</span>
        </div>
      </div>
    </div>
  );
};

// #400 Modal Window - Dimmed backdrop focus dialog
export const LiveModalWindowLab: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#400 MODAL WINDOW</span>
        <button onClick={() => setOpen(true)} className="px-2 py-0.5 bg-red-600 text-white rounded text-[10px] font-bold">
          Open Delete Modal
        </button>
      </div>

      <div className="relative h-28 bg-slate-200 dark:bg-slate-900 rounded-lg p-2 flex items-center justify-center overflow-hidden">
        <div className="text-[9px] text-slate-500">Underlying Application Canvas</div>

        {open && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-3 z-30 animate-fade-in">
            <div className="bg-white dark:bg-slate-900 border-2 border-red-500 rounded-lg p-2.5 shadow-2xl text-[9px] space-y-2 w-56">
              <div className="font-bold text-red-600">⚠️ Confirm Delete Node?</div>
              <div className="text-slate-600 dark:text-slate-300 text-[8px]">This action will delete Motor_03 irrevocably.</div>
              <div className="flex justify-end gap-1.5 pt-1">
                <button onClick={() => setOpen(false)} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[8px]">Cancel</button>
                <button onClick={() => setOpen(false)} className="px-2 py-0.5 bg-red-600 text-white rounded text-[8px] font-bold">Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// #401 Modeless Dialog - Non-blocking floating search tool
export const LiveModelessDialogLab: React.FC = () => {
  const [pos, setPos] = useState({ x: 10, y: 10 });

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#401 MODELESS DIALOG</span>
        <span className="text-[10px] text-emerald-600 font-bold">Non-Blocking Tool</span>
      </div>

      <div className="relative h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 overflow-hidden">
        <div className="text-[8px] text-slate-500">
          [Main Sheet is 100% interactive while tool is open]
        </div>

        <div className="absolute top-2 right-2 w-44 bg-slate-100 dark:bg-slate-800 border-2 border-indigo-500 rounded-lg p-1.5 shadow-xl text-[8px] space-y-1">
          <div className="font-bold text-indigo-600 flex justify-between border-b pb-0.5">
            <span>Find & Replace (Ctrl+F)</span>
            <span className="cursor-pointer">✕</span>
          </div>
          <input placeholder="Find keyword..." className="w-full px-1.5 py-0.5 text-[8px] border rounded bg-white dark:bg-slate-900 outline-none" />
        </div>
      </div>
    </div>
  );
};

// #402 Backdrop Click Dismiss - Click dimmed backdrop to dismiss
export const LiveBackdropClickDismissLab: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#402 BACKDROP CLICK DISMISS</span>
        {!open && (
          <button onClick={() => setOpen(true)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
            Show Preview
          </button>
        )}
      </div>

      <div className="relative h-28 bg-slate-200 dark:bg-slate-900 rounded-lg p-2 flex items-center justify-center overflow-hidden">
        <div className="text-[9px] text-slate-500">Canvas Base</div>

        {open && (
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60 flex items-center justify-center p-3 z-30 cursor-pointer animate-fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 border border-indigo-500 rounded-lg p-3 shadow-2xl text-[9px] cursor-default text-center w-48"
            >
              <div className="font-bold text-indigo-600">Quick Preview Card</div>
              <div className="text-[8px] text-slate-500 mt-1">Click outside on the black area to close!</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// #403 Floating Palette Window - Photoshop-style layer toolbox palette
export const LiveFloatingPaletteLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#403 FLOATING PALETTE</span>
        <span className="text-[10px] text-indigo-600 font-bold">Top Z-Index Tools</span>
      </div>

      <div className="relative h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 overflow-hidden flex items-center justify-center">
        <div className="w-44 bg-slate-800 text-white rounded-lg shadow-2xl border border-slate-600 p-1.5 text-[8px] space-y-1">
          <div className="flex items-center justify-between font-bold border-b border-slate-700 pb-0.5 text-indigo-400">
            <span>🎨 Color & Brush Palette</span>
            <span>✛</span>
          </div>
          <div className="grid grid-cols-4 gap-1 pt-1">
            <span className="h-4 bg-red-500 rounded cursor-pointer" />
            <span className="h-4 bg-blue-500 rounded cursor-pointer" />
            <span className="h-4 bg-amber-500 rounded cursor-pointer" />
            <span className="h-4 bg-emerald-500 rounded cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

// #404 Window Snapping to Edges - Magnetic snap to viewport bounds
export const LiveWindowSnappingLab: React.FC = () => {
  const [snapped, setSnapped] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#404 WINDOW SNAPPING (MAGNETIC)</span>
        <button onClick={() => setSnapped(!snapped)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          {snapped ? 'Release' : 'Snap to Edge ➔'}
        </button>
      </div>

      <div className="relative h-28 bg-white dark:bg-slate-900 border-2 border-dashed border-slate-400 rounded-lg overflow-hidden">
        <div
          style={{ transform: snapped ? 'translate(150px, 0px)' : 'translate(20px, 20px)' }}
          className="w-36 bg-indigo-50 dark:bg-indigo-950 border-2 border-indigo-600 rounded p-1.5 shadow-lg text-[8px] font-bold transition-transform"
        >
          <div className="text-indigo-600">{snapped ? '🧲 Snapped Right' : 'Floating Window'}</div>
          <span className="text-[7px] text-slate-500">{snapped ? 'X: 100% Boundary' : 'Free Floating'}</span>
        </div>
      </div>
    </div>
  );
};

// #405 Window Minimize to Taskbar - Minimize window into tray tab
export const LiveWindowMinimizeLab: React.FC = () => {
  const [minimized, setMinimized] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#405 WINDOW MINIMIZE</span>
        <span className="text-[10px] text-slate-500">{minimized ? 'Minimized in Taskbar' : 'Active Window'}</span>
      </div>

      <div className="h-28 bg-slate-900 rounded-lg p-2 flex flex-col justify-between">
        {!minimized ? (
          <div className="w-48 bg-slate-800 border border-slate-700 rounded p-1.5 text-[8px] shadow-lg animate-fade-in">
            <div className="flex justify-between font-bold text-slate-200 border-b border-slate-700 pb-0.5">
              <span>Telemetry Monitor</span>
              <button onClick={() => setMinimized(true)} className="text-indigo-400 font-bold hover:text-white">ㅡ</button>
            </div>
            <div className="text-slate-400 text-[7px] mt-1">Collecting 120Hz vibration streams...</div>
          </div>
        ) : (
          <div className="text-slate-600 text-[8px] text-center mt-6">[Window Minimized into bottom bar]</div>
        )}

        {/* Bottom Taskbar */}
        <div className="h-6 bg-slate-950 border-t border-slate-800 flex items-center px-2">
          {minimized && (
            <button onClick={() => setMinimized(false)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[8px] font-bold flex items-center gap-1 animate-bounce">
              <AppWindow className="w-2.5 h-2.5" />
              <span>Telemetry (Restore)</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// #406 Window Maximize / Restore - Fullscreen stretch & coordinate memory
export const LiveWindowMaximizeRestoreLab: React.FC = () => {
  const [max, setMax] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#406 WINDOW MAXIMIZE / RESTORE</span>
        <button onClick={() => setMax(!max)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          {max ? 'Restore Size ❐' : 'Maximize □'}
        </button>
      </div>

      <div className="relative h-28 bg-slate-200 dark:bg-slate-900 rounded-lg p-2 overflow-hidden flex items-center justify-center">
        <div
          className={`bg-white dark:bg-slate-800 border-2 border-indigo-500 rounded-lg transition-all shadow-xl p-2 text-[8px] ${max ? 'w-full h-full' : 'w-40 h-16'}`}
        >
          <div className="font-bold text-indigo-600 flex justify-between border-b pb-0.5">
            <span>{max ? 'Maximized (100%)' : 'Restored (W:160 H:64)'}</span>
          </div>
          <div className="text-slate-500 text-[7px] mt-1">Coordinates: {max ? '0, 0 (Full Viewport)' : 'X:40, Y:30'}</div>
        </div>
      </div>
    </div>
  );
};

// #407 Cascade Windows - 30px diagonal offset window stacking
export const LiveCascadeWindowsLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#407 CASCADE WINDOWS</span>
        <span className="text-[10px] text-indigo-600 font-bold">Diagonal Offset</span>
      </div>

      <div className="relative h-28 bg-slate-900 rounded-lg p-2 overflow-hidden">
        <div className="absolute top-2 left-2 w-32 h-14 bg-slate-800 border border-slate-600 rounded p-1 text-[7px] text-slate-400 shadow">
          <div className="font-bold border-b border-slate-700">Doc 1.dwg</div>
        </div>
        <div className="absolute top-6 left-8 w-32 h-14 bg-slate-800 border border-slate-500 rounded p-1 text-[7px] text-slate-300 shadow-md">
          <div className="font-bold border-b border-slate-700">Doc 2.dwg</div>
        </div>
        <div className="absolute top-10 left-14 w-32 h-14 bg-indigo-900 border-2 border-indigo-400 rounded p-1 text-[7px] text-white shadow-xl">
          <div className="font-bold border-b border-indigo-700">Doc 3.dwg (Active)</div>
        </div>
      </div>
    </div>
  );
};

// #408 Tile Windows Horizontally / Vertically - 50:50 non-overlapping tile
export const LiveTileWindowsLab: React.FC = () => {
  const [vertical, setVertical] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#408 TILE WINDOWS</span>
        <button onClick={() => setVertical(!vertical)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          {vertical ? 'Tile Side-by-Side' : 'Tile Top-Bottom'}
        </button>
      </div>

      <div className={`h-28 bg-slate-900 rounded-lg p-1.5 flex gap-1.5 ${vertical ? 'flex-col' : 'flex-row'}`}>
        <div className="flex-1 bg-slate-800 border border-indigo-500/60 rounded p-2 text-[8px] font-bold text-slate-200">
          Window A (50%)
        </div>
        <div className="flex-1 bg-slate-800 border border-indigo-500/60 rounded p-2 text-[8px] font-bold text-slate-200">
          Window B (50%)
        </div>
      </div>
    </div>
  );
};

// #409 Bring to Front / Active Window - Click background window to bring forward
export const LiveBringToFrontLab: React.FC = () => {
  const [activeWindow, setActiveWindow] = useState<'A' | 'B'>('B');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#409 BRING TO FRONT</span>
        <span className="text-[10px] text-indigo-600 font-bold">Active: Window {activeWindow}</span>
      </div>

      <div className="relative h-28 bg-slate-900 rounded-lg p-2 overflow-hidden">
        {/* Window A */}
        <div
          onClick={() => setActiveWindow('A')}
          className={`absolute top-2 left-4 w-40 h-20 rounded-lg p-2 text-[8px] cursor-pointer transition-all shadow-xl ${activeWindow === 'A' ? 'z-20 bg-indigo-900 border-2 border-indigo-400 text-white' : 'z-10 bg-slate-800 border border-slate-700 text-slate-400'}`}
        >
          <div className="font-bold border-b pb-0.5">Window A {activeWindow === 'A' && '(Focused)'}</div>
          <div className="mt-2 text-[7px]">Click to Bring to Front</div>
        </div>

        {/* Window B */}
        <div
          onClick={() => setActiveWindow('B')}
          className={`absolute top-6 left-16 w-40 h-20 rounded-lg p-2 text-[8px] cursor-pointer transition-all shadow-xl ${activeWindow === 'B' ? 'z-20 bg-indigo-900 border-2 border-indigo-400 text-white' : 'z-10 bg-slate-800 border border-slate-700 text-slate-400'}`}
        >
          <div className="font-bold border-b pb-0.5">Window B {activeWindow === 'B' && '(Focused)'}</div>
          <div className="mt-2 text-[7px]">Click to Bring to Front</div>
        </div>
      </div>
    </div>
  );
};

// #410 Sticky Notes Window - Pastel yellow sticky memo window
export const LiveStickyNotesLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#410 STICKY NOTES WINDOW</span>
        <span className="text-[10px] text-amber-500 font-bold">Quick Memo</span>
      </div>

      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-center">
        <div className="w-48 bg-amber-100 dark:bg-amber-950/80 border-2 border-amber-400 text-amber-900 dark:text-amber-200 rounded-lg p-2 shadow-xl text-[8px]">
          <div className="flex items-center justify-between font-bold border-b border-amber-300 pb-0.5 mb-1">
            <span>📌 Shift Checklist</span>
            <span>✕</span>
          </div>
          <div className="space-y-0.5 text-[7px]">
            <div>• Check Inverter #02 temp &lt; 65°C</div>
            <div>• Clean spindle coolant nozzle</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// #411 Always On Top Pin Toggle - Keep window above others
export const LiveAlwaysOnTopPinLab: React.FC = () => {
  const [pinned, setPinned] = useState(true);
  const [backFocus, setBackFocus] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#411 ALWAYS ON TOP PIN</span>
        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${pinned ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}>
          {pinned ? 'Topmost: ON' : 'Topmost: OFF'}
        </span>
      </div>

      <div className="relative h-36 bg-slate-200 dark:bg-slate-900 rounded-lg p-2 overflow-hidden border border-slate-300 dark:border-slate-800">
        {/* Background App */}
        <div 
          onClick={() => setBackFocus(true)}
          className={`absolute top-2 left-2 right-2 h-28 bg-white dark:bg-slate-800 rounded-lg p-2 text-[8px] cursor-pointer transition-all border ${backFocus ? 'border-indigo-500 ring-2 ring-indigo-400/50' : 'border-slate-300 dark:border-slate-700'}`}
        >
          <div className="font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 pb-1 mb-1 flex justify-between">
            <span>Main Workspace Editor</span>
            <span className="text-[7px] text-slate-400">Click to focus background</span>
          </div>
          <p className="text-[7px] text-slate-500">Working document lines and CAD vector schematics...</p>
        </div>

        {/* Pinned PIP Utility Window */}
        <div 
          onClick={(e) => { e.stopPropagation(); setBackFocus(false); }}
          className={`absolute right-4 bottom-3 w-44 rounded-lg shadow-2xl transition-all duration-200 border-2 ${pinned || !backFocus ? 'z-30 border-indigo-500 bg-slate-900 text-white' : 'z-10 opacity-60 border-slate-600 bg-slate-800 text-slate-400'}`}
        >
          <div className="h-6 bg-slate-800/90 px-2 flex items-center justify-between text-[8px] font-bold border-b border-slate-700">
            <span className="text-indigo-300">Live Camera PIP</span>
            <button 
              onClick={(e) => { e.stopPropagation(); setPinned(!pinned); }} 
              className={`p-0.5 rounded transition-transform ${pinned ? 'text-amber-400 bg-amber-950/60 scale-110' : 'text-slate-400 hover:text-white'}`}
              title={pinned ? 'Unpin window' : 'Pin Always on Top'}
            >
              📌
            </button>
          </div>
          <div className="p-2 text-[7px] space-y-1">
            <div className="flex justify-between"><span>FPS:</span> <span className="text-emerald-400 font-bold">59.8</span></div>
            <div className="flex justify-between"><span>Status:</span> <span>{pinned ? 'Locked On Top' : (backFocus ? 'Hidden Behind' : 'Active')}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// #412 Dockable Floating Panel - Undock to float & redock
export const LiveDockablePanelLab: React.FC = () => {
  const [isDocked, setIsDocked] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#412 DOCKABLE FLOATING PANEL</span>
        <button 
          onClick={() => setIsDocked(!isDocked)} 
          className="px-2 py-0.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-[9px] font-bold transition-colors"
        >
          {isDocked ? '↗ Undock Panel' : '↙ Dock to Sidebar'}
        </button>
      </div>

      <div className="relative h-36 bg-slate-200 dark:bg-slate-900 rounded-lg p-2 border border-slate-300 dark:border-slate-800 flex gap-2 overflow-hidden">
        {/* Main Canvas */}
        <div className="flex-1 bg-white dark:bg-slate-800 rounded p-2 text-[8px] flex flex-col justify-between">
          <div className="font-bold text-slate-500">2D Drawing Canvas</div>
          <div className="text-[7px] text-slate-400 text-center">Drag panels anywhere on screen</div>
        </div>

        {/* Docked Sidebar or Floating Panel */}
        {isDocked ? (
          <div className="w-32 bg-slate-800 text-white rounded p-1.5 flex flex-col justify-between text-[8px] border border-slate-700 animate-fadeIn">
            <div className="flex justify-between items-center border-b border-slate-700 pb-1 font-bold">
              <span>Layers Tree</span>
              <button onClick={() => setIsDocked(false)} className="text-slate-400 hover:text-white text-[7px]">↗</button>
            </div>
            <div className="text-[7px] text-slate-400 space-y-0.5">
              <div>• Layer_0 (Base)</div>
              <div>• Layer_1 (Wiring)</div>
            </div>
            <div className="text-[6px] text-emerald-400 font-bold">[Docked Right]</div>
          </div>
        ) : (
          <div className="absolute top-4 left-10 w-40 bg-slate-900 text-white rounded-lg p-2 shadow-2xl border-2 border-indigo-500 text-[8px] z-30 animate-scaleUp">
            <div className="flex justify-between items-center border-b border-slate-700 pb-1 font-bold">
              <span className="text-indigo-400">✨ Floating Layers</span>
              <button onClick={() => setIsDocked(true)} className="text-slate-400 hover:text-white text-[7px]">↙ Dock</button>
            </div>
            <div className="py-1 text-[7px] space-y-0.5 text-slate-300">
              <div>• Layer_0 (Base)</div>
              <div>• Layer_1 (Wiring)</div>
            </div>
            <div className="text-[6px] text-amber-400 font-bold">[Floating Window Mode]</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #413 Window Resizing Grip Knobs - 8-direction sizing
export const LiveWindowResizeGripsLab: React.FC = () => {
  const [size, setSize] = useState({ w: 180, h: 90 });

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#413 8-WAY RESIZE GRIPS</span>
        <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold">{size.w}px × {size.h}px</span>
      </div>

      <div className="h-36 bg-slate-200 dark:bg-slate-900 rounded-lg p-2 border border-slate-300 dark:border-slate-800 flex items-center justify-center relative">
        <div 
          style={{ width: `${size.w}px`, height: `${size.h}px` }}
          className="bg-white dark:bg-slate-800 border-2 border-indigo-500 rounded-lg shadow-xl relative flex flex-col justify-between p-2 transition-all"
        >
          <div className="flex justify-between items-center text-[8px] font-bold border-b pb-0.5">
            <span>Inspector Dialog</span>
            <span className="text-[6px] bg-indigo-600 text-white px-1 rounded">Resizable</span>
          </div>
          <div className="text-[7px] text-slate-500 text-center">Drag grip corners below</div>

          {/* Grip Knobs Preset Controls */}
          <div className="flex justify-center gap-1 mt-1">
            <button onClick={() => setSize({ w: 140, h: 70 })} className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[7px]">S</button>
            <button onClick={() => setSize({ w: 180, h: 90 })} className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[7px]">M</button>
            <button onClick={() => setSize({ w: 220, h: 105 })} className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[7px]">L</button>
          </div>

          {/* Corner Resize Handles */}
          <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-indigo-600 rounded-sm cursor-nwse-resize flex items-center justify-center text-white text-[6px]">⤡</span>
          <span className="absolute -top-1 -left-1 w-2 h-2 bg-indigo-400 rounded-full cursor-nwse-resize" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-400 rounded-full cursor-nesw-resize" />
          <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-indigo-400 rounded-full cursor-nesw-resize" />
        </div>
      </div>
    </div>
  );
};

// #414 Window Opacity Slider Control - Transparency adjustment
export const LiveWindowOpacitySliderLab: React.FC = () => {
  const [opacity, setOpacity] = useState(85);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#414 WINDOW OPACITY SLIDER</span>
        <span className="text-[10px] text-indigo-600 font-bold">{opacity}% Opacity</span>
      </div>

      <div className="relative h-36 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-2 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-1 opacity-20 p-2">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="border border-white/60 rounded" />
          ))}
        </div>

        {/* Translucent Window */}
        <div 
          style={{ opacity: opacity / 100 }}
          className="w-56 bg-slate-900/90 backdrop-blur-md text-white border border-white/20 rounded-xl p-3 shadow-2xl z-10 transition-opacity"
        >
          <div className="flex justify-between items-center border-b border-slate-700 pb-1 mb-2 text-[8px] font-bold">
            <span>Overlay Tracer HUD</span>
            <span>{opacity}%</span>
          </div>
          <input 
            type="range" 
            min="20" 
            max="100" 
            value={opacity} 
            onChange={(e) => setOpacity(Number(e.target.value))}
            className="w-full accent-indigo-400 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
          />
          <div className="text-[7px] text-slate-400 text-center mt-1">See-through background guide</div>
        </div>
      </div>
    </div>
  );
};

// #415 Split View Pane Divider - Drag divider
export const LiveSplitPaneDividerLab: React.FC = () => {
  const [split, setSplit] = useState(50);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#415 SPLIT VIEW PANE DIVIDER</span>
        <button onClick={() => setSplit(50)} className="text-[9px] text-indigo-600 font-bold hover:underline">Reset 50:50</button>
      </div>

      <div className="h-32 bg-slate-900 rounded-lg overflow-hidden flex border border-slate-700 relative">
        <div style={{ width: `${split}%` }} className="bg-slate-950 p-2 text-[8px] text-emerald-400 font-mono overflow-hidden">
          <div className="font-bold text-slate-400 mb-1">Editor Pane ({split}%)</div>
          <div>const value = 42;</div>
          <div>render(value);</div>
        </div>

        {/* Interactive Splitter Divider Bar */}
        <div className="w-2 bg-indigo-600 hover:bg-indigo-400 cursor-col-resize flex items-center justify-center z-10 transition-colors shadow-lg">
          <div className="w-0.5 h-6 bg-white/80 rounded" />
        </div>

        <div style={{ width: `${100 - split}%` }} className="bg-slate-800 p-2 text-[8px] text-indigo-200 overflow-hidden">
          <div className="font-bold text-slate-300 mb-1">Preview Pane ({100 - split}%)</div>
          <div className="bg-slate-900/80 p-1 rounded text-center text-[7px] text-slate-400 mt-2">Live Output: 42</div>
        </div>
      </div>

      <div className="flex justify-center gap-2">
        <button onClick={() => setSplit(30)} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[8px]">30 : 70</button>
        <button onClick={() => setSplit(50)} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[8px]">50 : 50</button>
        <button onClick={() => setSplit(70)} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[8px]">70 : 30</button>
      </div>
    </div>
  );
};

// #416 Magnetic Window Snap Zone - Edge snap presets
export const LiveMagneticSnapZoneLab: React.FC = () => {
  const [snapZone, setSnapZone] = useState<'left' | 'right' | 'full' | 'center'>('center');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#416 MAGNETIC SNAP ZONE</span>
        <span className="text-[10px] text-indigo-600 font-bold uppercase">{snapZone} Snap</span>
      </div>

      <div className="h-32 bg-slate-200 dark:bg-slate-900 rounded-lg p-2 border border-slate-300 dark:border-slate-800 relative overflow-hidden">
        {/* Dynamic Snap Window */}
        <div 
          className={`bg-slate-900 text-white rounded-lg p-2 shadow-xl border-2 border-indigo-400 transition-all duration-300 absolute ${
            snapZone === 'left' ? 'top-2 left-2 bottom-2 w-1/2' :
            snapZone === 'right' ? 'top-2 right-2 bottom-2 w-1/2' :
            snapZone === 'full' ? 'inset-2' :
            'top-6 left-12 right-12 bottom-6'
          }`}
        >
          <div className="flex justify-between items-center border-b border-slate-700 pb-1 text-[8px] font-bold">
            <span className="text-indigo-300">Aero Snap Window</span>
            <span>🧲 Snapped</span>
          </div>
          <div className="text-[7px] text-slate-400 mt-2 text-center">Magnetic grid aligned</div>
        </div>
      </div>

      <div className="flex justify-center gap-1.5">
        <button onClick={() => setSnapZone('left')} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[8px]">Left 50%</button>
        <button onClick={() => setSnapZone('center')} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[8px]">Center</button>
        <button onClick={() => setSnapZone('right')} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[8px]">Right 50%</button>
        <button onClick={() => setSnapZone('full')} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[8px]">100% Full</button>
      </div>
    </div>
  );
};

// #417 Window Roll-Up / Shade Bar - Double click header to roll up
export const LiveWindowRollUpLab: React.FC = () => {
  const [rolledUp, setRolledUp] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#417 WINDOW ROLL-UP (SHADE)</span>
        <button onClick={() => setRolledUp(!rolledUp)} className="text-[9px] text-indigo-600 font-bold hover:underline">
          {rolledUp ? '▼ Expand Body' : '▲ Roll Up Body'}
        </button>
      </div>

      <div className="h-32 bg-slate-200 dark:bg-slate-900 rounded-lg p-2 border border-slate-300 dark:border-slate-800 flex items-start justify-center">
        <div className="w-56 bg-slate-900 border-2 border-indigo-500 rounded-lg shadow-xl overflow-hidden transition-all duration-300">
          <div 
            onDoubleClick={() => setRolledUp(!rolledUp)}
            className="h-8 bg-slate-800 px-2 flex items-center justify-between text-[8px] font-bold text-white cursor-pointer select-none"
          >
            <span className="flex items-center gap-1 text-indigo-300">
              <span>🎵</span> Mini Media Player
            </span>
            <button onClick={() => setRolledUp(!rolledUp)} className="text-slate-400 hover:text-white text-[9px]">
              {rolledUp ? '▼' : '▲'}
            </button>
          </div>

          {!rolledUp && (
            <div className="p-3 text-[7px] text-slate-300 space-y-1.5 animate-fadeIn">
              <div className="flex justify-between"><span>Track:</span> <span className="font-bold text-white">Synthwave_04.flac</span></div>
              <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                <div className="bg-indigo-400 h-full w-2/3" />
              </div>
              <div className="flex justify-center gap-3 text-sm pt-1">
                <span>⏮</span> <span>▶</span> <span>⏭</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// #418 Quick Access Floating Action Ribbon - Lightweight pill toolbar
export const LiveFloatingActionRibbonLab: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState('Select');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#418 FLOATING ACTION RIBBON</span>
        <span className="text-[10px] text-indigo-600 font-bold">Tool: {selectedTool}</span>
      </div>

      <div className="relative h-32 bg-slate-200 dark:bg-slate-900 rounded-lg p-2 border border-slate-300 dark:border-slate-800 flex items-center justify-center">
        {/* Floating Capsule Ribbon */}
        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 shadow-2xl rounded-full px-3 py-1.5 flex items-center gap-2 text-white text-[10px]">
          {['Pointer', 'Pencil', 'Measure', 'Text', 'AI Spark'].map((tool) => (
            <button
              key={tool}
              onClick={() => setSelectedTool(tool)}
              className={`px-2 py-1 rounded-full text-[8px] font-bold transition-colors ${
                selectedTool === tool ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {tool}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// #419 Window Focus Dimmer Overlay - Dim inactive windows
export const LiveWindowFocusDimmerLab: React.FC = () => {
  const [focusedWin, setFocusedWin] = useState<'A' | 'B'>('A');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#419 FOCUS DIMMER OVERLAY</span>
        <span className="text-[10px] text-indigo-600 font-bold">Active: Window {focusedWin}</span>
      </div>

      <div className="relative h-36 bg-slate-200 dark:bg-slate-900 rounded-lg p-2 border border-slate-300 dark:border-slate-800 overflow-hidden">
        {/* Window A */}
        <div 
          onClick={() => setFocusedWin('A')}
          className={`absolute top-2 left-4 w-44 rounded-lg p-2 shadow-xl cursor-pointer transition-all duration-300 border-2 ${
            focusedWin === 'A' ? 'z-20 bg-slate-900 border-indigo-500 text-white scale-105' : 'z-10 bg-slate-800/60 border-slate-700 text-slate-500 grayscale opacity-40'
          }`}
        >
          <div className="font-bold text-[8px] border-b pb-0.5 flex justify-between">
            <span>Window A</span>
            {focusedWin === 'A' && <span className="text-[7px] text-emerald-400">Focused</span>}
          </div>
          <div className="text-[7px] mt-1">Financial Ledger Data</div>
        </div>

        {/* Window B */}
        <div 
          onClick={() => setFocusedWin('B')}
          className={`absolute bottom-2 right-4 w-44 rounded-lg p-2 shadow-xl cursor-pointer transition-all duration-300 border-2 ${
            focusedWin === 'B' ? 'z-20 bg-slate-900 border-indigo-500 text-white scale-105' : 'z-10 bg-slate-800/60 border-slate-700 text-slate-500 grayscale opacity-40'
          }`}
        >
          <div className="font-bold text-[8px] border-b pb-0.5 flex justify-between">
            <span>Window B</span>
            {focusedWin === 'B' && <span className="text-[7px] text-emerald-400">Focused</span>}
          </div>
          <div className="text-[7px] mt-1">Stock Chart Realtime</div>
        </div>
      </div>
    </div>
  );
};

// #420 Multi-Document Workspace Grid - 2x2 tiling
export const LiveMultiDocWorkspaceGridLab: React.FC = () => {
  const [layout, setLayout] = useState<'1x2' | '2x1' | '2x2'>('2x2');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#420 WORKSPACE GRID MANAGER</span>
        <div className="flex gap-1">
          {(['1x2', '2x1', '2x2'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLayout(l)}
              className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${layout === l ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800'}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className={`h-32 bg-slate-900 rounded-lg p-1.5 gap-1.5 border border-slate-700 grid ${
        layout === '1x2' ? 'grid-cols-2 grid-rows-1' :
        layout === '2x1' ? 'grid-cols-1 grid-rows-2' :
        'grid-cols-2 grid-rows-2'
      }`}>
        {['Doc 1', 'Doc 2', 'Doc 3', 'Doc 4'].slice(0, layout === '2x2' ? 4 : 2).map((doc, idx) => (
          <div key={doc} className="bg-slate-800 border border-slate-700 rounded p-1.5 text-[7px] text-slate-300 flex flex-col justify-between">
            <span className="font-bold text-indigo-300">{doc}</span>
            <span className="text-[6px] text-slate-500">Pane #{idx + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #421 Context Menu Nested Flyout Submenu - Multi-level context menu
export const LiveContextNestedFlyoutLab: React.FC = () => {
  const [activeSub, setActiveSub] = useState<string | null>(null);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#421 NESTED FLYOUT SUBMENU</span>
        <span className="text-[10px] text-indigo-600 font-bold">Hover Sort By</span>
      </div>

      <div className="h-36 bg-slate-200 dark:bg-slate-900 rounded-lg p-2 border border-slate-300 dark:border-slate-800 flex items-center justify-start relative">
        {/* 1st Level Context Menu */}
        <div className="w-36 bg-slate-900 border border-slate-700 text-white rounded-lg shadow-2xl p-1 text-[8px] space-y-0.5 z-10">
          <div className="px-2 py-1 hover:bg-slate-800 rounded cursor-pointer">View Details</div>
          <div 
            onMouseEnter={() => setActiveSub('sort')}
            className="px-2 py-1 bg-indigo-950/80 text-indigo-300 hover:bg-indigo-900 rounded cursor-pointer flex justify-between items-center font-bold"
          >
            <span>Sort By</span>
            <span>▶</span>
          </div>
          <div className="px-2 py-1 hover:bg-slate-800 rounded cursor-pointer">Refresh</div>
        </div>

        {/* 2nd Level Flyout Submenu */}
        {activeSub === 'sort' && (
          <div className="absolute left-40 top-8 w-32 bg-slate-900 border border-indigo-500 text-white rounded-lg shadow-2xl p-1 text-[8px] space-y-0.5 z-20 animate-fadeIn">
            <div className="px-2 py-1 hover:bg-indigo-600 rounded cursor-pointer">✓ Name (A-Z)</div>
            <div className="px-2 py-1 hover:bg-indigo-600 rounded cursor-pointer">Date Modified</div>
            <div className="px-2 py-1 hover:bg-indigo-600 rounded cursor-pointer">File Size</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #422 Radial Pie Menu - 360 degree wheel
export const LiveRadialPieMenuLab: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>('Draw');

  const sectors = ['Select', 'Draw', 'Erase', 'Text', 'Cut', 'Paste'];

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#422 RADIAL PIE MENU</span>
        <span className="text-[10px] text-indigo-600 font-bold">Active: {selectedSector}</span>
      </div>

      <div className="h-36 bg-slate-200 dark:bg-slate-900 rounded-lg p-2 border border-slate-300 dark:border-slate-800 flex items-center justify-center">
        <div className="relative w-28 h-28 rounded-full border-2 border-indigo-500 bg-slate-900/90 shadow-2xl flex items-center justify-center">
          <span className="text-[8px] font-black text-indigo-400">MENU</span>
          {sectors.map((sec, idx) => {
            const angle = (idx * 60) * (Math.PI / 180);
            const x = Math.cos(angle) * 38;
            const y = Math.sin(angle) * 38;
            return (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                style={{ transform: `translate(${x}px, ${y}px)` }}
                className={`absolute w-7 h-7 rounded-full text-[6px] font-bold flex items-center justify-center transition-transform hover:scale-125 ${
                  selectedSector === sec ? 'bg-indigo-600 text-white ring-2 ring-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {sec[0]}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// #423 Menu Shortcut Accelerator Underline (Mnemonic) - Alt key underline
export const LiveMenuMnemonicUnderlineLab: React.FC = () => {
  const [altPressed, setAltPressed] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#423 MENU MNEMONIC UNDERLINE</span>
        <button onClick={() => setAltPressed(!altPressed)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[8px]">
          Toggle Alt ({altPressed ? 'ON' : 'OFF'})
        </button>
      </div>

      <div className="bg-slate-900 rounded-lg p-3 text-white border border-slate-700">
        <div className="flex gap-4 text-xs font-bold">
          <div>{altPressed ? <><span className="underline text-indigo-400">F</span>ile</> : 'File'}</div>
          <div>{altPressed ? <><span className="underline text-indigo-400">E</span>dit</> : 'Edit'}</div>
          <div>{altPressed ? <><span className="underline text-indigo-400">V</span>iew</> : 'View'}</div>
          <div>{altPressed ? <><span className="underline text-indigo-400">H</span>elp</> : 'Help'}</div>
        </div>
        <div className="text-[7px] text-slate-400 mt-2">
          Press Alt+F to trigger File menu directly
        </div>
      </div>
    </div>
  );
};

// #424 Recent Files History Submenu - Quick file history
export const LiveRecentFilesMenuLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#424 RECENT FILES SUBMENU</span>
        <span className="text-[10px] text-slate-500">History Cache</span>
      </div>

      <div className="bg-slate-900 rounded-lg p-2 text-white border border-slate-700 text-[8px] space-y-1">
        <div className="text-indigo-400 font-bold border-b border-slate-800 pb-1">[File] ➔ [Recent Projects]</div>
        {['1. Blueprint_Reactor_v2.cad (2m ago)', '2. Circuit_PCB_Layer4.sch (1h ago)', '3. Report_Q3_Summary.pdf (Yesterday)'].map((f) => (
          <div key={f} className="p-1 hover:bg-slate-800 rounded flex justify-between items-center cursor-pointer">
            <span>{f}</span>
            <span className="text-slate-500 hover:text-amber-400">📌</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #425 Collapsible Hamburger App Drawer Menu - Sliding drawer
export const LiveHamburgerDrawerMenuLab: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#425 HAMBURGER APP DRAWER</span>
        <button onClick={() => setDrawerOpen(!drawerOpen)} className="text-base">☰</button>
      </div>

      <div className="h-32 bg-slate-200 dark:bg-slate-900 rounded-lg relative overflow-hidden border border-slate-300 dark:border-slate-800 p-2">
        <div className="text-[8px] text-slate-500">Main Content Stage</div>

        {/* Sliding Drawer */}
        <div className={`absolute top-0 left-0 bottom-0 w-36 bg-slate-900 border-r border-indigo-500 text-white p-2 text-[8px] transition-transform duration-300 z-20 ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center font-bold border-b border-slate-700 pb-1 mb-1">
            <span className="text-indigo-400">Navigation</span>
            <button onClick={() => setDrawerOpen(false)}>✕</button>
          </div>
          <div className="space-y-1 text-[7px] text-slate-300">
            <div>📊 Dashboard</div>
            <div>⚙️ System Config</div>
            <div>🔒 User Accounts</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// #426 Draggable Floating Inspector Window - Freeform parameter tuning
export const LiveFloatingInspectorLab: React.FC = () => {
  const [params, setParams] = useState({ x: 120, y: 45, color: '#6366f1' });

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#426 FLOATING INSPECTOR WINDOW</span>
        <span className="text-[10px] text-indigo-600 font-bold">X:{params.x} Y:{params.y}</span>
      </div>

      <div className="h-36 bg-slate-200 dark:bg-slate-900 rounded-lg p-2 border border-slate-300 dark:border-slate-800 flex items-center justify-center">
        <div className="w-48 bg-slate-900 border border-indigo-500 rounded-lg shadow-2xl p-2 text-white text-[8px] space-y-1.5">
          <div className="flex justify-between items-center border-b border-slate-700 pb-0.5 font-bold">
            <span className="text-indigo-400">✨ Object Inspector</span>
            <span>⋮⋮</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Pos X:</span>
            <input 
              type="range" min="0" max="200" value={params.x} onChange={(e) => setParams({ ...params, x: Number(e.target.value) })}
              className="w-24 accent-indigo-400 h-1"
            />
          </div>
          <div className="flex justify-between items-center">
            <span>Pos Y:</span>
            <input 
              type="range" min="0" max="100" value={params.y} onChange={(e) => setParams({ ...params, y: Number(e.target.value) })}
              className="w-24 accent-indigo-400 h-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// #427 Window Taskbar Thumbnail Peek Preview - Live hover thumbnail
export const LiveTaskbarThumbnailPeekLab: React.FC = () => {
  const [hoveredTask, setHoveredTask] = useState<string | null>(null);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#427 TASKBAR THUMBNAIL PEEK</span>
        <span className="text-[10px] text-indigo-600 font-bold">{hoveredTask ? `Hovering [${hoveredTask}]` : 'Hover taskbar icons'}</span>
      </div>

      <div className="h-32 bg-slate-200 dark:bg-slate-900 rounded-lg p-2 border border-slate-300 dark:border-slate-800 flex flex-col justify-between relative">
        {/* Floating Thumbnail Preview */}
        {hoveredTask && (
          <div className="absolute bottom-10 left-8 w-36 bg-slate-950 border border-indigo-500 rounded-lg p-1.5 shadow-2xl text-white text-[7px] animate-fadeIn z-20">
            <div className="flex justify-between items-center border-b border-slate-800 pb-0.5 mb-1 font-bold">
              <span>{hoveredTask} Preview</span>
              <span>✕</span>
            </div>
            <div className="h-10 bg-slate-800 rounded flex items-center justify-center text-[6px] text-slate-400">
              [Live Window Render]
            </div>
          </div>
        )}

        <div className="text-[8px] text-slate-500">Desktop Background</div>

        {/* Taskbar */}
        <div className="h-8 bg-slate-900 rounded-lg px-2 flex items-center gap-2 border border-slate-700">
          {['CAD Tool', 'Browser', 'Terminal'].map((app) => (
            <button
              key={app}
              onMouseEnter={() => setHoveredTask(app)}
              onMouseLeave={() => setHoveredTask(null)}
              className="px-2 py-1 bg-slate-800 hover:bg-indigo-600 rounded text-[7px] text-white font-bold transition-colors"
            >
              {app}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// #428 Window System Status Bar Tray - Diagnostic footer bar
export const LiveSystemStatusBarLab: React.FC = () => {
  const [zoom, setZoom] = useState(100);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#428 SYSTEM STATUS BAR TRAY</span>
        <span className="text-[10px] text-emerald-500 font-bold">Online 100%</span>
      </div>

      <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 text-white">
        <div className="h-16 p-2 text-[8px] text-slate-400">
          Document workspace content area...
        </div>
        {/* Status Bar */}
        <div className="h-6 bg-slate-800 border-t border-slate-700 px-2 flex items-center justify-between text-[7px] font-bold text-slate-300">
          <div className="flex items-center gap-3">
            <span className="text-emerald-400">● READY</span>
            <span>Ln 42, Col 18</span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setZoom(Math.max(50, zoom - 10))}>-</button>
            <span>{zoom}%</span>
            <button onClick={() => setZoom(Math.min(200, zoom + 10))}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// #429 Window Snap Layouts Selector - Windows 11 style hover menu
export const LiveSnapLayoutsSelectorLab: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePreset, setActivePreset] = useState('2-Col Equal');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#429 SNAP LAYOUTS SELECTOR</span>
        <span className="text-[10px] text-indigo-600 font-bold">{activePreset}</span>
      </div>

      <div className="h-36 bg-slate-200 dark:bg-slate-900 rounded-lg p-2 border border-slate-300 dark:border-slate-800 relative flex justify-end">
        {/* Maximize Button with Hover Snap Menu */}
        <div className="relative">
          <button 
            onMouseEnter={() => setMenuOpen(true)}
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-6 h-6 bg-slate-800 hover:bg-slate-700 text-white rounded flex items-center justify-center text-[10px]"
          >
            □
          </button>

          {menuOpen && (
            <div 
              onMouseLeave={() => setMenuOpen(false)}
              className="absolute right-0 top-8 w-44 bg-slate-950 border border-indigo-500 rounded-lg p-2 shadow-2xl text-white text-[7px] grid grid-cols-2 gap-1.5 z-20 animate-fadeIn"
            >
              <div onClick={() => { setActivePreset('50:50'); setMenuOpen(false); }} className="h-10 border border-slate-700 hover:border-indigo-400 rounded flex p-0.5 gap-0.5 cursor-pointer">
                <div className="w-1/2 bg-slate-800 hover:bg-indigo-600 rounded" />
                <div className="w-1/2 bg-slate-800 hover:bg-indigo-600 rounded" />
              </div>
              <div onClick={() => { setActivePreset('4-Quarters'); setMenuOpen(false); }} className="h-10 border border-slate-700 hover:border-indigo-400 rounded grid grid-cols-2 grid-rows-2 gap-0.5 p-0.5 cursor-pointer">
                <div className="bg-slate-800 hover:bg-indigo-600 rounded" />
                <div className="bg-slate-800 hover:bg-indigo-600 rounded" />
                <div className="bg-slate-800 hover:bg-indigo-600 rounded" />
                <div className="bg-slate-800 hover:bg-indigo-600 rounded" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// #430 Window Crash Recovery Banner - Session restore banner
export const LiveCrashRecoveryBannerLab: React.FC = () => {
  const [restored, setRestored] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#430 CRASH RECOVERY BANNER</span>
        <span className="text-[10px] text-amber-500 font-bold">{restored ? 'Restored' : 'Auto-Save Detected'}</span>
      </div>

      <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 text-white">
        {/* Recovery Alert Bar */}
        {!restored ? (
          <div className="bg-amber-950/80 border-b border-amber-500/60 p-2 flex items-center justify-between text-[7px]">
            <span className="text-amber-200">⚠️ Previous session closed unexpectedly. 3 unsaved drafts found.</span>
            <div className="flex gap-1">
              <button onClick={() => setRestored(true)} className="px-2 py-0.5 bg-amber-500 text-slate-950 font-bold rounded">
                Restore
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-emerald-950/80 border-b border-emerald-500/60 p-1.5 text-[7px] text-emerald-300 text-center font-bold">
            ✓ Session successfully recovered from LocalStorage cache.
          </div>
        )}

        <div className="p-3 text-[8px] text-slate-400">
          Document Editor Workspace Active...
        </div>
      </div>
    </div>
  );
};

