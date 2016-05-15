class Project < ActiveRecord::Base
  
  has_many :points, dependent: :destroy
  
  validates :title, presence: true, length: { minimum: 2, maximum: 20 }
  validates :description, presence: true, length: { minimum: 2, maximum: 120 }
  validates :launched, presence: true
  validates :git_link, length: { minimum: 5, maximum: 100 }
  validates :live_link, length: { minimum: 5, maximum: 100 }
  validates :image, presence: true
  validates :month, presence: true, length: { minimum: 8, maximum: 20 }
  
end