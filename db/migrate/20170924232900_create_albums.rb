class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.string :img_url, null: false
      t.integer :composer_id, null: false

      t.timestamps
    end
    add_index :albums, :title
    add_index :albums, :composer_id
  end
end
