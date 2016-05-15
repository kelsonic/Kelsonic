class Project < ActiveRecord::Base
  
  has_many :points, dependent: :destroy
  
  validates :title, presence: true, length: { in: 2..20 }
  validates :description, presence: true, length: { in: 2..120 }
  validates :launched, presence: true
  validates :git_link, length: { in: 5..100 }
  validates :live_link, length: { in: 5..100 }
  validates :image, presence: true
  validates :month, presence: true, length: { in: 8..20 }
  validates :category, presence: true, length: {in: 2..20}, format: { with: /\A[a-zA-Z]+\z/,
    message: "only allows letters" }
  
end