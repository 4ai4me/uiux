import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Check, Copy, AlertCircle, Eye, EyeOff, ShieldCheck, 
  HelpCircle, Clock, Save, Lock, ArrowRight, CornerDownLeft, RefreshCw,
  Search, Filter, Layers, Info, Wifi, WifiOff, FileText, CheckCircle2,
  Trash2, X, ChevronRight, CornerRightDown, ExternalLink, MousePointer,
  ListOrdered, Timer, Eye as EyeIcon, Radio, ChevronDown, Plus, AlertTriangle
} from 'lucide-react';

// =========================================================================
// Category 23: Text Hint & Placeholder Specialized Interactive Labs (#551 ~ #590)
// =========================================================================

// #551 Input Ghost Text (Inline Autocomplete Hint)
export const LiveGhostTextLab: React.FC = () => {
  const [input, setInput] = useState('Mit');
  const suggestion = 'Mitsubishi Electric MELSERVO-J5';

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab' || e.key === 'ArrowRight') {
      if (suggestion.toLowerCase().startsWith(input.toLowerCase())) {
        e.preventDefault();
        setInput(suggestion);
      }
    }
  };

  const ghostPart = suggestion.toLowerCase().startsWith(input.toLowerCase()) && input.length > 0
    ? suggestion.slice(input.length)
    : '';

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> #551 Inline Ghost Text Hint
        </span>
        <span className="text-[10px] bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded border border-indigo-400/40 font-bold">
          Press Tab / ➔
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-slate-700 dark:text-slate-300 text-[11px] font-bold">Search Hardware Catalog</label>
        <div className="relative flex items-center bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs">
          <span className="text-slate-900 dark:text-slate-100 font-mono">{input}</span>
          <span className="text-slate-400 dark:text-slate-500 font-mono select-none pointer-events-none opacity-60">{ghostPart}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="absolute inset-0 w-full h-full opacity-0 px-3 font-mono cursor-text"
            placeholder=""
            autoFocus
          />
        </div>
      </div>

      <div className="flex justify-between items-center text-[10px] text-slate-600 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-900/60 p-2 rounded">
        <span>Try typing <code className="text-indigo-600 dark:text-indigo-400 font-bold">"Mit"</code></span>
        <span>Ghost Auto-fill: <strong className="text-slate-800 dark:text-slate-200">{ghostPart || '(complete)'}</strong></span>
      </div>
    </div>
  );
};

// #552 Floating Label (Material Filled Input)
export const LiveFloatingLabelLab: React.FC = () => {
  const [focused, setFocused] = useState(false);
  const [val, setVal] = useState('');
  const isFloating = focused || val.length > 0;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> #552 Floating Label
        </span>
        <span className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">
          State: {isFloating ? 'Floating Top' : 'Center Resting'}
        </span>
      </div>

      <div className="relative pt-2">
        <div className={`relative bg-white dark:bg-slate-900 border rounded-lg transition-all duration-200 ${focused ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-slate-300 dark:border-slate-700'}`}>
          <label 
            className={`absolute left-3 transition-all duration-200 pointer-events-none ${
              isFloating 
                ? '-top-2.5 bg-white dark:bg-slate-900 px-1 text-[10px] font-bold text-indigo-600 dark:text-indigo-400' 
                : 'top-2.5 text-xs text-slate-400'
            }`}
          >
            Motor Model Identifier
          </label>
          <input
            type="text"
            value={val}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => setVal(e.target.value)}
            className="w-full bg-transparent px-3 py-2.5 text-xs text-slate-900 dark:text-slate-100 focus:outline-none"
          />
        </div>
      </div>
      <p className="text-[10px] text-slate-500">Notice label smoothly floats to top border without vanishing on typing.</p>
    </div>
  );
};

