module SkillsHelper
  def top_skills
    skill_names = [
      'React.js',
      'JavaScript',
      'Ruby on Rails',
      'Ruby',
      'Node.js'
    ]

    skill_names.map do |skill_name|
      Skill.find_by(name: skill_name)
    end
  end

  def gen_stars(rating)
    case rating
    when 2
      safe_join([('&#9734; ' * 2).html_safe])
    when 3
      safe_join([('&#9734; ' * 3).html_safe])
    when 4
      safe_join([('&#9734; ' * 4).html_safe])
    when 5
      safe_join([('&#9734; ' * 5).html_safe])
    else
      'N/A'
    end
  end

  def categorize_skills
    @languages = []
    @frameworks = []
    @libraries = []
    @databases = []
    @other = []

    Skill.all.each do |skill|
      case skill.skill_type
      when 'Languages'
        @languages.push(skill)
      when 'Frameworks'
        @frameworks.push(skill)
      when 'Libraries'
        @libraries.push(skill)
      when 'Databases'
        @databases.push(skill)
      else
        @other.push(skill)
      end
    end
  end
end
