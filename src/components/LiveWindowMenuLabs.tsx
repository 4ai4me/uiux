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
