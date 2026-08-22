import React, { useState } from 'react';
import { TermItem } from '../types';
import { TermSchematic } from './TermSchematic';

interface Props {
  term: TermItem;
  onSelect: (term: TermItem) => void;
  onQuickPromptCopy: (term: TermItem) => void;
}

export const TermCard: React.FC<Props> = ({ term, onSelect, onQuickPromptCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(term.aiPrompt);
    setCopied(true);
    onQuickPromptCopy(term);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={() => onSelect(term)}
      className="group relative bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800/90 hover:border-indigo-400 dark:hover:border-indigo-500/60 rounded-2xl p-4 sm:p-5 flex flex-col justify-between gap-3.5 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-950/50 hover:-translate-y-1 select-none"
    >
      {/* Top Meta Bar */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/90 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/40 text-xs font-mono font-bold tracking-tight shadow-xs">
            #{String(term.num).padStart(3, '0')}
          </span>
          <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">Cat-{term.catNumber}</span>
        </div>

        <button
          onClick={handleCopyPrompt}
          title="Copy AI Prompt"
          className="opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 text-slate-700 dark:text-slate-200 hover:text-white text-xs font-mono font-bold flex items-center gap-1 border border-slate-300 dark:border-slate-700 shadow-xs"
        >
          {copied ? '✓ Copied' : '🤖 AI Prompt'}
        </button>
      </div>

      {/* Title & Korean Name */}
      <div>
        <h3 className="text-base font-black text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1 tracking-tight">
          {term.term}
        </h3>
        <p className="text-xs text-indigo-600 dark:text-indigo-300 font-semibold line-clamp-1 mt-0.5">{term.koreanName}</p>
      </div>

      {/* Visual Schematic */}
      <div className="w-full">
        <TermSchematic term={term} isCompact={true} />
      </div>

      {/* Brief Definition */}
      <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-2 leading-relaxed h-10 font-normal">{term.definition}</p>

      {/* Bottom Footer Info */}
      <div className="pt-2.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
        <span className="truncate max-w-[170px] font-medium">⚡ {term.whenToUse}</span>
        <span className="text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform font-bold flex items-center gap-1">
          <span>Explore</span>
          <span>➔</span>
        </span>
      </div>
    </div>
  );
};

