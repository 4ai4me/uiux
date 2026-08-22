import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, RotateCcw, ZoomIn, ZoomOut, Maximize, 
  Flag, Diamond, Clock, ChevronRight, Activity, Sliders,
  Eye, BarChart2, Layers
} from 'lucide-react';

/**
 * ----------------------------------------------------------------------------
 * Category 12: Timeline, Charts & Visualization (#221 ~ #240) Dedicated 1:1 Labs
 * High-contrast, Light/Dark adaptive UI/UX Architecture Workbench
 * ----------------------------------------------------------------------------
 */

// #221 Timeline - Multi-track chronological sequence of system operations
export const LiveTimelineLab: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(120);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((t) => (t >= 500 ? 0 : t + 10));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#221 TIMELINE</span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold flex items-center gap-1"
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <button
            onClick={() => { setIsPlaying(false); setCurrentTime(0); }}
            className="p-1 bg-slate-200 dark:bg-slate-800 rounded hover:bg-slate-300 dark:hover:bg-slate-700"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 space-y-2">
        {/* Time Header */}
        <div className="flex justify-between text-[9px] text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
          <span>0ms</span>
          <span>100ms</span>
          <span>200ms</span>
          <span>300ms</span>
          <span>400ms</span>
          <span>500ms</span>
        </div>

        {/* Tracks */}
        <div className="relative space-y-1.5 pt-1">
          {/* Playhead needle */}
          <div
            style={{ left: `${(currentTime / 500) * 100}%` }}
            className="absolute top-0 bottom-0 w-0.5 bg-rose-500 z-20 pointer-events-none transition-all duration-75 shadow"
          >
            <span className="absolute -top-3.5 -translate-x-1/2 bg-rose-600 text-white text-[8px] font-bold px-1 rounded">
              {currentTime}ms
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-16 text-[9px] font-bold text-slate-500 truncate">Spindle M3</span>
            <div className="flex-1 h-5 bg-slate-100 dark:bg-slate-800 rounded relative overflow-hidden">
              <div className="absolute left-[10%] w-[50%] h-full bg-indigo-600 text-white rounded text-[8px] flex items-center px-1 font-bold">
                Ramp Up (250ms)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-16 text-[9px] font-bold text-slate-500 truncate">Coolant M8</span>
            <div className="flex-1 h-5 bg-slate-100 dark:bg-slate-800 rounded relative overflow-hidden">
              <div className="absolute left-[30%] w-[60%] h-full bg-emerald-600 text-white rounded text-[8px] flex items-center px-1 font-bold">
                Flood Coolant Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// #222 Gantt Chart - Task sequence with dependency link lines
export const LiveGanttChartLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#222 GANTT CHART</span>
        <span className="text-[10px] text-indigo-600 font-bold">Dependency Links</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 space-y-2">
        <div className="space-y-2 relative">
          {/* Task 1 */}
          <div className="flex items-center gap-2">
            <span className="w-20 text-[9px] font-bold text-slate-700 dark:text-slate-300">Phase 1: Rough</span>
            <div className="flex-1 h-5 bg-slate-100 dark:bg-slate-800 rounded relative">
              <div className="absolute left-0 w-[45%] h-full bg-indigo-600 text-white rounded text-[8px] flex items-center px-1.5 font-bold">
                Task #1 (45m)
              </div>
            </div>
          </div>

          {/* Dependency Indicator Arrow */}
          <div className="pl-24 text-[8px] text-indigo-500 font-bold flex items-center gap-1 -my-1">
            <span>↳ Precedent Link (FS: Finish-to-Start)</span>
          </div>

          {/* Task 2 */}
          <div className="flex items-center gap-2">
            <span className="w-20 text-[9px] font-bold text-slate-700 dark:text-slate-300">Phase 2: Finish</span>
            <div className="flex-1 h-5 bg-slate-100 dark:bg-slate-800 rounded relative">
              <div className="absolute left-[45%] w-[45%] h-full bg-emerald-600 text-white rounded text-[8px] flex items-center px-1.5 font-bold">
                Task #2 (45m)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// #223 Time Axis - Horizontal graduated line with numerical units
