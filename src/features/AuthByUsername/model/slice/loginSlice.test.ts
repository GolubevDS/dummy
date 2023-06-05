import type { DeepPartial } from '@reduxjs/toolkit';

import type { LoginSchema } from 'features/AuthByUsername';

import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
	it('should update the username in the login state', () => {
		const state: DeepPartial<LoginSchema> = { username: 'admin' };
		expect(loginReducer(
			state as LoginSchema,
			loginActions.setUsername('root'),
		)).toEqual({ username: 'root' });
	});
	it('should update the password in the login state', () => {
		const state: DeepPartial<LoginSchema> = { password: '12345678' };
		expect(loginReducer(
			state as LoginSchema,
			loginActions.setPassword('qwerty'),
		)).toEqual({ password: 'qwerty' });
	});
});
