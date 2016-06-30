class SkillsController < ApplicationController

  def index

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
