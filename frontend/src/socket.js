import {io} from "socket.io-client";
const socket=io("https://mvp-product-ad6b.onrender.com");


socket.on("connect",()=>{
    console.log("connected ",socket.id)
    
})

export default socket

