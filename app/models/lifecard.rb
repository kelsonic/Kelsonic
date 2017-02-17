class Lifecard < ActiveRecord::Base
  validates :image, presence: true
  validates :location, presence: true, length: { maximum: 15 }
  validates :years, presence: true, length: { maximum: 9 }
  validates :para1, presence: true
  validates :para2, presence: true
  validates :para3, presence: true
end
