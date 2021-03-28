const http = require('http');

const port = process.env.PORT || 1337;

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.end(
		JSON.stringify({
			name: 'Ravi Ranjan',
			age: 21,
			education: 'Bachelor of Technology',
			major: 'Computer Science and Technology',
			college: 'Indian Institute of Informaton Technology',
		}),
	);
});

server.listen(port);
console.log(`Server listening on port ${port}`)