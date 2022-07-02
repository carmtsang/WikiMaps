const express = require('express');
const router  = express.Router();
const { getMarkers, getMarker, addMarker, editMarker, deleteMarker } = require('../marker-helper');


// this will go on individual map page


module.exports = (db) => {

  router.get("/locations", (req, res) => {
    res.render("locations")
});

router.post('/', (req, res) => {
  const userID = req.cookies.user_id;

  const locations = req.body;
  console.log(locations);


  addMarker(userID, locations, db)
  res.redirect("users");
})


return router;
};
