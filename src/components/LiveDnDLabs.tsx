import React, { useState, useRef } from 'react';
import { 
  GripVertical, Move, Magnet, Grid, Maximize2, Minimize2, 
  Upload, FileText, Check, ArrowRight, RotateCcw, Box, 
  Sparkles, MousePointer, Layers, Scissors, Play
} from 'lucide-react';

/**
 * ----------------------------------------------------------------------------
 * Category 11: Drag, Drop & Direct Manipulation (#201 ~ #220) Dedicated 1:1 Labs
 * High-contrast, Light/Dark adaptive UI/UX Architecture Workbench
 * ----------------------------------------------------------------------------
 */

// #201 Drag & Drop (DnD) - End-to-end drag transfer between panels
export const LiveDragAndDropLab: React.FC = () => {
  const [todoItems, setTodoItems] = useState(['Spindle Calibration', 'Thermal Probe #4']);
  const [doneItems, setDoneItems] = useState(['Zero-Axis Offset']);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDropOnDone = () => {
    if (draggedItem && todoItems.includes(draggedItem)) {
      setTodoItems(todoItems.filter((i) => i !== draggedItem));
      setDoneItems([...doneItems, draggedItem]);
      setDraggedItem(null);
    }
  };

  const handleDropOnTodo = () => {
    if (draggedItem && doneItems.includes(draggedItem)) {
      setDoneItems(doneItems.filter((i) => i !== draggedItem));
      setTodoItems([...todoItems, draggedItem]);
      setDraggedItem(null);
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#201 DRAG & DROP (DND)</span>
        <span className="text-[10px] text-slate-500">Cross-List Transfer</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {/* Source List (Todo) */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDropOnTodo}
          className="bg-white dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-2 flex flex-col gap-1.5 min-h-[110px]"
        >
          <div className="font-bold text-[10px] text-slate-500 border-b pb-1">TODO QUEUE ({todoItems.length})</div>
          {todoItems.map((item) => (
            <div
              key={item}
              draggable
              onDragStart={() => setDraggedItem(item)}
              className="p-1.5 bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-300 dark:border-indigo-800 rounded font-bold text-[11px] cursor-grab active:cursor-grabbing text-indigo-950 dark:text-indigo-200 flex items-center gap-1 shadow-sm"
            >
              <GripVertical className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>

        {/* Target List (Done) */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDropOnDone}
          className="bg-emerald-50/50 dark:bg-emerald-950/20 border-2 border-dashed border-emerald-400 dark:border-emerald-700/60 rounded-lg p-2 flex flex-col gap-1.5 min-h-[110px]"
        >
          <div className="font-bold text-[10px] text-emerald-700 dark:text-emerald-400 border-b border-emerald-300 dark:border-emerald-800 pb-1">
            COMPLETED ({doneItems.length})
          </div>
          {doneItems.map((item) => (
            <div
              key={item}
              draggable
              onDragStart={() => setDraggedItem(item)}
              className="p-1.5 bg-emerald-100 dark:bg-emerald-900/60 border border-emerald-300 dark:border-emerald-700 rounded font-bold text-[11px] cursor-grab text-emerald-950 dark:text-emerald-200 flex items-center gap-1 shadow-sm"
            >
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-[10px] text-slate-500 text-center">Drag items between columns to transfer state.</div>
    </div>
  );
};

// #202 Draggable - draggable="true" affordance and grab cursor
export const LiveDraggableLab: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragCount, setDragCount] = useState(0);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#202 DRAGGABLE</span>
        <span className="text-[10px] font-mono text-slate-500">draggable="true"</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex flex-col items-center gap-2">
        <div
          draggable
          onDragStart={() => { setIsDragging(true); setDragCount((c) => c + 1); }}
          onDragEnd={() => setIsDragging(false)}
          className="w-full p-3 bg-indigo-600 text-white rounded-lg font-bold text-xs flex items-center justify-between cursor-grab active:cursor-grabbing hover:bg-indigo-500 transition shadow"
        >
          <div className="flex items-center gap-2">
            <GripVertical className="w-4 h-4" />
            <span>Interactive Draggable Payload Token</span>
          </div>
          <span className="text-[10px] bg-indigo-800 px-2 py-0.5 rounded font-mono">cursor: grab</span>
        </div>

        <div className="w-full p-2 bg-slate-50 dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800 text-[10px] flex justify-between items-center">
          <span>Active Drag Status:</span>
          <span className={`font-bold ${isDragging ? 'text-amber-500 animate-pulse' : 'text-slate-400'}`}>
            {isDragging ? '● DRAG IN PROGRESS' : '○ Standby'}
          </span>
        </div>
        <div className="text-[10px] text-slate-500">Total Drag Initiations: {dragCount}</div>
      </div>
    </div>
  );
};

// #203 Droppable - Drop target accepting incoming payloads
export const LiveDroppableLab: React.FC = () => {
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [isOver, setIsOver] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#203 DROPPABLE</span>
        <button
          onClick={() => setAcceptedCount((c) => c + 1)}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
        >
          Simulate Drop
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div
          onDragOver={(e) => { e.preventDefault(); setIsOver(true); }}
          onDragLeave={() => setIsOver(false)}
          onDrop={(e) => { e.preventDefault(); setIsOver(false); setAcceptedCount((c) => c + 1); }}
          className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-1.5 ${
            isOver
              ? 'border-indigo-600 bg-indigo-100 dark:bg-indigo-950/70 text-indigo-900 dark:text-indigo-200 scale-[1.01]'
              : 'border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400'
          }`}
        >
          <span className="text-xl">{isOver ? '📥' : '🎯'}</span>
          <div className="font-bold text-xs">Droppable Target Container</div>
          <div className="text-[10px] opacity-75">Handles onDragOver & onDrop payload listeners</div>
        </div>

        <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded border text-[10px] flex justify-between items-center">
          <span>Payloads Received:</span>
          <span className="font-bold text-indigo-600 dark:text-indigo-400 font-mono">{acceptedCount} items</span>
        </div>
      </div>
    </div>
  );
};

// #204 Drop Zone (File Upload) - Large dashed landing area for file uploads
export const LiveDropZoneLab: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>(['Part_Geometry.step']);
  const [isOver, setIsOver] = useState(false);

  const handleSimulateUpload = () => {
    setUploadedFiles((prev) => [...prev, `Toolpath_Rev_${prev.length + 1}.nc`]);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#204 DROP ZONE (FILE UPLOAD)</span>
        <button onClick={handleSimulateUpload} className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold">
          + Add File
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div
          onDragOver={(e) => { e.preventDefault(); setIsOver(true); }}
          onDragLeave={() => setIsOver(false)}
          onDrop={(e) => { e.preventDefault(); setIsOver(false); handleSimulateUpload(); }}
          className={`p-4 rounded-xl border-2 border-dashed transition-all flex flex-col items-center justify-center text-center gap-1.5 cursor-pointer ${
            isOver
              ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950 ring-4 ring-indigo-500/20'
              : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 hover:border-indigo-400'
          }`}
        >
          <Upload className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          <div>
            <div className="font-bold text-xs text-slate-900 dark:text-slate-100">Drag & Drop CAD Files Here</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Supports STEP, IGES, DXF, G-Code up to 50MB</div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-[10px] font-bold text-slate-500">Staged Files ({uploadedFiles.length})</div>
          {uploadedFiles.map((f, i) => (
            <div key={i} className="p-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-indigo-600" />
                <span className="font-bold">{f}</span>
              </div>
              <span className="text-[10px] text-emerald-600 font-bold">✓ Ready</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// #205 Drag Handle - Isolated ⠿ 6-dot icon allowing reordering
export const LiveDragHandleLab: React.FC = () => {
  const [rows, setRows] = useState([
    { id: 1, text: 'Feedrate Override (100%)' },
    { id: 2, text: 'Coolant Pump Pressure (60 PSI)' },
    { id: 3, text: 'Spindle Speed (14,000 RPM)' },
  ]);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#205 DRAG HANDLE (⠿)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Isolated Grab Target</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 space-y-1.5">
        {rows.map((row) => (
          <div
            key={row.id}
            className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-between text-xs hover:border-slate-400 transition"
          >
            <div className="flex items-center gap-2">
              {/* Isolated Drag Handle */}
              <div
                draggable
                className="p-1 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 rounded cursor-grab active:cursor-grabbing text-slate-500 hover:text-indigo-600 transition"
                title="Drag to reorder"
              >
                <GripVertical className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-800 dark:text-slate-200">{row.text}</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Handle Only</span>
          </div>
        ))}
      </div>
      <div className="text-[10px] text-slate-500 text-center">Row text remains selectable; only ⠿ grip initiates drag.</div>
    </div>
  );
};

// #206 Grab Handle - Top window header bar enabling whole-panel translation
export const LiveGrabHandleLab: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#206 GRAB HANDLE (TITLE BAR)</span>
        <button onClick={() => setPos({ x: 0, y: 0 })} className="px-2 py-0.5 bg-white dark:bg-slate-800 border rounded text-[10px]">
          Reset (0,0)
        </button>
      </div>

      <div className="relative h-36 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 overflow-hidden">
        <div
          style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
          className="absolute w-44 bg-slate-900 text-white rounded-lg shadow-xl border border-slate-700 text-xs overflow-hidden transition-all duration-75"
        >
          {/* Top Grab Handle Bar */}
          <div
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            className="bg-indigo-600 px-2 py-1 flex items-center justify-between cursor-move select-none"
          >
            <span className="font-bold text-[10px] flex items-center gap-1">
              <Move className="w-3 h-3" /> Tool Inspector
            </span>
            <span className="text-[8px] opacity-75">GRAB BAR</span>
          </div>
          <div className="p-2 space-y-1 text-[10px] bg-slate-900 text-slate-300">
            <div>X: 120.4 mm</div>
            <div>Y: 88.2 mm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// #207 Grip - Textured anti-slip surface dot pattern on splitters
export const LiveGripLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#207 GRIP (TEXTURED SPLITTER)</span>
        <span className="text-[10px] text-slate-500">Tactile Affordance</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex items-center gap-2">
        <div className="flex-1 p-3 bg-slate-50 dark:bg-slate-950 rounded border text-center text-xs font-bold">
          Left Viewport (3D)
        </div>

        {/* Textured Splitter Grip */}
        <div className="w-6 h-20 bg-slate-200 dark:bg-slate-800 rounded-md flex flex-col items-center justify-center gap-1 cursor-col-resize hover:bg-indigo-500 hover:text-white transition group border border-slate-300 dark:border-slate-700">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-white" />
        </div>

        <div className="flex-1 p-3 bg-slate-50 dark:bg-slate-950 rounded border text-center text-xs font-bold">
          Right Telemetry Log
        </div>
      </div>
    </div>
  );
};

// #208 Drop Indicator - 2px blue horizontal insertion line + circular notch
export const LiveDropIndicatorLab: React.FC = () => {
  const [insertIndex, setInsertIndex] = useState(1);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#208 DROP INDICATOR</span>
        <div className="flex gap-1">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setInsertIndex(idx)}
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                insertIndex === idx ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border'
              }`}
            >
              Slot {idx + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 space-y-2">
        <div className="p-2 bg-slate-50 dark:bg-slate-950 border rounded text-xs font-bold">
          Step 1: Rapid Traverse G00 X0 Y0
        </div>

        {insertIndex === 1 && (
          <div className="relative py-1 flex items-center">
            {/* 2px Indicator Line with circular target notch */}
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 shrink-0 -ml-1 border-2 border-white dark:border-slate-900 ring-2 ring-indigo-400" />
            <div className="w-full h-0.5 bg-indigo-600 shadow-sm" />
            <span className="absolute right-2 -top-2 bg-indigo-600 text-white text-[8px] font-bold px-1.5 py-0.2 rounded shadow">
              Insert Here
            </span>
          </div>
        )}

        <div className="p-2 bg-slate-50 dark:bg-slate-950 border rounded text-xs font-bold">
          Step 2: Linear Plunge G01 Z-5.0 F500
        </div>
      </div>
    </div>
  );
};

// #209 Drag Preview - Semi-transparent thumbnail tracking cursor
export const LiveDragPreviewLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#209 DRAG PREVIEW</span>
        <span className="text-[10px] text-indigo-600 font-bold">Cursor Follower</span>
      </div>

      <div className="relative h-28 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex items-center justify-center">
        {/* Simulated Drag Preview Tooltip */}
        <div className="p-2 bg-indigo-600 text-white rounded-lg shadow-2xl border border-indigo-400 text-xs font-bold flex items-center gap-2 opacity-85 rotate-3 animate-pulse">
          <Box className="w-4 h-4" />
          <span>Moving: 4-Axis CNC Module (3 Items)</span>
        </div>
        <div className="absolute bottom-2 right-2 text-[10px] text-slate-400">
          opacity: 0.85 • rotate: 3deg
        </div>
      </div>
    </div>
  );
};

// #210 Ghost Element - 30% opacity origin placeholder
export const LiveGhostElementLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#210 GHOST ELEMENT</span>
        <span className="text-[10px] text-slate-500">Origin Placeholder</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        {/* Origin Ghost Element */}
        <div className="p-3 rounded-lg border-2 border-dashed border-indigo-400/80 bg-indigo-50/50 dark:bg-indigo-950/40 opacity-40 flex items-center justify-between text-xs font-bold text-indigo-900 dark:text-indigo-200">
          <span>👻 Original Slot #3 (Ghost Silhouette)</span>
          <span className="text-[9px]">opacity: 0.35</span>
        </div>

        {/* Normal Item */}
        <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-bold">
          Slot #4: Vacuum Pump Actuator
        </div>
      </div>
    </div>
  );
};

