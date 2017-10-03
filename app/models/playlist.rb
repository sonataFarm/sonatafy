class Playlist < ApplicationRecord
  validates :title, :author_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
  has_many :playlistings
  has_many :tracks, through: :playlistings
  has_many :albums, through: :tracks
  has_many :composers, through: :tracks
  has_many :performers, through: :tracks

  def ordered_track_ids
    tracks.order('playlistings.ord').pluck(:id)
  end

  def ensure_sequential_order!
    playlistings.order(:ord).each_with_index do |playlisting, idx|
      playlisting.update_attributes(ord: idx + 1)
      playlisting.save
    end
  end

  def add_track(track)
    Playlisting.create(
      playlist_id: id,
      track_id: track.id,
      ord: tracks.length + 1
    )
  end

  def img_url
    albums.first ? albums.first.img_url : nil
  end
end
