const express = require('express');
const router  = express.Router();


module.exports = (db) => {
<<<<<<< HEAD
  router.get("/maps", (req, res) => {
    res.render("maps")
=======
  router.get('/maps', (req, res) => {
    res.render('maps')
>>>>>>> master

  db.query(`SELECT * FROM maps;`)
    .then(data => {
      const maps = data.rows;
<<<<<<< HEAD
      res.json({ maps });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });


=======
       res.json({ maps });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
>>>>>>> master
  });
  return router;
};


// make a post for each
