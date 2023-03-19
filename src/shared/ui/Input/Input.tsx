import type { ChangeEvent, FC, InputHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/helpers/classNames';

import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = ({
	className,
	onChange,
	...restProps
}) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};
	
	return (
		<div className={classNames([cls.Input, className])}>
			<input
				{...restProps}
				onChange={handleChange}
			/>
		</div>
	);
};
