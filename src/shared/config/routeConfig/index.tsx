import React          from 'react';
import { RouteProps } from 'react-router-dom';

import { AboutPage }    from 'pages/AboutPage';
import { MainPage }     from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage }  from 'pages/ProfilePage';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_FOUND = 'not-found',
	PROFILE = 'profile'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath[AppRoutes.MAIN],
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath[AppRoutes.ABOUT],
		element: <AboutPage />,
	},
	[AppRoutes.PROFILE]: {
		path: RoutePath[AppRoutes.PROFILE],
		element: <ProfilePage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath[AppRoutes.NOT_FOUND],
		element: <NotFoundPage />,
	},
};
