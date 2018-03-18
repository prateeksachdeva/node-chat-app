const path=require('path');
const express=require('express');
const socketIO =require('socket.io');
const http=require('http');
var publicPath=path.join(__dirname,'../public');
var port=process.env.Port || 3000;

const app =express();
var server=http.createServer(app);
app.use(express.static(publicPath));
server.listen(port,()=>{
  console.log('connected to the port');
});
