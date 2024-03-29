import type { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import type { ReactNode }                      from 'react';
import { Provider }                            from 'react-redux';

import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { createStore } from '../config/createStore';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({ asyncReducers, children, initialState }: StoreProviderProps) => {
	const store = createStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);
	
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
