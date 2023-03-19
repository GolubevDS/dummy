import { Suspense } from 'react';

import { AppRouter } from 'app/providers/AppRouter';
import { Navbar }    from 'widgets/Navbar';
import { Sidebar }   from 'widgets/Sidebar';

import './styles/index.scss';

export const App = () => {
	return (
		<Suspense fallback="Loading...">
			<div className="content-page">
				<Sidebar />
				<div>
					<Navbar />
					<AppRouter />
				</div>
			</div>
		</Suspense>
	);
};
