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
      className="group relative bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/60 rounded-2xl p-4 flex flex-col justify-between gap-3 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-950/40 hover:-translate-y-0.5 select-none"
    >
      {/* Top Meta Bar */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/90 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30 text-[11px] font-mono font-bold tracking-tight">
            #{String(term.num).padStart(3, '0')}
          </span>
          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase">Cat-{term.catNumber}</span>
        </div>

        <button
          onClick={handleCopyPrompt}
          title="Copy AI Prompt"
          className="opacity-0 group-hover:opacity-100 transition-opacity px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 text-slate-700 dark:text-slate-300 hover:text-white text-[10px] font-mono flex items-center gap-1 border border-slate-200 dark:border-slate-700"
        >
          {copied ? '✓ Copied' : '🤖 AI Prompt'}
        </button>
      </div>

      {/* Title & Korean Name */}
      <div>
        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors line-clamp-1">
          {term.term}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium line-clamp-1 mt-0.5">{term.koreanName}</p>
      </div>

      {/* Visual Schematic */}
      <div className="w-full">
        <TermSchematic term={term} />
      </div>

      {/* Brief Definition */}
      <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed h-8">{term.definition}</p>

      {/* Bottom Footer Info */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-slate-500">
        <span className="truncate max-w-[150px]">⚡ {term.whenToUse}</span>
        <span className="text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform font-bold">Explore ➔</span>
      </div>
    </div>
  );
};

