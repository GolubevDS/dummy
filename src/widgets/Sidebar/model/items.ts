import React from 'react';

import About         from 'shared/assets/icons/about.svg';
import Home          from 'shared/assets/icons/home.svg';
import Profile       from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig';

export interface SidebarItem {
	path: string;
	i18Key: string;
	Icon: React.VFC<React.SVGAttributes<SVGElement>>;
}

export const SidebarItemsList: SidebarItem[] = [
	{
		path: RoutePath.main,
		i18Key: 'link.main',
		Icon: Home,
	}, {
		path: RoutePath.about,
		i18Key: 'link.about',
		Icon: About,
	}, {
		path: RoutePath.profile,
		i18Key: 'link.profile',
		Icon: Profile,
	},
];
