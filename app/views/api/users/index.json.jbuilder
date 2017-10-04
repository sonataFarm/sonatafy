json.users({})
json.playlists({})

json.users do
  @users.each do |user|
    json.partial! 'api/users/user', user: user
  end
end

json.playlists do
  @users.each do |user|
    user.playlists.limit(5).each do |playlist|
      json.partial! 'api/playlists/playlist', playlist: playlist
    end
  end
end
