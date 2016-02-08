//set up google maps variables
var map;
var homeLatLng = {lat: 28.121095, lng: -80.627447}; //home
var phiLatLng = {lat: 28.1688249, lng: -80.667917}; //philosophy class
var freLatLng = {lat: 28.1693049, lng: -80.6707692}; //french class
var activeButton = "morn";
var mornTime = "<span class='titleLoc'>Home:</span> 00:00 - 14:45";
var phiTime = "<span class='titleLoc'>Philosophy:</span> 15:15 - 16:30";
var freTime = "<span class='titleLoc'>French I:</span> 18:00 - 20:45";
var niteTime = "<span class='titleLoc'>Home:</span> 21:00 - 23:59";
var mornDesc = "This is where the morning description goes.";
var phiDesc = "This is where the philosophy class description goes.";
var freDesc = "This is where the french class description goes.";
var niteDesc = "This is where the nighttime description goes.";

//Initialize the map pointing at home
function initMap(){
		var mapDiv = document.getElementById("map");
		
		map = new google.maps.Map(mapDiv, {
			center: homeLatLng,
			zoom: 16,
			draggable: false
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

$(".btn").click(function() {
	$(".btn").removeClass("active");
    $("this").toggleClass("active");
});

//set up handlers for each button
function pan(loc, time, desc){
	map.panTo(loc);
	$("#title").html(time)
	$("#descText").text(desc)
}

//initialize everything.
$(document).ready(function(){
	$("#title").html(mornTime);
	$("#descText").text(mornDesc);
})
