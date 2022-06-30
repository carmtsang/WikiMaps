const express = require('express');
const router  = express.Router();


// this will go on individual map page


module.exports = (db) => {
  // router.get('/maps', (req, res) => {
  //   db.query(`SELECT * FROM locations;`)
  //     .then(data => {
  //       const locations = data.rows;
  //       res.json({ locations });
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  // });

  // router.post('/maps', (req, res) => {
  //   db.query('SELECT * FROM locations;')
  //   .then(data => {
  //     const locations = data.rows;
  //     res.json({ locations });
  //   })
  //   .catch(err => {
  //    res
  //     .status(500)
  //     .json({ error: err.message });
  //   });
  // });

  // return router;

  router.get("/maps", (req, res) => {

  db.query(`SELECT * FROM locations WHERE id=$1`, [id])
    .then((data) => {
      console.log(data.rows);
      return data.rows;
    })
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message});
    })
});

  router.post("/", (req, res) => {
    db.query(`
    INSER INTO locations `)
  })
return router;
};


// make a post for each
