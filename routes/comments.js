const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get('/comments', (req, res) => {
    db.query(`SELECT * FROM comments;`)
      .then(data => {
        const comments = data.rows;
        res.json({ comments });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};


// make a post for each
