const searchTracks = searchTerm => (
  $.ajax({
    method: 'GET',
    url: `/api/search?type=track&query=${searchTerm}`
  })
)


export default {
  searchTracks
};
