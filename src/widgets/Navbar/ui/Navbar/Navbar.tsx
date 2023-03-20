import { WithAuthorize }    from 'entities/User/HOCs/WithAuthorize';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher }    from 'widgets/ThemeSwitcher';

import { SignIn }  from '../SignIn';
import { SignOut } from '../SignOut';

import cls from './Navbar.module.scss';

export const Navbar = () => {
	return (
		<div className={cls.Navbar}>
			<div className={cls.switchers}>
				<LanguageSwitcher className={cls.languageSwitcher} />
				<ThemeSwitcher />
			</div>
			{WithAuthorize(SignOut, SignIn)}
		</div>
	);
};
