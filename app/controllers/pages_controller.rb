class PagesController < ApplicationController
  
  def home
  end
  
  def devbootcamp
  end
  
  def cheatsheet
  end
  
  def rails
    @projects = Project.all.sort_by {|project| project.launched}.reverse
  end
  
  def videogames
    @games = Game.all
  end
  
  def about
  end
  
  def blog
  end
  
end