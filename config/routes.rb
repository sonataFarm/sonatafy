Rails.application.routes.draw do
  root 'static_pages#root'
  get 'test', to: 'static_pages#test'
  
  namespace :api, defaults: { format: :json } do

    get 'users/current', to: 'users#current'
    resources :users, only: [:create, :show] do
    end

    resource :session, only: [:create, :destroy]
  end
end