// #211 Placeholder (DnD) - Dynamic space expansion during list reorder
export const LivePlaceholderDnDLab: React.FC = () => {
  const [hoverSlot, setHoverSlot] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#211 PLACEHOLDER (DND)</span>
        <button
          onClick={() => setHoverSlot(!hoverSlot)}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
        >
          {hoverSlot ? 'Contract Slot' : 'Expand Slot'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 space-y-1.5">
        <div className="p-2 bg-slate-50 dark:bg-slate-950 border rounded text-xs font-bold">
          Task 1: Pre-Heat Thermal Bed
        </div>

        {/* Dynamic Expanding Placeholder */}
        {hoverSlot && (
          <div className="h-10 bg-indigo-50 dark:bg-indigo-950/60 border-2 border-dashed border-indigo-500 rounded-lg flex items-center justify-center text-[10px] font-bold text-indigo-600 dark:text-indigo-400 animate-in fade-in zoom-in-95 duration-150">
            [ Dynamic Space Reserved for Incoming Item ]
          </div>
        )}

        <div className="p-2 bg-slate-50 dark:bg-slate-950 border rounded text-xs font-bold">
          Task 2: Calibrate Z-Probe Sensor
        </div>
      </div>
    </div>
  );
};

// #212 Snap - 5px threshold magnetic alignment
export const LiveSnapLab: React.FC = () => {
  const [posX, setPosX] = useState(140);
  const targetGuide = 150;
  const isSnapped = Math.abs(posX - targetGuide) <= 10;
  const renderedX = isSnapped ? targetGuide : posX;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#212 SNAP ALIGNMENT</span>
        <span className={`text-[10px] font-bold ${isSnapped ? 'text-emerald-600 dark:text-emerald-400 animate-bounce' : 'text-slate-500'}`}>
          {isSnapped ? '🧲 SNAPPED TO GUIDE' : 'Free Moving'}
        </span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="relative h-20 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
          {/* Vertical Guide Line */}
          <div className="absolute top-0 bottom-0 left-[150px] w-0.5 bg-indigo-500 dashed">
            <span className="absolute top-1 left-1 text-[8px] bg-indigo-600 text-white px-1 rounded">X:150 Guide</span>
          </div>

          {/* Draggable Block */}
          <div
            style={{ left: `${renderedX}px` }}
            className={`absolute top-4 w-16 h-12 rounded-lg border-2 flex items-center justify-center font-bold text-xs transition-all duration-75 ${
              isSnapped
                ? 'bg-emerald-500 text-white border-emerald-600 shadow-lg scale-105'
                : 'bg-indigo-600 text-white border-indigo-700'
            }`}
          >
            Block
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px]">Position X:</span>
          <input
            type="range"
            min="50"
            max="250"
            value={posX}
            onChange={(e) => setPosX(Number(e.target.value))}
            className="flex-1 accent-indigo-600"
          />
          <span className="font-bold text-xs w-10 text-right">{renderedX}px</span>
        </div>
      </div>
    </div>
  );
};

