const express = require('express');
const router  = express.Router();
const { addMap, getMapById, deleteMap } = require('../maps-helper');


module.exports = (db) => {

  // renders the individual map
  router.get("/:map_id", (req, res) => {
    const userID = req.cookies.user_id;
    const map_id = req.params.map_id;
    getMapById(map_id, db)
      .then(map => {
        const templateVars = { userID, map };
        res.render('maps', templateVars);
      })
  });


    // posting a new map
    router.post('/', (req, res) => {
      const userID = req.cookies.user_id;
        const map = req.body;
      addMap(userID, map, db)
        .then(() => {
          res.redirect('users');
        })
    })

    router.post("/:map_id/delete", (req, res) => {
      const map_id = req.params.map_id;
      deleteMap(map_id, db)

      res.redirect('/users')
    })

  return router;

};
