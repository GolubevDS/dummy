import { useTranslation } from 'react-i18next';
import { Button }         from 'shared/ui/Button';

import cls from './PageError.module.scss';

export const PageError = () => {
	const { t } = useTranslation();
	
	const reloadPage = () => {
		window.location.reload();
	};
	
	return (
		<div className={cls.PageError}>
			<p>{t('error')}</p>
			<Button onClick={reloadPage}>
				{t('reload-page')}
			</Button>
		</div>
	);
};
