json.set! @album.id do
  json.id @album.id
  json.title @album.title
  json.img_url @album.img_url
  json.composer_id @album.composer_id
  json.tracks @album.ordered_track_ids
  json.performers @album.ordered_performer_ids
end
