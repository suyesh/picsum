# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'API::Pics', type: :request do
  before :all do
    100.times do
      create(:pic)
    end
  end
  describe 'GET /index' do
    context 'with no params passed' do
      before :all do
        get '/api/pics'
      end

      it 'returns http success' do
        expect(response).to have_http_status(:success)
      end

      it 'it returns no more than 25 pics' do
        expect(json[:data].length).to eq(25)
      end

      it 'it returns current page value' do
        expect(json[:current_page]).to eq(1)
      end

      it 'it returns total pages value' do
        expect(json[:total_pages]).to eq(4)
      end

      it 'it returns total items value' do
        expect(json[:total_count]).to eq(100)
      end

      it 'it includes info of the image returned' do
        expect(json[:data].first[:info]).to be_truthy
      end
    end

    context 'with params passed' do
      it 'returns correct page requested' do
        get '/api/pics', { params: { page: 2 } }
        expect(json[:current_page]).to eq(2)
      end

      it 'returns correct items per page requested' do
        get '/api/pics', { params: { per: 50, page: 2 } }
        expect(json[:data].length).to eq(50)
      end

      it 'returns all items with grayscale url if requested' do
        get '/api/pics', { params: { per: 50, page: 2, grayscale: 2 } }
        pictures = json[:data].map(&:symbolize_keys)
        expect(pictures.all? { |pic| pic[:url].split('?')[-1] == 'grayscale=2' }).to eq(true)
      end
      it 'returns all items with blur url if requested' do
        get '/api/pics', { params: { per: 50, page: 2, blur: 2 } }
        pictures = json[:data].map(&:symbolize_keys)
        expect(pictures.all? { |pic| pic[:url].split('?')[-1] == 'blur=2' }).to eq(true)
      end

      it 'returns all items with blur & grayscale url if requested' do
        get '/api/pics', { params: { per: 50, page: 2, blur: 2, grayscale: 2 } }
        pictures = json[:data].map(&:symbolize_keys)
        expect(pictures.all? { |pic| pic[:url].split('?')[-1] == 'grayscale=2&blur=2' }).to eq(true)
      end

      it 'returns all items with 250 width if requested' do
        get '/api/pics', { params: { width: 250 } }
        pictures = json[:data].map(&:symbolize_keys)
        expect(pictures.all? { |pic| pic[:width] == 250 }).to eq(true)
      end

      it 'returns all items with 250 height if requested' do
        get '/api/pics', { params: { height: 250 } }
        pictures = json[:data].map(&:symbolize_keys)
        expect(pictures.all? { |pic| pic[:height] == 250 }).to eq(true)
      end
    end
  end
end
