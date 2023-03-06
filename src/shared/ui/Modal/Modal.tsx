import { useCallback, useEffect, useRef, useState } from 'react';
import type { FC, MouseEvent, ReactNode }           from 'react';
import { classNames }                               from 'shared/lib/helpers/classNames';
import { Portal }                                   from 'shared/ui/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
	children?: ReactNode;
	className?: string;
	isOpen?: boolean;
	onClose?: () => void;
	isPortal?: boolean;
}

const ANIMATION_DELAY = 15;

export const Modal: FC<ModalProps> = ({
	children,
	className,
	isOpen = false,
	onClose,
	isPortal = true,
}) => {
	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();
	
	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);
	
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeHandler();
		}
	}, [closeHandler]);
	
	const handleContentClick = (e: MouseEvent) => {
		e.stopPropagation();
	};
	
	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}
		
		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);
	
	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	};
	
	const render = () => (
		<div className={classNames([cls.Modal, className], mods)}>
			<div className={cls.overlay} onClick={closeHandler}>
				<div className={cls.content} onClick={handleContentClick}>
					{children}
				</div>
			</div>
		</div>
	);
	
	return isPortal ? (
		<Portal>
			{render()}
		</Portal>
	) : render();
};