// #553 Interactive Example Chips (Prompt Suggestions)
export const LiveExampleChipsLab: React.FC = () => {
  const [val, setVal] = useState('');
  const chips = ['HG-SR352B', '220V 3-Phase', 'Torque 12.4Nm', 'IP67 Waterproof'];

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> #553 Suggestion Chips
        </span>
        <button onClick={() => setVal('')} className="text-[10px] text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Clear</button>
      </div>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Click suggestion chips below..."
          className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:border-indigo-500 focus:outline-none"
        />

        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-[10px] text-slate-500">Quick Inject:</span>
          {chips.map((c) => (
            <button
              key={c}
              onClick={() => setVal(c)}
              className="text-[10px] bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-400/30 rounded-full px-2.5 py-0.5 transition-colors"
            >
              + {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// #554 Microcopy (Friendly Contextual Guidance)
export const LiveMicrocopyLab: React.FC = () => {
  const [saved, setSaved] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Info className="w-4 h-4" /> #554 Microcopy Guidance
        </span>
      </div>

      <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-300 dark:border-slate-800 flex flex-col gap-2">
        <label className="text-slate-700 dark:text-slate-300 text-[11px] font-bold">Cloud Deployment Token</label>
        <input 
          type="text" 
          defaultValue="tok_live_994827519a" 
          className="w-full bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-200" 
        />
        <p className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>Your token is end-to-end encrypted and will never be shared across tenants.</span>
        </p>
      </div>

      <div className="flex items-center justify-between">
        <button 
          onClick={() => setSaved(!saved)} 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
        >
          {saved ? 'Settings Saved' : 'Save Cloud Key'}
        </button>
        <span className="text-[10px] text-slate-500">Changes take effect immediately.</span>
      </div>
    </div>
  );
};

// #555 Password Strength Meter
export const LivePasswordStrengthLab: React.FC = () => {
  const [pwd, setPwd] = useState('Pass123!');
  const [show, setShow] = useState(false);

  const getScore = () => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };

  const score = getScore();
  const labels = ['Empty', 'Weak', 'Fair', 'Strong', 'Unbreakable'];
  const colors = ['bg-slate-300 dark:bg-slate-700', 'bg-rose-500', 'bg-amber-500', 'bg-indigo-500', 'bg-emerald-500'];

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4" /> #555 Password Strength Meter
        </span>
        <span className="text-[10px] font-bold" style={{ color: score === 4 ? '#10b981' : score >= 2 ? '#f59e0b' : '#ef4444' }}>
          {labels[score]}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="relative flex items-center">
          <input
            type={show ? 'text' : 'password'}
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 pr-9 text-xs text-slate-900 dark:text-slate-100 focus:border-indigo-500 focus:outline-none"
            placeholder="Type secret password..."
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-2.5 text-slate-400 hover:text-slate-200"
          >
            {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        <div className="grid grid-cols-4 gap-1.5 h-1.5 w-full">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-full rounded-full transition-all duration-300 ${
                score >= step ? colors[score] : 'bg-slate-300 dark:bg-slate-800'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="text-[10px] text-slate-500 flex justify-between">
        <span>Criteria: 8+ chars, Uppercase, Digits, Symbol</span>
        <span>Score: {score}/4</span>
      </div>
    </div>
  );
};

// #556 Help Text / Subtitle Hint
export const LiveHelpTextLab: React.FC = () => {
  const [val, setVal] = useState('usr_robot_01');
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <HelpCircle className="w-4 h-4" /> #556 Permanent Help Text
        </span>
        <span className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded">Always Visible</span>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold text-[11px]">System Namespace</label>
        <input 
          type="text" 
          value={val} 
          onChange={(e) => setVal(e.target.value)} 
          className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded px-2.5 py-1.5 text-xs" 
        />
        <p className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
          <Info className="w-3 h-3 text-indigo-500" /> Must contain lowercase alphanumeric characters and underscores only.
        </p>
      </div>
    </div>
  );
};

// #557 Inline Error Hint
export const LiveTextHintInlineErrorLab: React.FC = () => {
  const [email, setEmail] = useState('invalid-user@');
  const isValid = email.includes('@') && email.split('@')[1]?.length > 2;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4" /> #557 Inline Validation Error
        </span>
        <span className={`text-[10px] px-2 py-0.5 rounded ${isValid ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/20 text-rose-600 dark:text-rose-400'}`}>
          {isValid ? 'Valid' : 'Invalid'}
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-slate-700 dark:text-slate-300 text-[11px] font-bold">Operator Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full bg-white dark:bg-slate-900 border rounded-lg px-3 py-2 text-xs focus:outline-none ${
            isValid ? 'border-emerald-500 focus:ring-2 focus:ring-emerald-500/20' : 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
          }`}
        />
        {!isValid && (
          <p className="text-[10px] text-rose-600 dark:text-rose-400 flex items-center gap-1 mt-0.5">
            <AlertCircle className="w-3 h-3 shrink-0" />
            Please provide a complete domain name (e.g. operator@plant.com).
          </p>
        )}
      </div>
    </div>
  );
};

// #558 Character Counter Hint (0/200)
export const LiveCharCounterLab: React.FC = () => {
  const [text, setText] = useState('Inspection passed for Axis-4 servo calibration routine.');
  const max = 80;
  const count = text.length;
  const isNear = count > max * 0.8;
  const isOver = count > max;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <FileText className="w-4 h-4" /> #558 Character Counter
        </span>
        <span className={`text-[10px] font-bold ${isOver ? 'text-rose-500' : isNear ? 'text-amber-500' : 'text-slate-500'}`}>
          {count} / {max} chars
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          className={`w-full bg-white dark:bg-slate-900 border rounded-lg p-2 text-xs focus:outline-none ${
            isOver ? 'border-rose-500 ring-2 ring-rose-500/20' : 'border-slate-300 dark:border-slate-700 focus:border-indigo-500'
          }`}
        />
        <div className="flex justify-between text-[10px] text-slate-500">
          <span>Maintenance log summary note</span>
          <span>{max - count} chars remaining</span>
        </div>
      </div>
    </div>
  );
};

// #559 Empty State Placeholder Message
export const LiveEmptyStateLab: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> #559 Empty State Message
        </span>
        <button 
          onClick={() => setItems(items.length ? [] : ['Node 01', 'Node 02'])} 
          className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded"
        >
          {items.length ? 'Clear to Empty' : 'Populate Data'}
        </button>
      </div>

      {items.length === 0 ? (
        <div className="py-6 flex flex-col items-center justify-center text-center bg-white dark:bg-slate-900 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 p-4">
          <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-2">
            <Search className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200">No telemetry logs found</h4>
          <p className="text-[10px] text-slate-400 max-w-xs mt-1 mb-3">Adjust your date filter or connect a live sensor node to start stream.</p>
          <button onClick={() => setItems(['Sensor A1'])} className="bg-indigo-600 text-white px-3 py-1 rounded text-xs font-bold">+ Register First Node</button>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-800 space-y-1">
          {items.map((it, idx) => (
            <div key={idx} className="p-2 bg-slate-100 dark:bg-slate-800 rounded flex justify-between">
              <span>{it}</span>
              <span className="text-emerald-500 text-[10px]">Active</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// #560 Tooltip Microcopy
export const LiveTooltipLab: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Info className="w-4 h-4" /> #560 Tooltip Microcopy
        </span>
        <span className="text-[10px] text-slate-500">Hover trigger</span>
      </div>
      <div className="flex items-center justify-center py-6">
        <div className="relative">
          <button 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2"
          >
            <span>Sync Hardware State</span>
            <HelpCircle className="w-4 h-4" />
          </button>
          {hovered && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-900 text-white text-[10px] p-2 rounded shadow-xl border border-slate-700 text-center animate-fadeIn z-30">
              ⚡ Flushes RAM cache to EEPROM non-volatile flash memory (250ms).
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// #561 Badge Count Hint
export const LiveBadgeCountLab: React.FC = () => {
  const [count, setCount] = useState(4);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Info className="w-4 h-4" /> #561 Badge Count Hint
        </span>
        <div className="flex gap-1">
          <button onClick={() => setCount(Math.max(0, count - 1))} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-bold">-</button>
          <button onClick={() => setCount(count + 1)} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-bold">+</button>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-around py-4">
        <div className="relative inline-flex items-center px-4 py-2 bg-white dark:bg-slate-900 border rounded-lg">
          <span>Unresolved Alarms</span>
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white dark:ring-slate-950 animate-pulse">
              {count > 99 ? '99+' : count}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// #562 Format Mask Guide
export const LiveFormatMaskLab: React.FC = () => {
  const [digits, setDigits] = useState('20260817');

  const formatMask = (raw: string) => {
    const clean = raw.replace(/\D/g, '').slice(0, 8);
    const y = clean.slice(0, 4);
    const m = clean.slice(4, 6);
    const d = clean.slice(6, 8);
    if (clean.length > 6) return `${y}-${m}-${d}`;
    if (clean.length > 4) return `${y}-${m}`;
    return y;
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Clock className="w-4 h-4" /> #562 Format Mask Guide
        </span>
        <span className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded">YYYY-MM-DD</span>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-slate-700 dark:text-slate-300 text-[11px] font-bold">Calibration Expiry Date</label>
        <input
          type="text"
          value={formatMask(digits)}
          onChange={(e) => setDigits(e.target.value.replace(/\D/g, ''))}
          maxLength={10}
          placeholder="YYYY-MM-DD"
          className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs font-mono text-slate-900 dark:text-slate-100 focus:border-indigo-500 focus:outline-none"
        />
        <p className="text-[10px] text-slate-500">Auto-injects hyphens dynamically as you enter numeric characters.</p>
      </div>
    </div>
  );
};

// #563 Prefix & Suffix Unit Label
export const LivePrefixSuffixLab: React.FC = () => {
  const [speed, setSpeed] = useState('3200');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> #563 Prefix / Suffix Units
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <label className="text-[11px] text-slate-700 dark:text-slate-300 font-bold block mb-1">Rotational Velocity</label>
          <div className="flex items-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden">
            <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-2 text-slate-500 border-r border-slate-300 dark:border-slate-700 text-xs">⚡</span>
            <input
              type="number"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              className="w-full bg-transparent px-2.5 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none"
            />
            <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-2 text-slate-600 dark:text-slate-400 border-l border-slate-300 dark:border-slate-700 text-xs font-bold">RPM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// #564 Breadcrumb Path Hint
export const LiveBreadcrumbLab: React.FC = () => {
  const [path, setPath] = useState(['Factory A', 'Line 3', 'Servo 04']);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <ChevronRight className="w-4 h-4" /> #564 Breadcrumb Path Hint
        </span>
      </div>
      <div className="flex items-center gap-1.5 p-2.5 bg-white dark:bg-slate-900 border rounded-lg">
        {path.map((segment, idx) => (
          <React.Fragment key={idx}>
            <span className={`cursor-pointer hover:underline ${idx === path.length - 1 ? 'font-bold text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}`}>
              {segment}
            </span>
            {idx < path.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// #565 Shortcut Pill Hint
export const LiveShortcutPillLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Search className="w-4 h-4" /> #565 Shortcut Hint Pill
        </span>
      </div>
      <div className="relative flex items-center bg-white dark:bg-slate-900 border rounded-lg px-3 py-2">
        <Search className="w-4 h-4 text-slate-400 mr-2" />
        <span className="text-slate-400 flex-1">Type commands...</span>
        <span className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 shadow-inner">
          ⌘K
        </span>
      </div>
    </div>
  );
};

// #566 Autosave Status Microcopy
export const LiveTextHintAutosaveLab: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'saving' | 'synced'>('synced');

  const triggerEdit = () => {
    setStatus('saving');
    setTimeout(() => {
      setStatus('synced');
    }, 900);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Save className="w-4 h-4" /> #566 Autosave Status
        </span>
        <div className="flex items-center gap-1.5">
          {status === 'saving' ? (
            <span className="text-[10px] text-amber-500 flex items-center gap-1">
              <RefreshCw className="w-3 h-3 animate-spin" /> Saving changes...
            </span>
          ) : (
            <span className="text-[10px] text-emerald-500 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> All changes synced
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <input 
          type="text" 
          defaultValue="Axis-1 PID gain parameters: Kp=1.42, Ki=0.08" 
          onChange={triggerEdit}
          className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none"
        />
        <p className="text-[10px] text-slate-500">Edit text above to simulate cloud telemetry autosave hook.</p>
      </div>
    </div>
  );
};

// #567 Required Asterisk (*)
export const LiveRequiredAsteriskLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4" /> #567 Required Field Asterisk
        </span>
        <span className="text-[10px] text-rose-500 font-bold">* Non-nullable</span>
      </div>
      <div className="space-y-1">
        <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
          Emergency E-Stop Channel ID <span className="text-rose-500 font-bold">*</span>
        </label>
        <input type="text" defaultValue="CH-ESTOP-01" className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded px-3 py-2 text-xs" />
      </div>
    </div>
  );
};

// #568 Optional Badge
export const LiveOptionalBadgeLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Info className="w-4 h-4" /> #568 Optional Field Badge
        </span>
        <span className="text-[10px] text-slate-500">(Optional)</span>
      </div>
      <div className="space-y-1">
        <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 flex justify-between">
          <span>Secondary Gateway Proxy</span>
          <span className="text-slate-400 font-normal text-[10px]">(Optional)</span>
        </label>
        <input type="text" placeholder="192.168.1.254" className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded px-3 py-2 text-xs" />
      </div>
    </div>
  );
};

