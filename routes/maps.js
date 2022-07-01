const express = require('express');
const router  = express.Router();
const { addMap, getUser } = require('../user-helpers');


module.exports = (db) => {

  // renders the individual map
  router.get("/", (req, res) => {
    const userID = req.cookies.user_id;
    const templateVars = { userID };
    res.render('maps', templateVars);
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
        .then(res => {
          console.log('inside addMap:', res)
        })
      console.log(req.body)

      res.redirect('/maps')
    })

  return router;

};
