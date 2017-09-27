class Playlisting < ApplicationRecord
  validates :track_id, :playlist_id, :ord, presence: true

  belongs_to :playlist
  belongs_to :track
  has_one :user, through: :playlist, source: :author
end
