//set up google maps variables
var map;
var homeLatLng = {lat: 28.121095, lng: -80.627447}; //home
var phiLatLng = {lat: 28.1688249, lng: -80.667917}; //philosophy class
var freLatLng = {lat: 28.1693049, lng: -80.6707692}; //french class
var mornTime = "Home: 00:00 - 14:45";
var phiTime = "Philosophy: 15:15 - 16:30";
var freTime = "French I: 18:00 - 20:45";
var niteTime = "Home: 21:00 - 23:59";

//Initialize the map pointing at home
function initMap(){
		var mapDiv = document.getElementById("map");
		
		map = new google.maps.Map(mapDiv, {
			center: homeLatLng,
			zoom: 18,
			draggable: true,
			mapTypeId: "hybrid"
		});
		var marker = new google.maps.Marker({
		    position: homeLatLng,
		    map: map,
		    animation: google.maps.Animation.DROP,
		});
		var phiMarker = new google.maps.Marker({
			position: phiLatLng,
			map: map,
			animation: google.maps.Animation.DROP
		});
		var freMarker = new google.maps.Marker({
			position: freLatLng,
			map: map,
			animation: google.maps.Animation.DROP,
		});
	}

//set up handlers for each button
function pan(loc, time){
	map.panTo(loc);
	$("h1").text(time)
}
//JQuery on document load test
$(document).ready(function(){
	$("h1").append(" Home: 00:00 - 14:45");
	
})
