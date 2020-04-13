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
  DEFAULT_PER_PAGE = 25
  DEFAULT_PAGE = 1

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
  scope :with_dimensions_query, lambda { |width: nil, height: nil|
    dimensions_query = Pic.dimension_query_string(width: width, height: height)
    return where(dimensions_query) if dimensions_query

    self
  }

  scope :with_all_params, lambda { |grayscale: nil, blur: nil, page_param: DEFAULT_PAGE, per_param: DEFAULT_PER_PAGE, width: nil, height: nil|
    current_page = with_dimensions_query(width: width, height: height).includes(:info).page(page_param).per(per_param)
    {
      data: Pic.generate_data(current_page: current_page, grayscale: grayscale, blur: blur),
      current_page: current_page.current_page,
      total_pages: current_page.total_pages,
      total_count: current_page.total_count
    }
  }

  ### Instance Methods (Public) ##################################################
  ################################################################################

  def like(user)
    user.liked_pics << self
  end

  def unlike(user)
    user.likes.find_by(pic_id: id).destroy
  end

  ### Class Methods ##############################################################
  ################################################################################
  def self.transform_url(grayscale:, blur:, url:)
    new_url = "#{url}?"
    new_url += "#{GRAYSCALE_PARAM}#{grayscale}" if grayscale
    new_url += '&' if grayscale && blur
    new_url += "#{BLUR_PARAM}#{blur}" if blur
    new_url
  end

  def self.generate_data(current_page:, grayscale:, blur:)
    current_page.map do |pic|
      if grayscale || blur
        pic.url = Pic.transform_url(grayscale: grayscale, blur: blur, url: pic.url)
      end
      pic
    end
  end

  def self.dimension_query_string(width:, height:)
    return nil if !height && !width

    width_query_string = width ? "width = #{width}" : nil
    height_query_string = height ? "height = #{height}" : nil
    return "#{width_query_string} AND #{heigh_query_string}" if width && height

    width_query_string || height_query_string
  end

  private

  ### Private Methods ############################################################
  ################################################################################

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
