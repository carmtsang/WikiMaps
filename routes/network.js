function getMarker() {
  let url = "/api/all_markers/:mapid/:id";
  return $.ajax({
    url,
  });
}
