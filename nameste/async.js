const fs = require('fs');
const https = require('https');
const {password} = require("./blocking");

console.log("hello world"); 

let a = 10786;
let b = 20986;

password;

https.get('https://dummyjson.com/products/1', (res) => {
    console.log("fetched data successfully");
});

setTimeout(() => {
    console.log("Set timeout called after 5 seconds");
}, 5000);

fs.readFile('nameste.txt', 'utf8', (err, data) => {
    console.log("file data: ", data);
});

function multiply(x,y){
    const result = x * y;
    return result;
}

var c = multiply(a,b);
console.log(c);