const express = require("express");
const router = express.Router();
const { addLikes, deleteLikes } = require("../like-helper");

module.exports = (db) => {

  router.post("/", (req, res) => {
    const userID = req.cookies.user_id;
    const likes = req.body;
    addLikes(userID,likes, db).then(() => {
      res.send("likes");
    });
  });

  router.post("/favourites/delete", (req, res) => {
    const user_id = req.params.user_id;
    deleteLikes(user_id, db);

    res.send("likes");
  });

  return router;
};
