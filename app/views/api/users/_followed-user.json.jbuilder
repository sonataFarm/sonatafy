json.set! followed_user.id do
  json.id followed_user.id
  json.username followed_user.username
  json.email followed_user.email
  json.playlists followed_user.playlist_ids
end
