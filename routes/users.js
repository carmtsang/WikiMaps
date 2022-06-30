/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
// const cookieParser = require('cookie-parser')

const { getUser } = require('../user-helpers');


module.exports = (db) => {

  // load user home page
  router.get('/', (req, res) => {
    const userID = req.cookies.user_id;
    console.log('in /usrs:', userID)
    getUser(userID, db)
      .then(userID => {
        const templateVars = { userID }
        console.log('in /usrs getUser:', userID)
        res.render('users', templateVars)
      })
      .catch(err => console.error(err.stack))
  })



  return router;

};




