const createFollow = ({ followerID, followedUserID }) => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${followerID}/follows`,
    data: {
      follow: { followed_user_id: followedUserID }
    }
  })
);

const addTrackToPlaylist = (trackID, playlistID) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/playlists/${playlistID}`,
    data: {
      track: { track_id: trackID }
    }
  })
}

const destroyFollow = ({ followerID, followedUserID }) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${followerID}/follows/${followedUserID}`
  })
);

const fetchSinglePlaylist = id => (
  $.ajax({
    method: 'GET',
    url: `/api/playlists/${id}`
  })
);

const fetchSingleUser = id => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

const createPlaylist = playlist => (
  $.ajax({
    method: 'POST',
    url: '/api/playlists',
    data: { playlist }
  })
);

const updatePlaylist = playlist => (
  $.ajax({
    method: 'PATCH',
    url: `/api/playlists/${playlist.id}`,
    data: { playlist }
  })
);

const destroyPlaylist = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${id}`
  })
);

const fetchCurrentTrack = id => (
  $.ajax({
    method: 'GET',
    url: `/api/tracks/${id}`
  })
);

const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `/api/albums/${id}`
  })
);

const fetchComposer = id => (
  $.ajax({
    method: 'GET',
    url: `/api/albums/${id}`
  })
);

const fetchPerformer = id => (
  $.ajax({
    method: 'GET',
    url: `/api/performers/${id}`
  })
);

export default {
  createFollow,
  destroyFollow,
  fetchSinglePlaylist,
  fetchSingleUser,
  createPlaylist,
  updatePlaylist,
  destroyPlaylist,
  fetchCurrentTrack,
  fetchAlbum,
  fetchComposer,
  fetchPerformer,
  addTrackToPlaylist
}
