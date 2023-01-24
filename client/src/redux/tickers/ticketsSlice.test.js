import tickersReducer from './reducer';

const initialState = { isLoading: true, tickers: [] };

describe('tickersSlice', () => {
	it('should return default state when passed an empty action', () => {
		const result = tickersReducer(undefined, { type: '' });
		expect(result).toEqual(initialState);
	});
});
