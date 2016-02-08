//set up google maps variables
var map;
var homeLatLng = {lat: 28.121095, lng: -80.627447}; //home
var phiLatLng = {lat: 28.1688249, lng: -80.667917}; //philosophy class
var freLatLng = {lat: 28.1693049, lng: -80.6707692}; //french class
var activeButton = "morn";
var mornTime = "<span class='glyphicon glyphicon-home'></span> <span class='titleLoc'>Home:</span> <span class='glyphicon glyphicon-time'></span> 00:00 - 14:45";
var phiTime = "<span class='glyphicon glyphicon-education'></span> <span class='titleLoc'>Philosophy:</span> <span class='glyphicon glyphicon-time'></span> 15:15 - 16:30";
var freTime = "<span class='glyphicon glyphicon-education'></span> <span class='titleLoc'>French I:</span> <span class='glyphicon glyphicon-time'></span> 18:00 - 20:45";
var niteTime = "<span class='glyphicon glyphicon-bed'></span> <span class='titleLoc'>Home:</span> <span class='glyphicon glyphicon-time'></span> 21:00 - 23:59";
var mornDesc = "I remember Tuesday, September 8 as being a great example of a typical day at Eastern Florida State College. My earliest class on Tuesday didn't meet until 3:15 PM, " +
		"so the morning was spent at home studying, cleaning up, or relaxing. On that day in particular, I was relaxing after getting home from a trip the day before.";
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

//set up button highlighting for UX purposes
$(".btn").click(function() {
	$(".btn").removeClass("active");
    $("this").toggleClass("active");
});

//set up event handling for each button
function pan(loc, time, desc){
	map.panTo(loc);
	$("#title").html(time)
	$("#descText").text(desc)
}

//initialize everything.
$(document).ready(function(){
	$("#title").html(mornTime);
	$("#descText").text(mornDesc);
	jQuery.getJSON("https://api.forecast.io/forecast/a3255c9440916f2aac2f4872f7194681/28.1693049,-80.6707692,2015-09-08T00:00:00?callback=?", 
		function(wData){
			console.log(wData.daily.data[0]);
			$("#weaText").text('Dynamically Pulled Summary: ' + wData.daily.data[0].summary);
	})
})
