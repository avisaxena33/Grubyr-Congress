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
    var img = document.getElementById("file").files[0];
       
    
    btn.addEventListener("click", function()
    {
        
    getBase64();
        
    var foodItem = 
    {
        name: food.value,
        location: location.value,
        deal: deal.value,
        votes: 0,
        image: x
    };

        socket.emit("addFood", foodItem)
        
                
    });
});

    document.getElementById("submit").addEventListener("click", function() {
        
    //window.location.href = "confirmPage.html";
    });
    
    
    
function getBase64() {
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    console.log("reader.result", reader.result);
  }, false);
    

  if (file) {
    reader.readAsDataURL(file);
  }
    
    x = reader.result;
}




