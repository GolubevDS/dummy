import { Themes, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon             from 'shared/assets/icons/theme-dark.svg';
import LightIcon            from 'shared/assets/icons/theme-light.svg';
import { classNames }       from 'shared/lib/helpers/classNames';
import { Button }           from 'shared/ui/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	
	return (
		<Button
			className={classNames([cls.ThemeSwitcher, className])}
			variant="text"
			onClick={toggleTheme}
		>
			{theme === Themes.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};
