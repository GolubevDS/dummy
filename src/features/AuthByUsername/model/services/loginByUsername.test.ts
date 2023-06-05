import axios from 'axios';

import { userActions }    from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
	it('should successfully login a user by username', async () => {
		const userValue = { username: 'root', id: 1 };
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
		
		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({ username: 'root', password: 'root' });
		
		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(userValue);
	});
	
	it(
		'should return access denied with status code 403 when attempting to login with incorrect credentials',
		async () => {
			mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
			
			const thunk = new TestAsyncThunk(loginByUsername);
			const result = await thunk.callThunk({ username: 'root', password: 'root' });
			
			expect(thunk.dispatch).toHaveBeenCalledTimes(2);
			expect(mockedAxios.post).toHaveBeenCalled();
			expect(result.meta.requestStatus).toBe('rejected');
			expect(result.payload).toBe(undefined);
		});
});
