import { useState, useEffect } from 'react';

export function useTheme() {

  const [theme, setTheme] = useState('wait');

  useEffect(() => {
    const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)');

    function handleChange () {
      const theme = mediaQueryListDark.matches ? 'dark' : 'light';
      setTheme(theme);
    }

    handleChange();

    mediaQueryListDark.onchange = handleChange;

    return () => {
      mediaQueryListDark.onchange = () => {};
    }
  }, []);

  return {
    theme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  }
}
