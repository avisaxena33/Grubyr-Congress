//Connect socket to server
var socket = io.connect("http://localhost:3000");
var foodCount = [];

//Setup input form field variables
document.addEventListener("load", function()
{
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
});


//Updates every new user's page with the current food deals
socket.on("startingFood", function(data)
{
    data = foodCount;
});

//Function that updates every user's page for deals when a new deal is added
socket.on("addFood", function(data)
{
    foodCount.push(data);
    var div = document.createElement("div");
    div.style.width = "300px";
    div.style.height = "300px";
    div.style.innerHTML = data.name + " " + data.location + " " + data.deal + " " + data.votes;
    document.getElementById("main").appendChild(div);
});

//Function that updates every user's page for deals when upvotes are sent
socket.on("upvote", function(data)
{
    
});