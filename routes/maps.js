const express = require('express');
const router  = express.Router();

// need to figure out to route db & render page


module.exports = (db) => {
  router.get("/", (req, res) => {
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
  return router;


};


