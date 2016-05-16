class PagesController < ApplicationController
  
  include ProjectsHelper
  include SkillsHelper
  
  def home
    @top_skills = top_skills_except_html_css
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