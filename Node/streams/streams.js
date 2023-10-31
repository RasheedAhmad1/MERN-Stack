const fs = require('fs');

// Read Stream
const readStream = fs.createReadStream('../files/docs/blog3.txt', { encoding: 'utf8' }); // The second argument will make it in a readable format, and we no longer have to use the 'toString()'method.

// readStream.on('data', (chunk) => {
//     console.log('---- New chunk ----');
//     console.log(chunk);
    // console.log(chunk.toString());
// });

// Write Stream
const writeStream = fs.createWriteStream('../files/docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// });

// Piping: taking data from a readable stream and writing it to a file
readStream.pipe(writeStream);