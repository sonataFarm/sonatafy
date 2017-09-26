# todo: include followed users
json.user do
  json.partial! 'api/users/current', user: @user
end
json.playlists do
  @user.playlists.each do |playlist|
    json.set! playlist.id do
      json.partial! 'api/playlists/playlist.json.jbuilder', playlist: playlist
    end
  end
end
