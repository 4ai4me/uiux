// -------------------------------------------------------------
// Category 08: Dedicated Dialogs, Popups & Overlays Labs (#141 ~ #160)
// -------------------------------------------------------------
import React, { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  X,
  Info,
  ShieldAlert,
  HelpCircle,
  Maximize2,
  Minimize2,
  Trash2,
  Calendar,
  Layers,
  ChevronRight,
  Move,
  Search,
  ExternalLink,
  Sparkles,
  Sliders,
  Compass,
} from 'lucide-react';

// #141 Modal (Backdrop-locked focus-trapped dialog)
export const LiveModalLab = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Modal Overlay (Focus Locked):</span>
        <button
          onClick={() => setIsOpen(true)}
          className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] font-bold shadow"
        >
          Open Modal
        </button>
      </div>

      {/* Embedded Simulation Canvas */}
      <div className="relative w-full h-44 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-xl p-3 flex flex-col justify-between">
        <div className="text-[10px] text-slate-400 space-y-1">
          <div className="font-bold text-slate-300">Background Workspace (Protected)</div>
          <div>• Telemetry Feed: Active (4,200 RPM)</div>
          <div>• Temperature: 42.5°C</div>
        </div>

        {isOpen && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 z-20 animate-in fade-in">
            <div className="w-full max-w-[280px] bg-slate-900 border-2 border-indigo-500 rounded-xl p-3 shadow-2xl space-y-2">
              <div className="flex justify-between items-center border-b border-slate-800 pb-1.5">
                <span className="font-black text-white text-[11px]">System Calibration Modal</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-rose-400 text-xs font-bold"
                >
                  ✕
                </button>
              </div>
              <p className="text-[10px] text-slate-300">
                Background clicks are completely trapped until you confirm or dismiss this modal.
              </p>
              <div className="flex justify-end gap-1.5 pt-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[9px] font-bold"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-2 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[9px] font-bold"
                >
                  Confirm Action
                </button>
              </div>
            </div>
          </div>
        )}
        <span className="text-[9px] text-slate-500 text-center">Modal isolates user focus with locked backdrop.</span>
      </div>
    </div>
  );
};

// #142 Dialog (General Purpose Question/Input Window)
export const LiveDialogLab = () => {
  const [assetName, setAssetName] = useState('Servo_Gantry_X');
  const [isOpen, setIsOpen] = useState(false);
  const [tempName, setTempName] = useState(assetName);

  const save = () => {
    setAssetName(tempName);
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Dialog (Rename Asset):</span>
        <button
          onClick={() => {
            setTempName(assetName);
            setIsOpen(true);
          }}
          className="px-2 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] font-bold"
        >
          Edit Name
        </button>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex flex-col justify-between">
        <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
          <div className="text-[9px] text-slate-400">Current Asset Identifier:</div>
          <div className="text-sm font-black text-emerald-400 mt-0.5">{assetName}</div>
        </div>

        {isOpen && (
          <div className="absolute inset-0 bg-black/75 flex items-center justify-center p-3 z-20 animate-in fade-in">
            <div className="w-full max-w-[260px] bg-slate-900 border-2 border-indigo-400 rounded-xl p-3 shadow-2xl space-y-2">
              <span className="font-bold text-white text-[11px]">Rename Asset Dialog</span>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-white text-xs font-bold focus:border-indigo-400 outline-none"
              />
              <div className="flex justify-end gap-1.5">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-[9px] font-bold"
                >
                  Cancel
                </button>
                <button
                  onClick={save}
                  className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[9px] font-bold"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
        <span className="text-[9px] text-slate-400 text-center">Dialog prompts for discrete structured input with cancel/save actions.</span>
      </div>
    </div>
  );
};

// #143 Alert Dialog (Critical Safety Warning / Single Confirmation)
export const LiveAlertDialogLab = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Alert Dialog (Critical Hazard):</span>
        <button
          onClick={() => setShowAlert(true)}
          className="px-2 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded text-[10px] font-bold flex items-center gap-1"
        >
          <AlertTriangle className="w-3 h-3" />
          <span>Trigger Alert</span>
        </button>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex flex-col justify-between">
        <div className="text-[10px] text-slate-400 space-y-1">
          <div className="font-bold text-slate-200">Main Power Grid Monitor</div>
          <div className="text-emerald-400">Status: Nominal 380V</div>
        </div>

        {showAlert && (
          <div className="absolute inset-0 bg-rose-950/80 backdrop-blur-xs flex items-center justify-center p-3 z-20 animate-in zoom-in-95">
            <div className="w-full max-w-[270px] bg-slate-900 border-2 border-rose-500 rounded-xl p-3 shadow-2xl space-y-2 text-center">
              <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500 text-rose-400 mx-auto flex items-center justify-center">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="font-black text-rose-300 text-[11px]">CRITICAL THERMAL SPIKE</div>
              <p className="text-[9px] text-slate-300">
                Spindle #02 exceeded 85°C. Automated interlock has frozen drive axes.
              </p>
              <button
                onClick={() => setShowAlert(false)}
                className="w-full py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-black text-[10px] shadow-lg"
              >
                Acknowledge & Dismiss
              </button>
            </div>
          </div>
        )}
        <span className="text-[9px] text-slate-500 text-center">Requires explicit single acknowledgement before continuing.</span>
      </div>
    </div>
  );
};

