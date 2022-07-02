// const pathname = window.location.pathname.split('/')

// const mapId = pathname[2]
const pins = $.get(`api/all_marks/${mapId}`);
// const coords = [];
let map = [];



// const coords = [ { lat: -123.115070506614, lng: 49.2556150056549},
//   { lat: 49.2842565091818, lng: -123.109307760741},
//   { lat: 49.281792317337, lng: -123.085403914797},
//   { lat: 49.296807446507, lng: -123.135658403928}
// ]

function initMap() {
   const myLatLng = { lat: 49.244480043849, lng: -123.11219084459756 };
    map = new google.maps.Map(document.getElementById("map"), {
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

  getMarkers(db).then(markers => {
    for (let marker of markers) {
      let coord = { lat: marker.latitude, lng: marker.longitude }
      addPin(coord)
    }
  })

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