// #213 Snap Point - Discrete magnetic anchor points on canvas
export const LiveSnapPointLab: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<number>(1);
  const snapPoints = [50, 150, 250];

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#213 SNAP POINT (ANCHORS)</span>
        <span className="text-[10px] text-slate-500">Magnetic Nodes</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
        <div className="relative h-20 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center">
          {/* Snap Points */}
          {snapPoints.map((pt, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPoint(idx)}
              style={{ left: `${pt}px` }}
              className={`absolute w-3.5 h-3.5 -ml-1.5 rounded-full border-2 cursor-pointer transition ${
                selectedPoint === idx
                  ? 'bg-indigo-600 border-white ring-4 ring-indigo-500/30 scale-125'
                  : 'bg-white dark:bg-slate-800 border-slate-400 hover:border-indigo-600'
              }`}
            />
          ))}

          {/* Connected Object */}
          <div
            style={{ left: `${snapPoints[selectedPoint]}px` }}
            className="absolute top-2 -ml-6 px-2 py-1 bg-indigo-600 text-white rounded font-bold text-[10px] shadow transition-all duration-200"
          >
            Locked: P{selectedPoint + 1}
          </div>
        </div>
      </div>
    </div>
  );
};

// #214 Snap Grid - 20px stepped modular grid constraint
export const LiveSnapGridLab: React.FC = () => {
  const [rawX, setRawX] = useState(60);
  const gridSize = 20;
  const snappedX = Math.round(rawX / gridSize) * gridSize;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#214 SNAP GRID (20PX STEP)</span>
        <span className="text-[10px] text-indigo-600 font-bold">20px Increments</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="relative h-20 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:20px_20px] border border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden">
          <div
            style={{ left: `${snappedX}px` }}
            className="absolute top-3 w-16 h-14 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-xs shadow-md"
          >
            {snappedX}px
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px]">Continuous Input:</span>
          <input
            type="range"
            min="0"
            max="200"
            value={rawX}
            onChange={(e) => setRawX(Number(e.target.value))}
            className="flex-1 accent-indigo-600"
          />
          <span className="font-bold text-xs">{snappedX}px</span>
        </div>
      </div>
    </div>
  );
};

