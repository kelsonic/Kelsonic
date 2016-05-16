class RemoveHoursFromSkills < ActiveRecord::Migration
  def change
    remove_column :skills, :hours, :string
  end
end
