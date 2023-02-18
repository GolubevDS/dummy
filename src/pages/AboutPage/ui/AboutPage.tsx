import { useTranslation } from 'react-i18next';

const AboutPage = () => {
	const { t } = useTranslation('about');
	
	return (
		<h1>{t('title')}</h1>
	);
};

export default AboutPage;

