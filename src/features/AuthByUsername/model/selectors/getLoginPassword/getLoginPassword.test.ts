import type { DeepPartial } from '@reduxjs/toolkit';

import type { StateSchema } from 'app/providers/StoreProvider';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.ts', () => {
	it('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				password: 'SECRET',
			},
		};
		expect(getLoginPassword(state as StateSchema)).toEqual('SECRET');
	});
	it('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginPassword(state as StateSchema)).toEqual('');
	});
});
