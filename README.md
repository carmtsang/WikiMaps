# Wiki Maps

Midterm project for Lighthouse Labs. WikiMaps is a web app that allows users to collaboratively create maps which list multiple "points". For example: "Best Places to Eat Around Town" or "Locations of Movie Scenes".

## Tech Stack:

- NodeJS
- Express
- HTML & CSS
- jQuery
- SASS
- PostgreSQL

## Screen Shots:

![Home](https://github.com/carmtsang/WikiMaps/blob/master/docs/landing_page.jpg)
WikiMaps Landing page.

![User Page](https://github.com/carmtsang/WikiMaps/blob/master/docs/user_homepage.jpg)
User home page, where users create a new map and see list of created maps, liked maps, and maps they contributed to.

![User Page](https://github.com/carmtsang/WikiMaps/blob/master/docs/user_homepage2.jpg)
User home page continued.

![Map](https://github.com/carmtsang/WikiMaps/blob/master/docs/map.jpg)
Map view.

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

- username: `labber`
- password: `labber`
- database: `midterm`

3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`

- Check the db folder to see what gets created and seeded in the SDB

7. Run the server: `npm run local`

- Note: nodemon is used, so you should not have to restart your server

8. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- SASS
- GoogleMaps
- Express
- EJS
- Morgan
- Nodemon
