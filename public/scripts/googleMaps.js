// const { listen } = require("express/lib/application");

// initialzie map onto the page
function initMap() {
  const metro = { lat: 49.278707132806545, lng:-123.11010267860881 };

  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: metro,
});

google.maps.event.addListener(map, 'click', function(e) {
  let location = e.latLng

  let marker = new google.maps.Marker({
    position: location,
    map: map,
    draggable: true
  });

  let lat = marker.getPosition().lat()
  let lng = marker.getPosition().lng()

  console.log(lat);
  console.log(lng);

  let contentAdd = `${lat} + ${lng}`;


    google.maps.event.addListener(marker, 'click', function(e) {
      let infoWindow = new google.maps.InfoWindow({
        content: contentAdd
      });
      infoWindow.open(map, marker);
  });

});

};

window.initMap = initMap;
