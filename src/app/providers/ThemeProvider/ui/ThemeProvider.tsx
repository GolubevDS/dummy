import { useState } from 'react';
import type { FC }  from 'react';

import { LOCAL_STORAGE_THEME_KEY, Themes, ThemeContext } from '../lib/ThemeContext';

export const ThemeProvider: FC = ({ children }) => {
	const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT;
	const [theme, setTheme] = useState<Themes>(defaultTheme);
	
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
