module ProjectsHelper
  
  def rails_projects
    Project.all.select {|project| project.category == "Rails"}.sort_by {|project| project.launched}.reverse
  end
  
  def bootcamp_projects
    Project.all.select {|project| project.bootcamp == true}.sort_by {|project| project.launched}.reverse
  end
  
end