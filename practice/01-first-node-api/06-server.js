const http = require('http');
const queryString = require('querystring');
const fs = require('fs');
const express = require('express');

const port = process.env.PORT || 1337;
const app = express();

const respondText = (req, res) => {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello! Guys...');
};

const respondJson = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.json({
		name: 'Ravi Ranjan',
		age: 21,
		education: 'Bachelor of Technology',
		major: 'Computer Science and Technology',
		college: 'Indian Institute of Informaton Technology',
	});
};

const respondNotFound = (req, res) => {
	res.writeHead(404, { 'Content-Type': 'text/plain' });
	res.end('Not Found');
};

const respondEcho = (req, res) => {
	const { input = '' } = res.query;

	res.json({
		normal: input,
		shouty: input.toUpperCase(),
		characterCount: input.length,
		backwards: input.split('').reverse().join(''),
	});
};

const respondStatic = (req, res) => {
	const filename = `${__dirname}/public/${req.params[0]}`;
	fs.createReadStream(filename)
		.on('error', () => respondNotFound(req, res))
		.pipe(res);
};

app.get('/', respondText);
app.get('/json', respondJson);
app.get('/echo', respondEcho);
app.get('/static/*', respondStatic);

app.listen(port, () => console.log(`Server listening on PORT ${port}`));
