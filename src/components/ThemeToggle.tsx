import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme, Theme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const options: { id: Theme; label: string; icon: React.ReactNode }[] = [
    { id: 'light', label: 'Light', icon: <Sun className="w-3.5 h-3.5" /> },
    { id: 'dark', label: 'Dark', icon: <Moon className="w-3.5 h-3.5" /> },
    { id: 'system', label: 'Auto', icon: <Monitor className="w-3.5 h-3.5" /> },
  ];

  if (compact) {
    return (
      <button
        onClick={() => {
          if (theme === 'dark') setTheme('light');
          else if (theme === 'light') setTheme('dark');
          else setTheme('dark');
        }}
        title={`Current: ${theme.toUpperCase()} (${resolvedTheme} mode). Click to toggle.`}
        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition flex items-center gap-1.5 shadow-sm"
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-indigo-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </button>
    );
  }

  return (
    <div className="flex items-center bg-slate-100 dark:bg-slate-950/90 border border-slate-200/90 dark:border-slate-800 rounded-xl p-1 shadow-inner gap-0.5">
      {options.map((opt) => {
        const isActive = theme === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => setTheme(opt.id)}
            title={`Switch to ${opt.label} Mode`}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all duration-150 ${
              isActive
                ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-sm border border-slate-200/80 dark:border-indigo-400/50'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900/60'
            }`}
          >
            <span
              className={
                isActive
                  ? 'text-indigo-600 dark:text-white'
                  : opt.id === 'light'
                  ? 'text-amber-500'
                  : opt.id === 'dark'
                  ? 'text-indigo-400'
                  : 'text-slate-400'
              }
            >
              {opt.icon}
            </span>
            <span className="text-[11px]">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
};
