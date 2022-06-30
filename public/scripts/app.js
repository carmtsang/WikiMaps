// Client facing scripts here


$(() => {

const renderUserMaps = userMaps => {
  for (const map of userMaps) {
    let $post = createUserMaps(map);
    $('#my-maps').append($post);
  }
};


const createUserMaps = userMaps => {
  return ` <div class="user_map_list">
  <div class="map-name-description">
  <a href="/maps/:${userMaps.id}">${userMaps.name}</a>
  <p>${userMaps.description} </p>
</div>
<form action="/maps/:${userMaps.id}/delete" method="post">
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

loadUserMaps()

});
