import { TableRow, Paper, Table, TableBody, TableCell, TableContainer, TableHead } from '@mui/material';
import { useSelector } from 'react-redux';

import { colorChangedTicker } from '../../constants/const';
import { getTickers } from '../../redux/tickers/selectors';

const BasicTable = () => {
	const { tickers } = useSelector(getTickers);

	const columns = [
		{
			id: 'tickers',
			label: 'Ticker',
			align: 'left',
		},
		{ id: 'price', label: 'Price', align: 'center' },
		{ id: 'change', label: 'Change', align: 'center' },
		{ id: 'change_percent', label: 'Change, (%)', align: 'center' },
		{ id: 'yield', label: 'Yield', align: 'center' },
	];

	const typeColor = value => {
		if (value > 0) {
			return colorChangedTicker.green;
		}
		if (value < 0) {
			return colorChangedTicker.red;
		}
		return colorChangedTicker.grey;
	};

	const typeSymbol = value => (value > 0 ? '+' : '');

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="tickers table">
				<TableHead>
					<TableRow>
						{columns.map(column => (
							<TableCell key={column.id} align={column.align} style={{ fontWeight: 'bold' }}>
								{column.label}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{tickers.map(row => (
						<TableRow key={row.ticker} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component="th" scope="row">
								{row.ticker}
							</TableCell>
							<TableCell align="center">${row.price}</TableCell>
							<TableCell align="center" sx={{ color: typeColor(row.change), fontWeight: 'bold' }}>
								{typeSymbol(row.change)}
								{row.change}
							</TableCell>
							<TableCell align="center" sx={{ color: typeColor(row.change) }}>
								{row.change_percent}
							</TableCell>
							<TableCell align="center">{row.yield}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default BasicTable;
