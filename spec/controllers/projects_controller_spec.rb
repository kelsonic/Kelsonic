require 'rails_helper'

RSpec.describe ProjectsController, type: :controller do
  describe 'GET #index' do
    before do
      get :index
    end

    it { should respond_with(200) }

    it { should route(:get, '/projects').to(action: :index) }

    it { should render_template('index') }
  end
end
