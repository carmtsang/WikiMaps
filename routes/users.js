/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser')


const { getUser } = require('../user-helpers');

const selectAllUsers = db => {
  const query = 'SELECT * FROM users;'
  return db.query(query)
  .then((result) => {
    return result.rows;
  })
}


const getUserMadeMaps = (userID, db) => {
  const queryString = `SELECT * FROM maps WHERE owner_id = $1`
  return db
    .query(queryString, [userID])
    .then((res) => {
      return res.rows})
    .catch(err => console.error(err.stack))
}

module.exports = (db) => {
  // user login.
  router.get('/login/:user_id', (req, res) => {
    res.cookie('user_id', req.params.user_id);
    res.redirect('/');
  })

  // load user home page
  router.get('/', (req, res) => {
    const userID = req.cookies.user_id;
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



  return router;

};

