# ROUTES

/ root page

Read GET /users/:id
/users/:id/maps
render user home page. the main page for when the user logs in
- home page for logged-in users, users can view their list of own maps and favourited maps
- non logged in users cannot view this page. redirect to home page
- users can toggle new map section
    - 


Browse GET /maps
render /
- because we want to have maps available in the index page 

Read GET 
render /users/:id/maps
- loading the list of maps created by the user
- load maps liked by the user 

Edit POST /maps/:id
 
Add POST /maps

Delete POST /maps/:id/delete


Browse GET /comments
render on maps/:id
- load on inidvidual map page
- non logged in users can view this page
- only logged in users can edit this page

Edit POST /comments/:id
 
Add POST /comments/:id

Delete POST /comments/:id/delete



Browse GET /locations

Read GET /locations/:id

Edit POST /locations/:id
 
Add POST /locations/:id

Delete POST /locations/:id/delete
