class CreatePlaylistings < ActiveRecord::Migration[5.1]
  def change
    create_table :playlistings do |t|
      t.integer :track_id, null: false
      t.integer :playlist_id, null: false
      t.integer :ord, null: false

      t.timestamps
    end
    add_index :playlistings, :track_id
    add_index :playlistings, :playlist_id
    add_index :playlistings, :ord
  end
end
