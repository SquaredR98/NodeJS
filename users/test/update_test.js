const assert = require('assert');
const User = require('../src/user');

describe('Updating a record', () => {
	let joe;

	beforeEach((done) => {
		joe = new User({ name: 'Joe', postCount: 0 });
		joe.save().then(() => done());
	});

	function assertName(operation, done) {
		operation
			.then(() => User.find({}))
			.then((users) => {
				assert(users.length === 1);
				assert(users[0].name === 'Alex');
				done();
			});
	}

	it('isntance set and save', (done) => {
		joe.set('name', 'Alex');
		assertName(joe.save(), done);
	});

	it('A model instance can update', (done) => {
		assertName(joe.update({ name: 'Alex' }), done);
	});

	it('A model class can update', (done) => {
		assertName(
			User.updateMany({ name: 'Joe' }, { name: 'Alex' }),
			done,
		);
	});

	it('A model class can update one record', (done) => {
		assertName(
			User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' }),
			done,
		);
	});

	it('A model class can find a record with an ID and update', (done) => {
		assertName(User.findByIdAndUpdate(joe._id, { name: 'Alex' }), done);
	});

	it('A user can have their post count incremented', (done) => {
		User.updateMany({ name: 'Joe' }, { $inc: { postCount: 10 } })
		.then(() => User.findOne( {name: 'Joe'}))
		.then((user) => {
			assert(user.postCount === 10);
			done();
		})
	});
});
