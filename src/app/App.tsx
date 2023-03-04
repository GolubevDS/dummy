import { Suspense }   from 'react';
import { AppRouter }  from 'app/providers/AppRouter';
import { useTheme }   from 'app/providers/ThemeProvider/lib/useTheme';
import { Navbar }     from 'widgets/Navbar';
import { Sidebar }    from 'widgets/Sidebar';
import { classNames } from 'shared/lib/helpers/classNames';

import './styles/index.scss';

export const App = () => {
	const { theme } = useTheme();
	
	return (
		<div className={classNames(['app', theme])}>
			<Suspense fallback="Loading...">
				<div className="content-page">
					<Sidebar />
					<div>
						<Navbar />
						<AppRouter />
					</div>
				</div>
			</Suspense>
		</div>
	);
};
