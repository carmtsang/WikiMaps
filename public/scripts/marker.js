// creating map options
let map0ptions = {
  center: [49.238665712, -123.108999564],
  zoom: 10
}
// creating a map object
let map = new L.map('map', map0ptions);

// creating a layer object - this shows the map
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// adding layer to the map - this is for the markers
map.addLayer(layer);

map.on('click', onMapClick);

function onMapClick(e) {
  let geojsonfeature = {
    "type": "Feature",
    "properties": {},
    "geometry": {
          "type": "Point",
          "coordinates": [e.latlng.lat, e.latlng.lng]
    }
  }

  let marker;

  L.geoJSON(geojsonfeature, {
    pointToLayer: function(feature, latlng) {

      marker = L.marker(e.latlng, {
        title: "Resource Location",
        alt: "Resource Location",
        riseOnHover: true,
        draggable: true,
      }).bindPopup("<form id='new-marker-form'><label for='marker-title'>Title</label><input type='text' id='marker-title' name='name' value='Best Coffee in Town'><br><lable for='marker description'>Description</lable><textarea name='description' id='marker-description'></textarea><input type='submit' value='SUBMIT' class='marker-submit-button'/></input><input type='button' value='DELETE' class='marker-delete-button'/></form>"

        );

      marker.on("popupopen", onPopUpOpen);

      return marker;
    }
  }).addTo(map);

  function onPopUpOpen() {
    let tempMarker = this;

    $(".marker-delete-button:visible").click(function () {
      map.removeLayer(tempMarker);
    });
  }
}
