import React, { useState, useRef, useEffect } from 'react';
import { 
  Type, AlignLeft, Bold, Italic, Code, Search, Sparkles, 
  Clock, Hash, FileText, Check, Copy, ExternalLink, Move,
  Maximize2, Eye, RefreshCw, Layers, Compass, ArrowRight, CornerDownLeft
} from 'lucide-react';

/**
 * ----------------------------------------------------------------------------
 * Category 18: Textbox · Memo & Text Editing (#361 ~ #390) Dedicated 1:1 Labs
 * High-contrast, Light/Dark adaptive UI/UX Architecture Workbench
 * ----------------------------------------------------------------------------
 */

// #361 Single-Line Text Box - Single line input triggering enter commit
export const LiveSingleLineTextBoxLab: React.FC = () => {
  const [val, setVal] = useState('Machine_Drive_Axis_X');
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setSubmitted(val);
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#361 SINGLE-LINE TEXT BOX</span>
        <span className="text-[10px] text-slate-500">Press Enter ↵</span>
      </div>

      <div className="space-y-1.5">
        <div className="relative">
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full h-9 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-lg px-2.5 text-xs font-mono font-bold text-slate-900 dark:text-slate-100 outline-none pr-8"
            placeholder="Enter unit tag..."
          />
          <CornerDownLeft className="absolute right-2.5 top-2.5 w-3.5 h-3.5 text-indigo-400 pointer-events-none" />
        </div>
        {submitted && (
          <div className="text-[9px] text-emerald-600 font-bold animate-fade-in">
            ✓ Committed tag: &quot;{submitted}&quot;
          </div>
        )}
      </div>
    </div>
  );
};

// #362 Multi-Line Text Box - 4-line textarea for engineering logs
export const LiveMultiLineTextBoxLab: React.FC = () => {
  const [text, setText] = useState('LOG: 10:04:12 Spindle initialized\nLOG: 10:04:15 Pressure stable at 4.2 Bar\nLOG: 10:04:20 Ready for CNC routine');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#362 MULTI-LINE TEXT BOX</span>
        <span className="text-[10px] text-slate-500">Multi-Line Memo</span>
      </div>

      <textarea
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 rounded-lg p-2 text-[9px] font-mono outline-none focus:border-indigo-500 resize-none leading-relaxed"
      />
    </div>
  );
};

// #363 Auto-Growing Textarea - Height auto expands with lines
export const LiveAutoGrowingTextareaLab: React.FC = () => {
  const [val, setVal] = useState('Typing more lines will auto-expand this box...\nLine 2');
  const lineCount = val.split('\n').length;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#363 AUTO-GROWING TEXTAREA</span>
        <span className="text-[10px] text-indigo-600 font-bold">{lineCount} Lines (Auto Height)</span>
      </div>

      <textarea
        rows={Math.min(6, Math.max(2, lineCount))}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="w-full bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-lg p-2 text-[9px] font-mono outline-none resize-none transition-all"
      />
    </div>
  );
};

// #364 Fixed-Height Textarea - 80px fixed height with vertical scroll
export const LiveFixedHeightTextareaLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#364 FIXED-HEIGHT TEXTAREA</span>
        <span className="text-[10px] text-slate-500">Height: 70px Fixed</span>
      </div>

      <textarea
        readOnly
        defaultValue="Line 1: System Boot OK&#10;Line 2: Checking Axis X, Y, Z&#10;Line 3: Safety Relay Active&#10;Line 4: Calibration Passed&#10;Line 5: Ready to Operate"
        className="w-full h-20 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 rounded-lg p-2 text-[9px] font-mono outline-none overflow-y-scroll resize-none"
      />
    </div>
  );
};

// #365 Resizable Textarea - Corner grip resizing handle
export const LiveResizableTextareaLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#365 RESIZABLE TEXTAREA</span>
        <span className="text-[10px] text-indigo-600 font-bold">Drag Corner ⇲</span>
      </div>

      <textarea
        defaultValue="Drag the bottom-right handle to manually resize this text area vertically or horizontally."
        className="w-full h-16 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-lg p-2 text-[9px] font-mono outline-none resize"
      />
    </div>
  );
};

