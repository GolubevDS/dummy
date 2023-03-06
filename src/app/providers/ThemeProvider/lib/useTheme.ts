import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Themes, ThemeContext } from './ThemeContext';

interface UseThemeResult {
	toggleTheme: () => void;
	theme: Themes;
}

export const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);
	
	const toggleTheme = () => {
		const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
		document.body.className = newTheme;
		setTheme?.(newTheme);
	};
	
	return {
		theme: theme ?? (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes),
		toggleTheme,
	};
};
