class AddUniqueIndexToFollows < ActiveRecord::Migration[5.1]
  def change
    add_index :follows, [:follower_id, :followed_user_id], unique: true
  end
end
