const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');


const publicPath = path.join(__dirname, '../public');

const http = require('http');
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(express.static(publicPath))

app.listen(port, (err) => {
	if (err) return console.log('ERROR: could not start server', err);

	console.log(`Started on port ${port}`);
})
