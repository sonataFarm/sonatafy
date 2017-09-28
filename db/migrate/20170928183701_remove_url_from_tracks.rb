class RemoveUrlFromTracks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tracks, :url
  end
end
