json.user do
  json.partial! 'api/users/user', user: @user
end

json.playlists do
  @user.playlists.each do |playlist|
    json.partial! 'api/playlists/playlist.json.jbuilder', playlist: playlist
  end
end
