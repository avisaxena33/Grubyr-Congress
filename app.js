var foodCount = [];
var express = require("express");
var app = express();
var socket = require("socket.io");

var server = app.listen(3000, function()
{
    console.log("listening on port 3000");
});

var io = socket(server);

app.use(express.static("public"));

io.on("connection", function(socket)
{
    console.log("Made socket connection", socket.id);
    
    io.sockets.emit("showDeals", foodCount);
    
    socket.on("addFood", function(data)
    {   
        foodCount.push(data);
        io.sockets.emit("addFood", data);
    });
    
});
