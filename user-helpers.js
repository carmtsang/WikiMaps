const getUser = (userID, db) => {
  const queryString = `SELECT * FROM users
  WHERE id = $1;`;
  return db.query(queryString, [userID])
    .then(res => res.rows[0])
    .catch(err => console.log(err.message))
}

const getUserContributions = (userID, db) => {
  const queryString = `SELECT maps.*, locations.owner_id
  FROM locations JOIN maps on map_id = maps.id
  WHERE maps.owner_id != locations.owner_id
  AND locations.owner_id = $1
  GROUP BY maps.id, locations.owner_id`
  return db.query(queryString, [userID])
    .then(res => res.rows)
    .catch(err => console.log(err.message));
};

const selectUserLikes = (userID, db) => {
  const queryString = `SELECT maps.*, likes.* FROM likes
  JOIN maps ON maps.id = map_id WHERE user_id = $1`;
  return db.query(queryString, [userID])
  .then(res => res.rows)
    .catch(err => console.log(err.message))
};

const addMap = (userID, map, db) => {
  const queryString = `INSERT INTO maps (
    name, description, owner_id)
    VALUES ($1, $2, $3) RETURNING *;`;

  return db.query(queryString, [map.name, map.description, userID])
    .then(res => res.rows)
    .catch(err => console.log(err.message));
};

const findHearts = (userID, db) => {
  const queryString = `SELECT * FROM likes
  WHERE user_id = $1`;
  return db.query(queryString, [userID])
    .then(res => {
      // console.log(res.rows)
      return res.rows
    })
    .catch(err => console.log(err.message))
};

module.exports = {
  getUser,
  selectUserLikes,
  getUserContributions,
  addMap,
  findHearts
}
