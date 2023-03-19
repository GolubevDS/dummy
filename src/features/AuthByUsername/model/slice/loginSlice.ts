import { createSlice }        from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { loginByUsername }  from '../services/loginByUsername';
import type { LoginSchema } from '../type/loginSchema';

const initialState: LoginSchema = {
	isLoading: false,
	username: '',
	password: '',
};

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state: LoginSchema, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setPassword: (state: LoginSchema, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByUsername.pending, (state) => {
				state.error = null;
				state.isLoading = true;
			})
			.addCase(loginByUsername.fulfilled, (state, _) => {
				state.isLoading = false;
			})
			.addCase(loginByUsername.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
