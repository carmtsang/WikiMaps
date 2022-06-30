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


module.exports = {
  getUser,
  getUserMadeMaps
}
