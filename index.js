const express=require('express');
const app=express();
const http=require('http');
const {Server}=require('socket.io');


const server=http.createServer(app);
const io=new Server(server);

io.on('connection',(socket)=>{
    console.log('a user connected');
    socket.on('disconnect',()=>{
        console.log('user disconnected');
    });
    socket.on('chat message',msg=>{
        io.emit('chat message',msg);
    });
})

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile("/index.html");
});

server.listen(3000,()=>{
    console.log('listening on *:3000');
});