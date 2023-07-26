import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
	const { t } = useTranslation();
	
	return (
		<>
			{t('ProfilePage')}
		</>
	);
};

export default ProfilePage;
