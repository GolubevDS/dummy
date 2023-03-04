import type { FC }          from 'react';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher }    from 'widgets/ThemeSwitcher';

import cls from './Navbar.module.scss';

export const Navbar: FC = () => {
	return (
		<div className={cls.Navbar}>
			<div className={cls.switchers}>
				<LanguageSwitcher className={cls.languageSwitcher} />
				<ThemeSwitcher />
			</div>
		</div>
	);
};
