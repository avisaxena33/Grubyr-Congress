//Connect user to new socket
var socket = io.connect("http://localhost:3000");

//Waits till dom is loaded before initializing variables
document.addEventListener("DOMContentLoaded", function()
{
    var btn = document.getElementById("submit");
    var food = document.getElementById("food");
    var location = document.getElementById("location");
    var deal = document.getElementById("deal");
    var btn = document.getElementById("submit");
    
    btn.addEventListener("click", function()
    {
        var foodItem = 
        {
            name: food.value,
            location: location.value,
            deal: deal.value,
            votes: 0
        };
        
    
        socket.emit("addFood", foodItem);
                
    });
});

