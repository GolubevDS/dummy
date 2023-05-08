import { configureStore }         from '@reduxjs/toolkit';
import type { ReducersMapObject } from '@reduxjs/toolkit';

import { userReducer } from 'entities/User';

import { createReducerManager } from './reducerManager';
import type { StateSchema }     from './StateSchema';

export function createStore(preloadedState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		user: userReducer,
	};
	
	const reducerManager = createReducerManager(rootReducers);
	
	const store = configureStore<StateSchema | undefined>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState,
	});
	
	// @ts-ignore
	store.reducerManager = reducerManager;
	
	return store;
}
