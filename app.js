var burger = 
{
    name: "burger",
    count: 0
};

var taco = 
{
    name: "taco",
    count: 0
};

var ice = 
{
    name: "ice",
    count: 0
};

var foodCount = [burger,taco,ice];


var express = require("express");
var app = express();
var socket = require("socket.io");

var server = app.listen(3000, function()
{
    console.log("listenting on port 3000");
});

app.use(express.static("public"));

var io = socket(server);

io.on("connection", function(socket)
{
    console.log("Made socket connection", socket.id);
    io.sockets.emit("upvote", foodCount);
    socket.on("upvote", function(data)
{
    for(var i = 0; i< foodCount.length; i++)
        {
            if (data.food == foodCount[i].name)
                {
                    foodCount[i].count++;
                }
        }
    io.sockets.emit("upvote", foodCount);
});

});








      
