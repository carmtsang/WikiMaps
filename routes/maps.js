const express = require('express');
const router  = express.Router();

const { users } = require('../constants');
const { getUserById } = require('../helpers');


module.exports = (db) => {

  // create a new map. if user is not logged in, redirect to login. /maps/new
  router.get("/", (req, res) => {
    // console.log('req:', req)
    // console.log('res:', res)
    res.render('maps');

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


  router.post('/', (req, res) => {
    if(!req.body.text) {
      res.status(400).json({ error: 'Invalid Request: no data in POST body'});
      return;
    } else {
      res.redirect("/users")
    }

  })
  return router;


};


