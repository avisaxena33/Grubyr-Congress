var socket = io.connect("http://localhost:3000");
var userCity = "";
var cityFilled = false;
var foodCount = [];

socket.on("showDeals", function(data)
{
    document.getElementById("main").innerHTML = "";
    foodCount = data.slice(0);

    foodCount.forEach(function(element)
        {
            if(element.city.toLowerCase() == userCity.toLowerCase())
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
    if(data.city.toLowerCase() == userCity.toLowerCase())
       {
            foodCount.push(data);
            var div = document.createElement("div");
            div.style.width = "300px";
            div.style.height = "300px";
            div.style.backgroundColor = "red";
            div.style.margin = "10px";
            div.innerHTML = data.name + " " + data.address + " " + data.city + " " + data.state + " " + data.zip + data.deal + " " + data.votes;
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
        });
});







(function() {

	window.onload = function() {



    var map = new google.maps.Map(document.getElementById("map"), {

          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
					styles: [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#0052ff"
            },
            {
                "gamma": "0.57"
            },
            {
                "lightness": "26"
            },
            {
                "saturation": "54"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3f3f3f"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f3f3f3"
            },
            {
                "weight": "1.57"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#0563C1"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#5880f4"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#0a41cb"
            }
        ]
    }
]
        });

        var geocoder = new google.maps.Geocoder;


            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude - .12
              };
              map.setCenter(pos);

              var realCoords = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              geocoder.geocode({'location': realCoords}, function(results, status) {
                if (status === 'OK') {

                  userCity = results[0].address_components[2].long_name;
                  // This will work
                  console.log(userCity);
                  socket.emit("getCity");
                }
              });

            });






		// Creating the JSON data
		var json = [
		    {
		        "title": "Naps Pizza",
		        "lat": 42.104362,
		        "lng": -88.023158,
		        "description": "<div class='blurb'><img src='img/eat.jpg' alt='dee'><div class='righta'><h6>Napoli's Pizza</h6><span>5 Slices for $3</span></div></div>"
		    },
		    {
		        "title": " ",
		        "lat": 42.1387124,
		        "lng": -88.0277098,
		        "description": "<div class='blurb'><img src='img/eat.jpg' alt='dee'><div class='righta'><h6>Chipotle</h6><span>Free Burrito with every Purchase</span></div></div>"
		    },
		    {
		        "title": " ",
		        "lat": 42.1223608,
		        "lng": -88.0483642,
		        "description": "<div class='blurb'><img src='img/eat.jpg' alt='dee'><div class='righta'><h6>Pizza Bella</h6><span>Three slices for $3</span></div></div>"
		    }
		]

		// Creating a global infoWindow object that will be reused by all markers
		var infoWindow = new google.maps.InfoWindow();

		// Looping through the JSON data
		for (var i = 0, length = json.length; i < length; i++) {
			var data = json[i],
				latLng = new google.maps.LatLng(data.lat, data.lng);

			// Creating a marker and putting it on the map
			var marker = new google.maps.Marker({
				position: latLng,
				map: map,
				title: data.title
			});

			// Creating a closure to retain the correct data, notice how I pass the current data in the loop into the closure (marker, data)
			(function(marker, data) {

				// Attaching a click event to the current marker
				google.maps.event.addListener(marker, "click", function(e) {
					infoWindow.setContent(data.description);
					infoWindow.open(map, marker);
				});


			})(marker, data);

		}


}
})();
