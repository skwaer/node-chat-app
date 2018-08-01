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

				var li = jQuery('<p></p>');
				li.text(`${message.from}: ${message.text}`);

				jQuery('#message-dest').append(li);
			})

			// socket.emit('createMessage' ,{
			// 	from: 'Joey',
			// 	text: 'this is a message'
			// }, function (data) {
			// 	console.log('Ack ', data);
			// })

jQuery('#message-form').on('submit', function(e) {
	e.preventDefault();
	socket.emit('createMessage', {
		from: 'USER',
		text: jQuery('[name=message]').val()
	}, function () {

	})
})