// #144 Confirmation Dialog (Destructive Action Confirmation)
export const LiveConfirmDialogLab = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [itemCount, setItemCount] = useState(3);

  const deleteItem = () => {
    setItemCount((prev) => Math.max(0, prev - 1));
    setShowConfirm(false);
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Confirm Dialog:</span>
        <button
          onClick={() => setShowConfirm(true)}
          disabled={itemCount === 0}
          className="px-2 py-1 bg-rose-600 hover:bg-rose-500 disabled:opacity-30 text-white rounded text-[10px] font-bold flex items-center gap-1"
        >
          <Trash2 className="w-3 h-3" />
          <span>Delete Recipe</span>
        </button>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex flex-col justify-between">
        <div className="space-y-1 text-[10px]">
          <div className="text-slate-300 font-bold">Active CNC Production Recipes:</div>
          <div className="text-indigo-400 font-black text-base">{itemCount} Active Records</div>
        </div>

        {showConfirm && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 z-20 animate-in fade-in">
            <div className="w-full max-w-[270px] bg-slate-900 border-2 border-rose-500/80 rounded-xl p-3 shadow-2xl space-y-2">
              <div className="flex items-center gap-1.5 text-rose-400 font-bold text-[11px]">
                <ShieldAlert className="w-4 h-4" />
                <span>Delete Recipe Record?</span>
              </div>
              <p className="text-[9px] text-slate-300">
                This operation is irreversible and removes all tool-offset calibration history.
              </p>
              <div className="flex justify-end gap-1.5 pt-1">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-[9px] font-bold"
                >
                  Cancel
                </button>
                <button
                  onClick={deleteItem}
                  className="px-2.5 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded text-[9px] font-bold"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        )}
        <span className="text-[9px] text-slate-500 text-center">Provides explicit Cancel vs Destructive Action binary choice.</span>
      </div>
    </div>
  );
};

