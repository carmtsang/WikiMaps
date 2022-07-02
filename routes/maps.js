const express = require('express');
const { getMarkers } = require('../marker-helper');
const router  = express.Router();
const { addMap, getNewestMap, getMapById, deleteMap } = require('../map-helpers');


module.exports = (db) => {

  // renders the individual map
  router.get("/:map_id", (req, res) => {
    const userID = req.cookies.user_id;
    const map_id = req.params.map_id;
    getMapById(map_id, db)
      .then(map => {
        const templateVars = { userID, map };
        if (!map) {
          res.redirect('/')
        };
        res.render('maps', templateVars);
      })
    });

    // posting a new map
    router.post('/', (req, res) => {
      const userID = req.cookies.user_id;
      const map = req.body;
      addMap(userID, map, db)

      getNewestMap(db)
        .then((map) => {
          console.log(map)
          res.redirect(`/maps/${map.id}`);
        })
        .catch(err => {
          res
          .status(500)
          .json({ error: err.message })
        })
      });

    router.post("/:map_id/delete", (req, res) => {
      const map_id = req.params.map_id;
      deleteMap(map_id, db)
        .then(() => {
          res.redirect('/users')
        })
    })

  return router;

};
