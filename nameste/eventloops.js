const fs = require('fs');

const a = 10011;
setImmediate(() => {
  console.log("Set Immediate");
});

Promise.resolve().then(() => {
  console.log("Promise is resolved");
});

fs.readFile('nameste.txt', 'utf8', (err, data) => {
  console.log("file reading is done");
});

setTimeout(() => {
    console.log("Set timeout called");
}, 0);

process.nextTick(() => {
  console.log("Process.nextTick called");
});

function printA(){
    console.log(a);
}

printA();
console.log("This is last line of the code");

/**
 * a = 10011
 * This is last line of the code
 * process.nextTick called
 * promise is resolved
 * timeout called
 * set immediate
 * file reading is done
 */