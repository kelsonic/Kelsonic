class PagesController < ApplicationController
  
  include ProjectsHelper
  include SkillsHelper
  
  def home
    @top_skills = top_skills_except_html_css
    @random_project = Project.all.sample
  end
  
end