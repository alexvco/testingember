class RentalsController < ApplicationController
  def index
    rentals = Rental.all
    rentals_data_in_jsonapi = []
    rentals.each do |rental|
      rentals_data_in_jsonapi << {
        id: rental.id,
        type: 'rental',
        attributes: {
          title: rental.title,
          owner: rental.owner,
          city: rental.city,
          location: {
            lat: rental.location['lat'],
            lng: rental.location['lng']
          },
          category: rental.category,
          rental_type: rental.rental_type,
          bedrooms: rental.bedrooms,
          image: rental.image,
          description: rental.description,
          created_at: rental.created_at,
          updated_at: rental.updated_at
        }
      }
    end
    render json: { data: rentals_data_in_jsonapi }, status: :ok
  end

  def show
    rental = Rental.find(params[:id])
    render json: {
      data: {
        id: rental.id,
        type: 'rental',
        attributes: {
          title: rental.title,
          owner: rental.owner,
          city: rental.city,
          location: {
            lat: rental.location['lat'],
            lng: rental.location['lng']
          },
          category: rental.category,
          rental_type: rental.rental_type,
          bedrooms: rental.bedrooms,
          image: rental.image,
          description: rental.description,
          created_at: rental.created_at,
          updated_at: rental.updated_at
        }
      }
    }, status: :ok
  end
end
