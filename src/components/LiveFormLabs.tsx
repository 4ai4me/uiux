import React, { useState, useEffect } from 'react';
import { 
  Check, AlertTriangle, AlertCircle, X, RotateCcw, 
  Save, Clock, ShieldCheck, HelpCircle, FileText, CheckCircle2,
  GripVertical, Trash2, Plus, ArrowUp, ArrowDown, Sparkles,
  Search, SlidersHorizontal, Calendar, Paperclip, ChevronDown, Filter
} from 'lucide-react';

/**
 * ----------------------------------------------------------------------------
 * Category 14: Forms, Validation & Data Entry (#261 ~ #280) Dedicated 1:1 Labs
 * High-contrast, Light/Dark adaptive UI/UX Architecture Workbench
 * ----------------------------------------------------------------------------
 */

// #261 Form - Complete validated submission container
export const LiveFormLab: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('Servo Motor Axis-1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#261 FORM CONTAINER</span>
        {submitted ? (
          <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
            <Check className="w-3 h-3" /> Submitted ✓
          </span>
        ) : (
          <span className="text-[10px] text-slate-500">Ready to Submit</span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div>
          <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 mb-1">Equipment Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-2 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
        </div>
        <div className="flex justify-end gap-2 pt-1">
          <button type="button" onClick={() => setName('')} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 border rounded text-[10px]">Clear</button>
          <button type="submit" className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-[10px] font-bold">Save Form</button>
        </div>
      </form>
    </div>
  );
};

// #262 Form Group - Label + Input + Helper + Error 4-in-1 vertical unit
export const LiveFormGroupLab: React.FC = () => {
  const [val, setVal] = useState('');
  const [touched, setTouched] = useState(false);
  const isError = touched && val.trim() === '';

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#262 FORM GROUP (4-IN-1 STACK)</span>
        <span className="text-[10px] text-slate-500">Atomic Stack</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
        {/* Form Group Stack */}
        <div className="space-y-1">
          {/* 1. Label */}
          <div className="flex justify-between items-center">
            <label className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Operator ID *</label>
            <span className="text-[9px] text-slate-400 font-bold">[1. Label]</span>
          </div>

          {/* 2. Input */}
          <input
            type="text"
            placeholder="e.g. OP-9402"
            value={val}
            onBlur={() => setTouched(true)}
            onChange={(e) => setVal(e.target.value)}
            className={`w-full px-2 py-1.5 bg-slate-50 dark:bg-slate-950 border rounded text-xs outline-none transition-colors ${
              isError ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 dark:border-slate-700'
            }`}
          />

          {/* 3. Helper & 4. Error Message */}
          <div className="flex justify-between text-[9px] pt-0.5">
            {isError ? (
              <span className="text-rose-600 font-bold flex items-center gap-0.5">
                <AlertCircle className="w-2.5 h-2.5" /> [4. Error] Operator ID is required
              </span>
            ) : (
              <span className="text-slate-500">[3. Helper] Enter registered employee badge code</span>
            )}
            <span className="text-slate-400">[4-in-1 Stack]</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// #263 Fieldset - Semantic perimeter grouping related inputs
export const LiveFieldsetLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#263 FIELDSET</span>
        <span className="text-[10px] text-slate-500">Semantic Enclosure</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
        <fieldset className="border-2 border-indigo-400/70 dark:border-indigo-600 rounded-lg p-2.5">
          <legend className="px-2 font-bold text-[10px] text-indigo-600 dark:text-indigo-400">
            Power Supply Specifications
          </legend>
          <div className="grid grid-cols-2 gap-2 text-[10px] mt-1">
            <div className="p-1.5 bg-slate-50 dark:bg-slate-950 rounded border">Voltage: 220 VAC</div>
            <div className="p-1.5 bg-slate-50 dark:bg-slate-950 rounded border">Phase: 3-Phase (3P)</div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

// #264 Legend - Title text sitting on the fieldset boundary
export const LiveLegendLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#264 LEGEND (FIELDSET TITLE)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Boundary Title</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4">
        <fieldset className="border-2 border-slate-400 dark:border-slate-600 rounded-lg p-3 relative">
          <legend className="px-2 font-bold text-xs text-indigo-600 dark:text-indigo-300 bg-white dark:bg-slate-900 border border-indigo-400 rounded">
            ◆ Safety Standards (ISO 13849-1)
          </legend>
          <div className="text-[10px] text-slate-600 dark:text-slate-400 pt-1">
            Enclosing SIL-3 / PL-e Certified safety interlock relays.
          </div>
        </fieldset>
      </div>
    </div>
  );
};

