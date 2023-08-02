import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false,
	data: null,
	error: null,
};

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
