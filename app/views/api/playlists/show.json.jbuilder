json.set! @playlist.id do
  json.id      @playlist.id
  json.title   @playlist.title
  json.tracks  @playlist.ordered_track_ids
  json.user_id @playlist.user_id
end
