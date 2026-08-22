import React, { useState, useEffect } from 'react';
import { 
  Keyboard, Eye, Sun, Moon, Contrast, Palette,
  Zap, RefreshCw, Undo2, Redo2, Layers, Box,
  Smartphone, Monitor, Tablet, Check, AlertCircle, Trash2,
  Terminal, ShieldCheck, ArrowRight
} from 'lucide-react';

/**
 * ----------------------------------------------------------------------------
 * Category 15: Accessibility, System & Advanced Patterns (#281 ~ #300) Dedicated 1:1 Labs
 * High-contrast, Light/Dark adaptive UI/UX Architecture Workbench
 * ----------------------------------------------------------------------------
 */

// #281 Focus Ring - 2px offset high-visibility focus indicator
export const LiveFocusRingLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#281 FOCUS RING</span>
        <span className="text-[10px] text-indigo-600 font-bold">Ring-Offset 2px</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex justify-around items-center">
        <button className="px-3 py-1.5 bg-slate-200 dark:bg-slate-800 rounded text-xs">
          Default Button
        </button>
        <button className="px-3 py-1.5 bg-indigo-600 text-white rounded text-xs font-bold ring-4 ring-indigo-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 shadow-md">
          Focused Element (Ring)
        </button>
      </div>
    </div>
  );
};