// #569 Input Range Limit Hint
export const LiveRangeLimitLab: React.FC = () => {
  const [val, setVal] = useState(45);
  const min = 0;
  const max = 100;
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Info className="w-4 h-4" /> #569 Input Range Limit
        </span>
        <span className="text-[10px] text-indigo-500 font-bold">{min} ~ {max} %</span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-[11px]">
          <span>PWM Duty Cycle: <strong>{val}%</strong></span>
          <span className="text-slate-400">Min: 0% / Max: 100%</span>
        </div>
        <input type="range" min={min} max={max} value={val} onChange={(e) => setVal(Number(e.target.value))} className="w-full accent-indigo-500" />
      </div>
    </div>
  );
};

// #570 Slash Command Hint ('/')
export const LiveSlashCommandLab: React.FC = () => {
  const [text, setText] = useState('');
  const showMenu = text.endsWith('/');
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> #570 Slash Commands ('/')
        </span>
        <span className="text-[10px] text-slate-500">Type '/' to trigger</span>
      </div>
      <div className="relative">
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Type '/' for commands..." 
          className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs" 
        />
        {showMenu && (
          <div className="absolute top-full left-0 mt-1 w-full bg-slate-900 border border-indigo-500 rounded-lg p-1.5 shadow-xl z-20 space-y-1 animate-fadeIn text-white">
            <button onClick={() => setText('/insert-sensor ')} className="w-full text-left px-2 py-1 hover:bg-indigo-600 rounded text-[11px] flex justify-between">
              <span>⚡ /insert-sensor</span>
              <span className="text-slate-400 text-[10px]">Add sensor node</span>
            </button>
            <button onClick={() => setText('/trigger-estop ')} className="w-full text-left px-2 py-1 hover:bg-rose-600 rounded text-[11px] flex justify-between text-rose-300">
              <span>⛔ /trigger-estop</span>
              <span className="text-slate-400 text-[10px]">Emergency Halt</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// #571 File Drag & Drop Dropzone Microcopy
export const LiveDropzoneLab: React.FC = () => {
  const [drag, setDrag] = useState(false);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <FileText className="w-4 h-4" /> #571 Dropzone Microcopy
        </span>
      </div>
      <div 
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); }}
        className={`p-6 border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-center transition-colors ${
          drag ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50'
        }`}
      >
        <FileText className="w-8 h-8 text-indigo-500 mb-2" />
        <span className="font-bold text-xs">Drag and drop CAD schematics (.STEP, .DXF)</span>
        <span className="text-[10px] text-slate-400 mt-1">Supports up to 50MB per single file payload.</span>
      </div>
    </div>
  );
};

