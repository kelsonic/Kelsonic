module SkillsHelper

  def top_skills_except_html_css # Redo this
    sorted_skills = Skill.all.sort_by { |skill| skill.rating }

    sorted_skills_without_html_css = sorted_skills.reverse.select do |skill| 
      skill unless skill.skill == "HTML5" || skill.skill == "CSS3"
    end

    sorted_skills_without_html_css.take(5)
  end

  

  def gen_stars(rating)

    if rating === 2
      "&#9734; " * 2
    elsif rating === 3
      "&#9734; " * 3
    elsif rating === 4
      "&#9734; " * 4
    elsif rating === 5
      "&#9734; " * 5
    else
      "N/A"
    end

  end



  def categorize_skills
    @languages, @frameworks, @libraries, @databases, @other = [], [], [], [], []

    Skill.all.each do |skill| 
      p skill

      if skill.skill_type == "Languages"
        @languages.push(skill)

      elsif skill.skill_type == "Frameworks"
        @frameworks.push(skill)

      elsif skill.skill_type == "Libraries"
        @libraries.push(skill)

      elsif skill.skill_type == "Databases"
        @databases.push(skill)

      else
        @other.push(skill)
        
      end
    end
  end

end