// #265 Label - Permanent field identifier with htmlFor binding
export const LiveLabelLab: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#265 LABEL (HTMLFOR FOCUS)</span>
        <span className="text-[10px] text-slate-500">Accessible Name</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div>
          <label
            htmlFor="target-input"
            onClick={() => setClicked(true)}
            className="block text-xs font-bold text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline"
          >
            Spindle Speed RPM (Click label to focus input)
          </label>
          <input
            id="target-input"
            type="number"
            defaultValue={12000}
            onBlur={() => setClicked(false)}
            className="w-full mt-1 px-2 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        {clicked && <div className="text-[9px] text-emerald-600 font-bold">✓ Label clicked ➔ Focused input!</div>}
      </div>
    </div>
  );
};

// #266 Helper Text - Ambient hint placed below input
export const LiveHelperTextLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#266 HELPER TEXT (SUB-HINT)</span>
        <span className="text-[10px] text-slate-500">Always Visible</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-1">
        <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300">Target Feedrate</label>
        <input
          type="text"
          defaultValue="3,500 mm/min"
          className="w-full px-2 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs outline-none"
        />
        <div className="text-[9px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
          <HelpCircle className="w-2.5 h-2.5 text-indigo-500" />
          <span>Recommended machining range: 1,000 ~ 5,000 mm/min</span>
        </div>
      </div>
    </div>
  );
};

// #267 Placeholder (Form Field) - Transient ghost example text
export const LivePlaceholderLab: React.FC = () => {
  const [val, setVal] = useState('');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#267 PLACEHOLDER</span>
        <span className="text-[10px] text-slate-500">{val ? 'Custom Typed' : 'Showing Placeholder'}</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-1">
        <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300">Model Part Number</label>
        <input
          type="text"
          placeholder="e.g. HG-SR352B / FANUC-0i"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="w-full px-2 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs outline-none focus:border-indigo-500"
        />
        <div className="text-[9px] text-slate-400">
          {val ? 'Placeholder hidden upon typing' : 'Ghost placeholder guides format'}
        </div>
      </div>
    </div>
  );
};

// #268 Required Field - Mandatory input with red asterisk (*)
export const LiveRequiredFieldLab: React.FC = () => {
  const [val, setVal] = useState('');
  const [warn, setWarn] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#268 REQUIRED FIELD (*)</span>
        <span className="text-[10px] text-rose-600 font-bold">Mandatory</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div>
          <label className="block text-xs font-bold text-slate-800 dark:text-slate-200">
            Project Code <span className="text-rose-600 font-black text-sm">*</span>
          </label>
          <input
            type="text"
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
              setWarn(false);
            }}
            placeholder="Required project identifier"
            className="w-full mt-1 px-2 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs outline-none"
          />
        </div>
        <button
          onClick={() => {
            if (!val.trim()) setWarn(true);
          }}
          className="w-full py-1 bg-rose-600 text-white rounded text-[10px] font-bold"
        >
          Attempt Submit
        </button>
        {warn && <div className="text-[9px] text-rose-600 font-bold">⚠️ Submission blocked: Mandatory field is empty!</div>}
      </div>
    </div>
  );
};

// #269 Optional Field - Non-blocking input labeled "(Optional)"
export const LiveOptionalFieldLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#269 OPTIONAL FIELD</span>
        <span className="text-[10px] text-slate-500">(Optional) Tag</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-1">
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
          Inspection Notes <span className="text-slate-400 font-normal text-[10px]">(Optional)</span>
        </label>
        <textarea
          placeholder="Non-mandatory additional comments..."
          rows={2}
          className="w-full px-2 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs outline-none resize-none"
        />
        <div className="text-[9px] text-emerald-600 font-bold">✓ Form may be submitted with empty notes</div>
      </div>
    </div>
  );
};

// #270 Validation (Form Validation) - Zod/Schema rule evaluation
export const LiveValidationLab: React.FC = () => {
  const [val, setVal] = useState('14500');
  const num = Number(val);
  const isValid = !isNaN(num) && num >= 1000 && num <= 20000;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#270 SCHEMA VALIDATION</span>
        <span className={`text-[10px] font-bold ${isValid ? 'text-emerald-600' : 'text-rose-600'}`}>
          {isValid ? 'VALID ✓' : 'INVALID ✕'}
        </span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300">Spindle Range (1,000 ~ 20,000)</label>
        <input
          type="number"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="w-full px-2 py-1 bg-slate-50 dark:bg-slate-950 border rounded text-xs outline-none"
        />
        <div className="text-[9px] bg-slate-50 dark:bg-slate-950 p-1.5 rounded border">
          Schema: <span className="text-indigo-600 font-bold">z.number().min(1000).max(20000)</span>
        </div>
      </div>
    </div>
  );
};

