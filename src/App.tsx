import { lazy, Suspense }      from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { useTheme }   from './theme/useTheme';
import { classNames } from './helpers/classNames';

import './styles/index.scss';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const MainPage = lazy(() => import('./pages/MainPage'));

const App = () => {
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

export default App;
