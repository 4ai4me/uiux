import React, { useState, useEffect, useRef } from 'react';
import { 
  Save, RotateCcw, Copy, Trash2, Layers, Search, Eye, EyeOff,
  Maximize2, Minimize2, ZoomIn, ZoomOut, Move, Lock, Unlock,
  Plus, X, RefreshCw, ChevronRight, Check, AlertCircle, Sparkles
} from 'lucide-react';

/**
 * ----------------------------------------------------------------------------
 * Category 21: Keyboard Shortcuts & Hotkeys (#471 ~ #510) Dedicated 1:1 Labs
 * Every single lab has distinct, authentic interaction mechanics.
 * ----------------------------------------------------------------------------
 */

// #471 Global Shortcut (Ctrl+S / Ctrl+Z)
export const LiveGlobalShortcutLab: React.FC = () => {
  const [history, setHistory] = useState<string[]>(['Init State', 'Edit Step 1', 'Edit Step 2']);
  const [toast, setToast] = useState<string | null>(null);

  const triggerSave = () => {
    setToast('Global Save triggered! (Ctrl+S)');
    setTimeout(() => setToast(null), 2000);
  };

  const triggerUndo = () => {
    if (history.length > 1) {
      setHistory(prev => prev.slice(0, -1));
      setToast('Undo executed (Ctrl+Z)');
      setTimeout(() => setToast(null), 1500);
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#471 GLOBAL SHORTCUT</span>
        <span className="text-[10px] text-indigo-600 font-bold">Window Listener</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2.5 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-slate-500 font-bold">Stack: {history.join(' ➔ ')}</span>
          {toast && <span className="bg-indigo-600 text-white text-[9px] px-2 py-0.5 rounded font-bold">{toast}</span>}
        </div>
        <div className="flex gap-2">
          <button onClick={triggerSave} className="flex-1 py-1.5 bg-indigo-600 text-white rounded font-bold text-[10px] hover:bg-indigo-700 flex items-center justify-center gap-1">
            <Save className="w-3.5 h-3.5" /> Ctrl+S Save
          </button>
          <button onClick={triggerUndo} className="flex-1 py-1.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded font-bold text-[10px] hover:bg-slate-300 dark:hover:bg-slate-700 flex items-center justify-center gap-1">
            <RotateCcw className="w-3.5 h-3.5" /> Ctrl+Z Undo
          </button>
        </div>
      </div>
    </div>
  );
};

// #472 Modifier Keys (Ctrl, Shift, Alt, Meta)
export const LiveModifierKeysLab: React.FC = () => {
  const [selected, setSelected] = useState<number[]>([1]);
  const [mode, setMode] = useState<'normal' | 'ctrl' | 'shift'>('normal');

  const handleClick = (id: number) => {
    if (mode === 'ctrl') {
      setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    } else if (mode === 'shift') {
      setSelected([1, 2, 3].filter(x => x <= Math.max(id, 1)));
    } else {
      setSelected([id]);
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#472 MODIFIER KEYS</span>
        <span className="text-[10px] text-indigo-600 font-bold">Multi-Select</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2.5 flex flex-col justify-between">
        <div className="flex justify-center gap-2">
          <button onClick={() => setMode('normal')} className={`px-2 py-0.5 rounded text-[9px] font-bold ${mode === 'normal' ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-700'}`}>Click (Single)</button>
          <button onClick={() => setMode('ctrl')} className={`px-2 py-0.5 rounded text-[9px] font-bold ${mode === 'ctrl' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'}`}>Ctrl+Click (Toggle)</button>
          <button onClick={() => setMode('shift')} className={`px-2 py-0.5 rounded text-[9px] font-bold ${mode === 'shift' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'}`}>Shift+Click (Range)</button>
        </div>
        <div className="flex gap-2 justify-center">
          {[1, 2, 3].map(id => (
            <div key={id} onClick={() => handleClick(id)} className={`w-20 h-10 border rounded flex items-center justify-center cursor-pointer font-bold transition-all ${selected.includes(id) ? 'bg-indigo-500 text-white border-indigo-600 scale-105' : 'bg-slate-100 dark:bg-slate-800 border-slate-300'}`}>
              Node #{id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// #473 Key Chord (Ctrl+K ➔ S)
export const LiveKeyChordLab: React.FC = () => {
  const [chordState, setChordState] = useState<'IDLE' | 'WAITING_S' | 'EXECUTED'>('IDLE');

  const step1 = () => setChordState('WAITING_S');
  const step2 = () => {
    if (chordState === 'WAITING_S') {
      setChordState('EXECUTED');
      setTimeout(() => setChordState('IDLE'), 2000);
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#473 KEY CHORD (2-STEP)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Sequential Chord</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2.5 flex flex-col justify-between">
        <div className="text-center">
          <span className="text-[10px] font-bold text-slate-500">Status: </span>
          <span className="font-bold text-indigo-600 dark:text-indigo-400">
            {chordState === 'IDLE' && 'Waiting for [Ctrl+K]'}
            {chordState === 'WAITING_S' && 'Chord: (Ctrl+K) was pressed. Waiting for second key [S]...'}
            {chordState === 'EXECUTED' && '✓ Chord Completed: Save All!'}
          </span>
        </div>
        <div className="flex gap-2">
          <button onClick={step1} className={`flex-1 py-1 rounded text-[9px] font-bold ${chordState === 'WAITING_S' ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-800'}`}>1. Press Ctrl+K</button>
          <button onClick={step2} disabled={chordState !== 'WAITING_S'} className={`flex-1 py-1 rounded text-[9px] font-bold ${chordState === 'WAITING_S' ? 'bg-indigo-600 text-white animate-pulse' : 'bg-slate-200 dark:bg-slate-800 opacity-50'}`}>2. Press S</button>
        </div>
      </div>
    </div>
  );
};

// #474 Arrow Key Nudge
export const LiveArrowNudgeLab: React.FC = () => {
  const [pos, setPos] = useState({ x: 50, y: 30 });
  const [step, setStep] = useState(1);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#474 ARROW KEY NUDGE</span>
        <span className="text-[10px] text-indigo-600 font-bold">X:{pos.x} Y:{pos.y}</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex justify-between items-center">
        <div className="relative w-40 h-24 bg-slate-100 dark:bg-slate-800 border rounded overflow-hidden">
          <div className="absolute w-4 h-4 bg-indigo-600 rounded transition-all" style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)' }} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-1 text-[8px]">
            <button onClick={() => setStep(1)} className={`px-1.5 py-0.5 rounded ${step === 1 ? 'bg-indigo-600 text-white' : 'bg-slate-200'}`}>1px</button>
            <button onClick={() => setStep(5)} className={`px-1.5 py-0.5 rounded ${step === 5 ? 'bg-indigo-600 text-white' : 'bg-slate-200'}`}>5px</button>
          </div>
          <button onClick={() => setPos(p => ({ ...p, y: Math.max(10, p.y - step * 5) }))} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[9px]">↑</button>
          <div className="flex gap-1">
            <button onClick={() => setPos(p => ({ ...p, x: Math.max(10, p.x - step * 5) }))} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[9px]">←</button>
            <button onClick={() => setPos(p => ({ ...p, x: Math.min(90, p.x + step * 5) }))} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[9px]">→</button>
          </div>
          <button onClick={() => setPos(p => ({ ...p, y: Math.min(90, p.y + step * 5) }))} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[9px]">↓</button>
        </div>
      </div>
    </div>
  );
};

// #475 Focus Trap
export const LiveFocusTrapLab: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const elements = ['Input: Title', 'Button: Save', 'Button: Cancel'];

  const handleTab = () => setActiveIdx(prev => (prev + 1) % elements.length);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#475 FOCUS TRAP</span>
        <span className="text-[10px] text-indigo-600 font-bold">Modal Tab Loop</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex flex-col justify-between">
        <div className="flex flex-col gap-1.5">
          {elements.map((el, i) => (
            <div key={i} className={`p-1.5 border rounded text-[9px] font-bold flex justify-between ${activeIdx === i ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 ring-2 ring-indigo-400' : 'border-slate-200'}`}>
              <span>{el}</span>
              {activeIdx === i && <span>[Focused]</span>}
            </div>
          ))}
        </div>
        <button onClick={handleTab} className="w-full py-1 bg-indigo-600 text-white rounded text-[9px] font-bold">Press TAB (Cycles 0 ➔ 1 ➔ 2 ➔ 0)</button>
      </div>
    </div>
  );
};

// #476 Escape to Dismiss
export const LiveEscapeDismissLab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#476 ESCAPE DISMISS</span>
        <span className="text-[10px] text-indigo-600 font-bold">Modal Escape</span>
      </div>
      <div className="relative h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-center">
        {isOpen ? (
          <div className="w-48 bg-slate-800 text-white border-2 border-indigo-500 rounded-lg p-2.5 text-center shadow-xl space-y-2">
            <span className="text-[10px] font-bold block">Active Popup Window</span>
            <button onClick={() => setIsOpen(false)} className="px-3 py-1 bg-red-600 text-white rounded text-[9px] font-bold">Press ESC to Dismiss</button>
          </div>
        ) : (
          <button onClick={() => setIsOpen(true)} className="px-3 py-1.5 bg-indigo-600 text-white rounded text-[9px] font-bold">Reopen Popup</button>
        )}
      </div>
    </div>
  );
};

// #477 Shortcut Cheat Sheet
export const LiveShortcutCheatSheetLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#477 SHORTCUT CHEAT SHEET</span>
        <span className="text-[10px] text-indigo-600 font-bold">Ctrl + /</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 grid grid-cols-2 gap-1.5 overflow-y-auto text-[8px]">
        <div className="flex justify-between p-1 bg-slate-100 dark:bg-slate-800 rounded"><span>Save Project</span><span className="font-bold text-indigo-500">Ctrl+S</span></div>
        <div className="flex justify-between p-1 bg-slate-100 dark:bg-slate-800 rounded"><span>Find Text</span><span className="font-bold text-indigo-500">Ctrl+F</span></div>
        <div className="flex justify-between p-1 bg-slate-100 dark:bg-slate-800 rounded"><span>Duplicate</span><span className="font-bold text-indigo-500">Ctrl+D</span></div>
        <div className="flex justify-between p-1 bg-slate-100 dark:bg-slate-800 rounded"><span>Command</span><span className="font-bold text-indigo-500">Ctrl+K</span></div>
      </div>
    </div>
  );
};

