import { useState }       from 'react';
import type { ReactNode } from 'react';

import ErrorIcon      from 'shared/assets/icons/error.svg';
import InfoIcon       from 'shared/assets/icons/info.svg';
import SuccessIcon    from 'shared/assets/icons/success.svg';
import WarningIcon    from 'shared/assets/icons/warning.svg';
import { classNames } from 'shared/lib/helpers/classNames';
import type { Types } from 'shared/ui/types';
import { Typography } from 'shared/ui/Typography';

import cls from './Alert.module.scss';

type AlertTypes = Exclude<Types, 'primary' | 'secondary'>

interface AlertProps {
	className?: string;
	closable?: boolean;
	showIcon?: boolean;
	title?: string;
	description?: string;
	type?: AlertTypes;
}

const alertIconComponents: Record<AlertTypes, ReactNode> = {
	error: <ErrorIcon />,
	info: <InfoIcon />,
	success: <SuccessIcon />,
	warning: <WarningIcon />,
};

export const Alert = ({
	className,
	closable = false,
	showIcon = false,
	title,
	description,
	type = 'warning',
	...otherProps
}: AlertProps) => {
	const [visible, setVisible] = useState(true);
	
	const handleClose = () => {
		setVisible(false);
	};
	
	return visible ? (
		<div {...otherProps} className={classNames([cls.Alert, className, cls[type]])}>
			{closable && (
				// eslint-disable-next-line i18next/no-literal-string
				<div className={cls.close} onClick={handleClose}>
					×
				</div>
			)}
			{showIcon && (
				<div className={cls.icon}>
					{alertIconComponents[type]}
				</div>
			)}
			<div className={cls.content}>
				{title && (
					<Typography>
						{title}
					</Typography>
				)}
				{description && (
					<Typography variant="body2">
						{description}
					</Typography>
				)}
			</div>
		</div>
	) : null;
};
