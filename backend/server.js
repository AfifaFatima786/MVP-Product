const express=require('express')
const app=express()
import { createServer } from "http";
import { Server } from "socket.io";

const server = createServer(app);

app.get('/',(req,res)=>{
    res.send("hello word");
})

app.listen(3000,()=>{
    console.log("Server is running")
})