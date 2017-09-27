json.playlist do
  json.partial! 'api/playlists/playlist.json.jbuilder', playlist: @playlist
end

json.tracks do
  @playlist.tracks.each do |track|
    json.partial! 'api/tracks/track.json.jbuilder', track: track
  end
end

json.composers do
  @playlist.composers.each do |composer|
    json.partial! 'api/composers/composer.json.jbuilder', composer: composer
  end
end

json.performers do
  @playlist.performers.each do |performer|
    json.partial! 'api/performers/performer.json.jbuilder', performer: performer
  end
end

json.albums do
  @playlist.albums.each do |album|
    json.partial! 'api/albums/album.json.jbuilder', album: album
  end
end
