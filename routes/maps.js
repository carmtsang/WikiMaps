const express = require('express');
const router  = express.Router();


module.exports = (db) => {
<<<<<<< HEAD
  router.get('/maps', (req, res) => {
=======
  router.get('/maps_user', (req, res) => {
>>>>>>> ec010f0e48131f412b5813a948d3a347514c9bda
    res.render('maps')

  db.query(`SELECT * FROM maps;`)
    .then(data => {
      const maps = data.rows;
       res.json({ maps });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};


// make a post for each