// #366 Inline Text Editor - Click text to switch into edit mode
export const LiveInlineTextEditorLab: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('PLC_Controller_Station_03');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#366 INLINE TEXT EDITOR</span>
        <span className="text-[10px] text-slate-500">{isEditing ? 'Editing...' : 'Click to Edit'}</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-3">
        {isEditing ? (
          <input
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => e.key === 'Enter' && setIsEditing(false)}
            className="w-full bg-indigo-50 dark:bg-indigo-950 border-2 border-indigo-500 rounded px-2 py-1 text-xs font-bold text-indigo-600 outline-none"
          />
        ) : (
          <div
            onClick={() => setIsEditing(true)}
            className="text-xs font-bold text-slate-900 dark:text-slate-100 hover:text-indigo-600 cursor-pointer flex items-center justify-between p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
          >
            <span>{title}</span>
            <span className="text-[8px] bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-500">✎ Edit</span>
          </div>
        )}
      </div>
    </div>
  );
};

// #367 Contenteditable Field - HTML contenteditable block
export const LiveContenteditableLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#367 CONTENTEDITABLE FIELD</span>
        <span className="text-[10px] text-emerald-600 font-bold">Rich HTML Edit</span>
      </div>

      <div
        contentEditable
        suppressContentEditableWarning
        className="bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-lg p-2.5 text-[9px] outline-none leading-relaxed"
      >
        You can edit <b>bold text</b>, <i>italic remarks</i>, or <span className="text-indigo-600 font-bold">color tags</span> directly in this div.
      </div>
    </div>
  );
};

// #368 Floating Text Box - Free-floating canvas note card
export const LiveFloatingTextBoxLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#368 FLOATING TEXT BOX</span>
        <span className="text-[10px] text-amber-500 font-bold">Sticky Canvas Note</span>
      </div>

      <div className="relative h-24 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 overflow-hidden flex items-center justify-center">
        <div className="w-44 bg-amber-100 dark:bg-amber-950 border-2 border-amber-400 shadow-xl rounded-lg p-2 text-[8px] text-amber-900 dark:text-amber-200">
          <div className="font-bold border-b border-amber-300 pb-0.5 mb-1">📌 Floating Note #01</div>
          <div>Inspect thermal dissipation around Inverter-3.</div>
        </div>
      </div>
    </div>
  );
};

// #369 Anchored Text Box - Pinned directly above parent entity
export const LiveAnchoredTextBoxLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#369 ANCHORED TEXT BOX</span>
        <span className="text-[10px] text-indigo-600 font-bold">Entity Anchor</span>
      </div>

      <div className="h-28 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 flex flex-col items-center justify-center relative">
        {/* Anchored Callout */}
        <div className="bg-indigo-600 text-white text-[8px] font-bold px-2 py-0.5 rounded shadow-lg mb-1 animate-bounce">
          Offset: +14.2mm (Anchored)
        </div>
        <div className="w-3 h-1 bg-indigo-500 -mt-1 mb-1" />
        {/* Parent Node */}
        <div className="w-32 bg-slate-200 dark:bg-slate-800 border-2 border-slate-400 p-1.5 rounded text-center text-[9px] font-bold">
          [Servo Motor Unit]
        </div>
      </div>
    </div>
  );
};

// #370 Viewport-Fixed Text Box - Stays in top-right HUD corner
export const LiveViewportFixedTextBoxLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#370 VIEWPORT-FIXED TEXT BOX</span>
        <span className="text-[10px] text-emerald-600 font-bold">HUD Overlay</span>
      </div>

      <div className="relative h-24 bg-slate-900 border border-slate-700 rounded-lg p-2 text-[8px]">
        <div className="absolute top-2 right-2 bg-slate-800/90 border border-emerald-500 text-emerald-400 px-2 py-1 rounded shadow font-bold">
          FPS: 60.0 | ZOOM: 100%
        </div>
        <div className="text-slate-500 mt-6">[Canvas panning does not move this HUD]</div>
      </div>
    </div>
  );
};

// #371 Draggable Text Box - Grab header to drag around
export const LiveDraggableTextBoxLab: React.FC = () => {
  const [pos, setPos] = useState({ x: 20, y: 10 });

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#371 DRAGGABLE TEXT BOX</span>
        <button onClick={() => setPos({ x: pos.x === 20 ? 100 : 20, y: pos.y === 10 ? 25 : 10 })} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          Move Box ➔
        </button>
      </div>

      <div className="relative h-24 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden">
        <div
          style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
          className="w-36 bg-slate-100 dark:bg-slate-800 border-2 border-indigo-500 rounded-lg p-1.5 shadow-lg transition-transform text-[8px]"
        >
          <div className="font-bold flex items-center justify-between border-b pb-0.5 mb-1 cursor-move text-indigo-600">
            <span>✛ Draggable Card</span>
          </div>
          <span className="text-slate-500">X: {pos.x}px | Y: {pos.y}px</span>
        </div>
      </div>
    </div>
  );
};

