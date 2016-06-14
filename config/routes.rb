Rails.application.routes.draw do
  
  root 'pages#home'
  
  get '/devbootcamp', to: 'pages#devbootcamp'
  get '/videogames', to: 'pages#videogames'
  get '/rails', to: 'pages#rails'
  get '/about', to: 'skills#index'
  get '/cheatsheet', to: 'pages#cheatsheet'
  
  get '/login', to: 'logins#new'
  post '/login', to: 'logins#create'
  get '/logout', to: 'logins#destroy'
  
  # resources :blogs
  
end
