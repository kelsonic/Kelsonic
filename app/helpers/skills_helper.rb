module SkillsHelper
  def top_skills_except_html_css
    sorted_skills = Skill.all.sort_by {|skill| skill.num_of_projects.to_i}
    sorted_skills_without_html_css = sorted_skills.reverse.select do |skill| 
      skill unless skill.skill == "HTML5" || skill.skill == "CSS3"
    end
    sorted_skills_without_html_css.take(5)
  end
end
