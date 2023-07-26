import { Reducer }              from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { useStore }             from 'react-redux';

import { ReduxStoreWithReducerManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { useAppDispatch }                               from 'shared/lib/hooks/useAppDispatch';

interface DynamicModuleLoaderProps {
	children: ReactNode
	name: StateSchemaKey
	reducer: Reducer
}

export const DynamicModuleLoader = ({children, name, reducer}: DynamicModuleLoaderProps) => {
	const
		dispatch = useAppDispatch(),
		store = useStore() as ReduxStoreWithReducerManager;
		
	useEffect(() => {
		store.reducerManager.add(name, reducer);
		dispatch({ type: `@INIT ${name} reducer` });
		
		return () => {
			store.reducerManager.remove(name);
			dispatch({ type: `@DESTROY ${name} reducer` });
		};
	}, [dispatch, name, reducer, store.reducerManager]);
	
	return (
		<>
			{children}
		</>
	);
};
