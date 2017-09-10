var foodCount = [];


var express = require("express");
var app = express();
var socket = require("socket.io");

var server = app.listen(3000, function()
{
    console.log("listening on port 3000");
});

app.use(express.static("public"));

var io = socket(server);

io.on("connection", function(socket)
{
    console.log("Made socket connection", socket.id);
    
    io.sockets.emit("startingFood", foodCount);
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
    
    socket.on("addFood", function(data)
    {
        var delicacy = 
        {
            name: data.food,
            location: data.location,
            deal: data.deal,
            votes: 0
        };
        
        delicacy.push(foodCount);
        io.sockets.emit("addFood", foodCount);
    });
    
});
