import { useCallback, useState } from 'react';
import { useTranslation }        from 'react-i18next';

import { LoginModal } from 'features/AuthByUsername';
import { Button }     from 'shared/ui/Button';

export const SignIn = () => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	
	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<>
			<Button onClick={onToggleModal}>
				{t('sign-in')}
			</Button>
			{isAuthModal && (
				<LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
			)}
		</>
	);
};
