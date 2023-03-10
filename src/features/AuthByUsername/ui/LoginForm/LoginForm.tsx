import { useTranslation } from 'react-i18next';
import { Button }         from 'shared/ui/Button';
import { Input }          from 'shared/ui/Input';

import cls from './LoginForm.module.scss';

export const LoginForm = () => {
	const { t } = useTranslation();
	
	return (
		<div className={cls.LoginForm}>
			<Input className={cls.input} placeholder={t('username')} type="text" />
			<Input className={cls.input} placeholder={t('password')} type="text" />
			<Button className={cls.signInBtn}>{t('sign-in')}</Button>
		</div>
	);
};
