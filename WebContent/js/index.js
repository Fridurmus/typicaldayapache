//set up google maps variables
var map;
var windDir;
var homeLatLng = {lat: 28.121095, lng: -80.627447}; //home
var phiLatLng = {lat: 28.1688249, lng: -80.667917}; //philosophy class
var freLatLng = {lat: 28.1693049, lng: -80.6707692}; //french class
var activeButton = "morn";
var mornTime = "<span class='glyphicon glyphicon-home'></span> <span class='titleLoc'>Home:</span> <span class='glyphicon glyphicon-time'></span> 00:00 - 14:45";
var phiTime = "<span class='glyphicon glyphicon-education'></span> <span class='titleLoc'>Philosophy:</span> <span class='glyphicon glyphicon-time'></span> 15:15 - 16:30";
var freTime = "<span class='glyphicon glyphicon-education'></span> <span class='titleLoc'>French I:</span> <span class='glyphicon glyphicon-time'></span> 18:00 - 20:45";
var niteTime = "<span class='glyphicon glyphicon-bed'></span> <span class='titleLoc'>Home:</span> <span class='glyphicon glyphicon-time'></span> 21:00 - 23:59";
var mornDesc = "I remember Tuesday, September 8 as being a great example of a typical day at Eastern Florida State College. My earliest class on Tuesday didn't meet until 3:15 PM, " +
		"so the morning was spent at home studying, cleaning up, or relaxing. On that day in particular, I was relaxing after getting home from a weekend trip to Atlanta the day before.";
var phiDesc = "The first Tuesday class was Introduction to Philosophy, taught by an energetic professor (we'll call him Jeff) over in Building 7 at the Melbourne EFSC campus. It was an interesting class, with good lectures and discussion, " +
		"and you could definitely tell the professor was excited by his subject. After leaving here, I usually grabbed a quick snack before heading to the next class.";
var freDesc = "The second Tuesday class was French I, taught by an entertaining professor (let's say her name was Sarah) in Building 2 of the Melbourne EFSC campus, just above the library. The class was heavy on participation, naturally, but " +
		"also tended to include videos and readings to practice the language. I enjoyed this class so much, I'm taking it again right now.";
var niteDesc = "Following class, I typically headed straight home, and September 8, 2015 was no exception. I usually spent the evenings relaxing and occasionally doing practice coding exercises from a variety of sources. That day, of course, " +
		"I simply wanted to sleep in my own bed again after being gone for the previous weekend.";

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
    $(this).toggleClass("active");
});

//set up event handling for each button
function pan(loc, time, desc){
	map.panTo(loc);
	$("#title").html(time)
	$("#descText").text(desc)
}

//get ready to convert wind direction
var degToCompass = function(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
  }

//initialize everything.
$(document).ready(function(){
	$("#title").html(mornTime);
	$("#descText").text(mornDesc);
	jQuery.getJSON("https://api.forecast.io/forecast/a3255c9440916f2aac2f4872f7194681/28.1693049,-80.6707692,2015-09-08T00:00:00?callback=?", 
		function(wData){
			console.log(wData.daily.data[0]);
			windDir = degToCompass(wData.daily.data[0].windBearing)
			$("#weaText").html('<span id="weaHead">Weather for Sept. 8, 2015: </span></br></br>' + wData.daily.data[0].summary + '</br></br><span class="weaTemps">High: <span id="weaHot">' + 
				Math.round(wData.daily.data[0].temperatureMax) + '&deg;F</span></span></br><span class="weaTemps">Low: <span id="weaCold">' + Math.round(wData.daily.data[0].temperatureMin) + '&deg;F</span>' +
				'</span></br></br> <span class="weaTemps">Wind at ' + wData.daily.data[0].windSpeed +  ' MPH from the ' + windDir + '.</span></br></br><span class="weaTemps">Chance of rain: ' + 
				Math.round(wData.daily.data[0].precipProbability * 100) + '% </span></br></br> <span class="weaTemps">Humidity: ' + Math.round(wData.daily.data[0].humidity * 100) + '%</span>' +
				'</br></br></br></br><sub id="credit">Weather information provided by <a href="http://forecast.io/">Forecast.io</a></sub>');
	})
})
