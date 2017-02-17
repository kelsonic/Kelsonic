class CreateLifecards < ActiveRecord::Migration
  def change
    create_table :lifecards do |t|
      t.string 'image'
      t.string 'location'
      t.string 'years'
      t.string 'para1'
      t.string 'para2'
      t.string 'para3'

      t.timestamps null: false
    end
  end
end
