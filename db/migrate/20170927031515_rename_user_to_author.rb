class RenameUserToAuthor < ActiveRecord::Migration[5.1]
  def change
    rename_column :playlists, :user_id, :author_id
  end
end
