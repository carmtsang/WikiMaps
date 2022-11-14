const express = require("express");
const router = express.Router();
const { addMarker } = require("../marker-helper");

// this will go on individual map page

module.exports = (db) => {
  router.get("/locations", (req, res) => {
    db.query(`SELECT * FROM locations`).then((data) => {
      const markers = data.rows;
      res.json({ markers });
    });
    res.render("/");
  });

  router.post("/", (req, res) => {
    const userID = req.cookies.user_id;

    const locations = req.body;
    console.log(locations);

    addMarker(userID, locations, db);
    res.redirect("users");
  });

  return router;
};