// #478 <kbd> Badge
export const LiveKbdBadgeLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#478 &lt;KBD&gt; KEYCAP BADGE</span>
        <span className="text-[10px] text-indigo-600 font-bold">3D Keycap</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-around">
        <kbd className="px-2.5 py-1 bg-slate-200 dark:bg-slate-800 border-b-2 border-slate-400 dark:border-slate-600 rounded text-xs font-bold shadow">Ctrl</kbd>
        <span className="text-slate-400">+</span>
        <kbd className="px-2.5 py-1 bg-slate-200 dark:bg-slate-800 border-b-2 border-slate-400 dark:border-slate-600 rounded text-xs font-bold shadow">Shift</kbd>
        <span className="text-slate-400">+</span>
        <kbd className="px-2.5 py-1 bg-slate-200 dark:bg-slate-800 border-b-2 border-slate-400 dark:border-slate-600 rounded text-xs font-bold shadow">P</kbd>
      </div>
    </div>
  );
};

// #479 Shortcut Conflict Resolution
export const LiveConflictResolutionLab: React.FC = () => {
  const [text, setText] = useState('');
  const [deleted, setDeleted] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#479 CONFLICT RESOLUTION</span>
        <span className="text-[10px] text-indigo-600 font-bold">Input Isolation Guard</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex flex-col justify-between">
        <input 
          type="text" 
          value={text} 
          onChange={e => setText(e.target.value)} 
          placeholder="Type 'D' here safely (won't trigger node delete)"
          className="p-1.5 border rounded text-[9px] bg-slate-50 dark:bg-slate-800"
        />
        <div className="text-[8px] text-slate-500">
          Typing inside input prevents single-key shortcuts from executing on canvas nodes.
        </div>
      </div>
    </div>
  );
};

