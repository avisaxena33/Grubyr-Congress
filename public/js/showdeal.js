var socket = io.connect("http://localhost:3000");

var foodCount = [];

socket.on("showDeals", function(data)
{
    document.getElementById("main").innerHTML = "";
    foodCount = data.slice(0);

    foodCount.forEach(function(element)
        {
            var div = document.createElement("div");
            div.style.width = "300px";
            div.style.height = "300px";
            div.style.backgroundColor = "red";
            div.style.margin = "10px";
            div.innerHTML = element.name + " " + element.location + " " + element.deal + " " + element.votes;
            div.addEventListener("click", function()
                {
                    socket.emit("upvote", element);
                });
            document.getElementById("main").appendChild(div);
        });    
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
    div.addEventListener("click", function()
    {
        socket.emit("upvote", data);
    });
    document.getElementById("main").appendChild(div);
});

socket.on("upvote", function(data)
{
    document.getElementById("main").innerHTML = "";
    foodCount = data.slice(0);
    foodCount.forEach(function(element)
        {
            var div = document.createElement("div");
            div.style.width = "300px";
            div.style.height = "300px";
            div.style.backgroundColor = "red";
            div.style.margin = "10px";
            div.innerHTML = element.name + " " + element.location + " " + element.deal + " " + element.votes;
            console.log(element);
            div.addEventListener("click", function()
            {
                socket.emit("upvote", element);
            });
            document.getElementById("main").appendChild(div);   
        });
});
