json.set! track.id do
  json.id track.id
  json.title track.title
  json.url track.url
  json.album_id track.album.id
end
