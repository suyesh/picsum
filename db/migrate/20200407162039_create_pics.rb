class CreatePics < ActiveRecord::Migration[6.0]
  def change
    create_table :pics do |t|
      t.integer :width
      t.integer :height
      t.integer :picsum_id

      t.timestamps
    end
    add_index :pics, :width
    add_index :pics, :height
    add_index :pics, :picsum_id
  end
end
