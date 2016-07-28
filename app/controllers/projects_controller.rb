class ProjectsController < ApplicationController

  def index
    if !params[:project_type]
      @projects = Project.all.reverse

    elsif params[:project_type] == 'JavaScript'
      @projects = Project.where("category LIKE ?", '%js%').reverse

    elsif params[:project_type] == 'Ruby on Rails'
      @projects = Project.where("category LIKE ?", '%Rails%').reverse

    elsif params[:project_type] == 'Unity3D'
      @projects = Project.where("category LIKE ?", '%Unity%').reverse

    else
      @projects = Project.all.reverse

    end
  end
  
end