// #572 Confirmation Modal Destructive Warning
export const LiveDestructiveWarningLab: React.FC = () => {
  const [confirmed, setConfirmed] = useState(false);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <AlertTriangle className="w-4 h-4 text-rose-500" /> #572 Destructive Warning
        </span>
      </div>
      <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg flex flex-col gap-2">
        <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>Permanently Purge Firmware Flash Memory?</span>
        </div>
        <p className="text-[10px] text-slate-600 dark:text-slate-400">
          This action cannot be undone. All custom PLC calibration registers will be wiped to factory default 0.
        </p>
        <div className="flex justify-end gap-2 mt-1">
          <button className="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px]">Cancel</button>
          <button onClick={() => setConfirmed(!confirmed)} className="px-3 py-1 bg-rose-600 text-white rounded text-[10px] font-bold">
            {confirmed ? 'Purged!' : 'Yes, Delete All'}
          </button>
        </div>
      </div>
    </div>
  );
};

// #573 Search Result Highlight
export const LiveSearchHighlightLab: React.FC = () => {
  const [query, setQuery] = useState('servo');
  const text = 'The AC Servo Motor controller reported high velocity calibration on Axis-2.';
  
  const getHighlighted = () => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() 
        ? <mark key={i} className="bg-amber-300 dark:bg-amber-500/40 text-black dark:text-amber-200 px-0.5 rounded font-bold">{part}</mark>
        : part
    );
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Search className="w-4 h-4" /> #573 Search Match Highlight
        </span>
      </div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search query..." 
        className="w-full bg-white dark:bg-slate-900 border rounded px-2.5 py-1 text-xs" 
      />
      <div className="p-2.5 bg-white dark:bg-slate-900 border rounded text-xs leading-relaxed">
        {getHighlighted()}
      </div>
    </div>
  );
};

