import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, CheckCircle2, Info, XCircle, Bell, RotateCcw, 
  Check, Copy, Plus, RefreshCw, Undo2, ShieldAlert, Sparkles, 
  Flame, BatteryCharging, AlertCircle, FileText, ChevronRight,
  ExternalLink, Search
} from 'lucide-react';

/**
 * ----------------------------------------------------------------------------
 * Category 09: Feedback & Status (#161 ~ #180) Dedicated 1:1 Interactive Labs
 * High-contrast, Light/Dark adaptive UI/UX Architecture Workbench
 * ----------------------------------------------------------------------------
 */

// #161 Alert (Banner) - Inline persistent banner with alert types and dismiss
export const LiveAlertBannerLab: React.FC = () => {
  const [alertType, setAlertType] = useState<'info' | 'warning' | 'error' | 'success'>('warning');
  const [visible, setVisible] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#161 ALERT BANNER LAB</span>
        <div className="flex gap-1">
          {(['info', 'warning', 'error', 'success'] as const).map((type) => (
            <button
              key={type}
              onClick={() => { setAlertType(type); setVisible(true); }}
              className={`px-1.5 py-0.5 rounded text-[10px] uppercase font-bold transition ${
                alertType === type && visible
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {visible ? (
        <div className={`p-3 rounded-lg border flex items-start justify-between gap-2.5 transition-all ${
          alertType === 'warning'
            ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-300 dark:border-amber-600/60 text-amber-900 dark:text-amber-200'
            : alertType === 'error'
            ? 'bg-rose-50 dark:bg-rose-950/50 border-rose-300 dark:border-rose-600/60 text-rose-900 dark:text-rose-200'
            : alertType === 'success'
            ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-600/60 text-emerald-900 dark:text-emerald-200'
            : 'bg-sky-50 dark:bg-sky-950/50 border-sky-300 dark:border-sky-600/60 text-sky-900 dark:text-sky-200'
        }`}>
          <div className="flex items-start gap-2">
            {alertType === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />}
            {alertType === 'error' && <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />}
            {alertType === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />}
            {alertType === 'info' && <Info className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />}
            <div>
              <div className="font-bold capitalize">{alertType} Notice: Scheduled Maintenance</div>
              <div className="text-[11px] opacity-90 mt-0.5 leading-tight">
                Database sync will pause for 10 minutes at 02:00 UTC. Unsaved drafts are cached locally.
              </div>
            </div>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded transition text-xs"
            title="Dismiss Banner"
          >
            ✕
          </button>
        </div>
      ) : (
        <button
          onClick={() => setVisible(true)}
          className="p-3 bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 text-center text-xs"
        >
          + Banner dismissed. Click to re-open
        </button>
      )}
    </div>
  );
};

// #162 Toast - Floating transient popup with auto-dismiss countdown
export const LiveToastLab: React.FC = () => {
  const [toasts, setToasts] = useState<{ id: number; msg: string; type: string }[]>([
    { id: 1, msg: 'Report #8902 generated successfully', type: 'success' },
  ]);

  const addToast = (type: 'success' | 'info' | 'error') => {
    const id = Date.now();
    const msg = type === 'success' ? 'Changes saved to Cloud Firestore' : type === 'error' ? 'Failed to sync telemetry log' : 'Cache refreshed (124kb)';
    setToasts((prev) => [...prev, { id, msg, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#162 TOAST LAB</span>
        <div className="flex gap-1.5">
          <button onClick={() => addToast('success')} className="px-2 py-0.5 bg-emerald-600 text-white rounded text-[10px] font-bold">+ Success</button>
          <button onClick={() => addToast('error')} className="px-2 py-0.5 bg-rose-600 text-white rounded text-[10px] font-bold">+ Error</button>
        </div>
      </div>

      <div className="relative min-h-[90px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 flex flex-col justify-end gap-1.5 overflow-hidden">
        <div className="text-[10px] text-slate-400 text-center mb-auto">Viewport Simulation Area</div>
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`p-2 rounded-lg border shadow-lg flex items-center justify-between text-xs animate-in slide-in-from-top-2 duration-150 ${
              t.type === 'success'
                ? 'bg-emerald-50 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200'
                : 'bg-rose-50 dark:bg-rose-950 border-rose-300 dark:border-rose-700 text-rose-900 dark:text-rose-200'
            }`}
          >
            <div className="flex items-center gap-1.5">
              {t.type === 'success' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <XCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />}
              <span>{t.msg}</span>
            </div>
            <span className="text-[9px] opacity-75 font-mono">4s auto-close</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #163 Snackbar - Bottom floating notification with direct Undo action
export const LiveSnackbarLab: React.FC = () => {
  const [activeSnackbar, setActiveSnackbar] = useState<string | null>('Recipe "CNC_Pass_01" deleted');
  const [statusLog, setStatusLog] = useState('Standby');

  const triggerDelete = () => {
    setActiveSnackbar('Recipe "Laser_Cut_Profile" archived');
    setStatusLog('Item archived. Undo window active.');
  };

  const handleUndo = () => {
    setActiveSnackbar(null);
    setStatusLog('Action reversed: Item restored.');
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#163 SNACKBAR (WITH UNDO)</span>
        <button onClick={triggerDelete} className="px-2 py-0.5 bg-rose-600 text-white rounded text-[10px] font-bold">
          Trigger Delete Action
        </button>
      </div>

      <div className="relative min-h-[90px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 flex flex-col justify-between">
        <div className="text-[11px] text-slate-500 dark:text-slate-400">Status: {statusLog}</div>
        {activeSnackbar && (
          <div className="bg-slate-900 text-white p-2.5 rounded-lg flex items-center justify-between shadow-xl border border-slate-700 animate-in slide-in-from-bottom-2 duration-150">
            <span className="text-xs">{activeSnackbar}</span>
            <button
              onClick={handleUndo}
              className="px-2 py-0.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-xs font-bold flex items-center gap-1 transition"
            >
              <Undo2 className="w-3 h-3" /> UNDO
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// #164 Notification (Notification Center) - Bell dropdown feed with unread count
export const LiveNotificationCenterLab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [notifs, setNotifs] = useState([
    { id: 1, title: 'BOM Calculation complete', time: '2m ago', read: false },
    { id: 2, title: 'Firmware v2.4 flashed to Line 3', time: '15m ago', read: false },
    { id: 3, title: 'Torque limit exceeded on Axis Z', time: '1h ago', read: true },
  ]);

  const markAllRead = () => {
    setNotifs(notifs.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifs.filter((n) => !n.read).length;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#164 NOTIFICATION CENTER</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg flex items-center gap-1 font-bold text-xs"
        >
          <Bell className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
          {unreadCount > 0 && (
            <span className="px-1.5 py-0.2 bg-rose-600 text-white text-[9px] rounded-full font-bold animate-pulse">
              {unreadCount}
            </span>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 flex flex-col gap-2 shadow-lg">
          <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
            <span className="font-bold">System Events ({notifs.length})</span>
            <button onClick={markAllRead} className="text-indigo-600 dark:text-indigo-400 hover:underline">
              Mark all read
            </button>
          </div>
          {notifs.map((n) => (
            <div
              key={n.id}
              className={`p-2 rounded border flex items-center justify-between gap-2 text-[11px] ${
                n.read
                  ? 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400'
                  : 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800 text-slate-900 dark:text-slate-100 font-semibold'
              }`}
            >
              <div className="flex items-center gap-1.5">
                {!n.read && <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                <span>{n.title}</span>
              </div>
              <span className="text-[9px] font-normal text-slate-400 shrink-0">{n.time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// #165 Badge - Count pills, status dot badges, and notification badges
export const LiveBadgeLab: React.FC = () => {
  const [count, setCount] = useState(3);
  const [dotOnly, setDotOnly] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#165 BADGE (STATUS & COUNT)</span>
        <div className="flex items-center gap-1.5">
          <button onClick={() => setCount((c) => Math.max(0, c - 1))} className="px-1.5 py-0.5 bg-white dark:bg-slate-800 border rounded">-</button>
          <span className="font-bold text-xs">{count}</span>
          <button onClick={() => setCount((c) => c + 1)} className="px-1.5 py-0.5 bg-white dark:bg-slate-800 border rounded">+</button>
          <button
            onClick={() => setDotOnly(!dotOnly)}
            className={`px-2 py-0.5 rounded text-[10px] font-bold border ${dotOnly ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800'}`}
          >
            {dotOnly ? 'Dot Mode' : 'Numeric Mode'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
        {/* Icon with Overlapping Badge */}
        <div className="flex flex-col items-center justify-center p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 gap-1.5">
          <div className="relative">
            <Bell className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            {count > 0 && (
              dotOnly ? (
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-rose-600 rounded-full border-2 border-white dark:border-slate-950" />
              ) : (
                <span className="absolute -top-1.5 -right-2 px-1.5 py-0.2 bg-rose-600 text-white text-[9px] font-bold rounded-full border border-white dark:border-slate-950 shadow-sm">
                  {count > 9 ? '9+' : count}
                </span>
              )
            )}
          </div>
          <span className="text-[10px] text-slate-500">Overlaid</span>
        </div>

        {/* Inline Status Badge */}
        <div className="flex flex-col items-center justify-center p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 gap-1.5">
          <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-[10px] font-bold">
            ● Active ({count})
          </span>
          <span className="text-[10px] text-slate-500">Inline Pill</span>
        </div>

        {/* Warning Badge */}
        <div className="flex flex-col items-center justify-center p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 gap-1.5">
          <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 text-[10px] font-bold">
            ⚠ Review Required
          </span>
          <span className="text-[10px] text-slate-500">Tag Badge</span>
        </div>
      </div>
    </div>
  );
};

// #166 Status Indicator - Combined pulse dot, badge & diagnostic text
export const LiveStatusIndicatorLab: React.FC = () => {
  const [status, setStatus] = useState<'ONLINE' | 'STANDBY' | 'FAULT'>('ONLINE');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#166 STATUS INDICATOR</span>
        <div className="flex gap-1">
          {(['ONLINE', 'STANDBY', 'FAULT'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setStatus(st)}
              className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                status === st ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className={`relative flex h-3 w-3`}>
            {status === 'ONLINE' && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            )}
            <span className={`relative inline-flex rounded-full h-3 w-3 ${
              status === 'ONLINE' ? 'bg-emerald-500' : status === 'STANDBY' ? 'bg-amber-500' : 'bg-rose-500'
            }`} />
          </span>
          <div>
            <div className="font-bold text-sm">{status}</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">
              {status === 'ONLINE' ? 'Telemetry heartbeat synchronized (30ms)' : status === 'STANDBY' ? 'Idle waiting for motion queue' : 'E-STOP engaged on Axis 2'}
            </div>
          </div>
        </div>
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
          status === 'ONLINE' ? 'bg-emerald-50 dark:bg-emerald-950 border-emerald-300 text-emerald-700 dark:text-emerald-300' :
          status === 'STANDBY' ? 'bg-amber-50 dark:bg-amber-950 border-amber-300 text-amber-700 dark:text-amber-300' :
          'bg-rose-50 dark:bg-rose-950 border-rose-300 text-rose-700 dark:text-rose-300'
        }`}>
          {status}
        </span>
      </div>
    </div>
  );
};

// #167 Status Dot - Ultra-compact 8px color dots for tables
export const LiveStatusDotLab: React.FC = () => {
  const [nodes, setNodes] = useState([
    { id: 'PLC_01', name: 'Main Feeder', status: 'green' },
    { id: 'PLC_02', name: 'Spindle Drive', status: 'amber' },
    { id: 'PLC_03', name: 'Coolant Pump', status: 'red' },
    { id: 'PLC_04', name: 'Vacuum Table', status: 'gray' },
  ]);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#167 STATUS DOT (TABLE CELLS)</span>
        <span className="text-[10px] text-slate-500">8px Mini Dots</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
        {nodes.map((node) => (
          <div key={node.id} className="p-2 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full inline-block ${
                node.status === 'green' ? 'bg-emerald-500 ring-2 ring-emerald-500/20' :
                node.status === 'amber' ? 'bg-amber-500 ring-2 ring-amber-500/20' :
                node.status === 'red' ? 'bg-rose-500 ring-2 ring-rose-500/20' :
                'bg-slate-400 ring-2 ring-slate-400/20'
              }`} />
              <span className="font-bold">{node.id}</span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px]">{node.name}</span>
            </div>
            <span className="text-[10px] uppercase font-mono text-slate-400">{node.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #168 Progress Bar - Continuous percentage gauge (0% ~ 100%)
export const LiveProgressBarLab: React.FC = () => {
  const [progress, setProgress] = useState(64);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setIsRunning(false);
          return 100;
        }
        return p + 4;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#168 PROGRESS BAR</span>
        <div className="flex gap-1.5">
          <button
            onClick={() => { setProgress(0); setIsRunning(true); }}
            className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
          >
            Start (0→100%)
          </button>
          <button
            onClick={() => setProgress(64)}
            className="px-1.5 py-0.5 bg-white dark:bg-slate-800 border rounded text-[10px]"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex flex-col gap-2">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold">CAD Mesh Geometry Parsing</span>
          <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">{progress}%</span>
        </div>
        <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full transition-all duration-200 shadow-sm"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-slate-400">
          <span>0 MB</span>
          <span>{Math.round((progress / 100) * 128)} MB / 128 MB</span>
        </div>
      </div>
    </div>
  );
};

// #169 Progress Ring (Circular Progress) - 360 degree radial gauge
export const LiveProgressRingLab: React.FC = () => {
  const [val, setVal] = useState(72);

  const radius = 32;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (val / 100) * circumference;

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#169 PROGRESS RING (RADIAL)</span>
        <div className="flex items-center gap-1">
          <input
            type="range"
            min="0"
            max="100"
            value={val}
            onChange={(e) => setVal(Number(e.target.value))}
            className="w-20 accent-indigo-600"
          />
          <span className="font-bold text-xs w-8 text-right">{val}%</span>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex items-center justify-around">
        <div className="relative flex items-center justify-center">
          <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
            <circle
              stroke="currentColor"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              className="text-slate-200 dark:text-slate-800"
            />
            <circle
              stroke="currentColor"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={`${circumference} ${circumference}`}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              className="text-indigo-600 dark:text-indigo-400 transition-all duration-300"
            />
          </svg>
          <div className="absolute font-mono font-black text-sm text-slate-900 dark:text-slate-100">
            {val}%
          </div>
        </div>

        <div className="text-left space-y-1">
          <div className="font-bold text-xs">Drive Usage KPI</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">Disk allocation on NVMe Array</div>
          <span className="inline-block px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-[10px]">
            Radial Gauge Active
          </span>
        </div>
      </div>
    </div>
  );
};

// #170 Spinner - Indeterminate loading wheel
export const LiveSpinnerLab: React.FC = () => {
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#170 SPINNER (INDETERMINATE)</span>
        <div className="flex gap-1">
          {(['sm', 'md', 'lg'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                size === s ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 flex flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-4">
          <div
            className={`border-4 border-slate-200 dark:border-slate-800 border-t-indigo-600 rounded-full animate-spin ${
              size === 'sm' ? 'w-5 h-5 border-2' : size === 'md' ? 'w-8 h-8' : 'w-12 h-12 border-4'
            }`}
          />
          <div className="text-left">
            <div className="font-bold text-xs">Querying Backend Cluster...</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Awaiting WebSocket ACK handshake</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// #171 Skeleton - Shimmer placeholders preventing layout shift
export const LiveSkeletonLab: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#171 SKELETON (SHIMMER)</span>
        <button
          onClick={() => setLoading(!loading)}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
        >
          {loading ? 'Show Loaded Content' : 'Simulate Skeleton Loading'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
        {loading ? (
          <div className="space-y-2.5 animate-pulse">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800" />
              <div className="space-y-1.5 flex-1">
                <div className="h-3.5 bg-slate-200 dark:bg-slate-800 rounded w-1/2" />
                <div className="h-2.5 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
              </div>
            </div>
            <div className="h-14 bg-slate-200 dark:bg-slate-800 rounded-lg w-full" />
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                NJ
              </div>
              <div>
                <div className="font-bold text-xs">Dr. Noah Jin (Senior Architect)</div>
                <div className="text-[10px] text-slate-500">Autonomous Robotics Dept</div>
              </div>
            </div>
            <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded border text-[11px]">
              Active project: 14kW High-Torque Spindle Calibration Profile
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// #172 Empty State - Friendly illustration and primary action button
export const LiveEmptyStateLab: React.FC = () => {
  const [hasItems, setHasItems] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#172 EMPTY STATE</span>
        <button
          onClick={() => setHasItems(!hasItems)}
          className="px-2 py-0.5 bg-white dark:bg-slate-800 border rounded text-[10px] font-bold"
        >
          Toggle: {hasItems ? 'Has Data' : 'Empty'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 text-center">
        {hasItems ? (
          <div className="space-y-1 text-left">
            <div className="font-bold text-emerald-600 dark:text-emerald-400">✓ 3 Active Projects Found</div>
            <div className="text-[11px] text-slate-600 dark:text-slate-400">• CNC Line Alpha</div>
            <div className="text-[11px] text-slate-600 dark:text-slate-400">• Laser Profile Beta</div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 py-2">
            <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xl">
              📂
            </div>
            <div>
              <div className="font-bold text-xs text-slate-900 dark:text-slate-100">No Calibration Runs Found</div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 max-w-xs mt-0.5">
                Create a new calibration profile to start recording telemetry data.
              </p>
            </div>
            <button
              onClick={() => setHasItems(true)}
              className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-bold text-xs flex items-center gap-1 shadow hover:bg-indigo-500 transition"
            >
              <Plus className="w-3.5 h-3.5" /> Create New Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// #173 Error State - Fault warning with explicit resolution retry action
export const LiveErrorStateLab: React.FC = () => {
  const [resolved, setResolved] = useState(false);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#173 ERROR STATE</span>
        <button
          onClick={() => setResolved(false)}
          className="px-2 py-0.5 bg-rose-600 text-white rounded text-[10px] font-bold"
        >
          Reset Error
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 text-center">
        {resolved ? (
          <div className="text-emerald-600 dark:text-emerald-400 space-y-1">
            <CheckCircle2 className="w-8 h-8 mx-auto" />
            <div className="font-bold text-xs">Connection Restored</div>
            <div className="text-[10px] text-slate-500">Telemetry feed streaming at 60Hz</div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 py-2">
            <div className="w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 flex items-center justify-center text-rose-600 dark:text-rose-400 text-xl">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-xs text-rose-600 dark:text-rose-400">503 Service Unavailable</div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 max-w-xs mt-0.5">
                Failed to reach telemetry broker at 192.168.1.104:9002 (Connection timed out)
              </p>
            </div>
            <button
              onClick={() => setResolved(true)}
              className="px-3 py-1.5 bg-rose-600 text-white rounded-lg font-bold text-xs flex items-center gap-1 shadow hover:bg-rose-500 transition"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Retry Connection
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// #174 Success State - Celebration checkmark with summary report
export const LiveSuccessStateLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#174 SUCCESS STATE</span>
        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">● Wizard Complete</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 flex flex-col items-center text-center gap-2">
        <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <div className="font-bold text-xs text-slate-900 dark:text-slate-100">Recipe Published Successfully!</div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
            Recipe ID: <span className="font-mono text-indigo-600 font-bold">#REC-2026-089</span> has been synchronized.
          </p>
        </div>
        <div className="w-full bg-slate-50 dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800 text-[10px] text-left space-y-0.5">
          <div className="flex justify-between"><span>Torque Limit:</span> <b>18.4 Nm</b></div>
          <div className="flex justify-between"><span>Target RPM:</span> <b>12,000 RPM</b></div>
        </div>
      </div>
    </div>
  );
};

// #175 Warning State - Amber cautionary threshold alert
export const LiveWarningStateLab: React.FC = () => {
  const [load, setLoad] = useState(88);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#175 WARNING STATE</span>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px]">Load:</span>
          <input
            type="range"
            min="50"
            max="98"
            value={load}
            onChange={(e) => setLoad(Number(e.target.value))}
            className="w-16 accent-amber-500"
          />
          <span className="font-bold text-xs">{load}%</span>
        </div>
      </div>

      <div className={`p-3 rounded-lg border flex items-start gap-2.5 transition ${
        load > 85
          ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-300 dark:border-amber-600 text-amber-900 dark:text-amber-200'
          : 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-600 text-emerald-900 dark:text-emerald-200'
      }`}>
        <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
        <div>
          <div className="font-bold text-xs">
            {load > 85 ? 'Spindle Duty Cycle Warning (85%+ Threshold)' : 'Spindle Load Normal'}
          </div>
          <div className="text-[10px] opacity-90 mt-0.5">
            Current load is {load}%. Continuous operation above 85% may trigger thermal throttling in ~12 min.
          </div>
        </div>
      </div>
    </div>
  );
};

// #176 Info State - Neutral informational guideline box
export const LiveInfoStateLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#176 INFO STATE</span>
        <span className="text-[10px] text-sky-600 dark:text-sky-400 font-bold">Standard Spec</span>
      </div>

      <div className="bg-sky-50 dark:bg-sky-950/50 border border-sky-300 dark:border-sky-700 rounded-lg p-3 text-sky-900 dark:text-sky-200 flex items-start gap-2.5">
        <Info className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-bold text-xs">ISO 10816-3 Vibration Severity Guideline</div>
          <div className="text-[11px] leading-relaxed opacity-90">
            For rigid foundations, vibration velocities up to 2.8 mm/s RMS are classified as Class A (Satisfactory).
          </div>
        </div>
      </div>
    </div>
  );
};

// #177 Callout - Distinct thick left-border emphasis box
export const LiveCalloutLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#177 CALLOUT (LEFT ACCENT BORDER)</span>
        <span className="text-[10px] text-indigo-600 font-bold">4px Line</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border-l-4 border-l-indigo-600 border border-slate-200 dark:border-slate-800 rounded-r-lg p-3 shadow-sm">
        <div className="flex items-center gap-1.5 font-bold text-indigo-600 dark:text-indigo-400 mb-1 text-xs">
          <span>💡 PRO TIP:</span>
          <span>Feedrate Optimization</span>
        </div>
        <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
          When cutting titanium Grade 5, decrease feed per tooth by 15% and verify flood coolant pressure is ≥70 PSI.
        </p>
      </div>
    </div>
  );
};

// #178 Inline Validation - Real-time onBlur/typing validation feedback
export const LiveInlineValidationLab: React.FC = () => {
  const [voltage, setVoltage] = useState('110');
  const [error, setError] = useState<string | null>('Voltage must be between 200V and 480V for 3-Phase.');

  const handleChange = (val: string) => {
    setVoltage(val);
    const num = Number(val);
    if (!val) {
      setError('Field is required.');
    } else if (isNaN(num) || num < 200 || num > 480) {
      setError('Voltage must be between 200V and 480V for 3-Phase.');
    } else {
      setError(null);
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#178 INLINE VALIDATION</span>
        <span className={`text-[10px] font-bold ${error ? 'text-rose-600' : 'text-emerald-600'}`}>
          {error ? '⚠ Invalid' : '✓ Valid'}
        </span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-1.5">
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
          Main Supply Voltage (V)
        </label>
        <input
          type="text"
          value={voltage}
          onChange={(e) => handleChange(e.target.value)}
          className={`w-full px-3 py-1.5 rounded-lg border text-xs font-mono font-bold bg-white dark:bg-slate-950 transition outline-none ${
            error
              ? 'border-rose-500 text-rose-700 dark:text-rose-300 focus:ring-2 focus:ring-rose-500/20'
              : 'border-emerald-500 text-emerald-700 dark:text-emerald-300 focus:ring-2 focus:ring-emerald-500/20'
          }`}
        />
        {error ? (
          <div className="text-[10px] text-rose-600 dark:text-rose-400 flex items-center gap-1 font-semibold">
            <AlertCircle className="w-3 h-3 shrink-0" />
            <span>{error}</span>
          </div>
        ) : (
          <div className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
            <Check className="w-3 h-3 shrink-0" />
            <span>Standard 3-Phase voltage verified (380V).</span>
          </div>
        )}
      </div>
    </div>
  );
};

// #179 Error Message - Actionable, specific guidance message
export const LiveErrorMessageLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#179 ACTIONABLE ERROR MESSAGE</span>
        <span className="text-[10px] text-rose-600 font-bold">Rule: Specific Fix</span>
      </div>

      <div className="bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 rounded-lg p-3 text-rose-900 dark:text-rose-200 space-y-1.5">
        <div className="flex items-center gap-1.5 font-bold text-xs">
          <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
          <span>Invalid Port Assignment: COM3 Busy</span>
        </div>
        <p className="text-[11px] leading-relaxed opacity-95">
          COM3 is currently claimed by another instance of SerialPlotter.exe. Close the existing monitor or select <b>COM4 / COM5</b> from the dropdown.
        </p>
      </div>
    </div>
  );
};

// #180 Success Message - Confirmation text with timestamp & record ID
export const LiveSuccessMessageLab: React.FC = () => {
  const [savedAt, setSavedAt] = useState('14:32:09 UTC');

  const handleRefresh = () => {
    const d = new Date();
    setSavedAt(`${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')} Local`);
  };

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#180 SUCCESS MESSAGE</span>
        <button onClick={handleRefresh} className="px-2 py-0.5 bg-emerald-600 text-white rounded text-[10px] font-bold">
          Save Again
        </button>
      </div>

      <div className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 rounded-lg p-3 text-emerald-900 dark:text-emerald-200 flex items-start gap-2.5">
        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <div className="font-bold text-xs">Configuration Saved Successfully</div>
          <div className="text-[11px] opacity-90">
            Hash: <span className="font-mono font-bold">0x8F9A32</span> • Timestamp: <b>{savedAt}</b>
          </div>
        </div>
      </div>
    </div>
  );
};