export const LiveTimeAxisLab: React.FC = () => {
  const [ticks, setTicks] = useState([0, 100, 200, 300, 400, 500]);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#223 TIME AXIS</span>
        <span className="text-[10px] text-slate-500">Graduated Scale</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="border-b-2 border-slate-700 dark:border-slate-300 pb-1 flex justify-between relative">
          {ticks.map((t) => (
            <div key={t} className="flex flex-col items-center">
              <span className="text-[9px] font-bold text-slate-700 dark:text-slate-300">{t}ms</span>
              <div className="w-0.5 h-2 bg-slate-700 dark:bg-slate-300 mt-1" />
            </div>
          ))}
        </div>
        <div className="text-[10px] text-slate-500 text-center">Horizontal coordinate baseline for temporal positioning.</div>
      </div>
    </div>
  );
};

// #224 Time Scale - Dynamic pixels-per-millisecond scale factor
export const LiveTimeScaleLab: React.FC = () => {
  const [scale, setScale] = useState<'1x' | '2x' | '4x'>('2x');

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#224 TIME SCALE</span>
        <div className="flex gap-1">
          {(['1x', '2x', '4x'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setScale(s)}
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                scale === s ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded border flex items-center justify-between text-xs font-bold">
          <span>Scale Ratio:</span>
          <span className="text-indigo-600 dark:text-indigo-400">
            {scale === '1x' ? '1px = 10ms (Overview)' : scale === '2x' ? '1px = 5ms (Standard)' : '1px = 1.25ms (High Precision)'}
          </span>
        </div>
        <div className="h-6 bg-slate-100 dark:bg-slate-800 rounded overflow-hidden relative">
          <div
            style={{ width: scale === '1x' ? '25%' : scale === '2x' ? '50%' : '100%' }}
            className="h-full bg-indigo-600 text-white rounded flex items-center justify-center font-bold text-[9px] transition-all duration-200"
          >
            100ms Block ({scale === '1x' ? '25px' : scale === '2x' ? '50px' : '100px'})
          </div>
        </div>
      </div>
    </div>
  );
};

// #225 Timeline Header - Sticky time axis row pinning at the top during scroll
export const LiveTimelineHeaderLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#225 TIMELINE HEADER</span>
        <span className="text-[10px] text-emerald-600 font-bold">position: sticky</span>
      </div>

      <div className="h-32 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-y-auto">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-indigo-600 text-white p-2 font-bold text-[10px] flex justify-between shadow z-10">
          <span>TRACK NAME</span>
          <div className="flex gap-4 pr-2">
            <span>00:00</span>
            <span>00:15</span>
            <span>00:30</span>
            <span>00:45</span>
          </div>
        </div>

        {/* Scrollable Tracks */}
        <div className="p-2 space-y-1.5 text-[10px] text-slate-600 dark:text-slate-400">
          <div className="p-1.5 bg-slate-50 dark:bg-slate-800 rounded">Axis-X Stepper Pulse Track</div>
          <div className="p-1.5 bg-slate-50 dark:bg-slate-800 rounded">Axis-Y Linear Encoder Track</div>
          <div className="p-1.5 bg-slate-50 dark:bg-slate-800 rounded">Axis-Z Ball Screw Inverter</div>
          <div className="p-1.5 bg-slate-50 dark:bg-slate-800 rounded">Pneumatic Tool Changer Valve</div>
          <div className="p-1.5 bg-slate-50 dark:bg-slate-800 rounded">Vacuum Hold-Down Sensor</div>
        </div>
      </div>
    </div>
  );
};

