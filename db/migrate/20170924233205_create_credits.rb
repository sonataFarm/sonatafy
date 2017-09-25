class CreateCredits < ActiveRecord::Migration[5.1]
  def change
    create_table :credits do |t|
      t.integer :performer_id, null: false
      t.integer :album_id, null: false

      t.timestamps
    end
    add_index :credits, :performer_id
    add_index :credits, :album_id
  end
end
