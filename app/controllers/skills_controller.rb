class SkillsController < ApplicationController
  include SkillsHelper

  def index
    categorize_skills
    @lifecards = Lifecard.all
  end
end
