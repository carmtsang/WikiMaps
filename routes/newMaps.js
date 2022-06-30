const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  // renders the individual map
  router.get("/", (req, res) => {
    const user = req.cookies.user_id;
    res.render('newMaps');

  });
  return router;

};
