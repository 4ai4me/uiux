import React, { useState, useEffect } from 'react';
import { 
  Check, AlertTriangle, AlertCircle, X, RotateCcw, 
  Save, Clock, ShieldCheck, HelpCircle, FileText, CheckCircle2
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
