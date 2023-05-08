import type { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import type { CombinedState }                                        from 'redux';

import type { UserSchema }  from 'entities/User';
import type { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
	user: UserSchema;
	loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithReducerManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}
