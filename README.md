# Sonatify
Sonatify is a single-page app with a Rails backend and React-Redux frontend that was conceived, designed and implemented over 10 days in September 2017. Sonatify provides a music-streaming platform for classical music lovers.

## Technologies
Sonatify uses __Rails 5.0__ with a __PostgreSQL__ database as its backend, with __AWS S3 Cloud Storage__ used for audio storage and access. On the front-end, __React__ components support efficient DOM manipulation while __Redux__ manages application state in tandem. The result of this architecture is a responsive, scalable and modern application.

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
* Search performers, composers, albums
* Performer, composer details
