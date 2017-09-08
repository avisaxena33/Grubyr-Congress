//Connect socket to server
var socket = io.connect("http://localhost:3000");

//Setup input form field variables
var btn = document.getElementById("submit");
var food = document.getElementById("food");
var location = document.getElementById("location");
var deal = document.getElementById("deal");

btn.addEventListener("click", function()
{
    socket.emit("addFood", 
    {
        food: food.value,
        location: location.value,
        deal: deal.value
    });
});

socket.on("upvote", function(data)
{
 
});