var socket = io.connect("http://localhost:3000");

var foodCount = [];

socket.on("showDeals", function(data)
{
    document.getElementById("main").innerHTML = "";
    foodCount = data.slice(0);

    foodCount.forEach(function(element)
        {
            if(element.city == )
               {
                    var div = document.createElement("div");
                    div.style.width = "300px";
                    div.style.height = "300px";
                    div.style.backgroundColor = "red";
                    div.style.margin = "10px";
                    div.innerHTML = element.name + " " + element.address + " " + element.city + " " + element.state + " " + element.zip + element.deal + " " + element.votes;
                    div.addEventListener("click", function()
                        {
                            socket.emit("upvote", element);
                        });
        
                    var img = new Image();
                    img.src = element.image;
                    img.style.height = "150px";
                    img.style.width = "150px";
                    div.appendChild(img);
                    document.getElementById("main").appendChild(div);
               }
        });    
});

socket.on("addFood", function(data)
{
    if(data.city == )
       {
            foodCount.push(data);
            var div = document.createElement("div");
            div.style.width = "300px";
            div.style.height = "300px";
            div.style.backgroundColor = "red";
            div.style.margin = "10px";
            div.innerHTML = data.name + " " + data.address + " " + data.city + " " + data.state + " " + data.zip + " " + data.deal + " " + data.votes;
            div.addEventListener("click", function()
                {
                    socket.emit("upvote", data);
                });
    
            var img = new Image();
            img.src = data.image;
            img.style.height = "150px";
            img.style.width = "150px";
            div.appendChild(img);
            document.getElementById("main").appendChild(div);
       }
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
        
            div.addEventListener("click", function()
            {
                socket.emit("upvote", element);
            });
        
            var img = new Image();
            img.src = element.image;
            img.style.height = "150px";
            img.style.width = "150px";
            div.appendChild(img);
        
            document.getElementById("main").appendChild(div);   
        });
});
