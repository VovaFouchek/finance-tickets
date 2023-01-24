import { getTickers } from './selectors';

describe('redux selector', () => {
	it('should select tickers from state object', () => {
		const tickers = [{ tickers: 'TSLA', price: '200', change: '152.61', change_percent: '0.03', yield: '1.17' }];

		const result = getTickers({ tickers });

		expect(result).toEqual(tickers);
	});
});
