export const selectPlaylistsByUserID = (state, userID) => {
  const user = state.entities.users[userID];

  if (user && user.playlists) {
    debugger;
    return user.playlists.map(
      id => state.entities.playlists[id]
    );
  }

  return [];
}