// #145 Popover (Floating card anchored to trigger button with tail)
export const LivePopoverLab = () => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState({ servo: true, psu: false });

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Popover (Card + Pointer Beak):</span>
        <span className="text-indigo-400 font-bold">{open ? 'OPEN' : 'CLOSED'}</span>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex flex-col justify-start">
        <div className="flex justify-start relative">
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold text-[10px] flex items-center gap-1 shadow"
          >
            <Sliders className="w-3 h-3" />
            <span>Filter Telemetry ▾</span>
          </button>

          {open && (
            <div className="absolute top-10 left-2 w-48 bg-slate-900 border-2 border-indigo-400 rounded-xl p-2.5 shadow-2xl z-30 animate-in fade-in space-y-2">
              <div className="font-bold text-white text-[10px] border-b border-slate-800 pb-1">Filter Drivers</div>
              <label className="flex items-center gap-2 text-[9px] text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filter.servo}
                  onChange={(e) => setFilter({ ...filter, servo: e.target.checked })}
                />
                <span>AC Servos (4x)</span>
              </label>
              <label className="flex items-center gap-2 text-[9px] text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filter.psu}
                  onChange={(e) => setFilter({ ...filter, psu: e.target.checked })}
                />
                <span>24V PSU Channels</span>
              </label>
            </div>
          )}
        </div>
        <div className="mt-auto text-[9px] text-slate-500 text-center">
          Popover stays close to trigger without disabling the rest of the UI.
        </div>
      </div>
    </div>
  );
};

// #146 Popup (Generic floating window floating above view)
export const LivePopupLab = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState('2026-08-17');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Popup (Quick Floating Editor):</span>
        <button
          onClick={() => setShowPopup(!showPopup)}
          className="px-2.5 py-1 bg-slate-900 border border-indigo-400 text-indigo-300 rounded text-[10px] font-bold flex items-center gap-1"
        >
          <Calendar className="w-3 h-3" />
          <span>{selectedDate}</span>
        </button>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex flex-col justify-between">
        <div className="text-[10px] text-slate-300">
          Inspection Schedule: <span className="text-emerald-400 font-bold">{selectedDate}</span>
        </div>

        {showPopup && (
          <div className="absolute top-4 right-4 bg-slate-900 border-2 border-indigo-400 rounded-xl p-2.5 shadow-2xl z-30 space-y-1.5 animate-in fade-in">
            <div className="text-[10px] font-bold text-white">Select Date</div>
            <div className="grid grid-cols-3 gap-1 text-[9px]">
              {['2026-08-17', '2026-08-18', '2026-08-19'].map((d) => (
                <button
                  key={d}
                  onClick={() => {
                    setSelectedDate(d);
                    setShowPopup(false);
                  }}
                  className="px-1.5 py-1 bg-slate-950 hover:bg-indigo-600 rounded text-slate-300 hover:text-white"
                >
                  {d.slice(8)}일
                </button>
              ))}
            </div>
          </div>
        )}
        <span className="text-[9px] text-slate-400 text-center">Transient floating popup for rapid in-place selection.</span>
      </div>
    </div>
  );
};

// #147 Tooltip (Read-only hover/focus hint)
export const LiveTooltipLab = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Tooltip (Hover 500ms Delay):</span>
        <span className="text-indigo-400 font-bold">{hovered ? 'HINT VISIBLE' : 'HOVER ICON'}</span>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex flex-col items-center justify-center">
        <div className="relative">
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="w-10 h-10 rounded-xl bg-indigo-600/30 hover:bg-indigo-600 border-2 border-indigo-400 text-indigo-200 hover:text-white flex items-center justify-center transition shadow-lg"
          >
            <HelpCircle className="w-5 h-5" />
          </button>

          {hovered && (
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-[9px] font-bold px-2 py-1 rounded border border-slate-700 shadow-xl animate-in fade-in">
              <span>Recalibrate Kinematic Backlash (Offset: 0.005mm)</span>
              <div className="w-2 h-2 bg-black border-r border-b border-slate-700 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
            </div>
          )}
        </div>
        <span className="text-[9px] text-slate-500 mt-4 text-center">Non-interactive read-only hint bubble triggered on mouse enter.</span>
      </div>
    </div>
  );
};

