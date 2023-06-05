import type { DeepPartial } from '@reduxjs/toolkit';

import type { StateSchema } from 'app/providers/StoreProvider';

import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.ts', () => {
	it('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				isLoading: true,
			},
		};
		expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
	});
	it('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
	});
});
