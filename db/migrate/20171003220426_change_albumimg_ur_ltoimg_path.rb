class ChangeAlbumimgUrLtoimgPath < ActiveRecord::Migration[5.1]
  def change
    rename_column :albums, :img_url, :img_path
  end
end
