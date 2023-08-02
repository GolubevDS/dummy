import type { ButtonHTMLAttributes, FC } from 'react';
import { memo }                          from 'react';

import { classNames } from 'shared/lib/helpers/classNames';

import cls from './Button.module.scss';

type ButtonVariants = 'text' | 'outline' | 'contained'
type ButtonSizes = 'small' | 'medium' | 'large'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariants;
	size?: ButtonSizes;
}

export const Button = memo(({
	children,
	className,
	disabled = false,
	variant = 'contained',
	size = 'medium',
	...rest
}: ButtonProps) => {
	const mods = {
		[cls.disabled]: disabled,
		[cls[variant]]: true,
		[cls[size]]: true,
	};
	
	return (
		<button
			{...rest}
			className={classNames([cls.Button, className], mods)}
			disabled={disabled}
		>
			{children}
		</button>
	);
});

Button.displayName = 'Button';
