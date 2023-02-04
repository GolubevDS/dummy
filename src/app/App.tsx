import { Suspense }            from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { useTheme }   from 'app/providers/ThemeProvider/lib/useTheme';
import { AboutPage }  from 'pages/AboutPage';
import { MainPage }   from 'pages/MainPage';
import { classNames } from 'shared/lib/helpers/classNames';

import './styles/index.scss';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames(['app', theme])}>
			<div>
				<button onClick={toggleTheme}>Toggle theme</button>
			</div>
			<Link to="/">Main</Link>
			<Link to="/about">About</Link>
			<Suspense fallback="Loading...">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};
