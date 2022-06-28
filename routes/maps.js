const express = require('express');
const router  = express.Router();

// need to figure out to route db & render page


module.exports = (db) => {
<<<<<<< HEAD
  router.get("/maps", (req, res) => {
    res.render('maps');
=======
  router.get("/", (req, res) => {
    res.render('maps');

>>>>>>> master
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
  return router;


};


