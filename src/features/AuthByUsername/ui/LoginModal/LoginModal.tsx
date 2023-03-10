import { Modal } from 'shared/ui/Modal';

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
			<LoginForm />
		</Modal>
	);
};
