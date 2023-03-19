import { useTranslation } from 'react-i18next';

import { Typography } from 'shared/ui/Typography';

const MainPage = () => {
	const { t } = useTranslation('main');

	return (
		<Typography variant="h1">{t('title')}</Typography>
	);
};

export default MainPage;
