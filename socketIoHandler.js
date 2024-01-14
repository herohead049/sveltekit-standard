import { Server } from 'socket.io';
//import type { timerMessageType } from './src/lib/types/timerMessage';

/**
 * Injects Socket.IO into the provided server instance.
 * @param {Object} server - The server instance to inject Socket.IO into.
 */
export default function injectSocketIO(server) {
	const io = new Server(server);

	io.on('connection', (socket) => {
		/**
		 * Handles when a client disconnects from the server.
		 */
		socket.on('disconnect', () => {
			console.log('Client disconnected, cleaning up', socket.id);
			socket._cleanup();
		});
	});

	console.log('SocketIO injected');
}
