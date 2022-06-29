const users = require("./routes/users");

const getUser = (userID, db) => {
  const queryString = `SELECT * FROM users
  WHERE id = $1;`
  return db
    .query(queryString, [userID])
    .then((res) => {
      return res.rows[0]})
    .catch(err => console.error(err.stack))
}

module.exports = {
  getUser
}
