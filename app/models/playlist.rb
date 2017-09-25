class Playlist < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :playlistings
  has_many :tracks, through: :playlistings

  def ordered_track_ids
    tracks.order('playlistings.ord').pluck(:id)
  end
end
