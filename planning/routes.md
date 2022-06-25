Nav Bar
- Buttons:
  Not logged in:
    - Logo - link to root page
    - Login / Sign up - will not work
  Logged in:
    - Logo - link to root page
    - show 'username logged in'
    - My Maps
    - New Map - GET /users/:id/maps to 'new map' section untoggled & map showing

Index Page
/ root page
- logged in users can favourite maps
- non-logged in users can view example maps, click to load single map. redirect to /maps
- if non-logged in user clicks the heart, promted to log in.

User Home Page
- home page for logged-in users, users can view their list of own maps and favourited maps
- non logged in users cannot view this page. redirect to home page
- show list of user created 'My Maps' and Favourite maps
    - users can edit / delete indivual'My Maps'
    - users can favourite/unfavorite maps
- users can toggle new map section
    - new map form hidden unless clicked
    - form to add new map
        - leaflet map renders, user can pin to location & add locations

Map View Page (individual maps)
- logged in users can comment
- owner of map can create/edit pins on the map (form)
- non-logged in users can view map but cannot edit, add comment or favourite
- non-logged in users can view map but cannot create pins on the map
- logged in users that is not the owner cannot add pins
- users can delete their own comments 


# ROUTES


Browse GET /maps
renders to /
- because we want to have maps available in the index page
- gets all the example maps available for anybody to see, non-logged users are able to see
- logged in users can favorite

Read GET /users/:id/maps
- render user home page. the main page for when the user logs in
- loading the list of maps created by the user
- load maps liked by the user 

Add POST /map
- add new map: map name, locations, name of locations on map.
- render user home page /users/:id/maps

Delete POST /maps/:id/delete
- render index page or user home page.

Edit POST /maps/:id
- Edit from Map View page & save. load same page
 

Browse GET /comments
render on maps/:id
- load on inidvidual map page
- non-logged in users can view this page
- only logged in users can edit this page

Edit POST /comments/:id
- on individual map page

Add POST /comments/:id
- on individual map page

Delete POST /comments/:id/delete
- on individual map page

