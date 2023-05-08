import { Suspense } from 'react';

import { Modal }   from 'shared/ui/Modal';
import { Spinner } from 'shared/ui/Spinner';

import { LoginForm } from '../LoginForm';

interface LoginModalProps {
	isOpen?: boolean;
	onClose?: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
		>
			<Suspense fallback={<Spinner />}>
				<LoginForm />
			</Suspense>
		</Modal>
	);
};
