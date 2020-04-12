# frozen_string_literal: true

class CreateInfos < ActiveRecord::Migration[6.0]
  def change
    create_table :infos do |t|
      t.string :author
      t.string :url
      t.string :download_url
      t.integer :height
      t.integer :width
      t.belongs_to :pic, null: false, foreign_key: true

      t.timestamps
    end
    add_index :infos, :author
  end
end
