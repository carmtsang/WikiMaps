const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser')

const {  getUser, selectUserLikes, getUserContributions } = require('../user-helpers');
const {  getMapById, addMap, selectAllMaps, getUserMadeMaps, getCoordsById } = require('../maps-helper');
const { addMarker, getMarkers, getMarkersByMap, getMarkersById, getMarker } = require('../marker-helper');

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

  // get all maps
  router.get('/maps', (req, res) => {
    const userID = req.cookies.user_id;
    selectAllMaps(db)
      .then(maps => res.json(maps))
      .catch(err => {
        res
        .status(500)
        .json({ error: err.message });
    });
  });

  // gets all the map information
  router.get('/locations', (req, res) => {
    const userID = req.cookies.user_id;
    getMarkers(db)
      .then(maps => res.json(maps))
      .catch(err => {
        res
        .status(500)
        .json({ error: err.message });
    });
  });



  // get all markers
  router.get('/all_markers/:map_id', (req, res) => {
    const mapID = req.params.map_id
    getMarkersByMap(mapID, db)
      .then(pins => res.json(pins))
      .catch(err => {
        res
        .status(500)
        .json({ error: err.message });
    });
  })

// gets a specific point from a specific map
  router.get('/all_markers/:map_id/:id', (req, res) => {
    const mapID = req.params.map_id
    const id = req.params.id;
    getMarker(mapID, id, db)
      .then(pins => res.json(pins))
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

  //api for maps user contributed to
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
