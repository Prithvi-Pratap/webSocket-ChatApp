const socket=io('http://localhost:3000');

socket.on('connection',()=>{
    console.log('connected to server');
})

const sendMessage=document.getElementById('message');
sendMessage.addEventListener('keyup',(event)=>{
    if(event.key==='Enter'){
        const msg=sendMessage.value;
        socket.emit('chat message',msg);
        sendMessage.value='';
    }
})

socket.on('chat message',msg=>{
    console.log('A user sent a message:',msg);
    const li=document.createElement('li');
    li.textContent=msg;
    document.getElementById('messages').appendChild(li);
})

socket.on('disconnect',()=>{
    console.log('disconnected from server');
})