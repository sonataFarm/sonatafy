json.set! playlist.id do
  json.id      playlist.id
  json.title   playlist.title
  json.tracks  playlist.ordered_track_ids
  json.author_id playlist.author_id
end
