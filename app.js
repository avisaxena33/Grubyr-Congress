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
    
    io.sockets.emit("startingFood", foodCount);
    
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
        
        foodCount.push(delicacy);
        io.sockets.emit("addFood", delicacy);
    });
    
});
