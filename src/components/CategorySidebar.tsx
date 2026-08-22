import React from 'react';
import { CATEGORIES } from '../data/categories';

interface Props {
  selectedCategory: string | null;
  onSelectCategory: (catId: string | null) => void;
  termCountByCat: Record<string, number>;
}

export const CategorySidebar: React.FC<Props> = ({
  selectedCategory,
  onSelectCategory,
  termCountByCat,
}) => {
  return (
    <div className="w-full lg:w-72 flex flex-col gap-2 shrink-0 lg:sticky lg:top-[280px] z-10">
      <div className="flex items-center justify-between px-2 py-1">
        <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          Categories ({CATEGORIES.length})
        </span>
        <button
          onClick={() => onSelectCategory(null)}
          className={`text-[11px] font-mono transition ${
            selectedCategory === null
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
          }`}
        >
          View All
        </button>
      </div>

      <div className="flex flex-col gap-1 max-h-[calc(100vh-320px)] overflow-y-auto pr-1">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = termCountByCat[cat.id] || cat.count;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(isSelected ? null : cat.id)}
              className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between group border select-none ${
                isSelected
                  ? 'bg-indigo-600 border-indigo-500 text-white font-bold shadow-md shadow-indigo-600/20'
                  : 'bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-900 border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] shrink-0 font-bold ${
                    isSelected
                      ? 'bg-indigo-800 text-indigo-100'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300'
                  }`}
                >
                  {cat.catNumber}
                </span>
                <div className="truncate">
                  <div className="truncate font-semibold">{cat.title}</div>
                  <div
                    className={`text-[10px] truncate ${
                      isSelected
                        ? 'text-indigo-100'
                        : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400'
                    }`}
                  >
                    {cat.koreanTitle}
                  </div>
                </div>
              </div>

              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0 ${
                  isSelected
                    ? 'bg-indigo-700 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

