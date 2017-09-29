class RemoveAudioAttachmentFromTracks < ActiveRecord::Migration[5.1]
  def change
    remove_attachment :tracks, :audio
  end
end
