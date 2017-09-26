export const selectPlaylistsByUserID = (state, userID) => {
  const user = state.entities.users[userID];

  if (user && user.playlists) {
    return user.playlists.map(
      id => state.entities.playlists
    );
  }

  return [];
}
