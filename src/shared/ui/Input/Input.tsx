import type { FC, InputHTMLAttributes } from 'react';
import { classNames }                   from 'shared/lib/helpers/classNames';

import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
	className?: string;
	value?: string;
}

export const Input: FC<InputProps> = ({
	className,
	...restProps
}) => {
	return (
		<div className={classNames([cls.Input, className])}>
			<input
				{...restProps}
			/>
		</div>
	);
};
