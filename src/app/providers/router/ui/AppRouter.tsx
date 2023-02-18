import { Suspense }      from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig }   from 'shared/config/routeConfig';

export const AppRouter = () => {
	return (
		<Suspense fallback="Loading...">
			<Routes>
				{Object.values(routeConfig).map(({ path, element }) => (
					<Route
						element={(
							<Suspense fallback="Loading...">
								<div className="page-wrapper">
									{element}
								</div>
							</Suspense>
						)}
						key={path}
						path={path}
					/>
				))}
			</Routes>
		</Suspense>
	);
};
