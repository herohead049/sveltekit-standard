import { Server } from 'socket.io';

let socketUsers = [];

export default function injectSocketIO(server) {
	const io = new Server(server);

	io.on('connection', (socket) => {
		socket.on('join-room', (message) => {
			console.log('Client joined room: ', message, socket.id);
			socket.join(message);
			const socketUser = {
				socketId: socket.id
			};
			socketUsers.push(socketUser);

			io.emit('socket-users', socketUsers);
		});

		socket.on('leave-room', (message) => {
			//console.log('Client left room: ', message, socket.id);
			socketUsers = socketUsers.filter((user) => user.socketId !== socket.id);
			socket.leave(message);
		});

		socket.on('disconnect', () => {
			console.log('Client disconnected, cleaning up', socket.id);
			socketUsers = socketUsers.filter((user) => user.socketId !== socket.id);
			io.emit('socket-users', socketUsers);
			socket._cleanup();
		});
	});

	console.log('SocketIO injected');
}
