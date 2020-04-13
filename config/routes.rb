# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'pages#index'

  post 'user_token' => 'user_token#create'
  post 'app_token' => 'app_token#create'

  namespace :api, defaults: { format: :json } do
    resources :pics, only: :index
    resources :users
  end

  match '*path', to: 'pages#index', via: :all
end
