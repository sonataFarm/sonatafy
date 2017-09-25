class Album < ApplicationRecord
  validates :title, :img_url, :composer_id, presence: true

  has_many :tracks
  belongs_to :composer
  has_many :credits
  has_many :performers, through: :credits

  def ordered_track_ids
    tracks.order(:ord).pluck(:id)
  end

  def ordered_performer_ids
    performers.order('credits.ord').pluck(:id)
  end
end
