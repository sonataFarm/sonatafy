# Sonatify
Sonatify is a single-page app with a Rails backend and React-Redux frontend. Conceived, designed and implemented over 10 days in September 2017, Sonatify provides a music-streaming platform for classical music lovers.

[View Live Demo](https://sonatify-now.herokuapp.com/)

## Technologies
Sonatify uses __Rails 5__ with a __PostgreSQL__ database as its backend, with __AWS S3 Cloud Storage__ used for audio storage and access. On the front-end, __React__ components enable on-the-fly DOM manipulation while __Redux__ manages the application state.

The result of this architecture is a responsive, scalable and modern application.

## Key Features
* User authentication utilizing ```bcrypt``` and session tokens
* Continuous track play
* Playlist CRUD operations
* Live asynchronous fuzzy track search
* Follow and unfollow other users

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