// #574 Pagination Status Microcopy
export const LivePaginationLab: React.FC = () => {
  const [page, setPage] = useState(1);
  const total = 636;
  const perPage = 20;
  const maxPage = Math.ceil(total / perPage);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <ListOrdered className="w-4 h-4" /> #574 Pagination Microcopy
        </span>
      </div>
      <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-2.5 rounded-lg border">
        <span className="text-[11px] text-slate-600 dark:text-slate-400">
          Showing <strong>{(page - 1) * perPage + 1} - {Math.min(page * perPage, total)}</strong> of <strong>{total}</strong> items
        </span>
        <div className="flex gap-1.5">
          <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded disabled:opacity-40">Prev</button>
          <span className="px-2 py-1 font-bold">{page} / {maxPage}</span>
          <button disabled={page === maxPage} onClick={() => setPage(page + 1)} className="px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded disabled:opacity-40">Next</button>
        </div>
      </div>
    </div>
  );
};

// #575 Undo Toast Action
export const LiveUndoToastLab: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [count, setCount] = useState(5);

  const triggerDelete = () => {
    setShowToast(true);
    setCount(5);
  };

  useEffect(() => {
    if (showToast && count > 0) {
      const t = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(t);
    } else if (count === 0) {
      setShowToast(false);
    }
  }, [showToast, count]);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <RefreshCw className="w-4 h-4" /> #575 Undo Toast Action
        </span>
      </div>
      <button onClick={triggerDelete} className="bg-rose-600 text-white px-3 py-1.5 rounded font-bold self-start flex items-center gap-1">
        <Trash2 className="w-3.5 h-3.5" /> Delete Register Node
      </button>

      {showToast && (
        <div className="p-2.5 bg-slate-900 text-white rounded-lg border border-slate-700 shadow-xl flex items-center justify-between animate-fadeIn">
          <span>Item deleted. Undo in {count}s</span>
          <button onClick={() => setShowToast(false)} className="text-amber-400 font-bold hover:underline px-2 py-0.5 rounded bg-slate-800">
            실행 취소 (Undo)
          </button>
        </div>
      )}
    </div>
  );
};

