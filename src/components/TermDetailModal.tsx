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

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Visual Schematic Box */}
            <div className="bg-slate-50 dark:bg-slate-950/80 p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs font-mono text-slate-600 dark:text-slate-400">
                <span className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">DIAGNOSTIC SCHEMATIC</span>
                <span className="px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-800 font-bold">.{term.schematicType}</span>
              </div>
              <TermSchematic term={term} />
              <p className="text-xs text-slate-600 dark:text-slate-400 font-mono italic text-center mt-1">
                🔍 {term.visualPoint}
              </p>
            </div>

            {/* Core Definition Box */}
            <div className="bg-slate-50 dark:bg-slate-950/80 p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-4">
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
