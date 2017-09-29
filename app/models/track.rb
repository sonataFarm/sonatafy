class Track < ApplicationRecord
  validates :title, :album_id, :ord, :audio, presence: true

  belongs_to :album
  has_many :playlistings
  has_many :playlists, through: :playlistings
  has_one :composer, through: :album
  has_many :performers, through: :album

  attr_accessor :url
  # TODO why didn't this work?
  def img_url
    album.img_url
  end
end
