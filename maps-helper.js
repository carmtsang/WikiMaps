const getMapById = (map_id, db) => {
  const queryString = `SELECT * FROM maps
  WHERE id = $1;`;
  return db.query(queryString, [map_id])
    .then(res => res.rows[0])
    .catch(err => console.log(err.message))
}

const addMap = (userID, map, db) => {
  const queryString = `INSERT INTO maps (
    name, description, owner_id)
    VALUES ($1, $2, $3) RETURNING *;`;

  return db.query(queryString, [map.name, map.description, userID])
    .then(res => res.rows)
    .catch(err => console.log(err.message));
};

const selectAllMaps = db => {
  const query = 'SELECT * FROM maps;'
  return db.query(query)
  .then(res =>  res.rows)
  .catch(err => console.log(err.message));
}

const getUserMadeMaps = (userID, db) => {
  const queryString = `SELECT * FROM maps WHERE owner_id = $1`;
  return db
    .query(queryString, [userID])
    .then((res) => {
      return res.rows})
    .catch(err => console.log(err.message));
};


module.exports = {
  getMapById,
  addMap,
  selectAllMaps,
  getUserMadeMaps
}
