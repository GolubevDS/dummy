import { Link } from 'react-router-dom';

import { AppRouter }  from 'app/providers/router';
import { useTheme }   from 'app/providers/theme/lib/useTheme';
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
			<AppRouter />
		</div>
	);
};
