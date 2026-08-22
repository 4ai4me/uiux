import React, { useState } from 'react';
import { 
  Save, Trash2, Edit3, Plus, Check, AlertTriangle, X, Loader2,
  MoreVertical, MoreHorizontal, Menu, GripVertical, ChevronDown, 
  ArrowRight, FileText, LayoutGrid, List, ArrowUpDown, Filter, Search,
  Eye, EyeOff, ExternalLink, Copy, Download, Upload, Lock, Unlock,
  Star, Pin, Bell, Settings, HelpCircle, Info, RotateCcw, RotateCw,
  Folder, FolderOpen, RefreshCw, Maximize2, Minimize2, Play, Pause,
  Tag, User, CheckCheck, AlertOctagon
} from 'lucide-react';

/**
 * ----------------------------------------------------------------------------
 * Category 22: Icons & Symbols (#511 ~ #550) Dedicated 1:1 Precision Labs
 * High-contrast, Light/Dark adaptive UI/UX Architecture Workbench
 * ----------------------------------------------------------------------------
 */

// #511 Action Icon
export const LiveActionIconLab: React.FC = () => {
  const [log, setLog] = useState('Click any action icon button');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#511 ACTION ICON</span>
        <span className="text-[10px] text-indigo-600 font-bold">Action Strip</span>
      </div>
      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex flex-col justify-between items-center">
        <div className="flex items-center gap-2 mt-1">
          <button onClick={() => setLog('Action: Saved changes')} className="p-2 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-500 rounded-lg text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
            <Save className="w-4 h-4" />
          </button>
          <button onClick={() => setLog('Action: Edit record')} className="p-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
            <Edit3 className="w-4 h-4" />
          </button>
          <button onClick={() => setLog('Action: Created new item')} className="p-2 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500 rounded-lg text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
            <Plus className="w-4 h-4" />
          </button>
          <button onClick={() => setLog('Action: Deleted item')} className="p-2 bg-red-50 dark:bg-red-950/60 border border-red-500 rounded-lg text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        <div className="text-[9px] text-slate-500 font-bold">{log}</div>
      </div>
    </div>
  );
};

// #512 Status Icon
export const LiveStatusIconLab: React.FC = () => {
  const [status, setStatus] = useState<'success' | 'warning' | 'error' | 'loading'>('success');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#512 STATUS ICON</span>
        <span className="text-[10px] text-indigo-600 font-bold">State Indicator</span>
      </div>
      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex flex-col justify-between">
        <div className="flex justify-center gap-1.5">
          <button onClick={() => setStatus('success')} className="px-2 py-0.5 bg-emerald-600 text-white rounded text-[8px] font-bold">Success</button>
          <button onClick={() => setStatus('warning')} className="px-2 py-0.5 bg-amber-600 text-white rounded text-[8px] font-bold">Warning</button>
          <button onClick={() => setStatus('error')} className="px-2 py-0.5 bg-red-600 text-white rounded text-[8px] font-bold">Error</button>
          <button onClick={() => setStatus('loading')} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[8px] font-bold">Loading</button>
        </div>
        <div className="flex items-center justify-center gap-2 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
          {status === 'success' && <Check className="w-5 h-5 text-emerald-500" />}
          {status === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-500" />}
          {status === 'error' && <X className="w-5 h-5 text-red-500" />}
          {status === 'loading' && <Loader2 className="w-5 h-5 text-indigo-500 animate-spin" />}
          <span className="font-bold text-[10px] uppercase">{status} System State</span>
        </div>
      </div>
    </div>
  );
};

