/* ==== Node global object ====*/
// 'global' is the global object in node context like 'window' objects in the browser
// console.log(global);

// runs once after the specified time
// global.setTimeout(() => { // we can omit the global object b/c its available in the node context
//     console.log('In the Timeout');
//     clearInterval(interval); // clears the interval
// }, 3000);

// runs forever after the specified time
// const interval = global.setInterval(() => {
//     console.log('In the Interval');
// }, 1000);

console.log(__dirname);
console.log('----');
console.log(__filename);