// #372 Resizable Text Box - Width slider adjusting 2D frame box
export const LiveResizableTextBoxLab: React.FC = () => {
  const [w, setW] = useState(160);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#372 RESIZABLE TEXT BOX</span>
        <span className="text-[10px] text-indigo-600 font-bold">Width: {w}px</span>
      </div>

      <div className="space-y-2">
        <input
          type="range"
          min={100}
          max={240}
          value={w}
          onChange={(e) => setW(Number(e.target.value))}
          className="w-full accent-indigo-600"
        />
        <div className="h-16 bg-white dark:bg-slate-900 border rounded flex items-center p-2">
          <div style={{ width: `${w}px` }} className="bg-indigo-50 dark:bg-indigo-950/80 border-2 border-indigo-500 rounded p-1 text-[8px] font-bold text-indigo-600 truncate">
            Resizable Box ({w}px)
          </div>
        </div>
      </div>
    </div>
  );
};

// #373 Editable Overlay Label - CAD schematic dimension inline editor
export const LiveEditableOverlayLabelLab: React.FC = () => {
  const [dim, setDim] = useState('120.5 mm');
  const [editing, setEditing] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#373 EDITABLE OVERLAY LABEL</span>
        <span className="text-[10px] text-slate-500">CAD Overlay Dimension</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-3 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <span className="w-8 h-0.5 bg-indigo-500" />
          {editing ? (
            <input
              autoFocus
              value={dim}
              onChange={(e) => setDim(e.target.value)}
              onBlur={() => setEditing(false)}
              className="w-20 bg-indigo-50 dark:bg-indigo-950 border-2 border-indigo-500 rounded px-1 text-[9px] font-bold text-center outline-none"
            />
          ) : (
            <span onClick={() => setEditing(true)} className="px-2 py-0.5 bg-indigo-600 text-white rounded font-bold text-[9px] cursor-pointer shadow">
              {dim} ✎
            </span>
          )}
          <span className="w-8 h-0.5 bg-indigo-500" />
        </div>
      </div>
    </div>
  );
};

// #374 Text Box Handle - Rotation & transformation boundary box
export const LiveTextBoxHandleLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#374 TEXT BOX HANDLE</span>
        <span className="text-[10px] text-indigo-600 font-bold">Transform Knobs</span>
      </div>

      <div className="h-24 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex items-center justify-center relative">
        <div className="relative border-2 border-dashed border-indigo-500 p-2.5 rounded bg-indigo-50/40 dark:bg-indigo-950/40 text-[9px] font-bold text-indigo-600">
          {/* Top Rotation Knob */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-600 text-white text-[7px] flex items-center justify-center cursor-grab">↺</div>
          {/* Corner Handles */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-indigo-600 rounded-sm" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-indigo-600 rounded-sm" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-indigo-600 rounded-sm" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-indigo-600 rounded-sm" />
          Controlled Text Element
        </div>
      </div>
    </div>
  );
};

// #375 Text Overflow (Truncation) - Truncated string with hover tooltip
export const LiveTextOverflowLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#375 TEXT OVERFLOW (TRUNCATION)</span>
        <span className="text-[10px] text-slate-500">truncate css</span>
      </div>

      <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded p-2 text-[9px]">
        <div className="truncate font-bold text-indigo-600" title="/var/log/industrial/telemetry/spindle_vfd_480v_frequency_data.csv">
          /var/log/industrial/telemetry/spindle_vfd_480v_frequency_data.csv
        </div>
      </div>
    </div>
  );
};

// #376 Text Wrapping - Word-boundary wrapping
export const LiveTextWrappingLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#376 TEXT WRAPPING</span>
        <span className="text-[10px] text-slate-500">break-words</span>
      </div>

      <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded p-2 text-[8px] leading-relaxed break-words">
        Text wrapping ensures lengthy parameters naturally flow to the next line without overflowing bounds.
      </div>
    </div>
  );
};

// #377 No-Wrap Text - Enforce single line nowrap
export const LiveNoWrapTextLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#377 NO-WRAP TEXT</span>
        <span className="text-[10px] text-slate-500">whitespace-nowrap</span>
      </div>

      <div className="w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded p-2 text-[8px] overflow-x-auto whitespace-nowrap">
        CRITICAL_ALARM_EVENT: CODE_8490_OVERVOLTAGE_DETECTED_AXIS_Z
      </div>
    </div>
  );
};

