(function() {

	window.onload = function() {



    var map = new google.maps.Map(document.getElementById("map"), {

          zoom: 6,
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

    if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              map.setCenter(pos);
            });
          }


		// Creating the JSON data
		var json = [
		    {
		        "title": "Naps Pizza",
		        "lat": 42.104362,
		        "lng": -88.023158,
		        "description": "<img src='https://s3-media4.fl.yelpcdn.com/bphoto/W49qGwmQSYIxl--igRPuoA/180s.jpg' alt='memes'><strong style='display: block;'>Naps Pizza: </strong>$2 for 3 slices"
		    },
		    {
		        "title": "Chipotle",
		        "lat": 42.1387124,
		        "lng": -88.0277098,
		        "description": "<strong>Chipotle: </strong>Buy 1 get 1 free"
		    },
		    {
		        "title": "Pizza Bella",
		        "lat": 42.1223608,
		        "lng": -88.0483642,
		        "description": "<strong>Pizza Bella: </strong>$3 for 3 slices"
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
