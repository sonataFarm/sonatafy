const searchTracks = searchTerm => (
  $.ajax({
    method: 'GET',
    url: '/api/search?type=tracks'
    data: { search_term: searchTerm }
  })
)


export default {
  searchTracks
};
