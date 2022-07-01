

const addMarker = (userID, locations, db) => {
  const queryString = `INSERT INTO locations (owner_id, map_id, longitude, latitude, name, description, url)
   VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING *;`

  const values = [
    userID,
    locations.mapid,
    locations.longitude,
    locations.latitude,
    locations.name,
    locations.description,
    locations.url
  ]

  return db.query(queryString, values)
    .then(res => {
      console.log(res.rows[0]);
      return res.rows[0];
    });
}

const getMarkersByMap = (map_id, db) => {
  return db.query(`SELECT * FROM locations WHERE map_id = $1`, [map_id])
    .then(res => res.rows)
    .catch((err) => console.error(err.stack));
}

const getMarker = (id, db) => {
  return db.query(`SELECT * FROM locations WHERE locations.id = $1`, [id])
    .then((res) => {
      return res.rows[0];
    });
}

const getMarkers = (db) => {
  return db.query(`SELECT * FROM locations`)
    .then((res) => {
      console.log("+++++", res.rows)
      return res.rows;
    });
}


const deleteMarker = (mapID, locationsID) => {
  const queryString = `DELETE FROM locations WHERE map_id = $1 AND id = $2`;

  return db.query(queryString, [mapID, locationsID])
    .then(res => {
      (res.rows[0]);
    });
}

const editMarker = (marker) => {
  const queryString = ` UPDATE locations SET longitude = $1,
  latitude = $2,
  name = $3,
  description = $4,
  owner_id = $5,
  map_id = $6,
  url = $7
  RETURN *`;

  const values = [
    locations.longitude,
    locations.latitude,
    locations.name,
    locations.description,
    locations.owner_id,
    locations.map_id,
    locations.url
  ]

  return db.query(queryString, values)
  .then(res => {
    (res.rows[0]);
  });
}

module.exports = {
  getMarkersByMap,
  getMarker,
  addMarker,
  editMarker,
  deleteMarker,
  getMarkers
}