// #215 Magnetic Snap - Automatic connection snap with pulse ring
export const LiveMagneticSnapLab: React.FC = () => {
  const [dist, setDist] = useState(15);
  const isAttached = dist <= 20;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#215 MAGNETIC SNAP</span>
        <span className={`text-[10px] font-bold ${isAttached ? 'text-indigo-600 dark:text-indigo-400 animate-pulse' : 'text-slate-400'}`}>
          {isAttached ? '🧲 COUPLING ENGAGED' : 'Detached'}
        </span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="h-20 bg-slate-50 dark:bg-slate-950 border rounded-lg flex items-center justify-center gap-1">
          <div className="w-16 h-12 bg-slate-800 text-white rounded-l-lg flex items-center justify-center font-bold text-[10px]">
            Port A
          </div>
          <div
            style={{ transform: `translateX(${isAttached ? 0 : dist}px)` }}
            className={`w-16 h-12 rounded-r-lg flex items-center justify-center font-bold text-[10px] transition-transform duration-150 ${
              isAttached ? 'bg-indigo-600 text-white ring-4 ring-indigo-500/30' : 'bg-slate-600 text-slate-200'
            }`}
          >
            Cable B
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px]">Proximity:</span>
          <input
            type="range"
            min="0"
            max="60"
            value={dist}
            onChange={(e) => setDist(Number(e.target.value))}
            className="flex-1 accent-indigo-600"
          />
          <span className="font-bold text-xs">{dist}px</span>
        </div>
      </div>
    </div>
  );
};

