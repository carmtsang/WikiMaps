const express = require('express');
const router  = express.Router();

// need to figure out to route db & render page


module.exports = (db) => {
  router.get('/', (req, res) => {
    res.render('maps_user')
  })

  // router.get('/', (req, res) => {
  //   db.query(`SELECT * FROM maps;`)
  //     .then(data => {
  //       const maps = data.rows;
  //       res.json({ maps });
  //       })
  //       .catch(err => {
  //         res
  //           .status(500)
  //           .json({ error: err.message });
  //       })

  // })

  // need to create addMap function for db
  // router.post('/maps', (req, res) => {
  //   db.addMap({req.body,... })
  //     .then(map => {
  //       res.send(map);
  //     })
  // })  .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  // })

  return router;



};


