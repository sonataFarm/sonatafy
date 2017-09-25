class Performer < ApplicationRecord
  validates :name, presence: true

  has_many :albums
end
