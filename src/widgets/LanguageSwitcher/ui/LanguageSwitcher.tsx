import { useTranslation } from 'react-i18next';
import { Languages }      from 'shared/config/i18n';
import { classNames }     from 'shared/lib/helpers/classNames';
import { Button }         from 'shared/ui/Button';

import cls from './LanguageSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
}

export const LanguageSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();
	
	const toggle = () => {
		i18n.changeLanguage(
			i18n.language === Languages.RU
				? Languages.EN
				: Languages.RU,
		);
	};
	
	return (
		<Button
			className={classNames([cls.LanguageSwitcher, className])}
			variant="text"
			onClick={toggle}
		>
			{t('language')}
		</Button>
	);
};