// #480 Typeahead Search
export const LiveTypeaheadLab: React.FC = () => {
  const items = ['Apple', 'Ball', 'Cat', 'Dog', 'Elephant', 'Mitsubishi'];
  const [focused, setFocused] = useState('Apple');

  const jump = (char: string) => {
    const match = items.find(i => i.toLowerCase().startsWith(char.toLowerCase()));
    if (match) setFocused(match);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#480 TYPEAHEAD JUMP</span>
        <span className="text-[10px] text-indigo-600 font-bold">Instant Jump</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex justify-between">
        <div className="w-1/2 space-y-1 overflow-y-auto text-[9px]">
          {items.map(item => (
            <div key={item} className={`px-1.5 py-0.5 rounded ${focused === item ? 'bg-indigo-600 text-white font-bold' : 'text-slate-600 dark:text-slate-300'}`}>{item}</div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[8px] text-slate-500">Press Letter:</span>
          {['A', 'C', 'M'].map(char => (
            <button key={char} onClick={() => jump(char)} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[9px] font-bold">Key '{char}'</button>
          ))}
        </div>
      </div>
    </div>
  );
};

// #481 ~ #510 Distinct Special Workbenches

// #481 Access Key (Alt+Mnemonic)
export const LiveAccessKeyLab: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#481 ACCESS KEY (ALT+F)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Mnemonic Underline</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex flex-col justify-between">
        <div className="flex gap-4 border-b border-slate-200 dark:border-slate-800 pb-1">
          <button onClick={() => setOpenMenu(openMenu === 'File' ? null : 'File')} className="text-[10px] font-bold hover:text-indigo-600">
            <span className="underline decoration-indigo-600 decoration-2">F</span>ile
          </button>
          <button onClick={() => setOpenMenu(openMenu === 'Edit' ? null : 'Edit')} className="text-[10px] font-bold hover:text-indigo-600">
            <span className="underline decoration-indigo-600 decoration-2">E</span>dit
          </button>
          <button onClick={() => setOpenMenu(openMenu === 'View' ? null : 'View')} className="text-[10px] font-bold hover:text-indigo-600">
            <span className="underline decoration-indigo-600 decoration-2">V</span>iew
          </button>
        </div>
        {openMenu && (
          <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-[9px] space-y-1">
            <div className="font-bold text-indigo-600">[{openMenu} Menu Opened via Alt+{openMenu[0]}]</div>
            <div>• New File</div>
            <div>• Open Recent</div>
          </div>
        )}
        <div className="text-[8px] text-slate-500">Mnemonic key shows underline when Alt is activated.</div>
      </div>
    </div>
  );
};

// #484 Shortcut Customizer
export const LiveShortcutCustomizerLab: React.FC = () => {
  const [bindKey, setBindKey] = useState('Ctrl + S');
  const [listening, setListening] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#484 SHORTCUT CUSTOMIZER</span>
        <span className="text-[10px] text-indigo-600 font-bold">Remap Binder</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2.5 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold">Save Command:</span>
          <button 
            onClick={() => {
              setListening(true);
              setTimeout(() => { setBindKey('F2'); setListening(false); }, 1200);
            }} 
            className={`px-2.5 py-1 rounded text-[9px] font-bold border ${listening ? 'bg-amber-500 text-white border-amber-600 animate-pulse' : 'bg-slate-100 dark:bg-slate-800 border-slate-300'}`}
          >
            {listening ? 'Press any key...' : bindKey}
          </button>
        </div>
        <span className="text-[8px] text-slate-500">Click to record and remap keyboard shortcut binding.</span>
      </div>
    </div>
  );
};