// #513 Kebab Menu Icon (⋮)
export const LiveKebabIconLab: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#513 KEBAB MENU (⋮)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Vertical Ellipsis</span>
      </div>
      <div className="relative h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-between">
        <span className="font-bold text-[10px]">Servo Motor Table Row #01</span>
        <button onClick={() => setOpen(!open)} className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded">
          <MoreVertical className="w-4 h-4 text-slate-700 dark:text-slate-300" />
        </button>
        {open && (
          <div className="absolute right-2 top-10 w-28 bg-white dark:bg-slate-950 border-2 border-indigo-500 rounded shadow-xl p-1 z-20 text-[8px] space-y-1">
            <div onClick={() => setOpen(false)} className="px-1.5 py-0.5 hover:bg-indigo-600 hover:text-white rounded cursor-pointer">Edit Row</div>
            <div onClick={() => setOpen(false)} className="px-1.5 py-0.5 hover:bg-red-600 hover:text-white rounded text-red-500 cursor-pointer">Delete Row</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #514 Meatball Menu Icon (…)
export const LiveMeatballIconLab: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#514 MEATBALL MENU (…)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Horizontal Ellipsis</span>
      </div>
      <div className="relative h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-between">
        <span className="font-bold text-[10px]">Dashboard Card Settings</span>
        <button onClick={() => setOpen(!open)} className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded">
          <MoreHorizontal className="w-4 h-4 text-slate-700 dark:text-slate-300" />
        </button>
        {open && (
          <div className="absolute right-2 top-10 w-28 bg-white dark:bg-slate-950 border-2 border-indigo-500 rounded shadow-xl p-1 z-20 text-[8px] space-y-1">
            <div onClick={() => setOpen(false)} className="px-1.5 py-0.5 hover:bg-indigo-600 hover:text-white rounded cursor-pointer">Export PNG</div>
            <div onClick={() => setOpen(false)} className="px-1.5 py-0.5 hover:bg-indigo-600 hover:text-white rounded cursor-pointer">Refresh Query</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #515 Hamburger Menu Icon (☰)
export const LiveHamburgerIconLab: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#515 HAMBURGER MENU (☰)</span>
        <span className="text-[10px] text-indigo-600 font-bold">{navOpen ? 'Drawer Open' : 'Drawer Closed'}</span>
      </div>
      <div className="relative h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-between overflow-hidden">
        <button onClick={() => setNavOpen(!navOpen)} className="p-1.5 bg-indigo-600 text-white rounded">
          <Menu className="w-4 h-4" />
        </button>
        <div className={`absolute top-0 left-10 h-full w-32 bg-slate-800 text-white p-2 text-[8px] transition-transform duration-200 flex flex-col gap-1 ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="font-bold border-b border-slate-700 pb-0.5">Mobile Drawer</div>
          <div>• Overview</div>
          <div>• Telemetry</div>
        </div>
        <span className="text-[9px] text-slate-500">Tap ☰ to toggle drawer</span>
      </div>
    </div>
  );
};

// #516 Grip Dots Icon (⠿)
export const LiveGripDotsIconLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#516 GRIP DOTS (⠿)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Drag Affordance</span>
      </div>
      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex flex-col justify-center gap-1.5">
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded cursor-grab">
          <GripVertical className="w-4 h-4 text-slate-400" />
          <span className="font-bold text-[9px]">Reorderable Parameter Row A</span>
        </div>
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded cursor-grab">
          <GripVertical className="w-4 h-4 text-slate-400" />
          <span className="font-bold text-[9px]">Reorderable Parameter Row B</span>
        </div>
      </div>
    </div>
  );
};

// #517 Chevron vs Arrow (⌄ vs ➔)
export const LiveChevronVsArrowLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#517 CHEVRON VS ARROW</span>
        <span className="text-[10px] text-indigo-600 font-bold">Collapse vs Nav</span>
      </div>
      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-around">
        <div className="flex flex-col items-center gap-1 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <ChevronDown className="w-5 h-5 text-indigo-600" />
          <span className="text-[8px] font-bold">Chevron (Expand)</span>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <ArrowRight className="w-5 h-5 text-emerald-600" />
          <span className="text-[8px] font-bold">Arrow (Navigate)</span>
        </div>
      </div>
    </div>
  );
};

// #518 File Type Icons (.pdf, .xlsx, .dwg)
export const LiveFileTypeIconLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#518 FILE TYPE ICONS</span>
        <span className="text-[10px] text-indigo-600 font-bold">Extension Badges</span>
      </div>
      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-around">
        <div className="flex flex-col items-center gap-1 p-1.5 bg-red-50 dark:bg-red-950/40 border border-red-400 rounded-lg">
          <FileText className="w-5 h-5 text-red-600" />
          <span className="text-[8px] font-bold text-red-600">.PDF (Spec)</span>
        </div>
        <div className="flex flex-col items-center gap-1 p-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-400 rounded-lg">
          <FileText className="w-5 h-5 text-emerald-600" />
          <span className="text-[8px] font-bold text-emerald-600">.XLSX (Sheet)</span>
        </div>
        <div className="flex flex-col items-center gap-1 p-1.5 bg-blue-50 dark:bg-blue-950/40 border border-blue-400 rounded-lg">
          <FileText className="w-5 h-5 text-blue-600" />
          <span className="text-[8px] font-bold text-blue-600">.DWG (CAD)</span>
        </div>
      </div>
    </div>
  );
};

// #519 Bento Grid Icon (⊞)
export const LiveBentoGridIconLab: React.FC = () => {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#519 BENTO GRID (⊞)</span>
        <span className="text-[10px] text-indigo-600 font-bold">{isGrid ? 'Bento 2x2' : 'Single List'}</span>
      </div>
      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex flex-col justify-between">
        <div className="flex justify-end">
          <button onClick={() => setIsGrid(!isGrid)} className="p-1 bg-indigo-600 text-white rounded">
            {isGrid ? <LayoutGrid className="w-4 h-4" /> : <List className="w-4 h-4" />}
          </button>
        </div>
        <div className={isGrid ? 'grid grid-cols-2 gap-1.5' : 'space-y-1'}>
          <div className="h-6 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center text-[8px] font-bold">Node A</div>
          <div className="h-6 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center text-[8px] font-bold">Node B</div>
        </div>
      </div>
    </div>
  );
};

// #520 Sort Direction Indicator (▲▼)
export const LiveSortIndicatorLab: React.FC = () => {
  const [sortState, setSortState] = useState<'none' | 'asc' | 'desc'>('none');

  const toggleSort = () => {
    if (sortState === 'none') setSortState('asc');
    else if (sortState === 'asc') setSortState('desc');
    else setSortState('none');
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#520 SORT INDICATOR (▲▼)</span>
        <span className="text-[10px] text-indigo-600 font-bold">{sortState.toUpperCase()}</span>
      </div>
      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-center">
        <button onClick={toggleSort} className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border rounded font-bold text-[9px] hover:border-indigo-500">
          <span>Telemetry RPM</span>
          <ArrowUpDown className={`w-3.5 h-3.5 ${sortState !== 'none' ? 'text-indigo-600' : 'text-slate-400'}`} />
        </button>
      </div>
    </div>
  );
};

// #524 Password Eye Toggle (👁)
export const LivePasswordEyeLab: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#524 PASSWORD EYE TOGGLE</span>
        <span className="text-[10px] text-indigo-600 font-bold">{show ? 'Plaintext' : 'Masked'}</span>
      </div>
      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-center">
        <div className="flex items-center border rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800 px-2 py-1 gap-2">
          <span className="text-[10px]">{show ? 'admin_token_2026' : '••••••••••••••••'}</span>
          <button onClick={() => setShow(!show)} className="text-slate-500 hover:text-indigo-600">
            {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

// #526 Copy to Clipboard Icon (📋)
export const LiveCopyClipboardLab: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#526 COPY CLIPBOARD</span>
        <span className="text-[10px] text-indigo-600 font-bold">{copied ? '✓ Copied' : 'Standby'}</span>
      </div>
      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-center">
        <button onClick={copy} className={`flex items-center gap-2 px-3 py-1.5 rounded text-[10px] font-bold transition-all ${copied ? 'bg-emerald-600 text-white' : 'bg-indigo-600 text-white'}`}>
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Copied to Clipboard!' : 'Copy API Key'}</span>
        </button>
      </div>
    </div>
  );
};

// #529 Lock / Security Icon (🔒 / 🔓)
export const LiveLockSecurityLab: React.FC = () => {
  const [locked, setLocked] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#529 LOCK / SECURITY</span>
        <span className="text-[10px] text-indigo-600 font-bold">{locked ? 'LOCKED' : 'UNLOCKED'}</span>
      </div>
      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-center">
        <button onClick={() => setLocked(!locked)} className={`flex items-center gap-2 px-3 py-1.5 rounded text-[10px] font-bold transition-all ${locked ? 'bg-red-600 text-white' : 'bg-emerald-600 text-white'}`}>
          {locked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
          <span>{locked ? 'Parameter Locked' : 'Parameter Unlocked'}</span>
        </button>
      </div>
    </div>
  );
};

// #531 Notification Bell (🔔)
export const LiveNotificationBellLab: React.FC = () => {
  const [unread, setUnread] = useState(3);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#531 NOTIFICATION BELL</span>
        <span className="text-[10px] text-indigo-600 font-bold">{unread} Unread</span>
      </div>
      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-center">
        <div className="relative">
          <button onClick={() => setUnread(0)} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200">
            <Bell className="w-6 h-6 text-slate-700 dark:text-slate-300" />
          </button>
          {unread > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-[8px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-bounce">
              {unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// #538 Loading Spinner (◌)
export const LiveLoadingSpinnerLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#538 LOADING SPINNER</span>
        <span className="text-[10px] text-indigo-600 font-bold">animate-spin</span>
      </div>
      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex flex-col items-center justify-center gap-2">
        <Loader2 className="w-6 h-6 text-indigo-600 animate-spin" />
        <span className="text-[9px] font-bold text-slate-500">Syncing telemetry data stream...</span>
      </div>
    </div>
  );
};

// #543 Folder Tree Icons (📁 / 📂)
export const LiveFolderTreeIconsLab: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#543 FOLDER TREE ICONS</span>
        <span className="text-[10px] text-indigo-600 font-bold">{open ? 'Expanded' : 'Collapsed'}</span>
      </div>
      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex flex-col justify-center gap-1 text-[9px]">
        <div onClick={() => setOpen(!open)} className="flex items-center gap-1.5 cursor-pointer font-bold text-amber-500">
          {open ? <FolderOpen className="w-4 h-4" /> : <Folder className="w-4 h-4" />}
          <span>src / telemetry_engine</span>
        </div>
        {open && (
          <div className="ml-4 space-y-1 text-slate-500">
            <div>• index.ts</div>
            <div>• types.ts</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #550 Icon Button aria-label Lab
export const LiveIconAriaLabelLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#550 ARIA-LABEL ACCESSIBILITY</span>
        <span className="text-[10px] text-indigo-600 font-bold">Screen Reader</span>
      </div>
      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex flex-col justify-between">
        <div className="flex items-center justify-between p-2 bg-slate-100 dark:bg-slate-800 rounded">
          <button aria-label="Close dialog window" className="p-2 bg-red-600 text-white rounded">
            <X className="w-4 h-4" />
          </button>
          <div className="text-[8px] text-slate-500">
            aria-label="Close dialog window" (Reads aloud to screen readers)
          </div>
        </div>
        <span className="text-[8px] text-emerald-500 font-bold">WCAG 2.1 AA Compliant</span>
      </div>
    </div>
  );
};

// #521 ~ #549 Specialized Individual Icon Lab
export const LiveSpecializedIconLab: React.FC<{ termNum: number; title: string; symbolDesc: string; iconType: string }> = ({ termNum, title, symbolDesc, iconType }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#{termNum} {title.toUpperCase()}</span>
        <span className="text-[10px] text-indigo-600 font-bold">{iconType}</span>
      </div>
      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex flex-col justify-between">
        <span className="text-[9px] text-slate-500 font-bold">{symbolDesc}</span>
        <div className="flex items-center justify-between p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <span className="text-[9px] font-bold">Symbol Trigger:</span>
          <button
            onClick={() => setActive(!active)}
            className={`px-3 py-1 rounded text-[9px] font-bold text-white transition-all ${active ? 'bg-emerald-600 scale-105 shadow' : 'bg-indigo-600'}`}
          >
            {active ? '✓ STATE ACTIVE' : 'TEST INTERACTION'}
          </button>
        </div>
        <div className="text-[8px] text-slate-400 flex justify-between">
          <span>Visual Token State</span>
          <span className="text-indigo-500 font-bold">1:1 Precision Lab</span>
        </div>
      </div>
    </div>
  );
};
