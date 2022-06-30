// initialzie map onto the page
let map;
let markers = [];

function initMap() {
  const metro = { lat:49.278707132806545, lng:-123.11010267860881 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: metro,
});


const markerContent = '<input id="delete-markers" type="button" value="Delete" />';
// '<form id="new-marker-form" action="/maps" method="post">' +
// '<label for="marker-name">Title</label>' +
// '<input type="text" id="marker-name" name="name" value="eg. Best Coffee in Town">' +
// '<br><label for="marker-description">Description</label><textarea name="description" id="marker-description">' +
// '</textarea><button type="submit">Submit</button></form>'

const infoWindow = new google.maps.InfoWindow({
  content: markerContent,
});

// creates markers when clicked on page
map.addListener("click", (e) => {

  const marker = new google.maps.Marker({
    draggable: true,
    position: e.latLng,
    map: map,
  });

// info window show up when clicked on marker
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
