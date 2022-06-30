const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser')

const { selectUserLikes, getUserMadeMaps, getUserContributions } = require('../user-helpers');



module.exports = (db) => {

// list of maps liked by user
  router.get('/user/likes', (req, res) => {
    const userID = req.cookies.user_id;
    selectUserLikes(userID, db)
    .then(userLikes => res.json(userLikes))
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
      .then(userMaps => res.json(userMaps))
      .catch(err => {
        res
        .status(500)
        .json({ error: err.message });
    });
  });

  router.get('/user/add', (req, res) => {
    const userID = req.cookies.user_id;
    getUserContributions(userID, db)
    .then(userAdd => res.json(userAdd))
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });

  return router
}