// #148 Contextual Popover (Tied to Canvas/Timeline Node Coordinates)
export const LiveContextualPopoverLab = () => {
  const [activeNode, setActiveNode] = useState<'nodeA' | 'nodeB' | null>('nodeA');

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Contextual Popover:</span>
        <span className="text-indigo-400 font-bold">Node: {activeNode || 'None'}</span>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex items-center justify-around">
        {/* Node A */}
        <div className="relative">
          <button
            onClick={() => setActiveNode(activeNode === 'nodeA' ? null : 'nodeA')}
            className={`w-14 h-12 rounded-lg border-2 flex flex-col items-center justify-center text-[9px] font-bold transition ${
              activeNode === 'nodeA'
                ? 'bg-indigo-600 border-white text-white shadow-xl'
                : 'bg-slate-900 border-indigo-500 text-slate-300'
            }`}
          >
            <span>Axis #1</span>
            <span className="text-[8px] opacity-75">100ms</span>
          </button>
          {activeNode === 'nodeA' && (
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-36 bg-slate-900 border border-indigo-400 rounded-lg p-1.5 text-[8px] text-slate-200 shadow-2xl z-30 animate-in fade-in">
              <div className="font-black text-indigo-300">Axis #1 Config</div>
              <div>Duration: 120ms</div>
              <div className="text-emerald-400">State: Synchronized</div>
            </div>
          )}
        </div>

        {/* Node B */}
        <div className="relative">
          <button
            onClick={() => setActiveNode(activeNode === 'nodeB' ? null : 'nodeB')}
            className={`w-14 h-12 rounded-lg border-2 flex flex-col items-center justify-center text-[9px] font-bold transition ${
              activeNode === 'nodeB'
                ? 'bg-indigo-600 border-white text-white shadow-xl'
                : 'bg-slate-900 border-indigo-500 text-slate-300'
            }`}
          >
            <span>Axis #2</span>
            <span className="text-[8px] opacity-75">240ms</span>
          </button>
          {activeNode === 'nodeB' && (
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-36 bg-slate-900 border border-indigo-400 rounded-lg p-1.5 text-[8px] text-slate-200 shadow-2xl z-30 animate-in fade-in">
              <div className="font-black text-indigo-300">Axis #2 Config</div>
              <div>Duration: 240ms</div>
              <div className="text-amber-400">State: Standby</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// #149 Drawer Overlay (Side Drawer with Screen-dimming overlay)
export const LiveDrawerOverlayLab = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Drawer Overlay:</span>
        <button
          onClick={() => setDrawerOpen(true)}
          className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] font-bold"
        >
          Open Drawer
        </button>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-xl p-3 flex flex-col justify-between">
        <div className="text-[10px] text-slate-400">Main Canvas Viewport</div>

        {drawerOpen && (
          <div className="absolute inset-0 z-30 flex">
            {/* Scrim/Dim Overlay */}
            <div
              onClick={() => setDrawerOpen(false)}
              className="flex-1 bg-black/60 backdrop-blur-xs cursor-pointer animate-in fade-in"
            />
            {/* Sliding Drawer */}
            <div className="w-48 bg-slate-900 border-l-2 border-indigo-400 p-3 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right">
              <div className="space-y-1.5">
                <div className="flex justify-between items-center border-b border-slate-800 pb-1">
                  <span className="font-black text-white text-[11px]">System Drawer</span>
                  <button onClick={() => setDrawerOpen(false)} className="text-slate-400 hover:text-white">✕</button>
                </div>
                <div className="text-[9px] text-slate-300 space-y-1">
                  <div>• Motor Diagnostics</div>
                  <div>• Alarm Historian</div>
                  <div>• Firmware Flash</div>
                </div>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-full py-1 bg-indigo-600 text-white rounded text-[9px] font-bold"
              >
                Close Drawer
              </button>
            </div>
          </div>
        )}
        <span className="text-[9px] text-slate-500 text-center">Drawer locks out background while open.</span>
      </div>
    </div>
  );
};

