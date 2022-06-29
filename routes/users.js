/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser')

const { users } = require('../constants');
const { getUserById } = require('../helpers');

module.exports = (db) => {
  router.get("/users.json", (req,res) => {
    res.json(users)
  })

  // user login.
  router.get('/login/:user_id', (req, res) => {
    res.cookie('user_id', req.params.user_id);
    res.redirect('/');
  })

  // route to user home page
  router.get('/', (req, res) => {
    // user is the cookie num
    const user = req.cookies.user_id;

    console.log(user)
    if (!user) {
      res.redirect(401, '/');
    } else {
      res.render('users', { user: req.cookies.user_id });
    }

  })

  // logout using /users/logout
  router.get('/logout', (req, res) => {
    res.clearCookie('user_id');
    res.redirect('/');
  })

  return router;

};


// make a post for each


// app.get('/urls', (req, res) => {
//   const user = req.session.userId;

//   if (!user) {
//     res.status(401),
//     res.redirect('/login')
//   }

//   const templateVars = {
//     urls: urlsForUser(user, urlDatabase),
//     user: users[user]
//   };

//   res.render("urls_index", templateVars);
// });
