// const { listen } = require("express/lib/application");

let allMarkers = [];

// initialzie map onto the page
function initMap() {
  const metro = { lat: 49.278707132806545, lng:-123.11010267860881 };

  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: metro,
});

// creates a marker when clicked
google.maps.event.addListener(map, 'click', function(e) {
  let location = e.latLng

  let marker = new google.maps.Marker({
    position: location,
    map: map,
  });

  let lat = marker.getPosition().lat()
  let lng = marker.getPosition().lng()

  markerPosition = {lat,lng};

  //adds the lat and lng into the array
  allMarkers.push(markerPosition);

  console.log("these are the markers", allMarkers);

  const infoWindowContent = (name, description, logitude, latitude, url) => {
    return ` ${name}, ${description}, ${longitude}, ${latitude}, ${url}`;
  }

  // content that is on the infowindow

  // adds the info window on the marker
    google.maps.event.addListener(marker, 'click', function(e) {
      let infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent
      });
      infoWindow.open(map, marker);
  });

});

};

window.initMap = initMap;
