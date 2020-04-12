# frozen_string_literal: true

module API
  class PicsController < ApplicationController
    def index
      posts = ['Post 1', 'Post 2']

      render json: { posts: posts }
    end
  end
end
