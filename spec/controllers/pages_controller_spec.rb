require 'rails_helper'

RSpec.describe PagesController, type: :controller do
  describe 'GET #home' do
    before do
      get :home
    end

    it { should respond_with(200) }

    it { should route(:get, '/').to(action: :home) }

    it { should render_template('home') }
  end
end
