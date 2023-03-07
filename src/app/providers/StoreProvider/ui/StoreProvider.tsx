import { StateSchema }    from 'app/providers/StoreProvider/config/StateSchema';
import type { ReactNode } from 'react';
import { Provider }       from 'react-redux';

import { createStore } from '../config/createStore';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: StateSchema;
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
	const store = createStore(initialState);
	
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
