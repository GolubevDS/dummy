import { combineReducers, configureStore } from '@reduxjs/toolkit';

import type { StateSchema } from './StateSchema';

export function createStore(preloadedState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: combineReducers({}),
		devTools: __IS_DEV__,
		preloadedState,
	});
}
