/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser')

// const { users } = require('../constants');

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.render('users', { userID: req.cookies.user_id });
  })

  router.get('/login/:user_id', (req, res) => {
    res.cookie('user_id', req.params.user_id);
    res.redirect('/');
  })

  return router;

};


// make a post for each



