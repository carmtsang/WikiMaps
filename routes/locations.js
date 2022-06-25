const express = require('express');
const router  = express.Router();

// this will go on individual map page


module.exports = (db) => {
  router.get('/locations', (req, res) => {
    db.query(`SELECT * FROM locations;`)
      .then(data => {
        const locations = data.rows;
        res.json({ locations });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post('/locations', (req, res) => {
    db.query('SELECT * FROM locations;')
    .then(data => {
      const locations = data.rows;
      res.json({ locations });
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
