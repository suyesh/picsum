class CreateLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :pic_id

      t.timestamps
    end
    add_index :likes, :user_id
    add_index :likes, :pic_id
  end
end
