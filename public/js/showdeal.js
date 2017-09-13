var socket = io.connect("http://localhost:3000");

var foodCount = [];

socket.on("showDeals", function(data)
{
    foodCount = data;
    document.getElementById("main").innerHTML = "";

    for (var i = 0; i < foodCount.length; i++)
        {
            var div = document.createElement("div");
            div.style.width = "300px";
            div.style.height = "300px";
            div.style.backgroundColor = "red";
            div.style.margin = "10px";
            div.innerHTML = foodCount[i].name + " " + foodCount[i].location + " " + foodCount[i].deal + " " + foodCount[i].votes;
            document.getElementById("main").appendChild(div);
        }    
});

socket.on("addFood", function(data)
{
    foodCount.push(data);
    var div = document.createElement("div");
    div.style.width = "300px";
    div.style.height = "300px";
    div.style.backgroundColor = "red";
    div.style.margin = "10px";
    div.innerHTML = data.name + " " + data.location + " " + data.deal + " " + data.votes;
    document.getElementById("main").appendChild(div);
});
