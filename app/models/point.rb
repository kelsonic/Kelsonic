class Point < ActiveRecord::Base
  # Associations
  belongs_to :project
  # Validations
  validates :body, presence: true, length: { minimum: 5, maximum: 130 }
end
