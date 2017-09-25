class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.integer :album_id, null: false

      t.timestamps
    end
    add_index :tracks, :title
  end
end
