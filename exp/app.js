const figlet = require("figlet");

figlet("MacBook Air", function(err, data){
    if(err){
        console.log("Some Error");
        console.log(err);
        return
    }
    console.log(data);
})

console.log(globalThis);