// #216 Free Drag - Unconstrained 1px precision movement
export const LiveFreeDragLab: React.FC = () => {
  const [coords, setCoords] = useState({ x: 42, y: 18 });

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#216 FREE DRAG (NO SNAP)</span>
        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">1px Sub-pixel Mode</span>
      </div>

      <div className="relative h-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 overflow-hidden">
        <div
          style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
          className="absolute w-20 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-[10px] shadow cursor-crosshair"
        >
          X:{coords.x} Y:{coords.y}
        </div>
      </div>
      <div className="flex justify-between text-[10px] text-slate-500">
        <button onClick={() => setCoords({ x: coords.x + 5, y: coords.y })} className="px-2 py-0.5 bg-white dark:bg-slate-800 border rounded">+5px X</button>
        <button onClick={() => setCoords({ x: coords.x, y: coords.y + 5 })} className="px-2 py-0.5 bg-white dark:bg-slate-800 border rounded">+5px Y</button>
        <button onClick={() => setCoords({ x: 42, y: 18 })} className="px-2 py-0.5 bg-white dark:bg-slate-800 border rounded">Reset</button>
      </div>
    </div>
  );
};

// #217 Resize (Direct Manipulation) - Drag edge handle to alter length
export const LiveDirectResizeLab: React.FC = () => {
  const [width, setWidth] = useState(180);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#217 DIRECT RESIZE</span>
        <span className="text-[10px] font-bold text-indigo-600">{width}ms Duration</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="h-14 bg-slate-50 dark:bg-slate-950 border rounded-lg p-2 flex items-center">
          <div
            style={{ width: `${width}px` }}
            className="h-9 bg-indigo-600 text-white rounded flex items-center justify-between px-2 font-bold text-[10px] shadow"
          >
            <span className="truncate">Keyframe Duration</span>
            <div className="w-2 h-6 bg-white/40 rounded cursor-ew-resize hover:bg-white" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px]">Drag Width:</span>
          <input
            type="range"
            min="80"
            max="260"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="flex-1 accent-indigo-600"
          />
          <span className="font-bold text-xs">{width}px</span>
        </div>
      </div>
    </div>
  );
};

