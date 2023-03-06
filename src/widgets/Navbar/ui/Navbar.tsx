import { useCallback, useState } from 'react';
import type { FC }               from 'react';
import { useTranslation }        from 'react-i18next';
import { Button }                from 'shared/ui/Button';
import { Modal }                 from 'shared/ui/Modal';
import { LanguageSwitcher }      from 'widgets/LanguageSwitcher';
import { ThemeSwitcher }         from 'widgets/ThemeSwitcher';

import cls from './Navbar.module.scss';

export const Navbar: FC = () => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	
	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);
	
	return (
		<div className={cls.Navbar}>
			<div className={cls.switchers}>
				<LanguageSwitcher className={cls.languageSwitcher} />
				<ThemeSwitcher />
			</div>
			<Button onClick={onToggleModal}>
				{t('Войти')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				{/* eslint-disable-next-line */}
				{t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.')}
			</Modal>
		</div>
	);
};
