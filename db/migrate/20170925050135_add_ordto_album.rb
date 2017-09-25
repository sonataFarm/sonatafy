class AddOrdtoAlbum < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :ord, :integer

    Track.all.each do |track|
      track.ord = track.id
      track.save!
    end

    change_column_null :tracks, :ord, false
  end
end
