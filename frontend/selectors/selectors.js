export const selectUsersIndexItems = state => {
  // usersIndex is [[userID, [userPlaylistIDs...]],...]
  // return [{user: ..., playlists: [...]}, ...]

  const { items } = state.ui.usersIndex;

  return items.map(item => {
    const userID = item[0];
    const user = state.entities.users[userID];

    const playlistIDs = item[1];
    const playlists = playlistIDs.map(
      id => state.entities.playlists[id]
    );

    return {
      user,
      playlists
    };
  })
}

export const selectUserPlaylists = (state, userID) => {
  const user = state.entities.users[userID];

  if (user && user.playlists) {
    return user.playlists.map(
      id => state.entities.playlists[id]
    );
  }

  return [];
};

export const selectPlaylistDetails = (state, playlistID) => {
  const playlist = state.entities.playlists[playlistID];

  if (!playlist) {
    return {};
  }

  const author = state.entities.users[playlist.author_id];

  return {
    ...playlist,
    author: {
      username: (author ? author.username : undefined),
      id: (author ? author.id : undefined)
    }
  };
};

export const selectTrackDetails = (state, trackID) => {
  let { tracks, albums, composers } = state.entities;

  const track = tracks[trackID];
  if (!track) return {};

  const album = albums[track.album_id];
  if (!album) return {};

  const composer = composers[album.composer_id];

  return {
    ...track,
    album: album.name,
    composer: composer.name
  }
}

export const selectPlaylistTracks = (state, playlistID) => {
  const playlist = state.entities.playlists[playlistID]
  if (!playlist) return {};

  return playlist.tracks.map(
    id => selectTrackDetails(state, id)
  );
};

export const selectUser = (state, userID)  => (
  state.entities.users[userID]
);

export const selectFollowedUsers = state => {
  let followedUsers = state.session.currentUser.followedUsers;

  return followedUsers.map(userID => {
    const followedUser = state.entities.users[userID];
    const { id, username, email, playlists } = followedUser;

    return { id, username, email, playlists };
  });
};