// #282 Keyboard Navigation - Arrow / Tab navigable interactive control grid
export const LiveKeyboardNavLab: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#282 KEYBOARD NAVIGATION</span>
        <span className="text-[10px] text-indigo-600 font-bold">Index: [{activeIdx}]</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="grid grid-cols-4 gap-1.5">
          {['Axis-X', 'Axis-Y', 'Axis-Z', 'Spindle'].map((label, idx) => (
            <button
              key={label}
              onClick={() => setActiveIdx(idx)}
              className={`py-2 rounded text-[10px] font-bold transition-all ${
                activeIdx === idx
                  ? 'bg-indigo-600 text-white ring-2 ring-indigo-400 shadow-md scale-105'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex justify-between text-[9px] text-slate-400 pt-1">
          <button onClick={() => setActiveIdx((activeIdx - 1 + 4) % 4)} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 border rounded">← Prev (Shift+Tab)</button>
          <button onClick={() => setActiveIdx((activeIdx + 1) % 4)} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 border rounded">Next (Tab) →</button>
        </div>
      </div>
    </div>
  );
};

// #283 Tab Order - Explicit sequential 1-2-3-4 traversal sequence
export const LiveTabOrderLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#283 TAB ORDER (SEQUENCE)</span>
        <span className="text-[10px] text-slate-500">DOM Traversal: 1➔2➔3➔4</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="p-2 border rounded bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
            <span className="text-[10px] font-bold">Input Field #{step}</span>
            <span className="w-5 h-5 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black text-[9px]">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #284 Skip Link - Top accessible shortcut jumping directly to main
export const LiveSkipLinkLab: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#284 SKIP LINK</span>
        <button onClick={() => setShow(!show)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          {show ? 'Hide Link' : 'Simulate Tab Focus'}
        </button>
      </div>

      <div className="relative h-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 overflow-hidden flex flex-col justify-between">
        {show && (
          <div className="absolute top-2 left-2 right-2 bg-indigo-600 text-white px-3 py-1.5 rounded-lg shadow-lg font-bold text-xs flex justify-between items-center z-10 animate-bounce">
            <span>⏩ Skip to main content (Press Enter)</span>
            <span className="text-[9px] bg-indigo-800 px-1.5 py-0.5 rounded">#main</span>
          </div>
        )}
        <div className="text-[10px] text-slate-400">Header Nav Bar (Skipped during Tab)</div>
        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded text-center text-[10px] font-bold">
          #main Primary Content Area
        </div>
      </div>
    </div>
  );
};

// #285 ARIA Label - Screen reader naming for icon-only buttons
export const LiveAriaLabelLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#285 ARIA LABEL</span>
        <span className="text-[10px] text-emerald-600 font-bold">Accessibility 100%</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Icon Button</span>
          <button
            aria-label="Delete equipment configuration permanently"
            className="p-2 bg-rose-100 dark:bg-rose-950/60 text-rose-600 border border-rose-400 rounded-lg hover:bg-rose-600 hover:text-white transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        <div className="p-1.5 bg-slate-50 dark:bg-slate-950 rounded border text-[9px] text-slate-500">
          Screen Reader Reads: <span className="text-indigo-600 dark:text-indigo-400 font-bold">"Delete equipment configuration permanently, button"</span>
        </div>
      </div>
    </div>
  );
};

// #286 Screen Reader Text - Invisible .sr-only accessible text
export const LiveScreenReaderTextLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#286 .SR-ONLY (SCREEN READER ONLY)</span>
        <span className="text-[10px] text-slate-500">Clip Rect 0 0 0 0</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded border flex items-center justify-between">
          <span className="text-xs font-bold">Total Power: 45.2 kW</span>
          {/* Visible badge */}
          <span className="px-2 py-0.5 bg-emerald-600 text-white rounded text-[10px] font-bold">OK</span>
          {/* Hidden .sr-only accessible narrative */}
          <span className="sr-only">Status is normal and within safe electrical limits.</span>
        </div>
        <div className="text-[9px] text-slate-400">
          Visually clipped with <code className="text-indigo-500">.sr-only</code> class: Rendered in accessibility tree only.
        </div>
      </div>
    </div>
  );
};

// #287 High Contrast Mode - 7:1+ ultra-contrast mode toggle
export const LiveHighContrastLab: React.FC = () => {
  const [highContrast, setHighContrast] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#287 HIGH CONTRAST (7:1+ WCAG AAA)</span>
        <button
          onClick={() => setHighContrast(!highContrast)}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
        >
          Toggle {highContrast ? 'Standard' : 'High Contrast'}
        </button>
      </div>

      <div className={`p-3 rounded-lg border-2 transition-all ${
        highContrast
          ? 'bg-black text-yellow-300 border-yellow-400 font-black'
          : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-300'
      }`}>
        <div className="text-xs mb-1">HIGH VISIBILITY INDUSTRIAL DISPLAY</div>
        <div className="text-[10px] opacity-90">Contrast Ratio: {highContrast ? '19.5:1 (AAA Pass)' : '4.5:1 (AA Pass)'}</div>
      </div>
    </div>
  );
};

// #288 Dark Mode - Slate #18202A dark palette demonstration
export const LiveDarkModeLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#288 DARK MODE PALETTE</span>
        <span className="text-[10px] text-slate-400 flex items-center gap-1"><Moon className="w-3 h-3 text-indigo-400" /> Slate #18202A</span>
      </div>

      <div className="p-3 bg-slate-900 border-2 border-indigo-500/50 rounded-lg text-slate-100 space-y-1">
        <div className="font-bold text-xs text-indigo-400">Dark Control Deck</div>
        <div className="text-[10px] text-slate-400">Glare-free high readability night display</div>
      </div>
    </div>
  );
};

// #289 Light Mode - Clean off-white #F8FAFC daylight palette
export const LiveLightModeLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#289 LIGHT MODE PALETTE</span>
        <span className="text-[10px] text-amber-600 font-bold flex items-center gap-1"><Sun className="w-3 h-3" /> Off-white #F8FAFC</span>
      </div>

      <div className="p-3 bg-white border-2 border-slate-300 rounded-lg text-slate-900 space-y-1 shadow">
        <div className="font-bold text-xs text-indigo-600">Light Workbench Deck</div>
        <div className="text-[10px] text-slate-600">High-contrast crisp daytime illumination</div>
      </div>
    </div>
  );
};

// #290 Theme - Multi-preset aesthetic color themes
export const LiveThemeLab: React.FC = () => {
  const [theme, setTheme] = useState<'indigo' | 'emerald' | 'amber'>('indigo');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#290 THEME PRESETS</span>
        <div className="flex gap-1">
          <button onClick={() => setTheme('indigo')} className="w-4 h-4 rounded-full bg-indigo-600" />
          <button onClick={() => setTheme('emerald')} className="w-4 h-4 rounded-full bg-emerald-600" />
          <button onClick={() => setTheme('amber')} className="w-4 h-4 rounded-full bg-amber-600" />
        </div>
      </div>

      <div className={`p-3 rounded-lg border-2 text-white font-bold text-xs flex justify-between items-center ${
        theme === 'indigo' ? 'bg-indigo-600 border-indigo-700' :
        theme === 'emerald' ? 'bg-emerald-600 border-emerald-700' :
        'bg-amber-600 border-amber-700'
      }`}>
        <span>Active Theme: {theme.toUpperCase()}</span>
        <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded">Preset Applied</span>
      </div>
    </div>
  );
};

// #291 Design Token - CSS Variable token architecture
export const LiveDesignTokenLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#291 DESIGN TOKENS</span>
        <span className="text-[10px] text-slate-500">CSS Variables</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 space-y-1 text-[10px]">
        <div className="flex justify-between p-1 bg-slate-50 dark:bg-slate-950 rounded border">
          <span className="text-slate-500">--color-primary</span>
          <span className="text-indigo-600 font-bold">#4f46e5</span>
        </div>
        <div className="flex justify-between p-1 bg-slate-50 dark:bg-slate-950 rounded border">
          <span className="text-slate-500">--radius-card</span>
          <span className="text-indigo-600 font-bold">12px</span>
        </div>
        <div className="flex justify-between p-1 bg-slate-50 dark:bg-slate-950 rounded border">
          <span className="text-slate-500">--spacing-lg</span>
          <span className="text-indigo-600 font-bold">24px</span>
        </div>
      </div>
    </div>
  );
};

// #292 Component - Modular reusable UI block with props
export const LiveComponentLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#292 REUSABLE COMPONENT</span>
        <span className="text-[10px] text-indigo-600 font-bold">&lt;StatusBadge /&gt;</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex justify-around">
        <span className="px-2.5 py-1 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-lg font-bold text-[10px] border border-indigo-400">
          Props: type="info"
        </span>
        <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-lg font-bold text-[10px] border border-emerald-400">
          Props: type="ready"
        </span>
      </div>
    </div>
  );
};

// #293 Variant - Style permutations (Primary / Destructive / Ghost)
export const LiveVariantLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#293 COMPONENT VARIANTS</span>
        <span className="text-[10px] text-slate-500">CVA Props</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex justify-between gap-1.5">
        <button className="flex-1 py-1.5 bg-indigo-600 text-white rounded text-[10px] font-bold shadow">Primary</button>
        <button className="flex-1 py-1.5 bg-rose-600 text-white rounded text-[10px] font-bold shadow">Destructive</button>
        <button className="flex-1 py-1.5 bg-transparent border border-slate-400 text-[10px] font-bold">Ghost</button>
      </div>
    </div>
  );
};

// #294 State Machine - Finite state transitions (Idle ➔ Running ➔ Done)
export const LiveStateMachineLab: React.FC = () => {
  const [state, setState] = useState<'idle' | 'running' | 'done'>('idle');

  const transition = () => {
    if (state === 'idle') setState('running');
    else if (state === 'running') setState('done');
    else setState('idle');
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#294 FINITE STATE MACHINE (FSM)</span>
        <button onClick={transition} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          Trigger Next State ➔
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex items-center justify-between">
        <span className={`p-1.5 rounded text-[9px] font-bold ${state === 'idle' ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>IDLE</span>
        <ArrowRight className="w-3 h-3 text-slate-400" />
        <span className={`p-1.5 rounded text-[9px] font-bold ${state === 'running' ? 'bg-amber-600 text-white animate-pulse' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>RUNNING</span>
        <ArrowRight className="w-3 h-3 text-slate-400" />
        <span className={`p-1.5 rounded text-[9px] font-bold ${state === 'done' ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>DONE</span>
      </div>
    </div>
  );
};

// #295 Responsive Breakpoint - Viewport device switching (sm / md / xl)
export const LiveBreakpointLab: React.FC = () => {
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#295 RESPONSIVE BREAKPOINTS</span>
        <div className="flex gap-1">
          <button onClick={() => setDevice('mobile')} className={`p-1 rounded ${device === 'mobile' ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800'}`}><Smartphone className="w-3 h-3" /></button>
          <button onClick={() => setDevice('tablet')} className={`p-1 rounded ${device === 'tablet' ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800'}`}><Tablet className="w-3 h-3" /></button>
          <button onClick={() => setDevice('desktop')} className={`p-1 rounded ${device === 'desktop' ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800'}`}><Monitor className="w-3 h-3" /></button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex justify-center">
        <div className={`p-2 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-400 rounded text-center transition-all ${
          device === 'mobile' ? 'w-24 text-[8px]' : device === 'tablet' ? 'w-48 text-[10px]' : 'w-full text-xs font-bold'
        }`}>
          Viewport: {device.toUpperCase()} ({device === 'mobile' ? '<640px' : device === 'tablet' ? '768px' : '1280px+'})
        </div>
      </div>
    </div>
  );
};

// #296 Lazy Loading - Code-split bundle loaded on demand
export const LiveLazyLoadingLab: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadModule = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 600);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#296 LAZY LOADING</span>
        <button onClick={loadModule} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          {loaded ? 'Reload Module' : 'Load Heavy Chart.js'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-center">
        {loading && <div className="text-[10px] text-amber-500 font-bold animate-pulse">Fetching chunk: chart-bundle.js (2.4MB)...</div>}
        {loaded && <div className="text-xs text-emerald-600 font-bold">✓ Heavy 3D Module dynamically imported!</div>}
        {!loading && !loaded && <div className="text-[10px] text-slate-400">Chunk not in memory yet (0 KB allocated)</div>}
      </div>
    </div>
  );
};

// #297 Virtualization - Rendering only 5 visible items out of 100,000
export const LiveVirtualizationLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#297 DOM VIRTUALIZATION</span>
        <span className="text-[10px] text-emerald-600 font-bold">5 Nodes Rendered / 100,000</span>
      </div>

      <div className="h-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-1.5 overflow-hidden flex flex-col justify-between text-[9px]">
        <div className="p-1 bg-slate-50 dark:bg-slate-950 rounded border">Row #4,012 | Spindle Velocity: 14,200 RPM</div>
        <div className="p-1 bg-indigo-50 dark:bg-indigo-950 rounded border border-indigo-400 font-bold text-indigo-600">Row #4,013 | Spindle Velocity: 14,210 RPM</div>
        <div className="p-1 bg-slate-50 dark:bg-slate-950 rounded border">Row #4,014 | Spindle Velocity: 14,205 RPM</div>
      </div>
    </div>
  );
};

