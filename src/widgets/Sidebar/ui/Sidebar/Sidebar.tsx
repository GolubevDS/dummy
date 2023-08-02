import type { FC }  from 'react';
import { useState } from 'react';

import ArrowBack      from 'shared/assets/icons/arrow-back.svg';
import ArrowForward   from 'shared/assets/icons/arrow-forward.svg';
import Logo           from 'shared/assets/icons/logo.svg';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button }     from 'shared/ui/Button';

import { SidebarItemsList } from '../../model/items';
import { SidebarItem }      from '../SidebarItem';

import cls from './Sidebar.module.scss';

export const Sidebar: FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	
	const toggle = () => {
		setCollapsed(prev => !prev);
	};
	
	return (
		<div
			className={classNames([cls.Sidebar], { [cls.collapsed]: collapsed })}
			data-testid="sidebar"
		>
			<div className={cls.title}>
				<Logo />
			</div>
			<div className={cls.links}>
				{SidebarItemsList.map(({ Icon, path, i18Key }) => (
					<SidebarItem
						i18Key={i18Key}
						Icon={Icon}
						key={i18Key}
						path={path}
					/>
				))}
			</div>
			<Button
				className={cls.collapsedToggle}
				data-testid="toggle"
				variant="text"
				onClick={toggle}
			>
				{collapsed ? <ArrowForward /> : <ArrowBack />}
			</Button>
		</div>
	);
};
