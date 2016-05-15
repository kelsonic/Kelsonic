class AddBootcampToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :bootcamp, :boolean, default: false
  end
end
