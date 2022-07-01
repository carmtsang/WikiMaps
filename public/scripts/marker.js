const pathname = window.location.pathname.split('/')
const mapId = pathname[2]


//create a function to get the coordinates and loop through them

let marker = new google.maps.Marker({
  position: new google.maps.LatLng(49.278707132806545,-123.11010267860881)
});

marker.setMap(map);


const getCoords = allCoords => {
  for (let coords of allCoords) {
    let $coords = addCoords(coords);

  }

}

let lat = s
const showCoords = coords => {
  return [coords.longitude, coords.latitude]
};


// const addCoords = coords => {
  // return `<p>${coords.longitude}, ${coords.longitude}</p>
// `};

$(() => {
  const loadMarkers = () => {
    $.ajax(`/api/all_markers/${mapId}`, { method: "GET" })
    .then(allCoords => getCoords(allCoords))
    .catch(error => console.log(error))
  }

  loadMarkers()

})


