class AddUrlToPics < ActiveRecord::Migration[6.0]
  def change
    add_column :pics, :url, :string
  end
end
