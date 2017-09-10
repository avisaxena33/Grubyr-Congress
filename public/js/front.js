//Connect socket to server
var socket = io.connect("http://localhost:3000");

//Setup input form field variables
var btn = document.getElementById("submit");
var food = document.getElementById("food");
var location = document.getElementById("location");
var deal = document.getElementById("deal");
var foodCount = [];

//Button that emits the new food deal data to the server from user input
btn.addEventListener("click", function()
{
    socket.emit("addFood", 
    {
        food: food.value,
        location: location.value,
        deal: deal.value
    });
});

//Updates every new user's page with the current food deals
socket.on("startingFood", function(data)
{
    data = foodCount;
});

//Function that updates every user's page for deals when a new deal is added
socket.on("addFood", function(data)
{
    data.push(foodCount);
}

//Function that updates every user's page for deals when upvotes are sent
socket.on("upvote", function(data)
{
 
});