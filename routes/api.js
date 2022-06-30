const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser')

const { getUserMadeMaps } = require('../user-helpers');


const selectUserFav = (userID, db) => {
  const queryString = `SELECT * FROM favourites WHERE user_id = $1`
  return db.query(queryString, [userID])
    .then((res) => {
      return res.rows[0];
    })
}

module.exports = (db) => {

  router.get('/user/favourites', (req, res) => {
    const userID = req.cookies.user_id;
    selectUserFav(userID, db)
    .then(userFave => {
      res.json(userFave)
    })
    .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
  })

  // maps created by the user
  router.get('/user/maps', (req, res) => {
    const userID = req.cookies.user_id;

    getUserMadeMaps(userID, db)
      .then(userMaps => {
        res.json(userMaps)
      })
      .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });


  return router
}
