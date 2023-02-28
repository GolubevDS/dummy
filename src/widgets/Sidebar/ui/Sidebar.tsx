import { useState }         from 'react';
import type { FC }          from 'react';
import { useTranslation }   from 'react-i18next';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher }    from 'widgets/ThemeSwitcher';
import { classNames }       from 'shared/lib/helpers/classNames';
import { Button }           from 'shared/ui/Button';

import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const { t } = useTranslation();
	const [collapsed, setCollapsed] = useState(false);
	const toggle = () => {
		setCollapsed(prev => !prev);
	};
	
	return (
		<div
			className={classNames([cls.Sidebar, className], { [cls.collapsed]: collapsed })}
			data-testid="sidebar"
		>
			<Button
				data-testid="toggle"
				onClick={toggle}
			>
				{t('sidebar-switcher')}
			</Button>
			<div className={cls.switchers}>
				<LanguageSwitcher className={cls.languageSwitcher} />
				<ThemeSwitcher />
			</div>
		</div>
	);
};
