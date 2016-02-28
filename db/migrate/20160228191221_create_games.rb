class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.string :description
      t.string :image
      t.string :live_link

      t.timestamps
    end
  end
end
