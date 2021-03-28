const fs = require('fs');

fs.readdir('./', (err, files) => {
	if (err) return console.log(err);

	files.forEach((file) => {
		fs.readFile(file, (err, fileData) => {
			if (err) return console.log(err);

			console.log(`${file}: ${fileData.length}`);
		});
	});
	console.log('Done!');
});