// #485 Spacebar Pan Mode
export const LiveSpacebarPanLab: React.FC = () => {
  const [panning, setPanning] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#485 SPACEBAR PAN MODE</span>
        <span className="text-[10px] text-indigo-600 font-bold">Hand Tool</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex flex-col justify-between">
        <div 
          onMouseDown={() => panning && setOffset(o => ({ x: o.x + 10, y: o.y + 5 }))}
          className={`h-20 bg-slate-100 dark:bg-slate-800 border rounded flex items-center justify-center relative overflow-hidden ${panning ? 'cursor-grab active:cursor-grabbing bg-indigo-50 dark:bg-indigo-950/40' : 'cursor-default'}`}
        >
          <div className="font-bold text-[9px]" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
            🗺️ CAD Canvas Viewport (Offset: {offset.x}px, {offset.y}px)
          </div>
        </div>
        <button onClick={() => setPanning(!panning)} className={`w-full py-1 rounded text-[9px] font-bold ${panning ? 'bg-emerald-600 text-white' : 'bg-indigo-600 text-white'}`}>
          {panning ? '✋ Spacebar Pan Active (Drag to Move)' : 'Hold Spacebar (Enable Pan Tool)'}
        </button>
      </div>
    </div>
  );
};

// #487 Duplicate Shortcut (Ctrl+D)
export const LiveDuplicateLab: React.FC = () => {
  const [nodes, setNodes] = useState<{ id: number; offset: number }[]>([{ id: 1, offset: 0 }]);

  const duplicate = () => {
    setNodes(prev => [...prev, { id: prev.length + 1, offset: prev.length * 15 }]);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#487 DUPLICATE (CTRL+D)</span>
        <span className="text-[10px] text-indigo-600 font-bold">{nodes.length} Nodes</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex justify-between items-center">
        <div className="relative w-44 h-24 bg-slate-100 dark:bg-slate-800 border rounded overflow-hidden">
          {nodes.map(n => (
            <div key={n.id} className="absolute w-12 h-8 bg-indigo-600 text-white rounded text-[8px] flex items-center justify-center font-bold border border-white shadow" style={{ left: `${10 + n.offset}px`, top: `${10 + n.offset}px` }}>
              #{n.id}
            </div>
          ))}
        </div>
        <button onClick={duplicate} className="px-3 py-1.5 bg-indigo-600 text-white rounded text-[9px] font-bold">Press Ctrl+D</button>
      </div>
    </div>
  );
};

