# frozen_string_literal: true

Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  post 'app_token' => 'app_token#create'
  root to: 'pages#index'

  namespace :api, defaults: { format: 'json' } do
    resources :pics, only: :index
  end

  match '*path', to: 'pages#index', via: :all
end
