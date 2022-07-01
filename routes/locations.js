const express = require('express');
const router  = express.Router();
const { getMarkers, getMarker, addMarker, editMarker, deleteMarker } = require('../maps-helper');


// this will go on individual map page


module.exports = (db) => {

  router.get("/locations", (req, res) => {
    res.render("locations")
});

router.post('/', (req, res) => {
  const userID = req.cookies.user_id;
  const mapID = req.params.map_id;
  console.log("it is mapID", mapID);

  const locations = req.body;
  console.log(locations);

  // addMap(userID, map, db)
  //       .then(res => res.rows)


  // addMarker(userID, mapID, locations, db)
  //   .then((res) => {
  //     console.log("res and addmarker", res);
    // })
  res.redirect("/");
})


return router;
};

