
let allMarkers = [
  {49.278707132806545, -123.11010267860881},
  {49.278707132806545, -170.11010267860881},
  {49.278707132806545, -150.11010267860881}
];

let map = [];

// initialzie map onto the page
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: new google.maps.LatLng(49.278707132806545,-123.11010267860881 ),
});


// // hardcoded marker
const pin = function(allMarkers) {
for (let i = 0; i < allMarkers.length; i++) {
  let marker = new google.maps.Marker({
    position: new google.maps.LatLng(allMarkers[i])
  })
  return marker;
};

pin

marker.setMap(map);
}

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