// #378 Ellipsis (Text Ellipsis) - Path ellipsis formatting
export const LiveEllipsisLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#378 TEXT ELLIPSIS (...)</span>
        <span className="text-[10px] text-indigo-600 font-bold">&quot;...&quot; Marker</span>
      </div>

      <div className="w-44 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded p-2 text-[9px] truncate font-bold text-slate-700 dark:text-slate-300">
        C:\ProgramFiles\IndustrialAutomation\Drivers\...
      </div>
    </div>
  );
};

// #379 Expandable Text (Read More) - Expand full text toggle
export const LiveExpandableTextLab: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#379 EXPANDABLE TEXT</span>
        <button onClick={() => setExpanded(!expanded)} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          {expanded ? 'Show Less ▴' : 'Read More ▾'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2.5 text-[8px] leading-relaxed">
        <div>Spindle drive scheduled maintenance notice.</div>
        {expanded && (
          <div className="mt-1 text-slate-500 animate-fade-in">
            Replace oil filter, verify ground loop impedance, torque bolts to 45Nm, and record final acoustic vibration frequencies.
          </div>
        )}
      </div>
    </div>
  );
};

// #380 Read-Only Text Field - Non-editable but selectable and copyable
export const LiveReadOnlyTextFieldLab: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const text = 'API_KEY_SEC_99420_CNC_READONLY';

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#380 READ-ONLY TEXT FIELD</span>
        <button onClick={copy} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold flex items-center gap-1">
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <input
        readOnly
        value={text}
        className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2 text-[9px] font-mono select-all cursor-text outline-none text-slate-600 dark:text-slate-300"
      />
    </div>
  );
};

// #381 Disabled Text Field - Dimmed non-interactive input
export const LiveDisabledTextFieldLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#381 DISABLED TEXT FIELD</span>
        <span className="text-[10px] text-slate-400 font-bold">disabled: 100% Locked</span>
      </div>

      <input
        disabled
        value="Override_Speed_Locked_By_PLC"
        className="w-full bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-2 text-[9px] font-mono text-slate-400 cursor-not-allowed opacity-60"
      />
    </div>
  );
};

// #382 Prefix / Suffix Field - Addon label tags on both sides
export const LivePrefixSuffixFieldLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#382 PREFIX / SUFFIX FIELD</span>
        <span className="text-[10px] text-slate-500">Add-on Badges</span>
      </div>

      <div className="flex items-center rounded-lg border-2 border-indigo-500 overflow-hidden bg-white dark:bg-slate-900">
        <span className="px-2.5 py-1.5 bg-slate-200 dark:bg-slate-800 text-[9px] font-bold text-slate-600 dark:text-slate-300 border-r">
          https://
        </span>
        <input
          defaultValue="cnc-hub.factory-lan"
          className="flex-1 px-2 py-1 text-[9px] font-mono outline-none bg-transparent"
        />
        <span className="px-2.5 py-1.5 bg-slate-200 dark:bg-slate-800 text-[9px] font-bold text-slate-600 dark:text-slate-300 border-l">
          :8080
        </span>
      </div>
    </div>
  );
};

// #383 Unit Input - Numeric input with selectable physical unit
export const LiveUnitInputLab: React.FC = () => {
  const [val, setVal] = useState('150.0');
  const [unit, setUnit] = useState('mm');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#383 PHYSICAL UNIT INPUT</span>
        <span className="text-[10px] text-indigo-600 font-bold">{val} {unit}</span>
      </div>

      <div className="flex rounded-lg border-2 border-indigo-500 overflow-hidden bg-white dark:bg-slate-900">
        <input
          type="number"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="flex-1 px-2.5 py-1.5 text-xs font-mono font-bold outline-none bg-transparent"
        />
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="bg-indigo-600 text-white font-bold text-[9px] px-2 outline-none cursor-pointer"
        >
          <option value="mm">mm</option>
          <option value="cm">cm</option>
          <option value="m">m</option>
          <option value="inch">inch</option>
        </select>
      </div>
    </div>
  );
};

// #384 Masked Text Input - Guided business license placeholder mask
export const LiveMaskedTextInputLab: React.FC = () => {
  const [val, setVal] = useState('120-81-49201');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#384 MASKED TEXT INPUT</span>
        <span className="text-[10px] text-slate-500">Format: [___-__-_____]</span>
      </div>

      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="w-full p-2 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-lg text-xs font-mono font-bold tracking-widest outline-none text-indigo-600"
      />
    </div>
  );
};

