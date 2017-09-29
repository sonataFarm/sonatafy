class AddAudiotoTracks < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :audio, :string, null: false, default: 'bach-1.mp3'
  end
end
