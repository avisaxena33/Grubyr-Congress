var socket = io.connect("http://localhost:3000");


var foodCount = [];
var foodDivs =[];


//Function that updates every user's page for deals when a new deal is added
socket.on("addFood", function(data)
{
    foodCount = data;
});

socket.on("addDiv", function(data)
{
    var div = document.createElement("div");
    div.style.width = "300px";
    div.style.height = "300px";
    div.style.backgroundColor = "red";
    div.style.margin = "10px";
    div.innerHTML = data.name + " " + data.location + " " + data.deal + " " + data.votes;
    foodDivs.push(div);
    socket.emit("addDiv", div);
    div.addEventListener("click", function()
        {
            socket.emit("upvote");
        });
    
   for (var i = 0; i < foodDivs.length; i++)
       {
           document.getElementById("main").appendChild(foodDivs[i]);
       }
});

//Function that updates every user's page for deals when upvotes are sent
socket.on("upvote", function(data)
{
    
});