import { memo }           from 'react';
import type { FC }        from 'react';
import { Link }           from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/helpers/classNames';
import type { Types } from 'shared/ui/types';
import { Typography } from 'shared/ui/Typography';

import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
	className?: string;
	type?: Types;
}

export const AppLink = memo(({
	className,
	children,
	to,
	type,
	...rest
}: AppLinkProps) => {
	return (
		<Link
			{...rest}
			className={classNames([cls.AppLink, className])}
			to={to}
		>
			<Typography className={cls.content} type={type}>
				{children}
			</Typography>
		</Link>
	);
});

AppLink.displayName = 'AppLink';
