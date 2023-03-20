import { useCallback }    from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch }    from 'react-redux';

import { userActions } from 'entities/User';
import { Button }      from 'shared/ui/Button';

export const SignOut = () => {
	const dispatch = useDispatch();
	const { t } = useTranslation();
	
	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);
	
	return (
		<Button onClick={onLogout}>
			{t('sign-out')}
		</Button>
	);
};
