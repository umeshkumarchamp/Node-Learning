const os = require('os');
console.log(os.arch());
const freeMemory = os.freemem();

// console.log(`${freeMemory / 1024 / 1024 / 1024}`);

// console.log(os.totalmem()/1024/1024/1024);

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());