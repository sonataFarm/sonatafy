# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative './seeds/playlist-seed'
require_relative './seeds/track-seed'
require_relative './seeds/composer-seed'
require_relative './seeds/performer-seed'
require_relative './seeds/album-seed'

require 'faker'
ActiveRecord::Base.transaction do
  Composer.destroy_all
  Performer.destroy_all
  Album.destroy_all
  Track.destroy_all
  Playlist.destroy_all
  Playlisting.destroy_all
  User.destroy_all
  Follow.destroy_all
end

def seed_database
  seed_composers
  seed_performers
  seed_albums(50)
  seed_credits(1, 5)
  seed_users
  seed_follows(4, 6)
  seed_playlists(10, 15)
  seed_playlistings(5, 20)
end

def seed_composers
  ComposerSeed::composers.each do |composer|
    Composer.create(name: composer)
  end
end

def seed_performers
  PerformerSeed::performers.each do |performer|
    Performer.create(name: performer)
  end
end

def seed_albums(n)
  n.times do
    seed = AlbumSeed.new

    album = Album.create(title: seed.title, img_path: seed.img_path, composer_id: seed.composer_id)

    tracks = []

    if [:sonata, :string_quartet, :concerto, :symphony].include?(seed.genre)
      rand(2..4).times do
        tracks += TrackSeed::movements(seed.genre)
      end
    elsif seed.genre === :song
      rand(10..14).times do
        tracks << TrackSeed::random_song
      end
    else
      rand(10..14).times do
        tracks << TrackSeed::random_piece_with_key
      end
    end

    tracks.each_with_index do |title, idx|
      Track.create(
        title: title,
        album_id: album.id,
        ord: idx + 1,
        duration: TrackSeed::random_duration_in_seconds,
        audio: TrackSeed::random_audio_url
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

def seed_users
  users = [
    {
      username: 'gmahler',
      email:    'sonatify+mahler@gmail.com'
    },
    {
      username: 'rockSTAR',
      email:    'sonatify+liszt@gmail.com'
    },
    {
      username: 'hidin',
      email:    'sonatify+haydn@gmail.com'
    },
    {
      username: 'rawqmaninov',
      email:    'sonatify+rachmaninoff@gmail.com'
    },
    {
      username: 'alrite',
      email:    'sonatify+stravinsky@gmail.com'
    },
    {
      username: 'jOh4nNsEbA5TiAn',
      email:    'sonatify+bach@gmail.com'
    },
    {
      username: 'canuHandelit',
      email:    'sonatify+handel@gmail.com'
    },
    {
      username: 'road2nine',
      email:    'sonatify+beethoven@gmail.com'
    },
    {
      username: 'I_AM_RICHARD_WAGNER',
      email:    'sonatify+wagner@gmail.com'
    },
    {
      username: 'wolfiemoz',
      email:    'sonatify+mozart@gmail.com'
    },
  ]

  users.each do |user|
    User.create(
      username: user[:username],
      email: user[:email],
      password: 'sonata'
    )
  end
end

def seed_follows(min, max)
  User.all.each do |user|
    rand(min..max).times do
      loop do
        followed_user = User.random
        follow = Follow.new(
          follower_id: user.id,
          followed_user_id: followed_user.id)
        break if follow.save
      end
    end
  end
end

def seed_playlists(min, max)
  User.all.each do |user|
    rand(min..max).times do
      title = PlaylistSeed::title
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