// #271 Client-side Validation - 0ms instant browser feedback
export const LiveClientSideValidationLab: React.FC = () => {
  const [val, setVal] = useState('invalid-email');
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#271 CLIENT-SIDE VALIDATION</span>
        <span className="text-[10px] text-emerald-600 font-bold">0ms Latency</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-1">
        <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300">Email Address</label>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={`w-full px-2 py-1.5 bg-slate-50 dark:bg-slate-950 border-2 rounded text-xs outline-none transition-colors ${
            isValid ? 'border-emerald-500 text-emerald-700 dark:text-emerald-300' : 'border-rose-500 text-rose-700 dark:text-rose-300'
          }`}
        />
        <div className={`text-[9px] font-bold ${isValid ? 'text-emerald-600' : 'text-rose-600'}`}>
          {isValid ? '✓ Valid format (RegEx passed in browser)' : '✕ Invalid email structure (@ and domain required)'}
        </div>
      </div>
    </div>
  );
};

// #272 Server-side Validation - Simulated backend unique constraint check
export const LiveServerSideValidationLab: React.FC = () => {
  const [code, setCode] = useState('PRJ-9001');
  const [status, setStatus] = useState<'idle' | 'checking' | 'error' | 'ok'>('idle');

  const checkServer = () => {
    setStatus('checking');
    setTimeout(() => {
      if (code === 'PRJ-9001') {
        setStatus('error');
      } else {
        setStatus('ok');
      }
    }, 600);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#272 SERVER-SIDE VALIDATION</span>
        <span className="text-[10px] text-indigo-600 font-bold">API DB Check</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setStatus('idle');
            }}
            className="flex-1 px-2 py-1 bg-slate-50 dark:bg-slate-950 border rounded text-xs outline-none"
          />
          <button onClick={checkServer} className="px-2.5 py-1 bg-indigo-600 text-white rounded text-[10px] font-bold">
            {status === 'checking' ? 'Querying...' : 'Check DB'}
          </button>
        </div>

        {status === 'error' && (
          <div className="p-1.5 bg-rose-50 dark:bg-rose-950/60 border border-rose-400 rounded text-[9px] text-rose-600 font-bold">
            HTTP 409 Conflict: Project code 'PRJ-9001' is already taken in database.
          </div>
        )}
        {status === 'ok' && (
          <div className="p-1.5 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-400 rounded text-[9px] text-emerald-600 font-bold">
            HTTP 200 OK: Code is unique and available.
          </div>
        )}
      </div>
    </div>
  );
};

// #273 Inline Error - Error message attached right below the offending field
export const LiveInlineErrorLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#273 INLINE ERROR</span>
        <span className="text-[10px] text-rose-600 font-bold">Field-Attached</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-1">
        <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300">Baud Rate</label>
        <input
          type="text"
          defaultValue="999999"
          className="w-full px-2 py-1.5 bg-rose-50/30 dark:bg-rose-950/20 border-2 border-rose-500 rounded text-xs outline-none text-rose-700 dark:text-rose-300 font-bold"
        />
        <div className="text-[9px] text-rose-600 font-bold flex items-center gap-1 pt-0.5">
          <AlertCircle className="w-3 h-3" />
          <span>Invalid baud rate: Must be one of [9600, 19200, 115200]</span>
        </div>
      </div>
    </div>
  );
};

// #274 Input Mask - Automatic pattern formatting (e.g. 010-XXXX-XXXX)
export const LiveInputMaskLab: React.FC = () => {
  const [raw, setRaw] = useState('01088492041');

  const formatPhone = (str: string) => {
    const digits = str.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#274 INPUT MASK (AUTO FORMAT)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Pattern: 000-0000-0000</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-1">
        <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300">Phone Contact Mask</label>
        <input
          type="text"
          value={formatPhone(raw)}
          onChange={(e) => setRaw(e.target.value.replace(/\D/g, ''))}
          className="w-full px-2 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs outline-none font-bold"
        />
        <div className="text-[9px] text-slate-400">Type numbers only: Hyphens inserted automatically</div>
      </div>
    </div>
  );
};

// #275 Character Counter - Real-time X / Max counter indicator
export const LiveCharacterCounterLab: React.FC = () => {
  const [text, setText] = useState('High-torque brushless AC servomotor for CNC axis drive.');
  const max = 80;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#275 CHARACTER COUNTER</span>
        <span className={`text-[10px] font-bold ${text.length > max ? 'text-rose-600' : 'text-indigo-600'}`}>
          {text.length} / {max} chars
        </span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-1">
        <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300">Summary Memo</label>
        <textarea
          rows={2}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-2 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs outline-none resize-none"
        />
        <div className="flex justify-end text-[9px] font-bold text-slate-500">
          Remaining: {max - text.length} characters
        </div>
      </div>
    </div>
  );
};

// #276 Clear Button - 1-click (×) button clearing text contents
export const LiveClearButtonLab: React.FC = () => {
  const [query, setQuery] = useState('Mitsubishi MR-J4');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#276 CLEAR BUTTON (×)</span>
        <span className="text-[10px] text-slate-500">Inline Clear</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-1">
        <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300">Search Servo Model</label>
        <div className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-2 py-1.5 pr-8 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-2 w-4 h-4 bg-slate-200 dark:bg-slate-700 hover:bg-rose-500 hover:text-white rounded-full flex items-center justify-center text-[10px] font-bold"
              title="Clear text"
            >
              ×
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// #277 Reset Form - Rollback all inputs to pristine defaults
export const LiveResetFormLab: React.FC = () => {
  const [val1, setVal1] = useState('Modified Val');
  const [val2, setVal2] = useState('Modified 99');

  const handleReset = () => {
    setVal1('Default Value A');
    setVal2('Default Value B');
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#277 FORM RESET</span>
        <button onClick={handleReset} className="px-2 py-0.5 bg-rose-600 text-white rounded text-[10px] font-bold flex items-center gap-1">
          <RotateCcw className="w-3 h-3" /> Reset All
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div>
          <label className="text-[9px] font-bold text-slate-500">Param 1</label>
          <input type="text" value={val1} onChange={(e) => setVal1(e.target.value)} className="w-full px-2 py-1 bg-slate-50 dark:bg-slate-950 border rounded text-xs" />
        </div>
        <div>
          <label className="text-[9px] font-bold text-slate-500">Param 2</label>
          <input type="text" value={val2} onChange={(e) => setVal2(e.target.value)} className="w-full px-2 py-1 bg-slate-50 dark:bg-slate-950 border rounded text-xs" />
        </div>
      </div>
    </div>
  );
};

// #278 Dirty State - Detects when form has unsaved modifications
export const LiveDirtyStateLab: React.FC = () => {
  const initial = 'Pristine Config';
  const [val, setVal] = useState(initial);
  const isDirty = val !== initial;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#278 DIRTY STATE (isDirty)</span>
        <span className={`text-[10px] font-bold flex items-center gap-1 ${isDirty ? 'text-amber-500' : 'text-emerald-500'}`}>
          <span className={`w-2 h-2 rounded-full ${isDirty ? 'bg-amber-500 animate-ping' : 'bg-emerald-500'}`} />
          {isDirty ? '● DIRTY (Unsaved Changes)' : 'PRISTINE (Clean)'}
        </span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="w-full px-2 py-1 bg-slate-50 dark:bg-slate-950 border rounded text-xs outline-none"
        />
        <div className="flex justify-between items-center text-[10px]">
          <button onClick={() => setVal(initial)} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 border rounded">Revert to Clean</button>
          <button disabled={!isDirty} className={`px-3 py-1 rounded font-bold text-white ${isDirty ? 'bg-indigo-600' : 'bg-slate-400 opacity-50 cursor-not-allowed'}`}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

// #279 Autosave - Background debounced persistence feedback
export const LiveAutosaveLab: React.FC = () => {
  const [val, setVal] = useState('Live Telemetry Config');
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState('10:04:30 AM');

  useEffect(() => {
    setSaving(true);
    const timer = setTimeout(() => {
      setSaving(false);
      setLastSaved(new Date().toLocaleTimeString());
    }, 800);
    return () => clearTimeout(timer);
  }, [val]);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#279 AUTOSAVE</span>
        {saving ? (
          <span className="text-[10px] text-amber-500 font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-spin" /> Saving...
          </span>
        ) : (
          <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
            <Check className="w-3 h-3" /> Saved at {lastSaved}
          </span>
        )}
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-1">
        <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300">Live Editor (Debounce 800ms)</label>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="w-full px-2 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs outline-none"
        />
      </div>
    </div>
  );
};

// #280 Draft State - Interim draft badge vs published production status
export const LiveDraftStateLab: React.FC = () => {
  const [isDraft, setIsDraft] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#280 DRAFT STATE</span>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${isDraft ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 border-amber-400' : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 border-emerald-400'}`}>
          {isDraft ? 'DRAFT (초안)' : 'PUBLISHED (발행됨)'}
        </span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="text-[10px] text-slate-600 dark:text-slate-400">
          Document Status: <span className="font-bold text-slate-900 dark:text-slate-100">{isDraft ? 'Work In Progress (Not Visible to PLC)' : 'Active in Production'}</span>
        </div>
        <button
          onClick={() => setIsDraft(!isDraft)}
          className={`w-full py-1.5 rounded font-bold text-xs text-white shadow ${isDraft ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-amber-600 hover:bg-amber-700'}`}
        >
          {isDraft ? 'Publish Document to Production ➔' : 'Revert to Draft Mode'}
        </button>
      </div>
    </div>
  );
};

