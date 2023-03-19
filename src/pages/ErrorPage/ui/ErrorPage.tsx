import type { FC }        from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button';

import cls from './ErrorPage.module.scss';

export const ErrorPage: FC = () => {
	const { t } = useTranslation();
	
	const reloadPage = () => {
		window.location.reload();
	};
	
	return (
		<div className={cls.ErrorPage}>
			<h2 className={cls.title}>{t('error')}</h2>
			<Button onClick={reloadPage}>
				{t('reload-page')}
			</Button>
		</div>
	);
};
