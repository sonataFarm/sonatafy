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
end
