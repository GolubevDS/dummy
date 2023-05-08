import { Reducer }               from '@reduxjs/toolkit';
import { ReactNode, useEffect }  from 'react';
import { useDispatch, useStore } from 'react-redux';

import { ReduxStoreWithReducerManager, StateSchemaKey } from 'app/providers/StoreProvider';

interface DynamicModuleLoaderProps {
	children: ReactNode
	name: StateSchemaKey
	reducer: Reducer
}

export const DynamicModuleLoader = ({children, name, reducer}: DynamicModuleLoaderProps) => {
	const
		dispatch = useDispatch(),
		store = useStore() as ReduxStoreWithReducerManager;
		
	useEffect(() => {
		store.reducerManager.add(name, reducer);
		dispatch({ type: `@INIT ${name} reducer` });
		
		return () => {
			store.reducerManager.remove(name);
			dispatch({ type: `@DESTROY ${name} reducer` });
		};
	}, []);
	
	return (
		<>
			{children}
		</>
	);
};
