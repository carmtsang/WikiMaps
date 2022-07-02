/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const { getUser } = require('../user-helpers');


module.exports = (db) => {
  // load user home page
  router.get('/', (req, res) => {
    const userID = req.cookies.user_id;
    if (userID === undefined) {
      res.redirect('/')
    };
    getUser(userID, db)
      .then(user => {
        const templateVars = { userID: user }
        res.render('users', templateVars)
      })
      .catch(err => {
        res
        .status(500)
        .json({ error: err.message });
      });
  })

  return router;

};




