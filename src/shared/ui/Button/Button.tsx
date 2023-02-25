import type { ButtonHTMLAttributes, FC } from 'react';
import { classNames }                    from 'shared/lib/helpers/classNames';

import cls from './Button.module.scss';

type ButtonVariants = 'text' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
	children,
	className,
	variant = 'outline',
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
