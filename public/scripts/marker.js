const pathname = window.location.pathname.split('/')
const mapId = pathname[2]


$(() => {
  const loadMarkers = () => {
    return $.get(`/api/all_markers/${mapId}`)

  }
  console.log(loadMarkers())

})