// #576 Version Tag
export const LiveVersionTagLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Info className="w-4 h-4" /> #576 Version Tag Microcopy
        </span>
      </div>
      <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border rounded-lg">
        <span>PLC Runtime Core</span>
        <span className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full text-[10px] font-bold">
          v2.26.0-stable (build 20260817)
        </span>
      </div>
    </div>
  );
};

// #577 Step Progress Microcopy
export const LiveStepProgressLab: React.FC = () => {
  const [step, setStep] = useState(2);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <ListOrdered className="w-4 h-4" /> #577 Step Progress
        </span>
        <span className="text-[10px] font-bold text-indigo-500">Step {step} of 4</span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-[11px] font-bold">
          <span>Servo Tuning Wizard</span>
          <span>{step * 25}% Complete</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
          <div className="bg-indigo-600 h-full transition-all duration-300" style={{ width: `${step * 25}%` }} />
        </div>
        <div className="flex justify-between pt-2">
          <button disabled={step === 1} onClick={() => setStep(step - 1)} className="px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded disabled:opacity-40">Previous</button>
          <button disabled={step === 4} onClick={() => setStep(step + 1)} className="px-2 py-1 bg-indigo-600 text-white rounded font-bold disabled:opacity-40">Next Step</button>
        </div>
      </div>
    </div>
  );
};

// #578 Estimated Time Remaining
export const LiveTimeRemainingLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Timer className="w-4 h-4" /> #578 Time Remaining
        </span>
      </div>
      <div className="p-3 bg-white dark:bg-slate-900 border rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-indigo-500 animate-spin" />
          <span>EEPROM Flash Burn in Progress</span>
        </div>
        <span className="text-[10px] text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded">
          약 3분 소요 (Est. 3 min)
        </span>
      </div>
    </div>
  );
};

