json.array! @results do |track|
  json.id track.id
  json.display do
    json.title track.title
    json.composer track.composer.name
  end
end
