
// let script = document.createElement('script');
// script.src = 'http://localhost:8080/api/locations';

const coords = [
  { lat: -24.578, lng: 155.044 },
  { lat: -26.578, lng: 146.044 },
  { lat: -25.578, lng: 166.044 }
  ]

 function initMap() {
   const myLatLng = { lat: 49.244480043849, lng: -123.11219084459756 };
   const map = new google.maps.Map(document.getElementById("map"), {
     zoom: 12,
     center: myLatLng,
   });

  const addPin = coord => {
    new google.maps.Marker({
     position: coord,
     map,
     title: "Hello World!",
   });
   }

   for (let coord of coords) {
     addPin(coord)
   }

   new google.maps.Marker({
     position: myLatLng,
     map,
     title: "Hello World!",
   });


 }
window.initMap = initMap;
// creates a marker when clicked
// google.maps.event.addListener(map, 'click', function(e) {
//   let location = e.latLng

//   let marker = new google.maps.Marker({
//     position: location,
//     map: map,
//   });

//   let lat = marker.getPosition().lat()
//   let lng = marker.getPosition().lng()

//   markerPosition = {lat,lng};

//   //adds the lat and lng into the array
//   allMarkers.push(markerPosition);

//   console.log("these are the markers", allMarkers);

//   const infoWindowContent = (name, description, logitude, latitude, url) => {
//     return ` ${name}, ${description}, ${longitude}, ${latitude}, ${url}`;
//   }

//   // adds the info window on the marker
//     google.maps.event.addListener(marker, 'click', function(e) {
//       let infoWindow = new google.maps.InfoWindow({
//         content: infoWindowContent
//       });
//       infoWindow.open(map, marker);
//   });