// #150 Backdrop (Dimming Layer Opacity & Blur control)
export const LiveBackdropLab = () => {
  const [opacity, setOpacity] = useState(60);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Backdrop Layer Test:</span>
        <span className="text-indigo-400 font-bold">Dim: {opacity}%</span>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-xl p-3 flex flex-col justify-between">
        <div className="text-[10px] text-slate-400">
          Complex Background Graphic (Data Plots & Gauges)
        </div>

        {/* Dynamic Backdrop */}
        <div
          style={{ backgroundColor: `rgba(0, 0, 0, ${opacity / 100})` }}
          className="absolute inset-0 flex items-center justify-center p-3 transition-colors"
        >
          <div className="bg-slate-900 border border-indigo-400 rounded-lg p-2 text-center text-[10px] text-white shadow-2xl">
            <div className="font-bold">Active Dialog Card</div>
            <div className="text-[8px] text-slate-400">Backdrop Opacity: {opacity}%</div>
          </div>
        </div>

        <div className="relative z-10 flex justify-center gap-1.5">
          {[30, 60, 90].map((op) => (
            <button
              key={op}
              onClick={() => setOpacity(op)}
              className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                opacity === op ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
              }`}
            >
              {op}% Dim
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// #151 Scrim (Material Design Tap-to-Dismiss Surface)
export const LiveScrimLab = () => {
  const [scrimActive, setScrimActive] = useState(true);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Scrim (Tap-to-Dismiss):</span>
        <span className="text-indigo-400 font-bold">{scrimActive ? 'Scrim Active' : 'Dismissed'}</span>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-xl p-3 flex flex-col justify-between">
        <div className="text-[10px] text-slate-400">Underlying Workspace Surface</div>

        {scrimActive ? (
          <div
            onClick={() => setScrimActive(false)}
            className="absolute inset-0 bg-slate-950/70 cursor-pointer flex flex-col items-center justify-center p-3 text-center animate-in fade-in"
          >
            <div className="bg-indigo-950 border border-indigo-400 px-3 py-1.5 rounded-lg text-[10px] text-indigo-200 font-bold shadow-lg">
              [ Tap Anywhere on Scrim to Dismiss ]
            </div>
          </div>
        ) : (
          <button
            onClick={() => setScrimActive(true)}
            className="self-center my-auto px-3 py-1 bg-indigo-600 text-white rounded text-[10px] font-bold"
          >
            Reactivate Scrim
          </button>
        )}
        <span className="text-[9px] text-slate-500 text-center">Scrim captures pointer down events outside dialogue bounds.</span>
      </div>
    </div>
  );
};

// #152 Lightbox (High-immersion media/CAD viewer with 95% dark backdrop)
export const LiveLightboxLab = () => {
  const [openLightbox, setOpenLightbox] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Lightbox (CAD Viewer):</span>
        <button
          onClick={() => setOpenLightbox(true)}
          className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] font-bold flex items-center gap-1"
        >
          <Maximize2 className="w-3 h-3" />
          <span>Open Lightbox</span>
        </button>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex items-center justify-center">
        <div
          onClick={() => setOpenLightbox(true)}
          className="w-36 h-20 bg-slate-900 border border-slate-700 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-indigo-400 transition"
        >
          <span className="text-xl">📐</span>
          <span className="text-[9px] text-slate-300 mt-1">Schematic_X01.step</span>
        </div>

        {openLightbox && (
          <div className="absolute inset-0 bg-black/95 z-30 p-3 flex flex-col justify-between animate-in zoom-in-95">
            <div className="flex justify-between items-center text-white border-b border-slate-800 pb-1">
              <span className="text-[10px] font-bold">Blueprint Lightbox (100% Scale)</span>
              <button onClick={() => setOpenLightbox(false)} className="text-rose-400 font-bold text-xs">✕</button>
            </div>
            <div className="flex-1 flex items-center justify-center text-indigo-400 text-xs font-black">
              [ High-Res Vector CAD Viewport Active ]
            </div>
            <div className="flex justify-between text-[8px] text-slate-400">
              <span>Zoom: 100% | Pan: Enabled</span>
              <button onClick={() => setOpenLightbox(false)} className="underline text-indigo-300">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// #153 Sheet (Edge-anchored full content panel)
export const LiveSheetLab = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Edge Sheet Panel:</span>
        <button
          onClick={() => setSheetOpen(!sheetOpen)}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
        >
          {sheetOpen ? 'Hide' : 'Slide Sheet'}
        </button>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-xl p-3 flex flex-col justify-between">
        <div className="text-[10px] text-slate-400">Main Content Layer</div>

        {sheetOpen && (
          <div className="absolute inset-y-0 right-0 w-36 bg-slate-900 border-l-2 border-indigo-400 p-2.5 shadow-2xl flex flex-col justify-between z-20 animate-in slide-in-from-right">
            <div className="space-y-1">
              <div className="font-bold text-white text-[10px]">Sheet Settings</div>
              <div className="text-[8px] text-slate-400">• High-Torque Mode</div>
              <div className="text-[8px] text-slate-400">• Anti-Resonance ON</div>
            </div>
            <button
              onClick={() => setSheetOpen(false)}
              className="w-full py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[8px] font-bold"
            >
              Done
            </button>
          </div>
        )}
        <span className="text-[9px] text-slate-500 text-center">Sheet slides from border edge.</span>
      </div>
    </div>
  );
};

// #154 Bottom Sheet (Mobile-optimized bottom drawer with top grabber handle)
export const LiveBottomSheetLab = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Bottom Sheet (Grabber Handle):</span>
        <button
          onClick={() => setOpen(!open)}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
        >
          {open ? 'Collapse' : 'Slide Up'}
        </button>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-xl p-3 flex flex-col justify-between">
        <div className="text-[10px] text-slate-400">Mobile Device Simulator</div>

        {open && (
          <div className="absolute inset-x-0 bottom-0 bg-slate-900 border-t-2 border-indigo-400 rounded-t-2xl p-2.5 shadow-2xl z-20 space-y-1.5 animate-in slide-in-from-bottom">
            {/* Grabber Handle */}
            <div className="w-8 h-1 bg-slate-600 rounded-full mx-auto" />
            <div className="flex justify-between items-center text-[10px] font-bold text-white">
              <span>Quick Actions</span>
              <span className="text-indigo-400 text-[9px]">3 items</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-[8px] text-center">
              <div className="bg-slate-950 p-1.5 rounded text-emerald-400 font-bold">Start</div>
              <div className="bg-slate-950 p-1.5 rounded text-amber-400 font-bold">Pause</div>
              <div className="bg-slate-950 p-1.5 rounded text-rose-400 font-bold">E-Stop</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// #155 Side Sheet (Desktop dockable parameter sheet)
export const LiveSideSheetLab = () => {
  const [docked, setDocked] = useState(true);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Side Sheet (Dockable Inspector):</span>
        <button
          onClick={() => setDocked(!docked)}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
        >
          {docked ? 'Undock' : 'Dock'}
        </button>
      </div>
      <div className="w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-xl flex">
        {/* Main Area */}
        <div className="flex-1 p-2 text-[10px] text-slate-300 flex flex-col justify-between">
          <div>Primary Work Area</div>
          <div className="text-[8px] text-slate-500">Unobscured during side sheet edits</div>
        </div>
        {/* Docked Side Sheet */}
        {docked && (
          <div className="w-36 bg-slate-900 border-l-2 border-indigo-400 p-2 space-y-1 text-[9px] text-slate-300 animate-in slide-in-from-right">
            <div className="font-bold text-white text-[10px] border-b border-slate-800 pb-0.5">BOM Specs</div>
            <div>Part: #SV-990</div>
            <div>Voltage: 48V DC</div>
            <div>Weight: 1.4kg</div>
          </div>
        )}
      </div>
    </div>
  );
};

// #156 Anchored Popup (Coordinate-pinned to trigger element corner)
export const LiveAnchoredPopupLab = () => {
  const [pinned, setPinned] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Anchored Popup (Corner Lock):</span>
        <span className="text-indigo-400 font-bold">{pinned ? 'PINNED' : 'HIDDEN'}</span>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex flex-col justify-center items-center">
        <div className="relative">
          <button
            onClick={() => setPinned(!pinned)}
            className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold text-[10px] shadow"
          >
            Anchored Cell [0, 0]
          </button>

          {pinned && (
            <div className="absolute top-full left-0 mt-1 w-44 bg-slate-900 border-2 border-indigo-400 rounded-lg p-2 text-[9px] text-slate-200 shadow-2xl z-30 animate-in fade-in">
              <div className="font-bold text-indigo-300">Offset Matrix Popup</div>
              <div className="text-[8px] text-slate-400">Strictly aligned to trigger bounding rect</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// #157 Non-modal Dialog (Modeless floating window allowing background editing)
export const LiveNonModalDialogLab = () => {
  const [count, setCount] = useState(10);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Non-Modal (Modeless Window):</span>
        <span className="text-emerald-400 font-bold">Count: {count}</span>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex flex-col justify-between">
        {/* Background is fully clickable and interactive */}
        <div className="space-y-1">
          <div className="text-[10px] text-slate-300">Background Clickable Area:</div>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-emerald-300 rounded text-[10px] font-bold"
          >
            + Click Background Counter
          </button>
        </div>

        {/* Floating Modeless Palette */}
        <div className="absolute top-3 right-3 w-40 bg-slate-900/95 border-2 border-indigo-400 rounded-xl p-2 shadow-2xl space-y-1 z-10">
          <div className="flex justify-between items-center border-b border-slate-800 pb-0.5">
            <span className="text-[9px] font-black text-white">Find & Replace</span>
            <span className="text-[8px] text-indigo-400">Modeless</span>
          </div>
          <input
            type="text"
            placeholder="Search symbol..."
            className="w-full bg-slate-950 border border-slate-700 rounded px-1.5 py-0.5 text-[8px] text-white"
          />
        </div>
        <span className="text-[9px] text-slate-500 text-center">No backdrop dim; user can edit background simultaneously.</span>
      </div>
    </div>
  );
};

// #158 Fullscreen Modal (100% Viewport Immersive Modal)
export const LiveFullscreenModalLab = () => {
  const [fullOpen, setFullOpen] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Fullscreen Modal (100% Viewport):</span>
        <button
          onClick={() => setFullOpen(true)}
          className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] font-bold flex items-center gap-1"
        >
          <Maximize2 className="w-3 h-3" />
          <span>Launch Fullscreen</span>
        </button>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex items-center justify-center">
        <span className="text-[10px] text-slate-400">Standard Page Container</span>

        {fullOpen && (
          <div className="absolute inset-0 bg-slate-950 border-2 border-emerald-400 rounded-xl p-3 z-30 flex flex-col justify-between animate-in zoom-in-95">
            <div className="flex justify-between items-center border-b border-slate-800 pb-1">
              <span className="font-black text-emerald-400 text-[11px]">FULLSCREEN REPORT WIZARD</span>
              <button
                onClick={() => setFullOpen(false)}
                className="px-2 py-0.5 bg-rose-600 hover:bg-rose-500 text-white rounded text-[9px] font-bold"
              >
                Exit (✕)
              </button>
            </div>
            <div className="text-[9px] text-slate-300 space-y-1">
              <div>• Step 1: Ingest Fleet Telemetry</div>
              <div>• Step 2: Harmonic FFT Spectrum Analysis</div>
              <div>• Step 3: Export PDF Certification</div>
            </div>
            <div className="flex justify-end gap-1">
              <button
                onClick={() => setFullOpen(false)}
                className="px-3 py-1 bg-emerald-600 text-white rounded text-[9px] font-bold"
              >
                Complete Wizard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// #159 Inline Dialog (In-situ embedded confirmation within row/card)
export const LiveInlineDialogLab = () => {
  const [confirmInline, setConfirmInline] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Inline Dialog (In-situ Bar):</span>
        <button
          onClick={() => setConfirmInline(!confirmInline)}
          className="px-2 py-0.5 bg-slate-900 border border-slate-700 text-slate-300 rounded text-[9px] font-bold"
        >
          Toggle Inline Row
        </button>
      </div>
      <div className="w-full bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl space-y-2">
        <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex justify-between items-center text-[10px]">
          <span className="text-white font-bold">Part #A-9032 (Lead Screw)</span>
          {!confirmInline && (
            <button
              onClick={() => setConfirmInline(true)}
              className="text-rose-400 hover:underline font-bold"
            >
              Delete
            </button>
          )}
        </div>

        {confirmInline && (
          <div className="bg-rose-950/60 border-2 border-rose-500 rounded-lg p-2 flex items-center justify-between text-[9px] text-rose-200 animate-in fade-in">
            <span>Confirm row deletion?</span>
            <div className="flex gap-1">
              <button
                onClick={() => setConfirmInline(false)}
                className="px-2 py-0.5 bg-slate-900 text-slate-300 rounded font-bold"
              >
                No
              </button>
              <button
                onClick={() => setConfirmInline(false)}
                className="px-2 py-0.5 bg-rose-600 text-white rounded font-bold"
              >
                Yes
              </button>
            </div>
          </div>
        )}
      </div>
      <span className="text-[9px] text-slate-500 text-center">No popups or overlays created; expands directly within document flow.</span>
    </div>
  );
};

// #160 Coachmark (Step-by-step Onboarding Guided Tour)
export const LiveCoachmarkLab = () => {
  const [step, setStep] = useState(1);

  const steps = [
    { num: 1, target: 'Zero Axis Button', desc: 'Click here to establish home coordinate origin.' },
    { num: 2, target: 'PID Loop Slider', desc: 'Adjust derivative feedback to minimize jitter.' },
    { num: 3, target: 'Export Telemetry', desc: 'Download CSV log for SIL3 safety compliance.' },
  ];

  return (
    <div className="w-full max-w-sm flex flex-col gap-2 font-mono text-xs">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-bold">Coachmark (Onboarding Tour):</span>
        <span className="text-emerald-400 font-bold">Step {step} of 3</span>
      </div>
      <div className="relative w-full h-40 bg-slate-950 border-2 border-indigo-500 rounded-xl p-3 shadow-xl flex flex-col justify-between">
        {/* Fake UI targets */}
        <div className="flex justify-between items-center">
          <div className={`p-1.5 rounded border text-[9px] ${step === 1 ? 'border-emerald-400 bg-emerald-950/60 font-bold text-white' : 'border-slate-800 text-slate-500'}`}>
            🎯 Zero Axis
          </div>
          <div className={`p-1.5 rounded border text-[9px] ${step === 2 ? 'border-emerald-400 bg-emerald-950/60 font-bold text-white' : 'border-slate-800 text-slate-500'}`}>
            ⚙ PID Slider
          </div>
          <div className={`p-1.5 rounded border text-[9px] ${step === 3 ? 'border-emerald-400 bg-emerald-950/60 font-bold text-white' : 'border-slate-800 text-slate-500'}`}>
            📄 Export CSV
          </div>
        </div>

        {/* Floating Coachmark Bubble */}
        <div className="bg-slate-900 border-2 border-emerald-400 rounded-xl p-2.5 shadow-2xl space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black text-emerald-300">
              Guide: {steps[step - 1].target}
            </span>
            <span className="text-[8px] bg-emerald-950 text-emerald-400 px-1 rounded font-bold">
              {step}/3
            </span>
          </div>
          <p className="text-[9px] text-slate-300">{steps[step - 1].desc}</p>
          <div className="flex justify-end gap-1">
            {step > 1 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded text-[8px]"
              >
                Prev
              </button>
            )}
            <button
              onClick={() => setStep((s) => (s === 3 ? 1 : s + 1))}
              className="px-2.5 py-0.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[8px] font-bold"
            >
              {step === 3 ? 'Restart Tour' : 'Next Step ➔'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
