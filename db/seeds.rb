# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

ActiveRecord::Base.transaction do
  Composer.destroy_all
  Performer.destroy_all
  Album.destroy_all
  Track.destroy_all
  Playlist.destroy_all
  Playlisting.destroy_all
  User.destroy_all
end

def getRandomTempo
  tempo_markings = %w[
    Grave Largo Lento Adagio Andante Moderato Allegretto Allegro Animato
    Agitato Vivace Presto Prestissimo
  ]

  tempo_modifications = %w[
    ma\ non\ troppo grazioso appassionato espressivo con\ amore affettuoso
    bruscamente con\ bravura con\ brio con\ fuoco dolce misterioso
    sostenuto
  ]

  tempo = tempo_markings.sample

  modified = (rand(1) > 0)
  modified ? "#{tempo} #{tempo_modifications.sample}" : tempo
end

def generate_tracks(type)
  case type
  when :symphony
    movements = rand(3..4)
    base = "Symphony"
    return trackFactory(movements, base)
  when :concerto
    movements = rand(3..4)
    base = "#{Faker::Music.instrument.capitalize} Concerto"
    return trackFactory(movements, base)
  when :suite
    movements = rand(3..10)
    base = "Suite"
    return trackFactory(movements, base)
  when :sonata
    movements = rand(3..4)
    base = "#{Faker::Music.instrument.capitalize} Sonata"
    return trackFactory(movements, base)
  end
end

def album_title(type)
  case type
  when :symphony
    "Symphonies"
  when :concerto
    "Concerti"
  when :suite
    "Suites"
  when :sonata
    "Sonatas"
  end
end

def trackFactory(movements, base)
  roman_numerals = {
    1 => 'I',
    2 => 'II',
    3 => 'III',
    4 => 'VI',
    5 => 'V',
    6 => 'VI',
    7 => 'VII',
    8 => 'VIII',
    9 => 'IX',
    10 => 'X'
  }

  number = rand(10)
  base = "#{base} No. #{number}"
  tracks = []

  movements.times do |i|
    movement = roman_numerals[i + 1]
    tempo = getRandomTempo
    track = "#{base}: #{movement}. #{tempo}"
    tracks << track
  end

  tracks
end

def seed_database
  composers = [
    'Ludwig van Beethoven',
    'Franz Joseph Haydn',
    'Wolfgang Amadeus Mozart',
    'Gustav Mahler',
    'Johannes Brahms',
    'Maurice Ravel',
    'Claude Debussy',
    'Dmitri Shostakovich',
    'Igor Stravinsky',
    'Sergei Rachmaninoff',
    'Leonard Bernstein'
  ];

  performers = [
    'Vladimir Horowitz',
    'Martha Argerich',
    'Yo-Yo Ma',
    'Gustavo Dudamel',
    'Wilhelm Furtwangler',
    'Maria Callas',
    'The BBC Symphony Orchestra',
    'The New York Philharmonic',
    'James Levine',
    'Evgeny Kissin',
    'Arturo Toscanini',
    'Luciano Pavoratti',
    'Daniel Barenboim',
    'Jaqueline Dupre',
    'Alfred Brendel',
    'Yuja Wang',
    'Carl Richter',
    'Herbert von Karajan'
  ];


  seed_composers(composers)
  seed_performers(performers)
  seed_albums(50)
  seed_credits(1, 5)
  seed_users(10)
  seed_playlists(10, 15)
  seed_playlistings(5, 20)
end

def seed_composers(composers)
  composers.each do |composer|
    Composer.create(name: composer)
  end
end

def seed_performers(performers)
  performers.each do |performer|
    Performer.create(name: performer)
  end
end

def seed_albums(n)
  n.times do
    album_type = [:sonata, :suite, :concerto, :symphony].sample

    composer = Composer.random
    composer_name = composer.name.split[-1]
    instrument = Faker::Music.instrument
    title = "#{composer_name} #{instrument} #{album_title(album_type)}"
    img_url = Faker::Placeholdit.image('150x150', 'jpg')
    album = Album.create(title: title, img_url: img_url, composer_id: composer.id)

    pieces = rand(1..4)
    tracks = []
    pieces.times do
      movements = generate_tracks(album_type)
      tracks += movements
    end

    tracks.each_with_index do |title, idx|
      url = 'none'
      Track.create(
        title: title,
        url: url,
        album_id: album.id,
        ord: idx + 1
      )
    end
  end
end

def seed_credits(min, max)
  # min, max number of credits per album
  Album.all.each do |album|
    rand(min..max).times do |i|
      performer = nil
      loop do
        performer = Performer.random
        break unless album.performers.include?(performer)
      end
      Credit.create(
        performer_id: performer.id,
        album_id: album.id,
        ord: i + 1
      )
    end
  end
end

def seed_users(n)
  n.times do |i|
    username = Faker::GameOfThrones.city.downcase
    email = "#{username}@aol.com"
    password = '123456'
    User.create(username: username, email: email, password: password)
  end
end

def seed_playlists(min, max)
  User.all.each do |user|
    rand(min..max).times do
      title = Faker::VentureBros.organization
      Playlist.create(title: title, author_id: user.id)
    end
  end
end

def seed_playlistings(min, max)
  Playlist.all.each do |playlist|
    rand(min..max).times do |i|
      track = Track.random
      Playlisting.create(
        track_id: track.id,
        playlist_id: playlist.id,
        ord: i + 1
      )
    end
  end
end

seed_database
