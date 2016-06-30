class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string   "skill"
      t.string   "num_of_projects"

      t.timestamps null: false
    end
  end
end
