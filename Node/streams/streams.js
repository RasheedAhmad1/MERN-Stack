const fs = require('fs');

const readStream = fs.createReadStream('../my_files/docs/blog3.txt');

readStream.on('data', (chunk) =>{
    console.log('---- New chunk ----');
    console.log(chunk);
});