# frozen_string_literal: true

require 'httparty'
### Migration  #################################################################
################################################################################
# class CreatePics < ActiveRecord::Migration[6.0]
#   def change
#     create_table :pics do |t|
#       t.integer :width
#       t.integer :height
#       t.integer :picsum_id
#
#       t.timestamps
#     end
#     add_index :pics, :width
#     add_index :pics, :height
#     add_index :pics, :picsum_id
#   end
# end

class Pic < ApplicationRecord
  ### Constants  #################################################################
  ################################################################################
  BASE_URL = 'https://picsum.photos/id'
  GRAYSCALE_PARAM = 'grayscale='
  BLUR_PARAM = 'blur='

  ### Callbacks  #################################################################
  ################################################################################
  before_validation :generate_url, on: :create
  after_create :create_info

  ### Validations  ###############################################################
  ################################################################################
  validates_presence_of :width, :height, :picsum_id, :url
  validates :width, numericality: true
  validates :height, numericality: true

  ### Associations ###############################################################
  ################################################################################
  has_many :likes
  has_many :liking_users, through: :likes, source: :user
  has_one :info

  ### Scopes #####################################################################
  ################################################################################
  scope :transformed, lambda { |grayscale: nil, blur: nil|
    all.map do |pic|
      pic.url = transform_url(grayscale: grayscale, blur: blur, url: pic.url)
    end
  }

  ### Instance Methods (Public) ##################################################
  ################################################################################

  def like(user)
    user.liked_pics << self
  end

  def unlike(user)
    user.likes.find_by(pic_id: id).destroy
  end

  private

  ### Private Methods ############################################################
  ################################################################################

  def transform_url(grayscale:, blur:, url:)
    new_url = "#{url}?"
    new_url += "#{GRAYSCALE_PARAM}#{grayscale}" if grayscale
    new_url += '&' if grayscale && blur
    new_url += "#{BLUR_PARAM}#{blur}" if blur
  end

  def generate_url
    self.url = "#{BASE_URL}/#{picsum_id}/#{width}/#{height}"
  end

  def create_info
    url = "#{BASE_URL}/#{picsum_id}/info"
    response = HTTParty.get(url)
    if response.code == 200
      parsed_info = response.parsed_response.symbolize_keys
      Info.create(
        author: parsed_info[:author],
        url: parsed_info[:url],
        height: parsed_info[:height],
        width: parsed_info[:width],
        download_url: parsed_info[:download_url],
        pic_id: id
      )
    end
  end
end