// #218 Move (Direct Manipulation) - Shift timeline start position
export const LiveDirectMoveLab: React.FC = () => {
  const [startPos, setStartPos] = useState(40);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#218 DIRECT MOVE</span>
        <span className="text-[10px] text-slate-500">Offset: +{startPos}ms</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="relative h-14 bg-slate-50 dark:bg-slate-950 border rounded-lg p-2">
          <div
            style={{ left: `${startPos}px` }}
            className="absolute top-2 w-32 h-9 bg-emerald-600 text-white rounded flex items-center justify-center font-bold text-[10px] shadow cursor-move active:opacity-80"
          >
            Spindle Spinup
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px]">Start Time:</span>
          <input
            type="range"
            min="0"
            max="160"
            value={startPos}
            onChange={(e) => setStartPos(Number(e.target.value))}
            className="flex-1 accent-emerald-600"
          />
          <span className="font-bold text-xs">{startPos}ms</span>
        </div>
      </div>
    </div>
  );
};

// #219 Pan (Canvas Panning) - Hand tool moving entire stage viewport
export const LivePanLab: React.FC = () => {
  const [panOffset, setPanOffset] = useState({ x: -20, y: -10 });

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#219 CANVAS PANNING (PAN)</span>
        <button onClick={() => setPanOffset({ x: 0, y: 0 })} className="px-2 py-0.5 bg-white dark:bg-slate-800 border rounded text-[10px]">
          Reset (0,0)
        </button>
      </div>

      <div className="relative h-28 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:16px_16px] border border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing p-2">
        <div
          style={{ transform: `translate(${panOffset.x}px, ${panOffset.y}px)` }}
          className="p-3 bg-white dark:bg-slate-900 border-2 border-indigo-500 rounded-xl shadow-lg inline-block transition-transform duration-75"
        >
          <div className="font-bold text-xs text-indigo-600">3D CAD Model Origin</div>
          <div className="text-[10px] text-slate-500">Pan Coordinates: ({panOffset.x}, {panOffset.y})</div>
        </div>
      </div>
      <div className="flex justify-between text-[10px]">
        <button onClick={() => setPanOffset((p) => ({ ...p, x: p.x - 10 }))} className="px-2 py-0.5 bg-white dark:bg-slate-800 border rounded">← Pan Left</button>
        <button onClick={() => setPanOffset((p) => ({ ...p, x: p.x + 10 }))} className="px-2 py-0.5 bg-white dark:bg-slate-800 border rounded">Pan Right →</button>
      </div>
    </div>
  );
};

// #220 Rubber Band Selection (Marquee) - Box multi-selection area
export const LiveRubberBandLab: React.FC = () => {
  const [selectedNodes, setSelectedNodes] = useState<number[]>([1, 2]);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#220 RUBBER BAND SELECTION</span>
        <button
          onClick={() => setSelectedNodes(selectedNodes.length === 3 ? [] : [1, 2, 3])}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
        >
          {selectedNodes.length === 3 ? 'Deselect All' : 'Select All'}
        </button>
      </div>

      <div className="relative h-28 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 flex items-center justify-around">
        {/* Rubber Band Rectangle Overlay */}
        <div className="absolute left-6 top-3 w-48 h-20 bg-indigo-500/15 border-2 border-indigo-500 rounded-md pointer-events-none" />

        {[1, 2, 3].map((node) => (
          <div
            key={node}
            onClick={() => {
              setSelectedNodes((prev) =>
                prev.includes(node) ? prev.filter((n) => n !== node) : [...prev, node]
              );
            }}
            className={`w-14 h-14 rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer transition ${
              selectedNodes.includes(node)
                ? 'bg-indigo-600 text-white border-indigo-700 ring-4 ring-indigo-500/20 shadow'
                : 'bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <span className="text-[10px] font-bold">Node #{node}</span>
            <span className="text-[8px] opacity-80">{selectedNodes.includes(node) ? '✓ In Box' : 'Out'}</span>
          </div>
        ))}
      </div>
      <div className="text-[10px] text-slate-500 text-center">Selected Nodes: {selectedNodes.length}/3 in Marquee</div>
    </div>
  );
};
