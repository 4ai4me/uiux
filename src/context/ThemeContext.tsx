import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'dark' | 'light' | 'system';
export type ResolvedTheme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'ui_ux_glossary_theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
      if (saved && (saved === 'dark' || saved === 'light' || saved === 'system')) {
        return saved;
      }
    }
    return 'dark'; // Default to dark aesthetic
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark');

  useEffect(() => {
    const getSystemTheme = (): ResolvedTheme => {
      if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
      return 'dark';
    };

    const currentResolved: ResolvedTheme = theme === 'system' ? getSystemTheme() : theme;
    setResolvedTheme(currentResolved);

    // Apply to html element
    const root = document.documentElement;
    if (currentResolved === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      document.body.style.backgroundColor = '#020617'; // slate-950
      document.body.style.color = '#f8fafc';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      document.body.style.backgroundColor = '#f8fafc'; // slate-50
      document.body.style.color = '#0f172a';
    }

    localStorage.setItem(THEME_STORAGE_KEY, theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        const newSystemTheme = getSystemTheme();
        setResolvedTheme(newSystemTheme);
        if (newSystemTheme === 'dark') {
          root.classList.add('dark');
          root.classList.remove('light');
          root.setAttribute('data-theme', 'dark');
          document.body.style.backgroundColor = '#020617';
          document.body.style.color = '#f8fafc';
        } else {
          root.classList.add('light');
          root.classList.remove('dark');
          root.setAttribute('data-theme', 'light');
          document.body.style.backgroundColor = '#f8fafc';
          document.body.style.color = '#0f172a';
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'system';
      return 'dark';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
