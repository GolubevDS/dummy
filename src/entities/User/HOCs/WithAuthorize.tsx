import type { FC }     from 'react';
import { useSelector } from 'react-redux';

import { getAuthData } from 'entities/User';

export const WithAuthorize = (ComponentForAuthorized: FC, ComponentForUnauthorized: FC) => {
	const WrappedComponentWithAuthorize: FC = () => {
		const userData = useSelector(getAuthData);
		
		if (userData) {
			return <ComponentForAuthorized />;
		}
		
		return <ComponentForUnauthorized />;
	};
	
	return <WrappedComponentWithAuthorize />;
};