// #226 Timeline Row (Track Lane) - 40px distinct horizontal track lane
export const LiveTimelineRowLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#226 TIMELINE ROW (TRACK LANE)</span>
        <span className="text-[10px] text-slate-500">Height: 40px</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 space-y-1.5">
        <div className="h-10 bg-slate-50 dark:bg-slate-950 border-2 border-indigo-500/60 rounded-lg p-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 font-bold text-xs text-indigo-900 dark:text-indigo-200">
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            <span>Spindle VFD Lane</span>
          </div>
          <div className="h-7 bg-indigo-600 text-white rounded px-2 flex items-center text-[10px] font-bold shadow">
            Clip: 12,000 RPM (2.4s)
          </div>
        </div>
      </div>
    </div>
  );
};

// #227 Timeline Bar (Clip Block) - Time block with width proportional to duration
export const LiveTimelineBarLab: React.FC = () => {
  const [duration, setDuration] = useState(160);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#227 TIMELINE BAR (CLIP BLOCK)</span>
        <span className="text-[10px] text-indigo-600 font-bold">{duration}ms Block</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="h-12 bg-slate-50 dark:bg-slate-950 border rounded-lg p-2 flex items-center">
          <div
            style={{ width: `${duration}px` }}
            className="h-8 bg-indigo-600 text-white rounded flex items-center justify-between px-2 text-[10px] font-bold shadow transition-all duration-75"
          >
            <span className="truncate">Feed Motion</span>
            <span className="text-[8px] opacity-75">{duration}ms</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px]">Duration:</span>
          <input
            type="range"
            min="60"
            max="260"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="flex-1 accent-indigo-600"
          />
          <span className="font-bold text-xs">{duration}ms</span>
        </div>
      </div>
    </div>
  );
};

// #228 Playhead (Scrubber) - Red vertical timeline needle with scrubber handle
export const LivePlayheadLab: React.FC = () => {
  const [playheadPos, setPlayheadPos] = useState(140);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#228 PLAYHEAD (SCRUBBER)</span>
        <span className="text-[10px] text-rose-600 font-bold">Pos: {playheadPos}px</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="relative h-20 bg-slate-50 dark:bg-slate-950 border rounded-lg overflow-hidden p-2">
          {/* Vertical Playhead Needle */}
          <div
            style={{ left: `${playheadPos}px` }}
            className="absolute top-0 bottom-0 w-0.5 bg-rose-600 z-20 shadow cursor-ew-resize"
          >
            {/* Scrubber Knob */}
            <div className="w-3 h-3 bg-rose-600 rounded-b-md -ml-1.25 flex items-center justify-center shadow">
              <span className="text-[6px] text-white">▼</span>
            </div>
          </div>

          <div className="h-6 bg-indigo-600/30 border border-indigo-500 rounded mt-5 flex items-center px-2 text-[9px] font-bold text-indigo-900 dark:text-indigo-200">
            Audio / Command Stream
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px]">Scrub Needle:</span>
          <input
            type="range"
            min="20"
            max="280"
            value={playheadPos}
            onChange={(e) => setPlayheadPos(Number(e.target.value))}
            className="flex-1 accent-rose-600"
          />
        </div>
      </div>
    </div>
  );
};

// #229 Time Cursor - Real-time hover cursor tooltip displaying timestamp
export const LiveTimeCursorLab: React.FC = () => {
  const [hoverX, setHoverX] = useState<number | null>(null);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#229 TIME CURSOR (HOVER TOOLTIP)</span>
        <span className="text-[10px] text-indigo-600 font-bold">
          {hoverX !== null ? `Time: ${Math.round(hoverX * 2)}ms` : 'Hover to inspect'}
        </span>
      </div>

      <div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setHoverX(e.clientX - rect.left);
        }}
        onMouseLeave={() => setHoverX(null)}
        className="relative h-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 cursor-crosshair overflow-hidden"
      >
        {hoverX !== null && (
          <div
            style={{ left: `${hoverX}px` }}
            className="absolute top-0 bottom-0 w-px bg-indigo-500 dashed pointer-events-none"
          >
            <div className="absolute top-1 -translate-x-1/2 bg-indigo-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">
              {Math.round(hoverX * 2)}ms
            </div>
          </div>
        )}
        <div className="h-full flex items-center justify-center text-slate-400 text-[10px]">
          Move pointer across timeline canvas
        </div>
      </div>
    </div>
  );
};

