class PagesController < ApplicationController
  
  include ProjectsHelper
  
  def home
    @top_skills = Skill.all.sort_by {|skill| skill.num_of_projects}.reverse.take(5)
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