import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tickers: [],
	isLoading: true,
};

const ticketsSlice = createSlice({
	name: 'tickers',
	initialState,
	reducers: {
		setTickersData(state, action) {
			state.tickers = action.payload;
			state.isLoading = false;
		},
	},
});

export const { startLoading, setTickersData } = ticketsSlice.actions;

export default ticketsSlice.reducer;