// #230 Marker - Flag marker anchored at zero-duration instant point
export const LiveMarkerLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#230 MARKER (EVENT FLAG)</span>
        <span className="text-[10px] text-amber-500 font-bold">Instant Trigger</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="relative h-16 bg-slate-50 dark:bg-slate-950 border rounded-lg p-2">
          {/* Marker 1 */}
          <div className="absolute left-[80px] top-1 flex flex-col items-center">
            <div className="p-1 bg-amber-500 text-white rounded-full shadow">
              <Flag className="w-3 h-3" />
            </div>
            <div className="w-0.5 h-6 bg-amber-500" />
            <span className="text-[8px] font-bold text-amber-600">Probe Trip (80ms)</span>
          </div>

          {/* Marker 2 */}
          <div className="absolute left-[200px] top-1 flex flex-col items-center">
            <div className="p-1 bg-rose-500 text-white rounded-full shadow">
              <Flag className="w-3 h-3" />
            </div>
            <div className="w-0.5 h-6 bg-rose-500" />
            <span className="text-[8px] font-bold text-rose-600">Limit Switch (200ms)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// #231 Milestone - Diamond (◆) milestone marker indicating key project delivery
export const LiveMilestoneLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#231 MILESTONE (◆)</span>
        <span className="text-[10px] text-emerald-600 font-bold">Key Project Gate</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="relative h-16 bg-slate-50 dark:bg-slate-950 border rounded-lg p-2 flex items-center justify-around">
          <div className="flex flex-col items-center gap-1">
            <div className="w-4 h-4 bg-indigo-600 text-white rotate-45 flex items-center justify-center shadow-md">
              <Diamond className="w-2.5 h-2.5 -rotate-45" />
            </div>
            <span className="text-[9px] font-bold text-slate-700 dark:text-slate-300">Phase 1 QA Signoff</span>
          </div>

          <div className="w-20 h-0.5 bg-slate-300 dark:bg-slate-700" />

          <div className="flex flex-col items-center gap-1">
            <div className="w-4 h-4 bg-emerald-600 text-white rotate-45 flex items-center justify-center shadow-md">
              <Diamond className="w-2.5 h-2.5 -rotate-45" />
            </div>
            <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400">Final Release M2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// #232 Guide Line (Timeline) - Vertical projection dashed line aligning blocks
export const LiveGuideLineLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#232 GUIDE LINE (TIMELINE)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Snap Projection</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 space-y-2 relative overflow-hidden">
        {/* Vertical Guide Line */}
        <div className="absolute top-0 bottom-0 left-[140px] w-0.5 bg-indigo-500 border-l border-dashed border-indigo-500 z-10">
          <span className="absolute top-1 left-1 text-[7px] bg-indigo-600 text-white px-1 rounded">Sync Point</span>
        </div>

        <div className="h-6 bg-slate-100 dark:bg-slate-800 rounded relative">
          <div className="absolute left-0 w-[140px] h-full bg-indigo-600 text-white rounded text-[8px] flex items-center px-2 font-bold">
            Lead Block Ends Here
          </div>
        </div>

        <div className="h-6 bg-slate-100 dark:bg-slate-800 rounded relative">
          <div className="absolute left-[140px] w-[120px] h-full bg-emerald-600 text-white rounded text-[8px] flex items-center px-2 font-bold">
            Follow Block Starts Here
          </div>
        </div>
      </div>
    </div>
  );
};

