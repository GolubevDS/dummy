import { createAsyncThunk } from '@reduxjs/toolkit';
import axios                from 'axios';
import i18n                 from 'i18next';

import { User, userActions }     from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

function assertLoginData(data: unknown): asserts data is User {
	if (data === null || typeof data !== 'object') {
		throw new Error('data is not an object or is null');
	}
	
	if (!('id' in data) || typeof data.id !== 'number') {
		throw new Error('data.id is not a string or is missing');
	}
	
	if (!('username' in data) || typeof data.username !== 'string') {
		throw new Error('data.username is not a string or is missing');
	}
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
	'login/loginByUsername',
	async (authData, thunkAPI) => {
		try {
			const response = await axios.post<User>('http://localhost:8000/login', authData);
			
			assertLoginData(response.data);
			
			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
			thunkAPI.dispatch(userActions.setAuthData(response.data));
			
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(i18n.t('error.login'));
		}
	},
);
