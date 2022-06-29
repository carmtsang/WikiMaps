function initMap() {
  const metro = { lat:49.2276, lng:123.0076 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: metro,
});

map.addListener("click", (e) => {

  const marker = new google.maps.Marker({
    position: e.latLng,
    map: map,
  });
  });
};

window.initMap = initMap;
