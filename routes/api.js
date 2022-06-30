const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser')



const getUserMadeMaps = (userID, db) => {
  const queryString = `SELECT * FROM maps WHERE owner_id = $1`
  return db
    .query(queryString, [userID])
    .then((res) => {
      return res.rows})
    .catch(err => console.error(err.stack))
}

module.exports = (db) => {
  router.get('/user/maps', (req, res) => {
    const userID = req.cookies.user_id;

    getUserMadeMaps(userID, db)
      .then(userMaps => {
        console.log(userMaps)
        res.json(userMaps)
      })
  })

  return router
}
