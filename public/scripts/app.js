// Client facing scripts here

// const { load } = require("dotenv");

$(() => {

    // add user created maps
  const renderUserMaps = userMaps => {
    for (const map in userMaps) {
      let $post = createUserMaps(map);
      $('#my-maps').append($post);
      console.log('in renderUserMaps')
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

  // add user likes
  renderUserLikes = userLikes => {
    for (const like in userLikes) {
      let $post = addLikes(like);
      $('#my-likes').append($post);
    }
  }

  const addLikes = likes => {
    return `<div class="user_map_list">
    <div class="map-name-description">
      <a href="/maps/${likes.id}">${likes.name}</a>
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



  loadUserMaps();
  loadLikes();

});
