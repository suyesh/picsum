# frozen_string_literal: true

### Migration  #################################################################
################################################################################
# class CreateUsers < ActiveRecord::Migration[6.0]
#     def change
#       create_table :users do |t|
#         t.string :first_name
#         t.string :last_name
#         t.string :email
#         t.string :password
#         t.string :password_confirmation
#         t.timestamps
#       end
#       add_index :users, :email, unique: true
#     end
#   end

class User < ApplicationRecord
  ### Validations  ###############################################################
  ################################################################################
  validates :first_name, presence: { message: "First name can't be blank" }
  validates :email,
            presence: { message: "Email can't be blank" },
            uniqueness: { message: 'Email must be unique' }
  validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  validates :password, length: { in: 6..20 }
  has_secure_password

  ### Associations ###############################################################
  ################################################################################
  has_many :likes
  has_many :liked_pics, through: :likes, source: :pic
end
