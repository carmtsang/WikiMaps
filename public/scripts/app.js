// Client facing scripts here


$(() => {

  const renderMap => maps => {
    for ()
  }

  // function to prevent XSS
  const escape = str => {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const addNewMapElement = info => {
    // const mapName = escape(...);
    // const description = escape(...);

    return `<div class="user_map_list">
      <div class="map-name-description">
        <a href="/maps/id">${mapName}</a>
        <p>${description}</p>
      </div>
      <form action="/maps/:${id}/:delete" method="post">
        <button class="button" type="submit"><i class="fa-solid fa-trash-can"></i></button>
      </form>
      </div>`;
    };
});
