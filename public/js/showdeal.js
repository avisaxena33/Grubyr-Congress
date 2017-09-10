var socket = io.connect("http://localhost:3000");


var foodCount = [];


//Updates every new user's page with the current food deals
socket.on("startingFood", function(data)
{
    foodCount = data;
    for (var i = 0; i < foodCount.length; i++)
        {
            var div = document.createElement("div");
            div.style.width = "300px";
            div.style.height = "300px";
            div.style.backgroundColor = "red";
            div.innerHTML = foodCount[i].name + " " + foodCount[i].location + " " + foodCount[i].deal + " " + foodCount[i].votes;
            document.getElementById("main").appendChild(div);
        }
});

//Function that updates every user's page for deals when a new deal is added
socket.on("addFood", function(data)
{
    foodCount.push(data)
    var div = document.createElement("div");
    div.style.width = "300px";
    div.style.height = "300px";
    div.style.backgroundColor = "red";
    div.innerHTML = data.name + " " + data.location + " " + data.deal + " " + data.votes;
    div.addEventListener("click", function()
    {
        socket.emit("")
    });
    document.getElementById("main").appendChild(div);
});

//Function that updates every user's page for deals when upvotes are sent
socket.on("upvote", function(data)
{
    
});