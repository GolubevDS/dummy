import type { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import type { Story }                          from '@storybook/react';

import { StoreProvider }    from 'app/providers/StoreProvider';
import type { StateSchema } from 'app/providers/StoreProvider';
import { profileReducer }   from 'entities/Profile';
import { loginReducer }     from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	loginForm: loginReducer,
	profile: profileReducer,
};

export const StoreDecorator =
  (
  	state: DeepPartial<StateSchema>,
  	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
  ) =>
  	// eslint-disable-next-line react/display-name
  	(StoryComponent: Story) =>
  		(
  			<StoreProvider
  				asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  				initialState={state}
  			>
  				<StoryComponent />
  			</StoreProvider>
  		);
