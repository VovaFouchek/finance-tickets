import { io } from 'socket.io-client';

import { CONFIG } from '../../constants/config';

const SocketTicketService = () => {
	const socket = io.connect(CONFIG.BASE_URL);

	socket.on('connect', () => {
		socket.emit('start');
	});

	socket.on('ticker', tickerData => {
		console.log(tickerData);
	});

	// socket.on('disconnect', () => {
	// 	console.log(socket.connected, 'client disconnected from server');
	// });
	return <div>SocketTicketService</div>;
};

export default SocketTicketService;
