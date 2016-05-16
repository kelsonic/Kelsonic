class Skill < ActiveRecord::Base
  
  validates :skill, presence: true, length: {minimum: 1, maximum: 35 }
  validates :num_of_projects, presence: true, length: {maximum: 3}
  
end
