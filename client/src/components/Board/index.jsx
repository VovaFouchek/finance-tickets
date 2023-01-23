import { useEffect } from 'react';

import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';

import { CONFIG, TickersEvent } from '../../constants/config';
import { setTickersData } from '../../redux/tickers/reducer';
import { getTickers } from '../../redux/tickers/selectors';
import BasicTable from '../BasicTable';
import Loader from '../Loader';

const Board = () => {
	const dispatch = useDispatch();
	const { isLoading } = useSelector(getTickers);
	const socket = io.connect(CONFIG.BASE_URL);

	const handleConnection = () => socket.emit(TickersEvent.Start);
	const handleTickers = tickersData => dispatch(setTickersData(tickersData));

	const initializeApplication = () => {
		socket.on(TickersEvent.Connect, handleConnection);
		socket.on(TickersEvent.Ticker, handleTickers);
	};

	const destroySocketConnection = () => {
		socket.off(TickersEvent.Connect, handleConnection);
		socket.off(TickersEvent.Ticker, handleTickers);
	};

	useEffect(() => {
		initializeApplication();

		return () => {
			destroySocketConnection();
		};
	}, []);

	if (isLoading) {
		return (
			<Container sx={{ display: 'grid', placeContent: 'center' }}>
				<Loader />
			</Container>
		);
	}

	return <BasicTable />;
};

export default Board;
