const crypto = require('crypto');
console.log("hello");

var a = 109878;
var b = 20986;


// This timeout function has a delay of 0 milliseconds. but still it will be execute only after the global execution context is done. and call stack is empty. Then all this callbacks will be given to v8 and v8 will give ouput to the console.
setTimeout(() => {
    console.log("This should run ASAP");
}, 0); /*it will only be called once call stack of main thread is empty */

const password = crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("password 1 is encrypted successfully");


crypto.pbkdf2('password', 'salt', 100000, 50, 'sha512', (err, key) => {
    console.log("password 2 encrypted successfully");
});



function multiply(x,y){
    const result = x * y;
    return result;
}

console.log(multiply(a,b));

module.exports = {password};