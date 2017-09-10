var foodCount = [];
var foodDivs = [];
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
        foodCount.push(data);
        
        io.sockets.emit("addFood", foodCount);
    });
    
    socket.on("addFoodDiv", function(data)
    {
        foodDivs.push(data);
        io.sockets.emit("addFoodDiv", foodDivs);
    });
    
});
