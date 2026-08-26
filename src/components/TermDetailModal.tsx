import React, { useState } from 'react';
import { TermItem } from '../types';
import { TermSchematic } from './TermSchematic';
import { LiveDemoRenderer } from './LiveDemoRenderer';

interface Props {
  term: TermItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const TermDetailModal: React.FC<Props> = ({ term, onClose, onPrev, onNext }) => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedName, setCopiedName] = useState(false);
  const [schematicTheme, setSchematicTheme] = useState<'blueprint' | 'dark_cad' | 'slate_clean'>('blueprint');
  const [showGuides, setShowGuides] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1.0);
  const [activeSchematicTab, setActiveSchematicTab] = useState<'blueprint' | 'anatomy'>('blueprint');

  if (!term) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(term.aiPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleCopyName = () => {
    navigator.clipboard.writeText(`${term.term} (${term.koreanName})`);
    setCopiedName(true);
    setTimeout(() => setCopiedName(false), 2000);
  };

  const cycleZoom = () => {
    if (zoomLevel === 1.0) setZoomLevel(1.25);
    else if (zoomLevel === 1.25) setZoomLevel(1.5);
    else setZoomLevel(1.0);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] my-auto"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80">
          <div className="flex items-center gap-3.5">
            <span className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-mono font-black text-sm shadow-md shadow-indigo-600/30">
              #{String(term.num).padStart(3, '0')}
            </span>
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">{term.term}</h2>
                <button
                  onClick={handleCopyName}
                  className="p-1 rounded-md text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 text-sm transition hover:bg-slate-200 dark:hover:bg-slate-800"
                  title="Copy Term Name"
                >
                  {copiedName ? '✓' : '📋'}
                </button>
              </div>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">{term.koreanName}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 flex items-center justify-center text-lg font-bold border-2 border-slate-200 dark:border-slate-700 transition shadow-xs active:scale-95"
              title="Previous Term"
            >
              ‹
            </button>
            <button
              onClick={onNext}
              className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 flex items-center justify-center text-lg font-bold border-2 border-slate-200 dark:border-slate-700 transition shadow-xs active:scale-95"
              title="Next Term"
            >
              ›
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/60 text-slate-600 hover:text-rose-600 dark:text-slate-300 dark:hover:text-rose-400 flex items-center justify-center text-base font-bold border-2 border-slate-200 dark:border-slate-700 hover:border-rose-300 transition shadow-xs active:scale-95 ml-1"
              title="Close (Esc)"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
          {/* Top Bento Row: Schematic + Quick Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Visual Schematic Box (Span 7 cols) */}
            <div className="lg:col-span-7 bg-slate-900 border-2 border-cyan-800/60 dark:border-cyan-500/40 p-4.5 rounded-2xl flex flex-col gap-3 shadow-md relative overflow-hidden">
              {/* Top Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <span className="font-mono font-black text-xs text-cyan-300 tracking-wider">DIAGNOSTIC SCHEMATIC</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono font-bold text-cyan-400">
                    .{term.schematicType}
                  </span>
                </div>

                {/* Interactive Schematic Toolbar */}
                <div className="flex items-center gap-1.5 font-mono text-xs">
                  {/* View Mode Tabs */}
                  <div className="flex rounded-lg bg-slate-950 p-0.5 border border-slate-800 mr-1">
                    <button
                      onClick={() => setActiveSchematicTab('blueprint')}
                      className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition ${
                        activeSchematicTab === 'blueprint'
                          ? 'bg-cyan-600 text-white shadow-xs'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      📐 Blueprint
                    </button>
                    <button
                      onClick={() => setActiveSchematicTab('anatomy')}
                      className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition ${
                        activeSchematicTab === 'anatomy'
                          ? 'bg-cyan-600 text-white shadow-xs'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      🧬 Anatomy
                    </button>
                  </div>

                  {/* Guides Toggle */}
                  <button
                    onClick={() => setShowGuides(!showGuides)}
                    title="Toggle Guides & Dimensions"
                    className={`px-2 py-1 rounded-lg border text-[11px] font-bold transition flex items-center gap-1 ${
                      showGuides
                        ? 'bg-cyan-950/80 border-cyan-500/60 text-cyan-300'
                        : 'bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <span>📏</span>
                    <span className="hidden sm:inline">{showGuides ? 'Guides On' : 'Guides Off'}</span>
                  </button>

                  {/* Zoom Button */}
                  <button
                    onClick={cycleZoom}
                    title="Cycle Zoom Scale"
                    className="px-2 py-1 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-cyan-400 text-[11px] font-bold transition flex items-center gap-1"
                  >
                    <span>🔍</span>
                    <span>{zoomLevel}x</span>
                  </button>

                  {/* Theme Switch */}
                  <button
                    onClick={() => {
                      if (schematicTheme === 'blueprint') setSchematicTheme('dark_cad');
                      else if (schematicTheme === 'dark_cad') setSchematicTheme('slate_clean');
                      else setSchematicTheme('blueprint');
                    }}
                    title="Switch CAD Theme"
                    className="px-2 py-1 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 text-[11px] font-bold transition"
                  >
                    🎨
                  </button>
                </div>
              </div>

              {/* Main Blueprint Viewport */}
              {activeSchematicTab === 'blueprint' ? (
                <div className="flex flex-col gap-2">
                  <TermSchematic
                    term={term}
                    showGuides={showGuides}
                    blueprintTheme={schematicTheme}
                    zoomLevel={zoomLevel}
                  />

                  {/* Technical CAD Meta Status Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[10px]">
                    <div className="bg-slate-950/80 p-1.5 rounded-lg border border-slate-800 text-slate-400 flex flex-col">
                      <span className="text-[9px] text-slate-500 uppercase font-semibold">Coordinate System</span>
                      <span className="text-cyan-400 font-bold">Relative CSS Flex</span>
                    </div>
                    <div className="bg-slate-950/80 p-1.5 rounded-lg border border-slate-800 text-slate-400 flex flex-col">
                      <span className="text-[9px] text-slate-500 uppercase font-semibold">Grid Snap Target</span>
                      <span className="text-indigo-400 font-bold">8px System Base</span>
                    </div>
                    <div className="bg-slate-950/80 p-1.5 rounded-lg border border-slate-800 text-slate-400 flex flex-col">
                      <span className="text-[9px] text-slate-500 uppercase font-semibold">Affordance State</span>
                      <span className="text-emerald-400 font-bold">Interactive / Focusable</span>
                    </div>
                    <div className="bg-slate-950/80 p-1.5 rounded-lg border border-slate-800 text-slate-400 flex flex-col">
                      <span className="text-[9px] text-slate-500 uppercase font-semibold">A11y Standard</span>
                      <span className="text-amber-400 font-bold">WCAG AA Certified</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Anatomy Breakdown Tab */
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs space-y-3.5 min-h-[220px]">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider">🧬 Component Anatomy Matrix</span>
                    <span className="text-[10px] text-slate-500">ISO/IEC 25010 UX Metrics</span>
                  </div>
                  <div className="space-y-2.5 text-[11px]">
                    <div className="flex items-start gap-2.5 p-2 bg-slate-900/90 rounded-lg border border-slate-800">
                      <span className="w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                      <div>
                        <span className="text-slate-200 font-bold block">Outer Bounding Container</span>
                        <span className="text-slate-400 text-[10px]">Wraps element structure, enforces padding boundaries & isolation clipping.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 p-2 bg-slate-900/90 rounded-lg border border-slate-800">
                      <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                      <div>
                        <span className="text-slate-200 font-bold block">Interactive Trigger / Affordance Zone</span>
                        <span className="text-slate-400 text-[10px]">Maintains minimal touch hit target of 44x44px and cursor pointer transitions.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 p-2 bg-slate-900/90 rounded-lg border border-slate-800">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                      <div>
                        <span className="text-slate-200 font-bold block">Diagnostic Visual Feedback Core</span>
                        <span className="text-slate-400 text-[10px]">{term.visualPoint}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Visual Diagnostic Focus Strip */}
              <div className="p-3 bg-cyan-950/40 border border-cyan-500/30 rounded-xl flex items-start gap-2.5 text-xs text-cyan-200">
                <span className="text-base shrink-0">🔍</span>
                <div className="leading-relaxed">
                  <span className="font-bold text-cyan-300 font-mono block text-[11px] mb-0.5">CRITICAL DIAGNOSTIC SPECIFICATION</span>
                  <span>{term.visualPoint}</span>
                </div>
              </div>
            </div>

            {/* Core Definition & Specs Box (Span 5 cols) */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950/80 p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1.5">
                  1. Core Definition
                </span>
                <p className="text-sm text-slate-900 dark:text-slate-100 leading-relaxed font-medium">{term.definition}</p>
              </div>

              <div>
                <span className="text-xs font-mono font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-1.5">
                  2. When to Use
                </span>
                <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">{term.whenToUse}</p>
              </div>

              <div>
                <span className="text-xs font-mono font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1.5">
                  3. Key Differentiator vs Similar Terms
                </span>
                <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">{term.difference}</p>
              </div>
            </div>
          </div>

          {/* Real Interactive LIVE UI Lab */}
          <div>
            <LiveDemoRenderer term={term} />
          </div>

          {/* AI Vibe Coding Prompt Box */}
          <div className="bg-slate-50 dark:bg-slate-950/90 rounded-2xl p-5 border-2 border-indigo-200 dark:border-indigo-500/40 flex flex-col gap-3 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base">🤖</span>
                <span className="text-xs font-mono font-black text-indigo-600 dark:text-indigo-300 uppercase tracking-wider">VIBE CODING PROMPT SNIPPET</span>
              </div>
              <button
                onClick={handleCopyPrompt}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-mono font-bold transition flex items-center gap-2 shadow-md shadow-indigo-600/30 active:scale-95"
              >
                {copiedPrompt ? '✓ Copied to Clipboard!' : '📋 Copy Prompt'}
              </button>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 font-mono text-xs text-indigo-950 dark:text-indigo-200 select-all leading-relaxed shadow-inner">
              {term.aiPrompt}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>Category {term.catNumber} Master Item</span>
          <span>Press Esc to close</span>
        </div>
      </div>
    </div>
  );
};
