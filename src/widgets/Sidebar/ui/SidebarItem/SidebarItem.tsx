import { memo }           from 'react';
import type { FC }        from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink } from 'shared/ui/AppLink';

import { SidebarItem as SidebarItemProps } from '../../model/items';

export const SidebarItem: FC<SidebarItemProps> = memo(({ Icon, i18Key, path }) => {
	const { t } = useTranslation();
	
	return (
		<AppLink to={path}>
			<Icon />
			<span>{t(i18Key)}</span>
		</AppLink>
	);
});

SidebarItem.displayName = 'SidebarItem';
