class Track < ApplicationRecord
  validates :title, :album_id, :ord, presence: true

  has_attached_file :audio, default_url: '/mp3/1.mp3'
  validates_attachment_content_type :audio,
    content_type: [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio' ]

  belongs_to :album
  has_many :playlistings
  has_many :playlists, through: :playlistings
  has_one :composer, through: :album
  has_many :performers, through: :album
end