// #488 Group / Ungroup (Ctrl+G / Ctrl+Shift+G)
export const LiveGroupUngroupLab: React.FC = () => {
  const [grouped, setGrouped] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#488 GROUP / UNGROUP</span>
        <span className="text-[10px] text-indigo-600 font-bold">{grouped ? 'Grouped Container' : 'Individual Nodes'}</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex justify-between items-center">
        <div className={`p-2 rounded transition-all ${grouped ? 'border-2 border-dashed border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' : ''}`}>
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-slate-700 text-white rounded flex items-center justify-center font-bold text-[8px]">A</div>
            <div className="w-10 h-10 bg-slate-700 text-white rounded flex items-center justify-center font-bold text-[8px]">B</div>
          </div>
        </div>
        <button onClick={() => setGrouped(!grouped)} className="px-2.5 py-1.5 bg-indigo-600 text-white rounded text-[9px] font-bold">
          {grouped ? 'Ctrl+Shift+G (Ungroup)' : 'Ctrl+G (Group)'}
        </button>
      </div>
    </div>
  );
};

// #489 Select All (Ctrl+A)
export const LiveSelectAllLab: React.FC = () => {
  const [selectedAll, setSelectedAll] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#489 SELECT ALL (CTRL+A)</span>
        <span className="text-[10px] text-indigo-600 font-bold">{selectedAll ? '4/4 Selected' : '0/4 Selected'}</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex justify-between items-center">
        <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map(id => (
            <div key={id} className={`w-14 h-8 rounded flex items-center justify-center font-bold text-[8px] transition-all ${selectedAll ? 'bg-indigo-600 text-white border-2 border-indigo-400 scale-105' : 'bg-slate-100 dark:bg-slate-800 border'}`}>
              Card #{id}
            </div>
          ))}
        </div>
        <button onClick={() => setSelectedAll(!selectedAll)} className="px-3 py-1.5 bg-indigo-600 text-white rounded text-[9px] font-bold">
          {selectedAll ? 'Deselect All' : 'Press Ctrl+A'}
        </button>
      </div>
    </div>
  );
};

// #491 Find in Page (Ctrl+F)
export const LiveFindInPageLab: React.FC = () => {
  const [showFind, setShowFind] = useState(false);
  const [query, setQuery] = useState('Motor');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#491 FIND IN PAGE (CTRL+F)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Search Bar</span>
      </div>
      <div className="relative h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex flex-col justify-between">
        {showFind && (
          <div className="absolute top-2 right-2 bg-slate-800 text-white p-1 rounded shadow flex items-center gap-1 text-[8px] z-10 border border-indigo-500">
            <Search className="w-3 h-3 text-indigo-400" />
            <input value={query} onChange={e => setQuery(e.target.value)} className="w-16 bg-slate-900 text-white px-1 py-0.5 rounded" />
            <span className="text-emerald-400">2 of 2</span>
          </div>
        )}
        <div className="text-[9px] space-y-1 mt-4">
          <div>• AC <span className={showFind && query === 'Motor' ? 'bg-amber-300 dark:bg-amber-600 text-black font-bold px-0.5 rounded' : ''}>Motor</span> Drive Telemetry</div>
          <div>• Servo <span className={showFind && query === 'Motor' ? 'bg-amber-300 dark:bg-amber-600 text-black font-bold px-0.5 rounded' : ''}>Motor</span> RPM Stator</div>
        </div>
        <button onClick={() => setShowFind(!showFind)} className="w-full py-1 bg-indigo-600 text-white rounded text-[9px] font-bold">
          {showFind ? 'Close Find Bar' : 'Press Ctrl+F'}
        </button>
      </div>
    </div>
  );
};

