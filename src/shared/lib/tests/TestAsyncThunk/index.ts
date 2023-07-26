import type { AsyncThunkAction } from '@reduxjs/toolkit';

import type { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> =
	(arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
	dispatch: jest.MockedFn<(...args) => unknown>;
	getStore: () => StateSchema;
	actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

	constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
		this.actionCreator = actionCreator;
		this.dispatch = jest.fn();
		this.getStore = jest.fn();
	}

	async callThunk(arg: Arg) {
		const action = this.actionCreator(arg);
		return action(this.dispatch, this.getStore, undefined);
	}
}
