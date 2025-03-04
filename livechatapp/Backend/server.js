const app = require('./src/app');
const connect = require('./src/database/db');

connect();


const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', Socket => {
  console.log("user is connected");
});
server.listen(3000);

app.listen("3000", ()=>{
    console.log(`server is running on port 3000`);
})