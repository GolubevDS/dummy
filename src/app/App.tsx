import { Suspense }   from 'react';
import { AppRouter }  from 'app/providers/router';
import { useTheme }   from 'app/providers/theme/lib/useTheme';
import { Navbar }     from 'widgets/Navbar';
import { Sidebar }    from 'widgets/Sidebar';
import { classNames } from 'shared/lib/helpers/classNames';

import './styles/index.scss';

export const App = () => {
	const { theme } = useTheme();
	
	return (
		<div className={classNames(['app', theme])}>
			<Suspense fallback="Loading...">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
