class RemoveMp3FromTracks < ActiveRecord::Migration[5.1]
  def change
    remove_attachment :tracks, :mp3
  end
end
