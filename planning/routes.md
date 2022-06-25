# ROUTES

/ root page


Read GET /users/:id
render user home page. the main page for when the user logs in
/users/:id/maps


Browse GET /maps
render /
- because we want to have maps available in the index page 

Read GET /maps/:id
render /users/:id/maps
- loading the list of maps created by the user
- load maps liked by the user 

Edit POST /maps/:id
 
Add POST /maps

Delete POST /maps/:id/delete


Browse GET /comments

Edit POST /comments/:id
 
Add POST /comments/:id

Delete POST /comments/:id/delete



Browse GET /locations

Read GET /locations/:id

Edit POST /locations/:id
 
Add POST /locations/:id

Delete POST /locations/:id/delete
