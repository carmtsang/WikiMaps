// Client facing scripts for user home page

$(() => {

  loadUserMaps();
  loadLikes();
  loadContributions();
});

 // add user created maps
const renderUserMaps = userMaps => {
  for (const map of userMaps) {
    let $post = createUserMaps(map);
    $('#my-maps').prepend($post);
  }
};

const createUserMaps = userMaps => {
  return ` <div class="user_map_list">
  <div class="map-name-description">
  <a href="/maps/${userMaps.id}">${userMaps.name}</a>
  <p>${userMaps.description} </p>
  </div>
  <form action="/maps/${userMaps.id}/delete" method="post">
    <button class="button" type="submit"><i class="fa-solid fa-trash-can"></i></button>
  </form>
  </div>
  `
}

const loadUserMaps = () => {
  $.ajax('/api/user/maps', { method: 'GET' })
    .then(userMaps => renderUserMaps(userMaps))
    .catch(error => console.log(error));
}

// const loadMarkers = () => {
//   $.ajax('/api/locations', { method: 'GET' })
//     .then(locations => )
// }

// user contributed maps
const renderContribute = userAdd => {
  for (const pin of userAdd) {
    let $post = contribute(pin);
    $('#my-contributions').prepend($post);
  }
}

const contribute = map => {
  return `<div class="user_map_list map-name-description">
  <a href="/maps/${map.id}">${map.name}</a>
    <p>${map.description} </p>
  </div>`
};

const loadContributions = () => {
  $.ajax('/api/user/add', { method: 'GET' })
    .then(userAdd => renderContribute(userAdd))
    .catch(error => console.log(error));
}

// add user likes
const renderUserLikes = userLikes => {
  for (const like of userLikes) {
    let $post = addUserLikes(like);
    $('#my-likes').append($post);
  }
}

const addUserLikes = likes => {
  return `<div class="user_map_list">
  <div class="map-name-description">
    <a href="/maps/${likes.map_id}">${likes.name}</a>
    <p>${likes.description}</p>
  </div>
  <form action="/likes/:delete" method="post">
    <button class="button" type="submit"> <i class="fa-solid fa-heart"></i></button>
  </form>
  </div>
  `
}

const loadLikes = () => {
  $.ajax('/api/user/likes', { method: 'GET' })
    .then(userLikes => renderUserLikes(userLikes))
    .catch(error => console.log(error));
}
