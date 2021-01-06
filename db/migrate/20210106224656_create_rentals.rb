class CreateRentals < ActiveRecord::Migration[6.0]
  def change
    create_table :rentals do |t|
      t.string :title
      t.string :owner
      t.string :city
      t.json :location
      t.string :category
      t.string :rental_type
      t.integer :bedrooms
      t.string :image
      t.text :description

      t.timestamps
    end
  end
end
