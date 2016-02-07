function initMap(){
		var mapDiv = document.getElementById("map");
		var map = new google.maps.Map(mapDiv, {
			center: {lat: 28.121095, lng: -80.6296357},
			zoom: 17,
			draggable: false,
			mapTypeId: "hybrid"
		});
	}

$(document).ready(function(){
	$("h1").append(" Jquery is working.");
	
})
