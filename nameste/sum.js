let a = console.log("This is coming from sum module");

let multiply = function(a,b){
    let sum = a*b;
    console.log(sum);
}

let add = function(a,b){
    let sum = a+b;
    console.log(sum);
}

// module.exports = {add,multiply};
module.exports.add = add;