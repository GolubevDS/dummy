import { useTranslation } from 'react-i18next';

import { Typography } from 'shared/ui/Typography';

const AboutPage = () => {
	const { t } = useTranslation('about');
	
	return (
		<Typography variant="h1">{t('title')}</Typography>
	);
};

export default AboutPage;

