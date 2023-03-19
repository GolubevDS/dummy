import { memo, useCallback }        from 'react';
import { useTranslation }           from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Button }     from 'shared/ui/Button';
import { Input }      from 'shared/ui/Input';
import { Typography } from 'shared/ui/Typography';

import { getLoginState }   from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions }    from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

export const LoginForm = memo(function LoginForm() {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { username, password, error, isLoading } = useSelector(getLoginState);
	
	const handleChangeUsername = useCallback((username: string) => {
		dispatch(loginActions.setUsername(username));
	}, [dispatch]);
	
	const handleChangePassword = useCallback((password: string) => {
		dispatch(loginActions.setPassword(password));
	}, [dispatch]);
	
	const handleSignInClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);
	
	return (
		<div className={cls.LoginForm}>
			<Typography variant="h2">{t('sign-in')}</Typography>
			{error && <Typography variant="body1">{error}</Typography>}
			<Input
				className={cls.input}
				placeholder={t('username')}
				type="text"
				value={username}
				onChange={handleChangeUsername}
			/>
			<Input
				className={cls.input}
				placeholder={t('password')}
				type="text"
				value={password}
				onChange={handleChangePassword}
			/>
			<Button
				className={cls.signInBtn}
				disabled={isLoading}
				onClick={handleSignInClick}
			>
				{t('sign-in')}
			</Button>
		</div>
	);
});
