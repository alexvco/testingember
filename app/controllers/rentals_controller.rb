class RentalsController < ApplicationController
	def index
		rentals = Rental.all
		render json: rentals, status: :ok
	end

	def show
		rental = Rental.find(params[:id])
		render json: rental, status: :ok
	end
end
