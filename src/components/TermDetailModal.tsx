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
        <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-lg bg-indigo-600 text-white font-mono font-black text-xs shadow-md shadow-indigo-600/30">
              #{String(term.num).padStart(3, '0')}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{term.term}</h2>
                <button
                  onClick={handleCopyName}
                  className="text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 text-xs transition"
                  title="Copy Term Name"
                >
                  {copiedName ? '✓' : '📋'}
                </button>
              </div>
              <p className="text-xs text-indigo-600 dark:text-indigo-300 font-medium">{term.koreanName}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center text-sm font-bold border border-slate-200 dark:border-slate-700 transition"
              title="Previous Term"
            >
              ‹
            </button>
            <button
              onClick={onNext}
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center text-sm font-bold border border-slate-200 dark:border-slate-700 transition"
              title="Next Term"
            >
              ›
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-rose-100 dark:bg-slate-800 dark:hover:bg-rose-900/60 text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-white flex items-center justify-center text-sm font-bold border border-slate-200 dark:border-slate-700 transition"
              title="Close (Esc)"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Top Bento Row: Schematic + Quick Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Visual Schematic Box */}
            <div className="bg-slate-50 dark:bg-slate-950/70 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-700 dark:text-slate-300">DIAGNOSTIC SCHEMATIC</span>
                <span>Type: {term.schematicType}</span>
              </div>
              <TermSchematic term={term} />
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono italic text-center mt-1">
                🔍 {term.visualPoint}
              </p>
            </div>

            {/* Core Definition Box */}
            <div className="bg-slate-50 dark:bg-slate-950/70 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
                  1. Core Definition
                </span>
                <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{term.definition}</p>
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-1">
                  2. When to Use
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300">{term.whenToUse}</p>
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                  3. Key Differentiator vs Similar Terms
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300">{term.difference}</p>
              </div>
            </div>
          </div>

          {/* Real Interactive LIVE UI Lab */}
          <div>
            <LiveDemoRenderer term={term} />
          </div>

          {/* AI Vibe Coding Prompt Box */}
          <div className="bg-slate-50 dark:bg-slate-950/90 rounded-xl p-4 border border-indigo-200 dark:border-indigo-500/40 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm">🤖</span>
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-300">VIBE CODING PROMPT SNIPPET</span>
              </div>
              <button
                onClick={handleCopyPrompt}
                className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow"
              >
                {copiedPrompt ? '✓ Copied to Clipboard!' : '📋 Copy Prompt'}
              </button>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900/90 rounded-lg border border-slate-200 dark:border-slate-800 font-mono text-xs text-indigo-900 dark:text-indigo-200 select-all leading-relaxed">
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
