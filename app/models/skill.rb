class Skill < ActiveRecord::Base
  validates :name, presence: true, length: { minimum: 1, maximum: 35 }
  validates :rating, presence: true
end