// #233 Grid Line (Time Grid) - 50ms interval background grid lines
export const LiveGridLineLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#233 GRID LINE (TIME GRID)</span>
        <span className="text-[10px] text-slate-500">50ms Intervals</span>
      </div>

      <div className="relative h-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 flex justify-between">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-full w-px bg-slate-300 dark:bg-slate-700 flex flex-col justify-between items-center">
            <span className="text-[7px] text-slate-400 -mt-1">{i * 50}ms</span>
            <span className="text-[7px] text-slate-400 -mb-1">│</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// #234 Major Tick - Long primary tick mark with text label
export const LiveMajorTickLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#234 MAJOR TICK</span>
        <span className="text-[10px] text-indigo-600 font-bold">100ms Marks</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
        <div className="border-b-2 border-slate-800 dark:border-slate-200 flex justify-between pb-1">
          {['0.0s', '1.0s', '2.0s', '3.0s'].map((lbl) => (
            <div key={lbl} className="flex flex-col items-center">
              <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400">{lbl}</span>
              <div className="w-1 h-3 bg-indigo-600 dark:bg-indigo-400 mt-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// #235 Minor Tick - Small intermediate tick dividing major steps
export const LiveMinorTickLab: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#235 MINOR TICK</span>
        <span className="text-[10px] text-slate-500">20ms Subdivisions</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
        <div className="border-b-2 border-slate-400 flex justify-between items-end pb-1 px-4">
          <div className="w-1 h-4 bg-slate-800 dark:bg-slate-200" />
          <div className="w-0.5 h-1.5 bg-slate-400" />
          <div className="w-0.5 h-1.5 bg-slate-400" />
          <div className="w-0.5 h-1.5 bg-slate-400" />
          <div className="w-0.5 h-1.5 bg-slate-400" />
          <div className="w-1 h-4 bg-slate-800 dark:bg-slate-200" />
        </div>
        <div className="text-[10px] text-slate-500 text-center mt-2">Minor ticks provide fine sub-division reference without label clutter.</div>
      </div>
    </div>
  );
};

// #236 Zoom Control - Magnification slider (50% ~ 400%)
export const LiveZoomControlLab: React.FC = () => {
  const [zoom, setZoom] = useState(100);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#236 ZOOM CONTROL</span>
        <span className="text-[10px] font-bold text-indigo-600">{zoom}% Zoom</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-3">
        <div className="flex items-center gap-2">
          <button onClick={() => setZoom(Math.max(50, zoom - 25))} className="p-1 bg-slate-200 dark:bg-slate-800 rounded">
            <ZoomOut className="w-4 h-4" />
          </button>
          <input
            type="range"
            min="50"
            max="300"
            step="25"
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="flex-1 accent-indigo-600"
          />
          <button onClick={() => setZoom(Math.min(300, zoom + 25))} className="p-1 bg-slate-200 dark:bg-slate-800 rounded">
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>

        <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded border text-center text-xs font-bold text-slate-700 dark:text-slate-300">
          Scale Factor: {(zoom / 100).toFixed(2)}x
        </div>
      </div>
    </div>
  );
};

// #237 Zoom to Fit - Auto-scales entire sequence into viewport width
export const LiveZoomToFitLab: React.FC = () => {
  const [isFitted, setIsFitted] = useState(true);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#237 ZOOM TO FIT</span>
        <button
          onClick={() => setIsFitted(!isFitted)}
          className="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px] font-bold flex items-center gap-1"
        >
          <Maximize className="w-3 h-3" />
          <span>{isFitted ? 'Reset to 100%' : 'Zoom to Fit (100% View)'}</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="h-10 bg-slate-100 dark:bg-slate-800 rounded flex items-center p-1 overflow-hidden">
          <div
            style={{ width: isFitted ? '100%' : '180%' }}
            className="h-full bg-indigo-600 text-white rounded flex items-center justify-center font-bold text-[10px] transition-all duration-300 shadow"
          >
            {isFitted ? 'Entire 60s Cycle (Auto Fitted)' : '60s Cycle (Overflows Viewport)'}
          </div>
        </div>
      </div>
    </div>
  );
};

