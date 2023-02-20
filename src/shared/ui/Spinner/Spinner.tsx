import { classNames } from 'shared/lib/helpers/classNames';

import cls from './Spinner.module.scss';

interface SpinnerProps {
	className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
	return (
		<div className={classNames([cls.Spinner, className])} />
	);
};
