# todo: include followed users
json.user do
  json.partial! 'api/users/current', user: @user
end

json.playlists do
  @user.playlists.each do |playlist|
      json.partial! 'api/playlists/playlist.json.jbuilder', playlist: playlist
  end
end

json.followedUsers do
  @user.followed_users.each do |followed_user|
    json.partial! 'api/users/followed-user.json.jbuilder', followed_user: followed_user
  end
end
