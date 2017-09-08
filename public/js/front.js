var socket = io.connect("http://localhost:3000");

var burgerButton = document.getElementById("burger");
var tacoButton = document.getElementById("taco");
var iceButton = document.getElementById("ice");
var bCount = document.getElementById("bg");
var tCount = document.getElementById("tc");
var iCount = document.getElementById("ic");

bCount.innerHTML = "0";
tCount.innerHTML = "0";
iCount.innerHTML = "0";


burgerButton.addEventListener("click", function()
{
    socket.emit("upvote", 
    {
        food: "burger"
    });
});
    
tacoButton.addEventListener("click", function()
{
    socket.emit("upvote", 
    {
        food: "taco"
    });
});

iceButton.addEventListener("click", function()
{
    socket.emit("upvote", 
    {
        food: "ice"
    });
});
    
socket.on("upvote", function(data)
{
    bCount.innerHTML = data[0].count;
    tCount.innerHTML = data[1].count;
    iCount.innerHTML = data[2].count;    
});