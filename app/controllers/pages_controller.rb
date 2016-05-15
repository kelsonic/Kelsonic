class PagesController < ApplicationController
  
  def home
  end
  
  def devbootcamp
    @bootcamp_projects = Project.all.select {|project| project.bootcamp == true}
  end
  
  def cheatsheet
  end
  
  def rails
    @projects = Project.all.select {|project| project.category == "Rails"}.sort_by {|project| project.launched}.reverse
  end
  
  def videogames
    @games = Game.all
  end
  
end