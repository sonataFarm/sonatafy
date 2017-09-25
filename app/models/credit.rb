class Credit < ApplicationRecord
  validates :performer_id, :album_id, presence: true

  belongs_to :performer
  belongs_to :album
end
