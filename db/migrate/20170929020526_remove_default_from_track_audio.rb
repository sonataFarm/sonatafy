class RemoveDefaultFromTrackAudio < ActiveRecord::Migration[5.1]
  def change
    change_column_default :tracks, :audio, nil
  end
end
