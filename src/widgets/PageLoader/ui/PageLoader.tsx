import { classNames } from 'shared/lib/helpers/classNames';
import { Spinner }    from 'shared/ui/Spinner';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
	return (
		<div className={classNames([cls.PageLoader, className])}>
			<Spinner />
		</div>
	);
};
