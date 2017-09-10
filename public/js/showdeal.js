var socket = io.connect("http://localhost:3000");


var foodCount = [];
var foodDivs =[];


//Updates every new user's page with the current food deals
socket.on("startingFood", function(data)
{
    foodCount = data;
    for (var i = 0; i < foodDivs; i ++)
        {
            document.getElementById("main").appendChild(foodDivs[i]);
        }
    
});

//Function that updates every user's page for deals when a new deal is added
socket.on("addFood", function(data)
{
    foodCount = data;
});

socket.on("addFoodDiv", function(data)
{
   foodDivs = data; 
   for (var i = 0; i < foodDivs.length; i++)
       {
           document.getElementById("main").appendChild(foodDivs[i]);
       }
});

//Function that updates every user's page for deals when upvotes are sent
socket.on("upvote", function(data)
{
    
});