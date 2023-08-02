import { useTranslation } from 'react-i18next';

import { profileReducer }      from 'entities/Profile';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { ReducersList }        from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
	profile: profileReducer,
};

const ProfilePage = () => {
	const { t } = useTranslation();
	
	return (
		<DynamicModuleLoader name="profile" reducers={reducers} removeAfterUnmount>
			{t('ProfilePage')}
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
