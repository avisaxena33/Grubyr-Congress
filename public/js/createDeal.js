//Connect user to new socket
var socket = io.connect("http://localhost:3000");
var x;

//Waits till dom is loaded before initializing variables
document.addEventListener("DOMContentLoaded", function()
{
    var btn = document.getElementById("submit");
    var food = document.getElementById("food");
    var location = document.getElementById("location");
    var deal = document.getElementById("deal");
       
    
    btn.addEventListener("click", function()
    {
        
        getBase64();     
        //setTimeout(fooded(), 6000)
        
    });
});

    
    
function getBase64() {
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    console.log("reader.result", reader.result);
          x = reader.result;
          fooded();    
  }, false);
    

  if (file) {
    reader.readAsDataURL(file);
  }
    
}


function fooded()
{

    var foodItem = 
    {
        name: food.value,
        location: location.value,
        deal: deal.value,
        votes: 0,
        image: x
    };
        
        socket.emit("addFood", foodItem)
        
}



