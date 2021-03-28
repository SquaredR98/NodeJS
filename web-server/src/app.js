const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
hbs.registerPartials(partialsPath);

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Weather App',
		name: 'Ravi Ranjan',
	});
});
app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Page',
		name: 'Ravi Ranjan',
	});
});
app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help Page',
		message:
			'lorem skfdkfl skflsdk aosdapsodkpw slkdslkfd asodpqosd asldaslkd apowoapds asldalsdkapowd aksdalsdkpowd adkaklsd akjfnskjad.',
			name: "Ravi Ranjan"
	});
});

app.get('*', (req, res) => {
	res.render('error', {
		title: `Error : 404`,
		errorMsg: `Page Not Found`,
		name: "Ravi Ranjan" 
	});
});

app.get('/weather', (req, res) => {
	res.send('This is a weather Page');
});

app.listen(3000, () => {
	console.log('Listening on port: 3000');
});
