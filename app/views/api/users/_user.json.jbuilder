json.user do
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.email user.email
    json.playlists user.playlist_ids
  end
end
json.playlists do
  user.playlists.each do |playlist|
    json.set! playlist.id do
      json.partial! 'api/playlists/playlist', playlist: playlist
    end
  end
end
