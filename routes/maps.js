const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  router.get('/maps', (req, res) => {
    res.render('maps_user')

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
