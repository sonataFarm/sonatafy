json.set! track.id do
  json.id track.id
  json.title track.title
  json.url asset_path(track.audio.url)
  json.album_id track.album.id
end
