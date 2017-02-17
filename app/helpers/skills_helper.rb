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
    stars =   case rating
              when 2
                '&#9734; ' * 2
              when 3
                '&#9734; ' * 3
              when 4
                '&#9734; ' * 4
              when 5
                '&#9734; ' * 5
              else
                'N/A'
              end
    stars.html_safe
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
