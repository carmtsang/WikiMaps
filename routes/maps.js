const express = require('express');
const router  = express.Router();

const { users, maps } = require('../constants');
const { getUserById } = require('../helpers');


module.exports = (db) => {

  // renders the individual map
  router.get("/", (req, res) => {
    const user = req.cookies.user_id;

    if (!user) {
      res.redirect(401, '/');
    } else {
      res.render('maps');
    }

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
    console.log(req.body)
    res.redirect('/')
  })
  return router;


};


