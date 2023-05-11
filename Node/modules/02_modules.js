// modules and requires
/* Sometime we might want to split code into multiple different
files and then import and export things to and from those files */

// the require will go, find the file and will execute it
const int = require('./data');

/* if we print the constat, it'll be an empty object b/c we're not exporting anything 
there in the imported file and that's why we get an empty object i.e {} */
// console.log(int); // for non export

/* and also just b/c we import a file right here it doesn't automatically give us access
to the things in that file, we can't do that, we can only access that by manually exporting
the file from there */
// console.log(int); // for export
// OR 
// console.log(int.alphabets, int.consonents);

// importing multiple objects - use destructuring
// const {alphabets, consonents} = require('./data');
// console.log(alphabets, consonents);

/* ==== Built-in modules ==== */
// just import and use them...
const os = require('os');
console.log(os.platform(), os.homedir());