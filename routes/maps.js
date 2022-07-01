const express = require('express');
const router  = express.Router();
const { addMap, getUser, getMapById } = require('../user-helpers');


module.exports = (db) => {

  // renders the individual map
  router.get("/:map_id", (req, res) => {
    const userID = req.cookies.user_id;
    const map_id = req.params.map_id
    console.log(req.params)
    getMapById(map_id, db)
      .then(map => {
        const templateVars = { userID, map };
        res.render('maps', templateVars);
      })

    // db.query(`SELECT * FROM maps;`)
    //   .then(data => {
    //     const users = data.rows;
    //     res.json({ users });
    //   })
    //   .catch(err => {
    //     res
    //       .status(500)
    //       .json({ error: err.message });
    //   });
  });


    // posting a new map
    router.post('/', (req, res) => {
      const userID = req.cookies.user_id;
      const map = req.body

      addMap(userID, map, db)
        .then(res => res.rows)

      res.redirect('users')
    })

  return router;

};
