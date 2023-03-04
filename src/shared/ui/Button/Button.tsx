import type { ButtonHTMLAttributes, FC } from 'react';
import { classNames }                    from 'shared/lib/helpers/classNames';

import cls from './Button.module.scss';

type ButtonVariants = 'text' | 'outline' | 'contained'
type ButtonSizes = 'small' | 'medium' | 'large'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariants;
	size?: ButtonSizes;
}

export const Button: FC<ButtonProps> = ({
	children,
	className,
	variant = 'contained',
	size = 'medium',
	...rest
}) => {
	return (
		<button
			{...rest}
			className={classNames([cls.Button, cls[variant], cls[size], className])}
		>
			{children}
		</button>
	);
};