// #579 Read-Only Tag
export const LiveReadOnlyTagLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Lock className="w-4 h-4" /> #579 Read-Only Tag
        </span>
      </div>
      <div className="p-2.5 bg-slate-200 dark:bg-slate-900 border rounded flex items-center justify-between">
        <span className="text-slate-500">System Boot Code: 0x994F</span>
        <span className="bg-slate-300 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] px-2 py-0.5 rounded font-bold flex items-center gap-1">
          <Lock className="w-3 h-3" /> 읽기 전용 (Read Only)
        </span>
      </div>
    </div>
  );
};

// #580 Unsaved Changes Indicator
export const LiveUnsavedDotLab: React.FC = () => {
  const [dirty, setDirty] = useState(true);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Info className="w-4 h-4" /> #580 Unsaved Indicator Dot
        </span>
        <button onClick={() => setDirty(!dirty)} className="text-[10px] underline">Toggle State</button>
      </div>
      <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border rounded-lg">
        <span className="font-bold">MotorPID_Config.xml</span>
        {dirty ? (
          <span className="text-amber-500 font-bold flex items-center gap-1.5 text-[10px]">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" /> ● 미저장 변경사항
          </span>
        ) : (
          <span className="text-emerald-500 font-bold text-[10px]">✓ 동기화 완료</span>
        )}
      </div>
    </div>
  );
};

// #581 Connection Status Microcopy
export const LiveConnectionStatusLab: React.FC = () => {
  const [online, setOnline] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          {online ? <Wifi className="w-4 h-4 text-emerald-500" /> : <WifiOff className="w-4 h-4 text-rose-500" />}
          #581 Telemetry Link Status
        </span>
        <button 
          onClick={() => setOnline(!online)}
          className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded hover:bg-slate-300 dark:hover:bg-slate-700"
        >
          Toggle Link
        </button>
      </div>

      <div className={`p-3 rounded-lg border flex items-center justify-between ${
        online ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-rose-500/10 border-rose-500/30'
      }`}>
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${online ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
          <span className="font-bold text-xs">{online ? 'PLC Bus Active (24ms ping)' : 'PLC Bus Disconnected'}</span>
        </div>
        <span className="text-[10px] text-slate-500">{online ? '1000 Hz Stream' : 'Local Queue (48 items)'}</span>
      </div>
    </div>
  );
};

// #582 Filter Clear All Link
export const LiveClearFiltersLab: React.FC = () => {
  const [filters, setFilters] = useState(['220V', 'IP67', 'In-Stock']);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Filter className="w-4 h-4" /> #582 Clear All Filters
        </span>
        {filters.length > 0 && (
          <button onClick={() => setFilters([])} className="text-[10px] text-rose-500 font-bold hover:underline">
            전체 필터 해제 (Reset)
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {filters.length === 0 ? (
          <span className="text-slate-400">No active filters applied.</span>
        ) : (
          filters.map(f => (
            <span key={f} className="bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
              {f} <button onClick={() => setFilters(filters.filter(x => x !== f))}><X className="w-3 h-3" /></button>
            </span>
          ))
        )}
      </div>
    </div>
  );
};

// #583 Expand All / Collapse All Link
export const LiveExpandCollapseLab: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> #583 Expand / Collapse All
        </span>
        <button onClick={() => setExpanded(!expanded)} className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold">
          {expanded ? '모두 접기 (Collapse)' : '모두 펼치기 (Expand)'}
        </button>
      </div>
      <div className="space-y-1 bg-white dark:bg-slate-900 p-2 rounded border">
        <div className="font-bold text-slate-700 dark:text-slate-300">📁 Axis System Root</div>
        {expanded && (
          <div className="pl-4 space-y-1 text-slate-500">
            <div>📄 Axis-1 Servo Driver</div>
            <div>📄 Axis-2 Stepper Driver</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #584 Select All Rows Checkbox Hint
export const LiveSelectAllHintLab: React.FC = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" /> #584 Select All Rows Hint
        </span>
      </div>
      <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={selected} onChange={(e) => setSelected(e.target.checked)} className="accent-indigo-600" />
          <span>현재 페이지 20개 항목 전체 선택됨</span>
        </label>
        {selected && (
          <button className="text-[10px] text-indigo-600 dark:text-indigo-300 font-bold underline">
            전체 636개 항목 모두 선택
          </button>
        )}
      </div>
    </div>
  );
};

// #585 Copy Success Toast Microcopy
export const LiveCopyToastLab: React.FC = () => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Copy className="w-4 h-4" /> #585 Copy Success Toast
        </span>
      </div>
      <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-2 rounded border">
        <span>UUID: 3dcfc8c8-b46e</span>
        <button 
          onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }} 
          className="bg-indigo-600 text-white px-2.5 py-1 rounded text-[10px] font-bold"
        >
          {copied ? '✓ 클립보드에 복사됨' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

// #586 Search Query Suggestion Text ('Did you mean...?')
export const LiveDidYouMeanLab: React.FC = () => {
  const [query, setQuery] = useState('mitsubisi');
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Search className="w-4 h-4" /> #586 Query Suggestion
        </span>
      </div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="w-full bg-white dark:bg-slate-900 border rounded px-2 py-1 text-xs" />
      {query.toLowerCase() === 'mitsubisi' && (
        <div className="text-[11px] text-slate-500">
          다음으로 검색하시겠습니까: <button onClick={() => setQuery('Mitsubishi')} className="text-indigo-600 dark:text-indigo-400 font-bold underline">Mitsubishi</button>
        </div>
      )}
    </div>
  );
};

