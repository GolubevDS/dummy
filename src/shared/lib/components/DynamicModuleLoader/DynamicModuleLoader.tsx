import { Reducer }              from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { useStore }             from 'react-redux';

import { ReduxStoreWithReducerManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { useAppDispatch }                               from 'shared/lib/hooks/useAppDispatch';

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
	children: ReactNode
	name: StateSchemaKey
	reducers: ReducersList
	removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({children, name, reducers, removeAfterUnmount}: DynamicModuleLoaderProps) => {
	const
		dispatch = useAppDispatch(),
		store = useStore() as ReduxStoreWithReducerManager;
		
	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
			store.reducerManager.add(name, reducer);
			dispatch({ type: `@INIT ${name} reducer` });
		});
		
		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
					store.reducerManager.remove(name);
					dispatch({ type: `@DESTROY ${name} reducer` });
				});
			}
		};
	}, [dispatch, name, reducers, removeAfterUnmount, store.reducerManager]);
	
	return (
		<>
			{children}
		</>
	);
};
