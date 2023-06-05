import type { DeepPartial } from '@reduxjs/toolkit';

import type { StateSchema } from 'app/providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.ts', () => {
	it('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: 'Admin',
			},
		};
		expect(getLoginUsername(state as StateSchema)).toEqual('Admin');
	});
	it('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginUsername(state as StateSchema)).toEqual('');
	});
});
