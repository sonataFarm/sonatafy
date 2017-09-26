json.set! user.id do
  json.id user.id
  json.username user.username
  json.email user.email
  json.playlists user.playlist_ids
end
