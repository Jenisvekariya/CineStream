'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import { themes, fonts } from '@/lib/themes';

type ThemeConfigContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  font: string;
  setFont: (font: string) => void;
};

const ThemeConfigContext = createContext<ThemeConfigContextType | undefined>(undefined);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <ThemeConfigProvider>{children}</ThemeConfigProvider>
    </NextThemesProvider>
  );
}

function ThemeConfigProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useNextTheme();
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || themes[0].name;
    }
    return themes[0].name;
  });

  const [font, setFontState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('font') || fonts[0].name;
    }
    return fonts[0].name;
  });

  useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme--/)) {
        document.body.classList.remove(className);
      }
    });
    document.body.classList.add(`theme--${theme}`);

    const selectedTheme = themes.find((t) => t.name === theme);
    if (selectedTheme) {
      const root = document.documentElement;
      root.style.setProperty('--primary', selectedTheme.primary);
      root.style.setProperty('--accent', selectedTheme.accent);
    }
  }, [theme, resolvedTheme]);

  useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^font--/)) {
        document.body.classList.remove(className);
      }
    });
    document.body.classList.add(`font--${font}`);

    const selectedFont = fonts.find((f) => f.name === font);
     if (selectedFont) {
        const root = document.documentElement;
        root.style.setProperty('--font-headline', selectedFont.headline);
        root.style.setProperty('--font-body', selectedFont.body);
     }

  }, [font]);


  const setTheme = (newTheme: string) => {
    localStorage.setItem('theme', newTheme);
    setThemeState(newTheme);
  };

  const setFont = (newFont: string) => {
    localStorage.setItem('font', newFont);
    setFontState(newFont);
  };

  return (
    <ThemeConfigContext.Provider value={{ theme, setTheme, font, setFont }}>
      {children}
    </ThemeConfigContext.Provider>
  );
}

export const useThemeConfig = () => {
  const context = useContext(ThemeConfigContext);
  if (context === undefined) {
    throw new Error('useThemeConfig must be used within a ThemeProvider');
  }
  return context;
};
