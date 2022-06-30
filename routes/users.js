/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser')

const { getUser, getUserMadeMaps } = require('../user-helpers');


module.exports = (db) => {
  // user login.
  router.get('/login/:user_id', (req, res) => {
    res.cookie('user_id', req.params.user_id);
    res.redirect('/');
  })

  // load user home page
  router.get('/', (req, res) => {
    const userID = req.cookies.user_id;

    if (!userID) {
      res.redirect(401, '/')
    }

    getUser(userID, db)
      .then(user => {
        const templateVars = { user: user.name }
        res.render('users', templateVars)
      })
      .catch(err => console.error(err.stack))
  })

  // logout using /users/logout
  router.get('/logout', (req, res) => {
    res.clearCookie('user_id');
    res.redirect('/');
  })

  // router.get('/maps', (req, res) => {
  //   const userID = req.cookies.user_id;

  // })


  return router;

};

