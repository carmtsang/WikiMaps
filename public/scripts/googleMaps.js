// initialzie map onto the page
function initMap() {
  const metro = { lat: 49.278707132806545, lng:-123.11010267860881 };

  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: metro,
  });

  const addPin = coord => {
    new google.maps.Marker({
    position: coord,
    map,
  });
  }
  // lat & long swapped b/c Carmen can't tell them a part in the initial seeding of data
  const showPins = pins => {
    for (let pin of pins) {
      addPin({ lat: pin.longitude, lng: pin.latitude } )
    }
  }

  const renderCoords = $.ajax(`/api/all_markers/${mapId}`, { method: 'GET' })
    .then(pins => showPins(pins))
    .catch(error => console.log(error))

  renderCoords()

  //a working pin here
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
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

    console.log(allMarkers)

    // content that is on the infowindow
    let contentAdd = `title: ${code}, description: ${code}, lat: ${lat}, lng: ${lng}`;


    // adds the info window on the marker
      google.maps.event.addListener(marker, 'click', function(e) {
        let infoWindow = new google.maps.InfoWindow({
          content: contentAdd
        });
        infoWindow.open(map, marker);
    });

  });

};

window.initMap = initMap;


