const users = require("./routes/users");

const selectAllUsers = db => {
  const query = 'SELECT * FROM users;'
  return db.query(query)
  .then((result) => {
    return result.rows;
  })
}

const getUser = (userID, db) => {
  const queryString = `SELECT * FROM users
  WHERE id = $1;`
  return db
    .query(queryString, [userID])
    .then((res) => {
      return res.rows[0]})
    .catch(err => console.error(err.stack))

}

const selectAllMaps = db => {
  const query = 'SELECT * FROM Maps;'
  return db.query(query)
  .then((result) => {
    return result.rows;
  })
}

const getUserMadeMaps = (userID, db) => {
  const queryString = `SELECT * FROM maps WHERE owner_id = $1`
  return db
    .query(queryString, [userID])
    .then((res) => {
      return res.rows})
    .catch(err => console.error(err.stack))
}

const getUserContributions = (userID, db) => {
  const queryString = `SELECT maps.name, maps.description, maps.owner_id, locations.owner_id
  FROM locations JOIN maps on map_id = maps.id
  WHERE maps.owner_id != locations.owner_id
  AND locations.owner_id = $1
  GROUP BY maps.name, maps.description, maps.owner_id, locations.owner_id`
  return db
    .query(queryString, [userID])
    .then((res) => {
      return res.rows})
    .catch(err => console.error(err.stack))
}

const selectUserLikes = (userID, db) => {
  const queryString = `SELECT maps.*, likes.* FROM likes
  JOIN maps ON maps.id = map_id WHERE user_id = $1`
  return db.query(queryString, [userID])
    .then((res) => {
      return res.rows;
    })
}

module.exports = {
  getUser,
  getUserMadeMaps,
  selectUserLikes,
  getUserContributions
}
