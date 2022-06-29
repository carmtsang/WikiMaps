// creating map options
let map0ptions = {
  center: [49.238665712, -123.108999564],
  zoom: 10
}
// creating a map object
let map = new L.map('map', map0ptions);

// creating a layer object - this shows the map
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// adding layer to the map - this is for the markers
map.addLayer(layer);

let newMarker, markerLocation;
$(function(){
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 19
    }).addTo(map);
    newMarkerGroup = new L.LayerGroup();
    map.on('click', addMarker);
});

function addMarker(e){
    // Add marker to map at click location; add popup window
    let newMarker = new L.marker(e.latlng).addTo(map);
}

