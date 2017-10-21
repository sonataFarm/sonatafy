# Sonatify
Sonatify is a single-page app powered by a Rails backend and React-Redux frontend. Conceived, designed and implemented over 10 days in September 2017, Sonatify provides a music-streaming platform for classical music lovers to listen to great music and connect with others.

[View Live Demo](https://sonatify-now.herokuapp.com/)

## Technologies
Sonatify uses __Rails 5__ with a __PostgreSQL__ database on the backend, with __AWS S3 Cloud Storage__ for audio storage and access. On the front-end, a __React__ component hierarchy enables on-the-fly DOM manipulation while __Redux__ manages the application state.

The result of this architecture is a responsive, scalable and modern web app.

## Key Features
* User authentication using ```bcrypt``` for password encryption and session cookies
* Continuous track play
* Playlist CRUD operations
* Live asynchronous fuzzy track search
* User follows

### Hot loading
![Hot Loading](https://github.com/sonataFarm/sonatify/blob/master/demo/screenshots/hot-loading.gif)
### Live asynchronous fuzzy track search
![Hot Loading](https://github.com/sonataFarm/sonatify/blob/master/demo/screenshots/asynchronous-search.gif)
### User follows
![Hot Loading](https://github.com/sonataFarm/sonatify/blob/master/demo/screenshots/user-follow.gif)

## Future Development
* Expand search: performers, composers, albums
* Add performer, composer, album details
* Include composition year in track info
