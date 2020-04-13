# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

pictures = File.open(Rails.root.join('db', 'data.txt')).readlines.map(&:chomp)

pictures.map do |pic|
  pic_attributes = pic.split('/').last(3).map(&:to_i)
  picsum_id = pic_attributes[0]
  width = pic_attributes[1]
  height = pic_attributes[2]
  Pic.create(picsum_id: picsum_id, width: width, height: height)
end
