import type { DeepPartial } from '@reduxjs/toolkit';
import type { Story }       from '@storybook/react';

import { StoreProvider }    from 'app/providers/StoreProvider';
import type { StateSchema } from 'app/providers/StoreProvider';

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
	<StoreProvider initialState={state}>
		<StoryComponent />
	</StoreProvider>
);
