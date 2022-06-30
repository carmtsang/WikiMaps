const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser')

const { getUserMadeMaps } = require('../user-helpers');


const selectUserLikes = (userID, db) => {
  const queryString = `SELECT maps.*, likes.* FROM likes
  JOIN maps ON maps.id = map_id WHERE user_id = $1`
  return db.query(queryString, [userID])
    .then((res) => {
      return res.rows[0];
    })
}

module.exports = (db) => {

  router.get('/user/likes', (req, res) => {
    const userID = req.cookies.user_id;
    selectUserLikes(userID, db)
    .then(userLikes => {
      res.json(userLikes)
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
