import { createAsyncThunk } from '@reduxjs/toolkit';
import axios                from 'axios';

import { User } from 'entities/User';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

function assertLoginData(data: unknown): asserts data is User {
	if (data === null || typeof data !== 'object') {
		throw new Error('data is not an object or is null');
	}
	
	if (!('id' in data) || typeof data.id !== 'string') {
		throw new Error('data.id is not a string or is missing');
	}
	
	if (!('username' in data) || typeof data.username !== 'string') {
		throw new Error('data.username is not a string or is missing');
	}
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
	'login/loginByUsername',
	async (authData, { rejectWithValue }) => {
		try {
			const response = await axios.post<User>('http://localhost:8000/login', authData);
			
			assertLoginData(response.data);
			
			return response.data;
		} catch (error) {
			return rejectWithValue('error');
		}
	},
);