// #298 Optimistic UI - 0ms instant UI update with background sync
export const LiveOptimisticUILab: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [syncStatus, setSyncStatus] = useState('In sync');

  const toggle = () => {
    setChecked(!checked); // Instant optimistic update
    setSyncStatus('Syncing to Cloud...');
    setTimeout(() => {
      setSyncStatus('In sync ✓');
    }, 700);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#298 OPTIMISTIC UI</span>
        <span className="text-[10px] text-emerald-600 font-bold">0ms Perceived Speed</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={toggle}
            className="w-4 h-4 accent-indigo-600"
          />
          <span className="text-xs font-bold">Auto-Coolant Enable</span>
        </label>
        <span className="text-[9px] text-slate-400 font-bold">{syncStatus}</span>
      </div>
    </div>
  );
};

// #299 Undo/Redo Stack - Past, Present, and Future history stack
export const LiveUndoStackLab: React.FC = () => {
  const [history, setHistory] = useState<number[]>([10]);
  const [future, setFuture] = useState<number[]>([]);
  const current = history[history.length - 1];

  const add = (val: number) => {
    setHistory([...history, current + val]);
    setFuture([]);
  };

  const undo = () => {
    if (history.length <= 1) return;
    const prev = history[history.length - 1];
    setFuture([prev, ...future]);
    setHistory(history.slice(0, -1));
  };

  const redo = () => {
    if (future.length === 0) return;
    const next = future[0];
    setFuture(future.slice(1));
    setHistory([...history, next]);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#299 UNDO / REDO STACK</span>
        <div className="flex gap-1">
          <button disabled={history.length <= 1} onClick={undo} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 disabled:opacity-30 rounded text-[10px] font-bold flex items-center gap-0.5"><Undo2 className="w-3 h-3" /> Undo</button>
          <button disabled={future.length === 0} onClick={redo} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 disabled:opacity-30 rounded text-[10px] font-bold flex items-center gap-0.5"><Redo2 className="w-3 h-3" /> Redo</button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-500">Value: </span>
          <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">{current}</span>
        </div>
        <div className="flex gap-1">
          <button onClick={() => add(5)} className="px-2 py-1 bg-indigo-600 text-white rounded text-[10px] font-bold">+5</button>
          <button onClick={() => add(20)} className="px-2 py-1 bg-emerald-600 text-white rounded text-[10px] font-bold">+20</button>
        </div>
      </div>
    </div>
  );
};

// #300 Command Bar - Contextual floating multi-selection action ribbon
export const LiveCommandBarLab: React.FC = () => {
  const [selectedCount, setSelectedCount] = useState(2);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#300 COMMAND BAR (FLOATING ACTION BAR)</span>
        <button onClick={() => setSelectedCount(selectedCount > 0 ? 0 : 2)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          {selectedCount > 0 ? 'Deselect All' : 'Select 2 Items'}
        </button>
      </div>

      <div className="relative h-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 flex items-center justify-center">
        {selectedCount > 0 ? (
          <div className="w-full bg-slate-900 text-white px-3 py-1.5 rounded-lg flex items-center justify-between shadow-xl animate-fade-in text-[10px]">
            <span className="font-bold text-indigo-400">{selectedCount} items selected</span>
            <div className="flex gap-1.5">
              <button className="px-2 py-0.5 bg-indigo-600 rounded font-bold">Export G-Code</button>
              <button className="px-2 py-0.5 bg-rose-600 rounded font-bold">Delete</button>
            </div>
          </div>
        ) : (
          <span className="text-[10px] text-slate-400">No items selected (Command bar hidden)</span>
        )}
      </div>
    </div>
  );
};
