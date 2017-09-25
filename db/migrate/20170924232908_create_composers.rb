class CreateComposers < ActiveRecord::Migration[5.1]
  def change
    create_table :composers do |t|
      t.string :name, null: false

      t.timestamps
    end
    add_index :composers, :name
  end
end
