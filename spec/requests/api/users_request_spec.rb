# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'API::Users', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/api/users', xhr: true
      expect(response).to have_http_status(:success)
    end
  end
end
