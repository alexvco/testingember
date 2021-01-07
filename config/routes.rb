Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  mount_ember_app :frontend, to: "/"
  match '/rentals',          to: 'rentals#index',   via: :get,           as:   :rentals, constraints: -> request { request.format == :json }
  match '/rentals/:id',          to: 'rentals#show',   via: :get,           as:   :rental, constraints: -> request { request.format == :json }
end
