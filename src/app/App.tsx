import { Suspense, useEffect } from 'react';
import { useDispatch }         from 'react-redux';

import { AppRouter }   from 'app/providers/AppRouter';
import { userActions } from 'entities/User';
import { Navbar }      from 'widgets/Navbar';
import { Sidebar }     from 'widgets/Sidebar';

import './styles/index.scss';

export const App = () => {
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);
	
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
