const fs = require('fs');
const mapAsync = require('./06a-read-dir-callback');


fs.readdir('./', (err, files) => {
    if(err) return console.error(err);
    
    mapAsync(files, fs.readFile, (err, results) => {
        if(err) return console.error(err);

        results.forEach((data, idx) => {
            console.log(`${files[idx]}: ${data.length}`)
        })
        console.log('Done!')
    })
})
