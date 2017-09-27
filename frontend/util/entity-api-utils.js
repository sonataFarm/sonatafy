const fetchSinglePlaylist = id => (
  $.ajax({
    method: 'GET',
    url: `api/playlists/${id}`
  })
);

const createPlaylist = playlist => (
  $.ajax({
    method: 'POST',
    url: 'api/playlists',
    data: { playlist }
  })
);

const updatePlaylist = playlist => (
  $.ajax({
    method: 'PATCH',
    url: `api/playlists/${playlist.id}`,
    data: { playlist }
  })
);

const destroyPlaylist = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${id}`
  })
);

const fetchTrack = id => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${id}`
  })
);

const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`
  })
);

const fetchComposer = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`
  })
);

const fetchPerformer = id => (
  $.ajax({
    method: 'GET',
    url: `api/performers/${id}`
  })
);

export default {
  fetchSinglePlaylist,
  createPlaylist,
  updatePlaylist,
  destroyPlaylist,
  fetchTrack,
  fetchAlbum,
  fetchComposer,
  fetchPerformer
}
