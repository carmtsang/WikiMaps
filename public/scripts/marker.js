// creating map options
let map0ptions = {
  center: [49.238665712, -123.108999564],
  zoom: 10
}
// creating a map object
let map = new L.map('map', map0ptions);

// creating a layer object
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// adding layer to the map
map.addLayer(layer);

// creating a marker
let marker = L.marker([49.238665712, -123.108999564]);

// adding marker to the map
marker.bindPopup('Hello I am a PopUp').openPopup();
marker.addTo(map);
