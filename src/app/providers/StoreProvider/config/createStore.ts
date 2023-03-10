import { configureStore }         from '@reduxjs/toolkit';
import type { ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer }            from 'entities/User';

import type { StateSchema } from './StateSchema';

export function createStore(preloadedState?: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		user: userReducer,
	};
	
	return configureStore<StateSchema>({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState,
	});
}
