Rails.application.routes.draw do
  root 'static_pages#root'
  get 'test', to: 'static_pages#test'

  namespace :api, defaults: { format: :json } do
    get 'users/current', to: 'users#current'

    resources :playlists, only: [:show, :create, :destroy]
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]

    get 'tracks/:id', to: 'tracks#show'
    get 'albums/:id', to: 'albums#show'
    get 'composers/:id', to: 'composers#show'
    get 'performers/:id', to: 'performers#show'
  end
end
