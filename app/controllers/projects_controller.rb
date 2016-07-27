class ProjectsController < ApplicationController

  def index
    if !params[:project_type]
      @projects = Project.all.reverse

    elsif params[:project_type].downcase == 'javascript'
      @projects = Project.where(category: ['JavaScript']).reverse

    elsif params[:project_type].downcase == 'ruby on rails'
      @projects = Project.where(category: ['Ruby on Rails']).reverse

    elsif params[:project_type].downcase == 'unity'
      @projects = Project.where(category: ['Unity']).reverse

    else
      @projects = Project.all.reverse

    end
  end
  
end