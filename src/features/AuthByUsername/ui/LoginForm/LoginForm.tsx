import { memo, useCallback } from 'react';
import { useTranslation }    from 'react-i18next';
import { useSelector }       from 'react-redux';

import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { ReducersList }        from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch }      from 'shared/lib/hooks/useAppDispatch';
import { Alert }               from 'shared/ui/Alert';
import { Button }              from 'shared/ui/Button';
import { Input }               from 'shared/ui/Input';
import { Typography }          from 'shared/ui/Typography';

import { getLoginError }              from '../../model/selectors/getLoginError';
import { getLoginIsLoading }          from '../../model/selectors/getLoginIsLoading';
import { getLoginPassword }           from '../../model/selectors/getLoginPassword';
import { getLoginUsername }           from '../../model/selectors/getLoginUsername';
import { loginByUsername }            from '../../model/services/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

const reducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo(() => {
	const 
		{ t } = useTranslation(),
		dispatch = useAppDispatch(),
		username = useSelector(getLoginUsername),
		password = useSelector(getLoginPassword),
		isLoading = useSelector(getLoginIsLoading),
		error = useSelector(getLoginError);
	
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
		<DynamicModuleLoader name="loginForm" reducers={reducers} removeAfterUnmount>
			<div className={cls.LoginForm}>
				<Typography variant="h2">{t('sign-in')}</Typography>
				{error && (
					<Alert
						className={cls.alert}
						description={error}
						showIcon
						type="error"
					/>
				)}
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
					type="password"
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
		</DynamicModuleLoader>
	);
});

LoginForm.displayName = 'features/AuthByUsername/ui/LoginForm';

export default LoginForm;
