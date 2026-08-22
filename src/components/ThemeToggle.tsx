import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme, Theme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const options: { id: Theme; label: string; icon: React.ReactNode; activeColor: string }[] = [
    {
      id: 'light',
      label: 'Light',
      icon: <Sun className="w-4 h-4" />,
      activeColor: 'bg-amber-500 text-white shadow-md shadow-amber-500/30 border-amber-400',
    },
    {
      id: 'dark',
      label: 'Dark',
      icon: <Moon className="w-4 h-4" />,
      activeColor: 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border-indigo-400',
    },
    {
      id: 'system',
      label: 'Auto',
      icon: <Monitor className="w-4 h-4" />,
      activeColor: 'bg-slate-800 text-white dark:bg-slate-700 shadow-md border-slate-600',
    },
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
        className="p-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border-2 border-slate-300 dark:border-slate-700 transition flex items-center gap-1.5 shadow-sm"
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
    <div className="flex items-center bg-slate-200/90 dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-800 rounded-2xl p-1 shadow-inner gap-1">
      {options.map((opt) => {
        const isActive = theme === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => setTheme(opt.id)}
            title={`Switch to ${opt.label} Mode (Current: ${resolvedTheme})`}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all duration-150 border ${
              isActive
                ? `${opt.activeColor}`
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/60 dark:hover:bg-slate-900/60'
            }`}
          >
            <span>{opt.icon}</span>
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
};
