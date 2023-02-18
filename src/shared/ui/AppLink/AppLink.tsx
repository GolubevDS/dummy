import { FC }              from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames }      from 'shared/lib/helpers/classNames';

import cls from './AppLink.module.scss';

type AppLinkColor = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
	className?: string;
	color?: AppLinkColor;
}

export const AppLink: FC<AppLinkProps> = ({
	className,
	children,
	to,
	color = 'primary',
	...rest
}: AppLinkProps) => {
	return (
		<Link
			{...rest}
			className={classNames([cls.AppLink, cls[color], className])}
			to={to}
		>
			{children}
		</Link>
	);
};
