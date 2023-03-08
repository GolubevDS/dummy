import { useState }           from 'react';
import type { FC, ReactNode } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Themes, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT;

interface ThemeProviderProps {
	children?: ReactNode;
	initialTheme?: Themes;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
	const [theme, setTheme] = useState<Themes>(initialTheme || defaultTheme);
	document.body.className = theme;
	
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
