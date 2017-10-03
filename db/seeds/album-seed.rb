require_relative './track-seed'

class AlbumSeed
  def self.random_img_path
    "album_covers/album-cover#{rand(1..23)}.jpg"
  end

  def self.title(genre, composer_name, instrument)
    case genre
    when :sonata
      title_body = "#{instrument} Sonatas"
    when :string_quartet
      title_body = "String Quartets"
    when :concerto
      title_body = "#{instrument} Concerti"
    when :symphony
      title_body = "Symphony"
    when :song
      title_body = "Songs"
    when :pieces
      title_body = "Pieces for #{instrument}"
    end

    "#{composer_name} #{title_body}"
  end

  def self.random_genre
    case rand(0..2)
    when 0
      [:sonata, :string_quartet, :concerto, :symphony].sample
    when 1
      :song
    when 2
      :pieces
    end
  end

  attr_reader :title, :img_path, :composer_id, :genre
  def initialize
    composer = Composer.random
    composer_name = composer.name.split[-1]
    instrument = TrackSeed::instruments.sample

    @genre = self.class.random_genre
    @title = self.class.title(@genre, composer_name, instrument)
    @img_path = self.class.random_img_path
    @composer_id = composer.id
  end


end
