const assert = require('assert');
const User = require('../src/user');

describe('Reading Users out of the database', () => {
	let joe;

	beforeEach((done) => {
		joe = new User({
			name: 'Joe'
		});
		joe.save().then(() => done());
	});

	it('Find all users with a name Joe', (done) => {
		User.find({ name: 'Joe' }).then((users) => {
			console.log(users);
			assert(users[0]._id.toString() === joe._id.toString());
			done();
		});
	});
	it('Find a user with a particular id', (done) => {
		User.findOne({ _id: joe._id }).then((user) => {
            console.log(user);
			assert(user.name === 'Joe');
			done();
		});
	});
});
