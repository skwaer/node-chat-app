const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 8080;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(bodyParser.json());
app.use(express.static(publicPath))

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.on('disconnect', () => {
		console.log('disconnected');
	})
})

server.listen(port, (err) => {
	if (err) return console.log('ERROR: could not start server', err);

	console.log(`Started on port ${port}`);
})
