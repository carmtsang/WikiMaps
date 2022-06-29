const { marker } = require("leaflet");

// initialzie map onto the page
function initMap() {
  const metro = { lat:49.2276, lng:123.0076 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: metro,
});


const markerContent =
'<form id="new-map-form" action="/maps" method="post"><label for="map-name">Map Name</label><input type="text" id="map-name" name="name" value="eg. Best Coffee in Town"><br><label for="map-description">What are you bookmarking?</label><textarea name="description" id="map-description"></textarea><button class="button-new"type="submit"><i class="fa-solid fa-location-dot"></i>Create a new Map <i class="fa-solid fa-map"></i></button></form>'

const infoWindow = new google.maps.InfoWindow({
  content: markerContent,
});

// creates markers when clicked on page
map.addListener("click", (e) => {

  const marker = new google.maps.Marker({
    position: e.latLng,
    map: map,
  });

  marker.addListener("click", (e) => {
    infoWindow.open({
      anchor: marker,
      map,
      shouldFouces: false,
    });
  });

});


};

window.initMap = initMap;
