const fs = require('fs');

const mapAsync = (arr, fn, onFinish) => {
	let prevError;

	let nRemaining = arr.length;
	const results = [];

	arr.forEach((item, idx) => {
		fn(item, (err, data) => {
			if (prevError) return;

            if(err){
                prevError = err;
                return onFinish(err);
            }

            results[idx] = data;

            nRemaining--;
            if(!nRemaining) onFinish(null, results);
		});
	});
};


module.exports = mapAsync;