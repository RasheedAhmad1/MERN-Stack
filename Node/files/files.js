// import the files modules
const fs = require('fs');
/* ==== Reding files ==== */
// readFile() takes two arguments - path and a callback function
/* readFile() is asynchronous and takes some time to do their job 
also it doesn't block our code - it means that it takes some time and in that 
time it executes the other code, and when it gets completed it fires the callback ftn */
// fs.readFile('./docs/blog1.txt', (errr, dataa) => {
//     if(errr) {
//         console.log(errr);
//     } else {
//         console.log(dataa); // will print the Buffer
//         console.log(dataa.toString()); // convert butter into readable format
//     }
// });

// This console will be printed before readFile() execution b/c
// readFile() takes some time to do their job
// console.log('Last line');

/* ==== Writing files ==== */
// It takes three arguments - path, content, callback function
// fs.writeFile('./docs/blog2.txt', 'Blog two overwrited', () => {
//     console.log('File was written and overwrited!');
// });
// It'll overwrite the file, and if it doesn't exist it will create one with the content

/* ==== Directories - creating a directory ==== */
// create a directory name 'assets' in the relative directory './'
// fs.mkdir('./assets', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('Directory created!');
// });

/* If the directory exist, it'll give us error while
run the code, b/c it'll exist. To prevent this... */
// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('Directory created!');
//     });
// } else {
//     console.log('File already existed!');
// }

/* ==== Directories - deleting a directory ==== */
// fs.rmdir('./assets', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('Directory deleted!');
// });

/* ==== Deleting a file ==== */
// make sure the file exists
if(fs.existsSync('./docs/blog2.txt')) {
    fs.unlink('./docs/blog2.txt', (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('File deleted!');
        }
    });
} else {
    console.log(`File doesn't existed!`);
}