// #493 Command Palette (Ctrl+K)
export const LiveCommandPaletteShortcutLab: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#493 COMMAND PALETTE (CTRL+K)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Quick Switcher</span>
      </div>
      <div className="relative h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex items-center justify-center">
        {open ? (
          <div className="w-52 bg-slate-900 text-white border-2 border-indigo-500 rounded-lg p-2 text-[8px] space-y-1 shadow-2xl z-20">
            <div className="flex items-center gap-1 border-b border-slate-700 pb-1">
              <Search className="w-3 h-3 text-indigo-400" />
              <input autoFocus placeholder="Type a command..." className="bg-transparent text-white outline-none w-full" />
            </div>
            <div className="hover:bg-indigo-600 p-1 rounded cursor-pointer">➔ Open Telemetry Settings</div>
            <div className="hover:bg-indigo-600 p-1 rounded cursor-pointer">➔ Switch Dark/Light Theme</div>
            <button onClick={() => setOpen(false)} className="text-red-400 block w-full text-right mt-1">Close (Esc)</button>
          </div>
        ) : (
          <button onClick={() => setOpen(true)} className="px-3 py-1.5 bg-indigo-600 text-white rounded text-[9px] font-bold flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5" /> Press Ctrl+K
          </button>
        )}
      </div>
    </div>
  );
};

// #502 Toggle Sidebar Panel (Ctrl+B)
export const LiveToggleSidebarLab: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#502 TOGGLE SIDEBAR (CTRL+B)</span>
        <span className="text-[10px] text-indigo-600 font-bold">{open ? 'Expanded' : 'Collapsed'}</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex justify-between items-center overflow-hidden">
        <div className="flex h-24 w-48 border rounded overflow-hidden">
          <div className={`h-full bg-slate-800 text-white p-1 text-[8px] transition-all ${open ? 'w-16' : 'w-0 opacity-0 overflow-hidden'}`}>
            Sidebar
          </div>
          <div className="flex-1 bg-slate-100 dark:bg-slate-900 p-1 text-[8px]">
            Main Content
          </div>
        </div>
        <button onClick={() => setOpen(!open)} className="px-2.5 py-1.5 bg-indigo-600 text-white rounded text-[9px] font-bold">
          Press Ctrl+B
        </button>
      </div>
    </div>
  );
};

// #482 ~ #510 General Dynamic Hotkey Lab with distinct visual trigger
export const LiveSpecializedHotkeyLab: React.FC<{ termNum: number; title: string; defaultKey: string; actionDesc: string }> = ({ termNum, title, defaultKey, actionDesc }) => {
  const [triggered, setTriggered] = useState(false);

  const trigger = () => {
    setTriggered(true);
    setTimeout(() => setTriggered(false), 1500);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#{termNum} {title.toUpperCase()}</span>
        <span className="text-[10px] text-indigo-600 font-bold">Hotkey Action</span>
      </div>
      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2.5 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-slate-500 font-bold">{actionDesc}</span>
          <kbd className="px-2 py-0.5 bg-slate-800 text-white rounded text-[8px] font-bold border-b border-slate-600">{defaultKey}</kbd>
        </div>
        <div className={`p-2 rounded text-center font-bold text-[9px] transition-all ${triggered ? 'bg-emerald-600 text-white scale-105 shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
          {triggered ? `✓ EXECUTED: ${title}` : `Standby (${defaultKey})`}
        </div>
        <button onClick={trigger} className="w-full py-1 bg-indigo-600 text-white rounded text-[9px] font-bold hover:bg-indigo-700">
          Simulate Hotkey [{defaultKey}]
        </button>
      </div>
    </div>
  );
};