// #238 Range Selection - Selected timeline segment with highlighted boundaries
export const LiveRangeSelectionLab: React.FC = () => {
  const [range, setRange] = useState({ start: 20, end: 70 });

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#238 RANGE SELECTION (LOOP)</span>
        <span className="text-[10px] text-indigo-600 font-bold">{range.start}% ~ {range.end}%</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
        <div className="relative h-12 bg-slate-100 dark:bg-slate-800 rounded overflow-hidden">
          {/* Active Range Highlight */}
          <div
            style={{ left: `${range.start}%`, width: `${range.end - range.start}%` }}
            className="absolute top-0 bottom-0 bg-indigo-500/30 border-x-2 border-indigo-600 flex items-center justify-center text-[9px] font-bold text-indigo-900 dark:text-indigo-200"
          >
            Loop Region
          </div>
        </div>
        <div className="text-[10px] text-slate-500 text-center">Defines active loop boundaries for iterative toolpath verification.</div>
      </div>
    </div>
  );
};

// #239 Brush (Overview Range) - Sub-chart range slider driving main view
export const LiveBrushLab: React.FC = () => {
  const [brushPos, setBrushPos] = useState(30);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#239 BRUSH (OVERVIEW SLIDER)</span>
        <span className="text-[10px] text-indigo-600 font-bold">Focus: {brushPos}%</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 space-y-2">
        {/* Main Detailed Chart */}
        <div className="h-12 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 rounded p-1 flex items-center justify-center font-bold text-xs text-indigo-600">
          Focused Window ({brushPos}% - {brushPos + 30}%)
        </div>

        {/* Mini Brush Strip */}
        <div className="relative h-6 bg-slate-100 dark:bg-slate-800 rounded border overflow-hidden">
          <div
            style={{ left: `${brushPos}%` }}
            className="absolute top-0 bottom-0 w-[30%] bg-indigo-600/40 border-2 border-indigo-600 cursor-ew-resize"
          />
        </div>

        <input
          type="range"
          min="0"
          max="70"
          value={brushPos}
          onChange={(e) => setBrushPos(Number(e.target.value))}
          className="w-full accent-indigo-600"
        />
      </div>
    </div>
  );
};

// #240 Mini Map (Timeline) - Small overview thumbnail showing current viewport box
export const LiveMiniMapLab: React.FC = () => {
  const [viewX, setViewX] = useState(25);

  return (
    <div className="w-full max-w-md bg-slate-100 dark:bg-slate-950 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 text-slate-900 dark:text-slate-100 font-mono text-xs flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-800 pb-2">
        <span className="font-black text-indigo-600 dark:text-indigo-400">#240 MINI MAP (TIMELINE)</span>
        <span className="text-[10px] text-slate-500">Radar Thumbnail</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 space-y-2">
        {/* Simulated Viewport Canvas */}
        <div className="h-16 bg-slate-50 dark:bg-slate-950 border rounded p-2 flex items-center justify-center font-bold text-xs text-slate-700 dark:text-slate-300">
          Main Workspace Viewport
        </div>

        {/* Mini Map Radar */}
        <div className="relative h-8 bg-slate-200 dark:bg-slate-800 rounded border border-slate-400 dark:border-slate-700 overflow-hidden">
          <div
            style={{ left: `${viewX}%` }}
            className="absolute top-0 bottom-0 w-[35%] bg-indigo-600 text-white rounded border-2 border-white dark:border-slate-900 flex items-center justify-center text-[7px] font-bold shadow"
          >
            Viewport Box
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="65"
          value={viewX}
          onChange={(e) => setViewX(Number(e.target.value))}
          className="w-full accent-indigo-600"
        />
      </div>
    </div>
  );
};
