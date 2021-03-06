const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

console.log(__dirname);
app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

io.on('connection', (socket)=>{
    console.log('new connection', socket.id)
    socket.on('msg', (msg)=>{
        console.log("servidor ",msg )
        socket.broadcast.emit('msg', msg)
    })
    
})

http.listen(2500, function(){
    console.log('Listening on port 3000');
})
