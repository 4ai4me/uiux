import React, { useState } from 'react';
import { Search, X, ChevronUp, ChevronDown, Download, Sparkles, Sliders } from 'lucide-react';
import { TOTAL_TERMS_COUNT } from '../data/allTerms';
import { ThemeToggle } from './ThemeToggle';
import { CURRENT_APP_VERSION } from '../version';

interface Props {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string | null;
  onSelectCategory: (cat: string | null) => void;
  isAuditMode: boolean;
  onToggleAuditMode: () => void;
  onOpenVersionModal: () => void;
}

export const BentoHeader: React.FC<Props> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  isAuditMode,
  onToggleAuditMode,
  onOpenVersionModal,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Top Bar with Brand, Version, Collapse Button & Theme Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Left Side: Brand & Author Tag */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-indigo-600/30">
            VK
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                UI/UX Glossary <span className="text-indigo-600 dark:text-indigo-400">Encyclopedia</span>
              </h1>
              {/* Creator by NJ Badge */}
              <span className="px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/40 text-[11px] font-mono font-bold">
                by NJ
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              AI Vibe Coding & Frontend Architecture Workbench
            </span>
          </div>
        </div>

        {/* Right Side: Version Tag, Collapse Button, Theme Toggle */}
        <div className="flex items-center gap-2">
          {/* Version Button (Opens Export & Changelog Modal) */}
          <button
            onClick={onOpenVersionModal}
            className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition shadow-sm"
            title="Version Management & Export (v2.4.0)"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>v{CURRENT_APP_VERSION.version}</span>
            <Download className="w-3.5 h-3.5 text-indigo-500" />
          </button>

          {/* Header Collapse / Expand Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition shadow-sm"
            title={isCollapsed ? '대시보드 확장하기 (Expand Dashboard)' : '대시보드 접기 (Collapse Dashboard)'}
          >
            {isCollapsed ? (
              <>
                <ChevronDown className="w-4 h-4 text-indigo-500" />
                <span>대시보드 펼치기</span>
              </>
            ) : (
              <>
                <ChevronUp className="w-4 h-4 text-indigo-500" />
                <span>대시보드 접기</span>
              </>
            )}
          </button>

          {/* Dark / Light Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>

      {/* Collapsible Bento Dashboard Cards */}
      {!isCollapsed && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Bento Box 1: Brand & Subtitle (Span 2) */}
          <div className="md:col-span-2 bg-gradient-to-br from-white via-slate-50 to-indigo-50/50 dark:from-slate-900 dark:via-slate-900/90 dark:to-indigo-950/40 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-sm dark:shadow-xl relative overflow-hidden transition-colors">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-500/40 text-indigo-700 dark:text-indigo-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                  System Lexicon v{CURRENT_APP_VERSION.version}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-[10px] font-mono font-bold">
                  ● {TOTAL_TERMS_COUNT} Active Terms
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-500/20 border border-amber-200 dark:border-amber-500/40 text-amber-700 dark:text-amber-300 text-[10px] font-mono font-bold">
                  Created by NJ
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-lg leading-relaxed">
                AI Vibe Coding & Frontend Architecture Encyclopedia. Real Interactive Labs, Distinct Mini-Schematics, and AI Prompts.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 mt-3 pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
              <button
                onClick={onToggleAuditMode}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition flex items-center gap-1.5 border ${
                  isAuditMode
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>{isAuditMode ? '✕ Exit Inspector' : '🛠 Architecture Inspector'}</span>
              </button>
              {selectedCategory && (
                <button
                  onClick={() => onSelectCategory(null)}
                  className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-mono"
                >
                  Reset Filter (All)
                </button>
              )}
            </div>
          </div>

          {/* Bento Box 2: Total Dynamic Count Metric */}
          <div className="bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 flex flex-col justify-between shadow-sm dark:shadow-lg transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">Loaded Terms</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="my-1.5">
              <div className="text-3xl font-black text-slate-900 dark:text-white font-mono">{TOTAL_TERMS_COUNT}</div>
              <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-semibold">Active Lexicon Database</div>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-500 font-mono">
              Unique UI/UX Schematics & Labs
            </div>
          </div>

          {/* Bento Box 3: Architecture Categories Metric */}
          <div className="bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 flex flex-col justify-between shadow-sm dark:shadow-lg transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">Categories</span>
              <span className="text-indigo-600 dark:text-indigo-400 text-xs font-mono">Cat 01 ~ 24</span>
            </div>
            <div className="my-1.5">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 font-mono">24</div>
              <div className="text-[11px] text-slate-700 dark:text-slate-300 font-medium">Domain Architecture Clusters</div>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-500 font-mono">
              Inputs, Panes, Grids, Windows, Overlays
            </div>
          </div>
        </div>
      )}

      {/* Global Sticky Search Bar */}
      <div className="relative w-full group">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by term name, Korean keyword, #number (e.g. #123), or schematic type..."
          className="w-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-2xl px-4 py-3 pl-11 pr-24 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition shadow-sm dark:shadow-inner font-medium"
        />
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center text-slate-400 dark:text-slate-500 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400 transition-colors">
          <Search className="w-4.5 h-4.5" />
        </div>
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            title="검색어 초기화 (Clear search)"
            className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/50 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-300 border border-slate-200 dark:border-slate-700 hover:border-rose-200 dark:hover:border-rose-800/60 text-xs font-mono transition shadow-sm"
          >
            <X className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold">지우기</span>
          </button>
        )}
      </div>
    </div>
  );
};
