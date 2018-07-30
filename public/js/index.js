			var socket = io();

			socket.on('connect', function() {
				console.log('Connected to server');

				// socket.emit('createEmail', {
				// 	to: 'yo@example.com',
				// 	text: "hey this is your friend"
				// })

				// socket.emit('createMessage', {from: "Me", text:"Here we are"});
			})

			socket.on('disconnect', function() {
				console.log('Disconnected from server');
			})

			// socket.on('newEmail', function(email) {
			// 	console.log('New email');
			// 	console.log(email);
			// })

			socket.on('newMessage', function(message) {
				console.log('New message: ');
				console.log(message);
			})
