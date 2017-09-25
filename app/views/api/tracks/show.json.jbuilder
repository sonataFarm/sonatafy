json.set! @track.id do
  json.id @track.id
  json.title @track.title
  json.url @track.url
  json.album @track.album.id
end