// #385 Monospace Text Field - Rigid alignment code font
export const LiveMonospaceTextFieldLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#385 MONOSPACE TEXT FIELD</span>
        <span className="text-[10px] text-slate-500">font-mono</span>
      </div>

      <div className="bg-slate-900 text-emerald-400 p-2.5 rounded-lg text-[9px] font-mono border border-slate-700">
        <div>ADDR: 0x7FFF8490</div>
        <div>DATA: 0010 1101 0100 1111</div>
      </div>
    </div>
  );
};

// #386 Searchable Text Box - Instant match suggestion list
export const LiveSearchableTextBoxLab: React.FC = () => {
  const [q, setQ] = useState('Servo');
  const items = ['Servo Drive HG-SR352B', 'Servo Motor KR-13', 'Spindle Drive AC'];
  const matches = items.filter(i => i.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#386 SEARCHABLE TEXT BOX</span>
        <span className="text-[10px] text-indigo-600 font-bold">{matches.length} Matches</span>
      </div>

      <div className="space-y-1">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search components..."
          className="w-full p-2 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-lg text-[9px] outline-none"
        />
        {matches.map(m => (
          <div key={m} className="p-1.5 bg-slate-200 dark:bg-slate-800 rounded text-[8px] font-bold">
            🔍 {m}
          </div>
        ))}
      </div>
    </div>
  );
};

// #387 Debounced Text Input - Simulating 300ms delayed query
export const LiveDebouncedTextInputLab: React.FC = () => {
  const [val, setVal] = useState('Inverter');
  const [debounced, setDebounced] = useState('Inverter');

  useEffect(() => {
    const t = setTimeout(() => setDebounced(val), 400);
    return () => clearTimeout(t);
  }, [val]);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#387 DEBOUNCED TEXT INPUT</span>
        <span className="text-[10px] text-amber-500 font-bold">400ms Delay</span>
      </div>

      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="w-full p-2 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-lg text-[9px] outline-none"
      />
      <div className="text-[8px] text-slate-500">
        Dispatched Query: <span className="font-bold text-emerald-600 dark:text-emerald-400">&quot;{debounced}&quot;</span>
      </div>
    </div>
  );
};

// #388 Text Selection Toolbar - Floating format toolbar on text
export const LiveTextSelectionToolbarLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#388 TEXT SELECTION TOOLBAR</span>
        <span className="text-[10px] text-indigo-600 font-bold">Floating Ribbon</span>
      </div>

      <div className="relative bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-3">
        {/* Floating Bubble Toolbar */}
        <div className="absolute -top-3 left-10 bg-slate-900 text-white px-2 py-1 rounded-md shadow-xl flex gap-2 text-[8px] font-bold border border-slate-700 animate-fade-in">
          <button className="hover:text-indigo-400">B</button>
          <button className="hover:text-indigo-400">I</button>
          <button className="hover:text-indigo-400">Link</button>
          <button className="hover:text-indigo-400">Code</button>
        </div>
        <div className="text-[9px] pt-1">
          Select any <span className="bg-indigo-200 dark:bg-indigo-900 px-1 rounded font-bold">paragraph of text</span> to style.
        </div>
      </div>
    </div>
  );
};

// #389 Rich Text Editor (WYSIWYG) - Interactive WYSIWYG ribbon buttons
export const LiveWysiwygEditorLab: React.FC = () => {
  const [bold, setBold] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#389 WYSIWYG RICH TEXT</span>
        <div className="flex gap-1">
          <button onClick={() => setBold(!bold)} className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${bold ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800'}`}>B</button>
        </div>
      </div>

      <div className={`p-2.5 bg-white dark:bg-slate-900 border rounded-lg text-[9px] ${bold ? 'font-black text-indigo-600' : 'text-slate-700 dark:text-slate-300'}`}>
        Standard operating procedures for factory machinery.
      </div>
    </div>
  );
};

// #390 Markdown Editor - 2-Pane live markdown preview
export const LiveMarkdownEditorLab: React.FC = () => {
  const [md, setMd] = useState('### System OK\n- Motor: **Active**');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#390 MARKDOWN EDITOR (2-PANE)</span>
        <span className="text-[10px] text-emerald-600 font-bold">Split Preview</span>
      </div>

      <div className="h-20 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg flex overflow-hidden text-[8px]">
        <textarea
          value={md}
          onChange={(e) => setMd(e.target.value)}
          className="w-1/2 p-2 border-r bg-slate-50 dark:bg-slate-950 outline-none resize-none font-mono"
        />
        <div className="w-1/2 p-2 bg-indigo-50/40 dark:bg-indigo-950/40 font-bold text-indigo-600">
          <div>Title: System OK</div>
          <div>• Motor: Active (Bold)</div>
        </div>
      </div>
    </div>
  );
};
