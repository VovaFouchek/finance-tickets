import { useEffect } from 'react';

import SocketTicketService from '../../shared/services/ticket.socket.service';

const Board = () => {
	const initialize = () => {
		SocketTicketService();
	};

	useEffect(() => {
		initialize();
	}, []);
};

export default Board;