// #587 Filter Chip Removal Microcopy
export const LiveFilterChipRemoveLab: React.FC = () => {
  const [chips, setChips] = useState(['AC 220V', 'Torque 12Nm']);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <X className="w-4 h-4" /> #587 Filter Chip Removal
        </span>
      </div>
      <div className="flex gap-2">
        {chips.map(c => (
          <span key={c} className="bg-slate-200 dark:bg-slate-800 border px-2 py-1 rounded-full text-[10px] flex items-center gap-1">
            {c} <button onClick={() => setChips(chips.filter(x => x !== c))} className="text-slate-400 hover:text-rose-500"><X className="w-3 h-3" /></button>
          </span>
        ))}
      </div>
    </div>
  );
};

// #588 Keyboard Navigation Tip Pill
export const LiveNavTipPillLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Info className="w-4 h-4" /> #588 Keyboard Nav Tip
        </span>
      </div>
      <div className="p-2 bg-slate-200 dark:bg-slate-900 rounded flex items-center justify-between text-[10px] text-slate-600 dark:text-slate-400">
        <span>Use <kbd className="bg-white dark:bg-slate-800 px-1 border rounded">↑</kbd> <kbd className="bg-white dark:bg-slate-800 px-1 border rounded">↓</kbd> to navigate</span>
        <span>Press <kbd className="bg-white dark:bg-slate-800 px-1 border rounded">↵ Enter</kbd> to select</span>
      </div>
    </div>
  );
};

// #589 Offline Banner Microcopy
export const LiveOfflineBannerLab: React.FC = () => {
  const [offline, setOffline] = useState(true);
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <WifiOff className="w-4 h-4 text-rose-500" /> #589 Offline Warning Banner
        </span>
        <button onClick={() => setOffline(!offline)} className="text-[10px] underline">Toggle</button>
      </div>
      {offline && (
        <div className="p-2.5 bg-rose-500/20 border border-rose-500/40 text-rose-600 dark:text-rose-300 rounded flex items-center gap-2 text-[10px]">
          <WifiOff className="w-4 h-4 shrink-0" />
          <span>인터넷 연결이 끊겼습니다. 변경사항은 로컬 캐시에 저장되며 재연결 시 자동 동기화됩니다.</span>
        </div>
      )}
    </div>
  );
};

// #590 Accessibility Live Region (aria-live)
export const LiveAriaLiveLab: React.FC = () => {
  const [status, setStatus] = useState('Standby');
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
          <Radio className="w-4 h-4 text-emerald-500" /> #590 aria-live Dynamic Region
        </span>
      </div>
      <div aria-live="polite" className="p-3 bg-white dark:bg-slate-900 border rounded flex justify-between items-center">
        <span>Live Telemetry Status: <strong>{status}</strong></span>
        <button onClick={() => setStatus(`Motor Speed: ${Math.floor(Math.random() * 5000)} RPM`)} className="bg-indigo-600 text-white px-2 py-1 rounded text-[10px]">
          Update Value
        </button>
      </div>
      <p className="text-[10px] text-slate-500">Screen readers immediately announce updates via aria-live="polite".</p>
    </div>
  );
};
