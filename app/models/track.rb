class Track < ApplicationRecord
  validates :title, :album_id, :ord, :audio, presence: true

  belongs_to :album
  has_many :playlistings
  has_many :playlists, through: :playlistings
  has_one :composer, through: :album
  has_many :performers, through: :album

  def img_path
    album.img_path
  end

  def img_url
    get_AWS_presigned_url(img_path)
  end

  def audio_url
    get_AWS_presigned_url(audio)
  end
end
