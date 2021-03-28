const mongoose = require('mongoose');

url = 'mongodb://localhost:27017/users_test';

// Overriding default Mongoose Promises
mongoose.Promise = global.Promise;

before((done) => {
	mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	});

	mongoose.connection
		.once('open', () => {
			done();
		})
		.on('error', (error) => {
			console.warn('Warning: ', error);
		});
});

beforeEach((done) => {
	mongoose.connection.collections.users.drop(() => {
		// Ready to run the next test!
		done();
	});
});
