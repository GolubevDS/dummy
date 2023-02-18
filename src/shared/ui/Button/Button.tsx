import type { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/helpers/classNames';

import cls from './Button.module.scss';

type ButtonVariants = 'text' | 'contained'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
	children,
	className,
	variant = 'contained',
	...rest
}) => {
	return (
		<button
			{...rest}
			className={classNames([cls.Button, cls[variant], className])}
		>
			{children}
		</button>
	);
};