// #639 Draggable Inline Edit Row - Reorderable list item with byte counter, confirm, revert, delete toolbar, and row hover highlight
export const LiveDraggableInlineEditRowLab: React.FC = () => {
  interface RowItem {
    id: string;
    text: string;
    originalText: string;
    maxBytes: number;
    isSaved: boolean;
  }

  const [items, setItems] = useState<RowItem[]>([
    { id: 'row-1', text: '서보모터 1축 원점설정', originalText: '서보모터 1축 원점설정', maxBytes: 30, isSaved: true },
    { id: 'row-2', text: 'PLC 통신 인터락 설정', originalText: 'PLC 통신 인터락 설정', maxBytes: 30, isSaved: true },
    { id: 'row-3', text: '비상정지 센서 #4', originalText: '비상정지 센서 #4', maxBytes: 30, isSaved: true },
  ]);

  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const calculateBytes = (str: string) => {
    let bytes = 0;
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      bytes += code > 127 ? 2 : 1; // 2 bytes for Korean/CJK, 1 byte for ASCII
    }
    return bytes;
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2000);
  };

  const handleTextChange = (id: string, newText: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, text: newText, isSaved: false };
        }
        return item;
      })
    );
  };

  const handleSave = (id: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          showToast(`'${item.text}' 행이 저장되었습니다 (✓)`);
          return { ...item, originalText: item.text, isSaved: true };
        }
        return item;
      })
    );
  };

  const handleRevert = (id: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          showToast(`수정 내용이 원래대로 취소되었습니다 (↺)`);
          return { ...item, text: item.originalText, isSaved: true };
        }
        return item;
      })
    );
  };

  const handleDelete = (id: string) => {
    const target = items.find((i) => i.id === id);
    setItems((prev) => prev.filter((item) => item.id !== id));
    showToast(`'${target?.text || id}' 행이 삭제되었습니다 (🗑)`);
  };

  const moveRow = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= items.length) return;
    const newItems = [...items];
    const [moved] = newItems.splice(index, 1);
    newItems.splice(targetIndex, 0, moved);
    setItems(newItems);
  };

  const handleDragStart = (id: string) => {
    setDraggedId(id);
  };

  const handleDragOver = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    if (!draggedId || draggedId === targetId) return;

    const sourceIdx = items.findIndex((i) => i.id === draggedId);
    const targetIdx = items.findIndex((i) => i.id === targetId);
    if (sourceIdx < 0 || targetIdx < 0) return;

    const newItems = [...items];
    const [moved] = newItems.splice(sourceIdx, 1);
    newItems.splice(targetIdx, 0, moved);
    setItems(newItems);
  };

  const handleAddRow = () => {
    const newId = `row-${Date.now()}`;
    const newRow: RowItem = {
      id: newId,
      text: `신규 파라미터 ${items.length + 1}`,
      originalText: `신규 파라미터 ${items.length + 1}`,
      maxBytes: 30,
      isSaved: true,
    };
    setItems([...items, newRow]);
    showToast('새 인라인 편집 행이 추가되었습니다 (+)');
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-2.5 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-1.5 font-black text-indigo-600 dark:text-indigo-400">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span>#639 DRAGGABLE INLINE EDIT ROW</span>
        </div>
        <span className="text-[10px] text-slate-500 font-medium">
          {items.length}개 항목 로드됨
        </span>
      </div>

      {toastMessage && (
        <div className="bg-indigo-600 text-white text-[10px] px-2.5 py-1 rounded-md font-bold text-center animate-in fade-in slide-in-from-top-1 shadow-sm">
          {toastMessage}
        </div>
      )}

      {/* Rows Container */}
      <div className="flex flex-col gap-2">
        {items.map((item, idx) => {
          const byteCount = calculateBytes(item.text);
          const isOverLimit = byteCount > item.maxBytes;
          const isModified = item.text !== item.originalText;
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              draggable
              onDragStart={() => handleDragStart(item.id)}
              onDragOver={(e) => handleDragOver(e, item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`w-full transition-all duration-150 rounded-lg p-2 flex items-center gap-2 border-2 ${
                isHovered
                  ? 'bg-amber-100/90 dark:bg-amber-950/40 border-amber-400 dark:border-amber-600 shadow-md'
                  : 'bg-amber-50/50 dark:bg-slate-900 border-amber-200/80 dark:border-slate-800 shadow-sm'
              }`}
            >
              {/* 1. Drag & Drop Handle / Grip Icon */}
              <div 
                className="cursor-grab active:cursor-grabbing text-slate-500 hover:text-amber-800 dark:hover:text-amber-300 p-0.5 rounded flex items-center justify-center shrink-0"
                title="드래그하여 위아래 순서 변경 (또는 방향키)"
              >
                <GripVertical className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              </div>

              {/* 2. Inline Editable Text Input */}
              <div className="flex-1 relative min-w-0">
                <input
                  type="text"
                  value={item.text}
                  onChange={(e) => handleTextChange(item.id, e.target.value)}
                  placeholder="항목 이름 입력..."
                  className={`w-full px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-2 outline-none transition-colors ${
                    isOverLimit
                      ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                      : isModified
                      ? 'border-amber-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20'
                      : 'border-slate-400 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                  }`}
                />
              </div>

              {/* 3. Confirm / Save Button (✓) */}
              <button
                onClick={() => handleSave(item.id)}
                disabled={!isModified || isOverLimit}
                className={`p-1.5 rounded-md transition-all shrink-0 ${
                  isModified && !isOverLimit
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm active:scale-95'
                    : 'text-slate-400 dark:text-slate-600 hover:bg-slate-200/50 dark:hover:bg-slate-800'
                }`}
                title="수정 확정 저장 (✓)"
              >
                <Check className="w-3.5 h-3.5" />
              </button>

              {/* 4. Cancel / Revert Button (↺) */}
              <button
                onClick={() => handleRevert(item.id)}
                disabled={!isModified}
                className={`p-1.5 rounded-md transition-all shrink-0 ${
                  isModified
                    ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-sm active:scale-95'
                    : 'text-slate-400 dark:text-slate-600 hover:bg-slate-200/50 dark:hover:bg-slate-800'
                }`}
                title="수정 취소/원래대로 (↺)"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* 5. Byte / Character Limit Indicator */}
              <div 
                className={`text-[10px] font-mono font-bold shrink-0 min-w-[58px] text-right ${
                  isOverLimit
                    ? 'text-rose-600 dark:text-rose-400 animate-pulse'
                    : byteCount >= item.maxBytes - 4
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
                title={`현재 바이트 / 최대 제한 (${item.maxBytes}byte)`}
              >
                {byteCount} / {item.maxBytes}byte
              </div>

              {/* 6. Delete Action Button (🗑) */}
              <button
                onClick={() => handleDelete(item.id)}
                className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-100 dark:hover:bg-rose-950/50 rounded-md transition-all shrink-0 active:scale-95"
                title="행 삭제 (🗑)"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}

        {items.length === 0 && (
          <div className="p-6 text-center text-slate-500 text-xs bg-white dark:bg-slate-900 rounded-lg border border-dashed border-slate-300 dark:border-slate-800">
            등록된 행이 없습니다. 아래 버튼을 눌러 새 행을 추가하세요.
          </div>
        )}
      </div>

      {/* Control Actions */}
      <div className="flex justify-between items-center pt-2 border-t border-slate-300 dark:border-slate-800">
        <button
          onClick={handleAddRow}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-xs flex items-center gap-1.5 shadow-sm transition"
        >
          <Plus className="w-3.5 h-3.5" /> 새 인라인 행 추가
        </button>
        <span className="text-[10px] text-slate-500">
          Tip: 마우스 호버 시 연노랑 하이라이트 & 드래그 순서변경
        </span>
      </div>
    </div>
  );
};

// #640 Search Bar with Advanced Filter Dropdown (Gmail Style Search Options Popover)
export const LiveSearchBarAdvancedFilterLab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [simpleQuery, setSimpleQuery] = useState('');
  
  // Advanced Filter Form Fields
  const [sender, setSender] = useState('boss@company.com');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('2026년 3분기 결산 보고');
  const [hasWords, setHasWords] = useState('최종 승인');
  const [doesntHave, setDoesntHave] = useState('초안');
  const [sizeComparator, setSizeComparator] = useState('초과');
  const [sizeValue, setSizeValue] = useState('10');
  const [sizeUnit, setSizeUnit] = useState('MB');
  const [dateRange, setDateRange] = useState('1일');
  const [targetDate, setTargetDate] = useState('2026-08-25');
  const [searchScope, setSearchScope] = useState('전체보관함');
  const [hasAttachment, setHasAttachment] = useState(true);
  const [excludeChat, setExcludeChat] = useState(false);

  const [activeSearchSummary, setActiveSearchSummary] = useState<string | null>(null);
  const [filterSuccessNotice, setFilterSuccessNotice] = useState(false);

  const handleExecuteSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const clauses: string[] = [];
    if (sender) clauses.push(`from:${sender}`);
    if (recipient) clauses.push(`to:${recipient}`);
    if (subject) clauses.push(`subject:(${subject})`);
    if (hasWords) clauses.push(`"${hasWords}"`);
    if (doesntHave) clauses.push(`-${doesntHave}`);
    if (sizeValue) clauses.push(`size:${sizeComparator === '초과' ? '>' : '<'}${sizeValue}${sizeUnit}`);
    if (hasAttachment) clauses.push('has:attachment');
    if (searchScope !== '전체보관함') clauses.push(`in:${searchScope}`);
    
    const finalQuery = clauses.join(' ') || (simpleQuery || '전체 메일 조회');
    setSimpleQuery(finalQuery);
    setActiveSearchSummary(finalQuery);
    setIsOpen(false);
  };

  const handleCreateFilterRule = () => {
    setFilterSuccessNotice(true);
    setTimeout(() => setFilterSuccessNotice(false), 3000);
  };

  const handleResetFilters = () => {
    setSender('');
    setRecipient('');
    setSubject('');
    setHasWords('');
    setDoesntHave('');
    setSizeValue('');
    setHasAttachment(false);
    setExcludeChat(false);
    setSimpleQuery('');
    setActiveSearchSummary(null);
  };

  return (
    <div className="w-full max-w-lg bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-2.5 shadow-xl">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-1.5 font-black text-indigo-600 dark:text-indigo-400">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>#640 SEARCH BAR W/ ADVANCED FILTER</span>
        </div>
        <span className="text-[10px] text-slate-500 font-medium">
          {isOpen ? '상세 필터 패널 열림 (Popover Open)' : '단순 검색창 모드'}
        </span>
      </div>

      {/* Main Container */}
      <div className="relative flex flex-col gap-1">
        {/* 1. Top Search Bar */}
        <div className="flex items-center bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 focus-within:border-indigo-500 rounded-full px-3 py-2 shadow-sm transition-all">
          <Search className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
          <input
            type="text"
            value={simpleQuery}
            onChange={(e) => setSimpleQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleExecuteSearch();
            }}
            placeholder="메일 검색 (예: from:김팀장 subject:보고서)"
            className="flex-1 bg-transparent text-slate-900 dark:text-slate-100 text-xs outline-none placeholder-slate-400 font-sans"
          />
          {simpleQuery && (
            <button
              onClick={() => {
                setSimpleQuery('');
                setActiveSearchSummary(null);
              }}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mr-1"
              title="검색어 지우기"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          {/* Options / Tune Icon Button (Opens Advanced Filter Dropdown) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-1.5 rounded-full transition-all flex items-center justify-center shrink-0 ${
              isOpen
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
            title="검색 옵션 표시 (상세 검색 필터 토글)"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* 2. Advanced Search Dropdown / Popover Panel (Exact replica of user's image) */}
        {isOpen && (
          <div className="mt-1 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 rounded-xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 font-sans text-xs flex flex-col gap-3">
            {/* Row 1: 보낸사람 */}
            <div className="grid grid-cols-4 items-center gap-2">
              <label className="text-slate-600 dark:text-slate-400 text-xs">보낸사람</label>
              <input
                type="text"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                placeholder="이메일 또는 이름"
                className="col-span-3 pb-1 bg-transparent border-b border-slate-300 dark:border-slate-700 focus:border-indigo-500 outline-none text-slate-900 dark:text-slate-100 text-xs"
              />
            </div>

            {/* Row 2: 받는사람 */}
            <div className="grid grid-cols-4 items-center gap-2">
              <label className="text-slate-600 dark:text-slate-400 text-xs">받는사람</label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="이메일 또는 이름"
                className="col-span-3 pb-1 bg-transparent border-b border-slate-300 dark:border-slate-700 focus:border-indigo-500 outline-none text-slate-900 dark:text-slate-100 text-xs"
              />
            </div>

            {/* Row 3: 제목 */}
            <div className="grid grid-cols-4 items-center gap-2">
              <label className="text-slate-600 dark:text-slate-400 text-xs">제목</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="제목 키워드"
                className="col-span-3 pb-1 bg-transparent border-b border-slate-300 dark:border-slate-700 focus:border-indigo-500 outline-none text-slate-900 dark:text-slate-100 text-xs"
              />
            </div>

            {/* Row 4: 포함하는 단어 */}
            <div className="grid grid-cols-4 items-center gap-2">
              <label className="text-slate-600 dark:text-slate-400 text-xs">포함하는 단어</label>
              <input
                type="text"
                value={hasWords}
                onChange={(e) => setHasWords(e.target.value)}
                placeholder="본문에 반드시 포함될 단어"
                className="col-span-3 pb-1 bg-transparent border-b border-slate-300 dark:border-slate-700 focus:border-indigo-500 outline-none text-slate-900 dark:text-slate-100 text-xs"
              />
            </div>

            {/* Row 5: 제외할 단어 */}
            <div className="grid grid-cols-4 items-center gap-2">
              <label className="text-slate-600 dark:text-slate-400 text-xs">제외할 단어</label>
              <input
                type="text"
                value={doesntHave}
                onChange={(e) => setDoesntHave(e.target.value)}
                placeholder="검색에서 제외할 단어"
                className="col-span-3 pb-1 bg-transparent border-b border-slate-300 dark:border-slate-700 focus:border-indigo-500 outline-none text-slate-900 dark:text-slate-100 text-xs"
              />
            </div>

            {/* Row 6: 크기 */}
            <div className="grid grid-cols-4 items-center gap-2">
              <label className="text-slate-600 dark:text-slate-400 text-xs">크기</label>
              <div className="col-span-3 flex items-center gap-2">
                <select
                  value={sizeComparator}
                  onChange={(e) => setSizeComparator(e.target.value)}
                  className="bg-transparent border-b border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 py-1 outline-none text-xs"
                >
                  <option value="초과">초과</option>
                  <option value="미만">미만</option>
                  <option value="동일">동일</option>
                </select>
                <input
                  type="number"
                  value={sizeValue}
                  onChange={(e) => setSizeValue(e.target.value)}
                  placeholder="10"
                  className="w-16 text-center bg-transparent border-b border-slate-300 dark:border-slate-700 outline-none text-slate-900 dark:text-slate-100 text-xs"
                />
                <select
                  value={sizeUnit}
                  onChange={(e) => setSizeUnit(e.target.value)}
                  className="bg-transparent border-b border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 py-1 outline-none text-xs"
                >
                  <option value="MB">MB</option>
                  <option value="KB">KB</option>
                  <option value="Bytes">Bytes</option>
                </select>
              </div>
            </div>

            {/* Row 7: 기간 */}
            <div className="grid grid-cols-4 items-center gap-2">
              <label className="text-slate-600 dark:text-slate-400 text-xs">기간</label>
              <div className="col-span-3 flex items-center gap-2">
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="bg-transparent border-b border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 py-1 outline-none text-xs"
                >
                  <option value="1일">1일</option>
                  <option value="3일">3일</option>
                  <option value="1주">1주</option>
                  <option value="2주">2주</option>
                  <option value="1개월">1개월</option>
                  <option value="6개월">6개월</option>
                  <option value="1년">1년</option>
                </select>
                <div className="flex-1 flex items-center border-b border-slate-300 dark:border-slate-700 pb-0.5">
                  <input
                    type="date"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    className="flex-1 bg-transparent text-slate-900 dark:text-slate-100 text-xs outline-none"
                  />
                  <Calendar className="w-3.5 h-3.5 text-slate-400 ml-1" />
                </div>
              </div>
            </div>

            {/* Row 8: 검색 위치 */}
            <div className="grid grid-cols-4 items-center gap-2">
              <label className="text-slate-600 dark:text-slate-400 text-xs">검색</label>
              <select
                value={searchScope}
                onChange={(e) => setSearchScope(e.target.value)}
                className="col-span-3 bg-transparent border-b border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 py-1 outline-none text-xs"
              >
                <option value="전체보관함">전체보관함</option>
                <option value="받은편지함">받은편지함</option>
                <option value="보낸편지함">보낸편지함</option>
                <option value="중요편지함">중요편지함</option>
                <option value="임시보관함">임시보관함</option>
                <option value="스팸함 및 휴지통">스팸함 및 휴지통</option>
              </select>
            </div>

            {/* Row 9: Checkboxes */}
            <div className="flex items-center gap-6 pt-2 text-xs text-slate-700 dark:text-slate-300">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasAttachment}
                  onChange={(e) => setHasAttachment(e.target.checked)}
                  className="rounded border-slate-400 text-indigo-600 focus:ring-indigo-500"
                />
                <span>첨부파일 있음</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={excludeChat}
                  onChange={(e) => setExcludeChat(e.target.checked)}
                  className="rounded border-slate-400 text-indigo-600 focus:ring-indigo-500"
                />
                <span>채팅 제외</span>
              </label>
            </div>

            {/* Row 10: Action Toolbar */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={handleCreateFilterRule}
                className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-bold hover:underline"
              >
                필터 만들기
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-3 py-1.5 rounded text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  초기화
                </button>
                <button
                  type="button"
                  onClick={handleExecuteSearch}
                  className="px-5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold shadow transition active:scale-95"
                >
                  검색
                </button>
              </div>
            </div>

            {filterSuccessNotice && (
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-1.5 animate-in fade-in">
                <span>✓</span>
                <span>현재 조건으로 자동 분류 필터 규칙이 성공적으로 등록되었습니다.</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Query Preview / Active Filter Result */}
      {activeSearchSummary && (
        <div className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-300 dark:border-indigo-800 rounded-lg p-2.5 flex flex-col gap-1 text-[11px]">
          <div className="flex justify-between items-center text-indigo-700 dark:text-indigo-300 font-bold">
            <span>🔍 생성된 고급 검색 쿼리:</span>
            <button
              onClick={() => setActiveSearchSummary(null)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
          <code className="bg-white dark:bg-slate-900 p-1.5 rounded border border-indigo-200 dark:border-indigo-900 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] break-all">
            {activeSearchSummary}
          </code>
        </div>
      )}

      <span className="text-[10px] text-slate-500 text-center">
        단순 키워드 검색바와 우측 슬라이더 튠 아이콘을 통한 드롭다운형 다중 조건 상세 검색 결합 컴포넌트
      </span>
    </div>
  );
};

