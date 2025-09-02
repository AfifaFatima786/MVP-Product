const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

// Create HTTP server
const server = http.createServer(app);

// Attach Socket.IO to server
const io = new Server(server, {
  cors: {
    origin:"*"},
});


app.get('/',(req,res)=>{
    res.send("hello word");
})

io.on("connection",(socket)=>{
    console.log("connected user")
    socket.on("new_job_created", ({job,area}) =>{   console.log("Job aagyi bhai",job);

    io.emit("new_job",{job})

    })
    

})





server.listen(3000,()=>{
    console.log("Server is running")
})