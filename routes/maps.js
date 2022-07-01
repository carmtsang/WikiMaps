const express = require('express');
const router  = express.Router();
const { addMap, getMapById } = require('../user-helpers');


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
<<<<<<< HEAD
=======

>>>>>>> master
  });

    // posting a new map
    router.post('/', (req, res) => {
      const userID = req.cookies.user_id;
        const map = req.body;
        console.log(map)
      addMap(userID, map, db)
<<<<<<< HEAD
        .then(() => {
          res.redirect('users');
        })
=======
        .then(res => res.rows)

      res.redirect('/maps/1')
>>>>>>> master
    })

  return router;

};
