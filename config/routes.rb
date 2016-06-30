Rails.application.routes.draw do
  
  root 'pages#home'
  
  # Projects index action
  get '/projects', to: 'projects#index'
  # Skills index action
  get '/about', to: 'skills#index'
  
  get '/login', to: 'logins#new'
  post '/login', to: 'logins#create'
  get '/logout', to: 'logins#destroy'
  
end
