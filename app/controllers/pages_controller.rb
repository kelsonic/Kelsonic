class PagesController < ApplicationController
  
  include ProjectsHelper
  
  def home
  end
  
  def devbootcamp
    @bootcamp_projects = bootcamp_projects
  end
  
  def cheatsheet
  end
  
  def rails
    @rails_projects = rails_projects
  end
  
  def videogames
    @games = Game.all
  end
  
end