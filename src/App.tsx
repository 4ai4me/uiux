import React, { useState, useMemo, useEffect } from 'react';
import { ALL_TERMS } from './data/allTerms';
import { CATEGORIES } from './data/categories';
import { TermItem } from './types';
import { BentoHeader } from './components/BentoHeader';
import { CategorySidebar } from './components/CategorySidebar';
import { TermCard } from './components/TermCard';
import { TermDetailModal } from './components/TermDetailModal';
import { ConflictAuditView } from './components/ConflictAuditView';
import { VersionExportModal } from './components/VersionExportModal';
import { CURRENT_APP_VERSION } from './version';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<TermItem | null>(null);
  const [isAuditMode, setIsAuditMode] = useState(false);
  const [isVersionModalOpen, setIsVersionModalOpen] = useState(false);
  const [quickToast, setQuickToast] = useState<string | null>(null);

  // Auto scroll to top when category or search changes
  const handleSelectCategory = (cat: string | null) => {
    setSelectedCategory(cat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory]);

  // Term counts by category
  const termCountByCat = useMemo(() => {
    const counts: Record<string, number> = {};
    ALL_TERMS.forEach((t) => {
      counts[t.category] = (counts[t.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered terms
  const filteredTerms = useMemo(() => {
    return ALL_TERMS.filter((term) => {
      // Category filter
      if (selectedCategory && term.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const numMatch = q.startsWith('#')
          ? String(term.num) === q.replace('#', '')
          : String(term.num).includes(q);

        const textMatch =
          term.term.toLowerCase().includes(q) ||
          term.koreanName.toLowerCase().includes(q) ||
          term.definition.toLowerCase().includes(q) ||
          term.whenToUse.toLowerCase().includes(q) ||
          (term.schematicType && term.schematicType.toLowerCase().includes(q)) ||
          (term.demoType && term.demoType.toLowerCase().includes(q));

        return numMatch || textMatch;
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  // Keyboard navigation & Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape to close modal
      if (e.key === 'Escape') {
        if (selectedTerm) {
          setSelectedTerm(null);
        } else if (isVersionModalOpen) {
          setIsVersionModalOpen(false);
        } else if (isAuditMode) {
          setIsAuditMode(false);
        }
      }
      // Ctrl+K or Cmd+K to focus search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
        if (searchInput) searchInput.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedTerm, isAuditMode, isVersionModalOpen]);

  const handlePrevTerm = () => {
    if (!selectedTerm) return;
    const currentIndex = ALL_TERMS.findIndex((t) => t.id === selectedTerm.id);
    if (currentIndex > 0) {
      setSelectedTerm(ALL_TERMS[currentIndex - 1]);
    }
  };

  const handleNextTerm = () => {
    if (!selectedTerm) return;
    const currentIndex = ALL_TERMS.findIndex((t) => t.id === selectedTerm.id);
    if (currentIndex < ALL_TERMS.length - 1) {
      setSelectedTerm(ALL_TERMS[currentIndex + 1]);
    }
  };

  const handleQuickPromptCopy = (term: TermItem) => {
    setQuickToast(`Copied AI prompt for #${term.num} ${term.term}`);
    setTimeout(() => setQuickToast(null), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-150">
      {/* Sticky Top Header & Search Bar Layout */}
      <header className="sticky top-0 z-30 w-full bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-colors">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
          <BentoHeader
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
            isAuditMode={isAuditMode}
            onToggleAuditMode={() => setIsAuditMode(!isAuditMode)}
            onOpenVersionModal={() => setIsVersionModalOpen(true)}
          />
        </div>
      </header>

      {/* Main Scrollable Content Container (Category Panel & Content Grid) */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1">
        {/* Audit Inspector View or Standard Lexicon Explorer */}
        {isAuditMode ? (
          <ConflictAuditView />
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Left Bento Category Sidebar (Sticky within viewport beneath the fixed header) */}
            <CategorySidebar
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              termCountByCat={termCountByCat}
            />

            {/* Right Term Bento Grid */}
            <div className="flex-1 w-full flex flex-col gap-4">
              {/* Category Active Banner with Quick Audit Focus shortcuts */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 rounded-xl px-4 py-3 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-bold">Fast Preview Jump:</span>
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                    {[
                      { id: 'cat-1', label: 'Cat 01 (Forms #001~020)' },
                      { id: 'cat-2', label: 'Cat 02 (Buttons #021~040)' },
                      { id: 'cat-3', label: 'Cat 03 (Navigation #041~060)' },
                      { id: 'cat-4', label: 'Cat 04 (Layout #061~080)' },
                      { id: 'cat-5', label: 'Cat 05 (Scroll #081~100)' },
                      { id: 'cat-6', label: 'Cat 06 (Tables #101~120)' },
                      { id: 'cat-7', label: 'Cat 07 (Tree #121~140)' },
                      { id: 'cat-8', label: 'Cat 08 (Dialogs #141~160)' },
                      { id: 'cat-9', label: 'Cat 09 (Feedback #161~180) ✨' },
                    ].map((catItem) => (
                      <button
                        key={catItem.id}
                        onClick={() => {
                          handleSelectCategory(catItem.id);
                          setSearchQuery('');
                        }}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition flex items-center gap-1 ${
                          selectedCategory === catItem.id
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/60'
                        }`}
                      >
                        {catItem.label}
                      </button>
                    ))}
                    {selectedCategory && (
                      <button
                        onClick={() => handleSelectCategory(null)}
                        className="px-2 py-1 rounded-lg text-[10px] text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-slate-200 underline"
                      >
                        Show All
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {filteredTerms.length} / {ALL_TERMS.length} Terms
                  </span>
                </div>
              </div>

              {/* Terms Grid */}
              {filteredTerms.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredTerms.map((term) => (
                    <TermCard
                      key={term.id}
                      term={term}
                      onSelect={setSelectedTerm}
                      onQuickPromptCopy={handleQuickPromptCopy}
                    />
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center bg-white dark:bg-slate-900/40 border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl flex flex-col items-center gap-2 shadow-sm">
                  <span className="text-3xl">🔍</span>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-300">No matching terms found</p>
                  <p className="text-xs text-slate-500 font-mono">
                    Try searching for another keyword or clear your active category filter.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory(null);
                    }}
                    className="mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition shadow-sm"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Global Quick Copy Toast */}
      {quickToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-white dark:bg-slate-900 border border-indigo-500/60 text-slate-900 dark:text-indigo-200 px-4 py-2.5 rounded-xl shadow-2xl font-mono text-xs flex items-center gap-2 animate-in slide-in-from-bottom-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{quickToast}</span>
        </div>
      )}

      {/* Interactive Detail & Live Lab Modal */}
      {selectedTerm && (
        <TermDetailModal
          term={selectedTerm}
          onClose={() => setSelectedTerm(null)}
          onPrev={handlePrevTerm}
          onNext={handleNextTerm}
        />
      )}

      {/* Version Control & Export Modal */}
      <VersionExportModal
        isOpen={isVersionModalOpen}
        onClose={() => setIsVersionModalOpen(false)}
      />
    </div>
  );
}
