export const selectUserPlaylists = (state, userID) => {
  const user = state.entities.users[userID];

  if (user && user.playlists) {
    return user.playlists.map(
      id => state.entities.playlists[id]
    );
  }

  return [];
}

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
}

export const selectTrackDetails = (state, trackID) => {
  const track = state.entities.tracks[trackID];
  const album = state.entities.albums[track.album_id];
  const composer = state.entities.composers[album.composer_id];

  return {
    ...track,
    album: (album ? album.title : undefined),
    composer: (composer ? composer.name : undefined)
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
