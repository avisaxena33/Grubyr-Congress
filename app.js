var express = require("express");
var app = express();
var socket = require("socket.io");

var server = app.listen(3000, function()
{
    console.log("listenting on port 3000");
});

var io = socket(server);

io.on("connection", function()
{
    console.log("Made socket connection", socket.id);
});

