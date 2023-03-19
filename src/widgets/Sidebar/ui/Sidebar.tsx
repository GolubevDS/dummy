import { useState }       from 'react';
import type { FC }        from 'react';
import { useTranslation } from 'react-i18next';

import About          from 'shared/assets/icons/about.svg';
import ArrowBack      from 'shared/assets/icons/arrow-back.svg';
import ArrowForward   from 'shared/assets/icons/arrow-forward.svg';
import Home           from 'shared/assets/icons/home.svg';
import Logo           from 'shared/assets/icons/logo.svg';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppLink }    from 'shared/ui/AppLink';
import { Button }     from 'shared/ui/Button';

import cls from './Sidebar.module.scss';

export const Sidebar: FC = () => {
	const { t } = useTranslation();
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
				<AppLink to="/">
					<Home />
					<span>{t('link.main')}</span>
				</AppLink>
				<AppLink to="/about">
					<About />
					<span>{t('link.about')}</span>
				</AppLink>
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
