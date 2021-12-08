// Create a map object.
var myMap = L.map("map", {
  center: [50.09, -105.71],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var queryUrl = "weather_Stations_metadata.json"
// Perform a GET request to the query URL/

d3.json(queryUrl).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  console.log(data[0]);
  createMarkers(data);
});



function createMarkers(data){
// Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
for (var i = 0; i < data.length; i++) {
  var city = data[i];
  L.marker(city.geojson_location)
    .bindPopup(`<h1>${city.market}</h1> <hr> <h3>Weather Station</h3> <hr> ${city.weather_station}</h3>`)
    .addTo(myMap);
}
};