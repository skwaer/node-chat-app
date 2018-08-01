const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 8080;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(bodyParser.json());
app.use(express.static(publicPath))

io.on('connection', (socket) => {
	console.log('New user connected');

	// socket.emit('newEmail', {
	// 	from: "mike@example.com",
	// 	text: "yo yo yo"
	// });

	// socket.on('createEmail', (newEmail) => {
	// 	console.log('createEmail', newEmail);
	// })

	socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app!'));


	socket.broadcast.emit('newMessage', generateMessage("Admin", "User joined"));

	socket.on('createEmail', (newEmail) => {
		console.log('createEmail', newEmail);
	})

	socket.on('createMessage', (message, callback) => {
		console.log(message);
		io.emit('newMessage', generateMessage( message.from,message.text));
		callback('From server');

		// socket.broadcast.emit('newMessage', {
		// 	from: message.from,
		// 	text: message.text,
		// 	createdAt: new Date().getTime()
		// })

	})

	// socket.emit('newMessage', {
	// 	from: "yoyooo",
	// 	text: "yayayay",
	// 	createdAt: 1234
	// });

	socket.on('disconnect', () => {
		console.log('disconnected');
	})
})

server.listen(port, (err) => {
	if (err) return console.log('ERROR: could not start server', err);

	console.log(`Started on port ${port}`);
})
