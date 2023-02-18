import { useState }      from 'react';
import { classNames }    from 'shared/lib/helpers/classNames';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)
	
	const toggle = () => {
		setCollapsed(prev => !prev)
	}
	
	return (
		<div className={classNames([cls.Sidebar, className], { [cls.collapsed]: collapsed })}>
			<button onClick={toggle}>Toggle</button>
			<div className={cls.switchers}>
				<LanguageSwitcher className={cls.languageSwitcher} />
				<ThemeSwitcher />
			</div>
		</div>
	);
};
