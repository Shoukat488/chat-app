const io = require('socket.io');

io.listen(3001,()=>{
    console.log("Connected! ")
});