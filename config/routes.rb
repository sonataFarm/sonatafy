Rails.application.routes.draw do
  root 'static_pages#root'
  get 'test', to: 'static_pages#test'

  namespace :api, defaults: { format: :json } do
    get 'search', to: 'search#search'
    get 'users/current', to: 'users#current'
    resources :playlistings, only: [:create]
    delete 'playlistings', to: 'playlistings#destroy'

    patch 'playlistings/swap', to: 'playlistings#swap'
    resources :playlists, only: [:show, :create, :destroy, :update]
    resources :users, only: [:create, :show] do
    resources :playlists, only: [:index]
      resources :follows, only: [:create, :destroy]
    end
    resource :session, only: [:create, :destroy]

    get 'tracks/:id', to: 'tracks#show'
    get 'albums/:id', to: 'albums#show'
    get 'composers/:id', to: 'composers#show'
    get 'performers/:id', to: 'performers#show'
  end
  get '*path', to: 'static_pages#root'
end
