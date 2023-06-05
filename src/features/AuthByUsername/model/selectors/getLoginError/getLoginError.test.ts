import type { DeepPartial } from '@reduxjs/toolkit';

import type { StateSchema } from 'app/providers/StoreProvider';

import { getLoginError } from './getLoginError';

describe('getLoginError.ts', () => {
	it('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				error: 'Error',
			},
		};
		expect(getLoginError(state as StateSchema)).toEqual('Error');
	});
	it('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginError(state as StateSchema)).toEqual(undefined);
	});
});
