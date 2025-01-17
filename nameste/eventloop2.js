/**
 * Last line of the code
 * next tick
 * promise
 * time out called
 * set Immediate
 * File Reading inside C8
 * 2nd next tick
 * 2nd set immediate
 * timer 2 is running
 */


const fs = require("fs");

setImmediate(() => {
  console.log("Set immediate called");
});

setTimeout(() => {
  console.log("Time out called");
}, 0);

Promise.resolve().then(() => console.log("promise is resolved"));

fs.readFile("./nameste.txt", "utf8", () => {
  setTimeout(() => {
    console.log("timer 2 is running");
  }, 0);

  process.nextTick(() => console.log("2nd next tick"));

  setImmediate(() => console.log("2nd set immediate"));

  console.log("File Reading inside C8");
});

process.nextTick(()=> console.log("next Tick"));
console.log("Last line of the code");