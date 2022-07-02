//cookieParser variable
const cookieParser = require('cookie-parser')

// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");



// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

//Use cookieParser
app.use(cookieParser());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
const usersRoutes = require("./routes/users");
const apiRoutes = require("./routes/api")
const mapsRoutes = require("./routes/maps");
const locationsRoutes = require("./routes/locations");
const newMapsRoutes = require("./routes/newMaps");
const { selectAllMaps } = require("./maps-helper");
const { findHearts } = require("./user-helpers");


// Mount all resource routes
app.use('/api', apiRoutes(db));
app.use('/maps', mapsRoutes(db));
app.use('/newMaps', newMapsRoutes(db));
app.use('/locations', locationsRoutes(db));
app.use('/users', usersRoutes(db));

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

//Local Host 8080
app.get("/", (req, res) => {

  selectAllMaps(db)
  .then((maps) => {
    const templateVars = {
      maps,
      userID: req.cookies.user_id
    }
    res.render('index', templateVars);
  })
  .catch(err => {
    console.log("this is an error", err);
    res.render('index', { userID: req.cookies.user_id } )
  });

});

//Index Page likes
app.get("/favourites", (req, res) => {

  findHearts(req.cookies.user_id, db)
  .then((likes) => {
    res.send(likes);
  })
  .catch(err => {
    res.status(400).send("Stop")
  });

});

//Login
app.get("/login/:user_id", (req, res) => {
  const userID = req.params.user_id
  res.cookie('user_id', req.params.user_id);
  res.redirect('/users')
})

//Logout
app.post("/logout", (req, res) => {
  res.clearCookie('user_id')
  res.redirect('/');
})

app.post("/maps/:id", (req, res) => {
  console.log(req.body);
} )

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
