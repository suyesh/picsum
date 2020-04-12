# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Pic, type: :model do
  let(:john)    { create(:existing_user) }
  let(:picture) { create(:pic) }

  it { should have_many(:liking_users) }

  it 'is not valid without default height' do
    expect(picture).to validate_presence_of(:height).with_message("can't be blank")
  end

  it 'is not valid without default width' do
    expect(picture).to validate_presence_of(:width).with_message("can't be blank")
  end

  it 'is not valid without picsum_id' do
    expect(picture).to validate_presence_of(:picsum_id).with_message("can't be blank")
  end

  it 'is not valid without url' do
    expect(picture).to validate_presence_of(:url).with_message("can't be blank")
  end

  it 'should be able to be liked by user' do
    picture.like(john)
    expect(john.liked_pics.count).to eq(1)
  end

  it 'should be able to be unliked by user' do
    picture.like(john)
    picture.unlike(john)
    expect(john.liked_pics.count).to eq(0)
  end

  it 'should have valid url' do
    expect(picture.url).to eq("https://picsum.photos/id/#{picture.picsum_id}/#{picture.width}/#{picture.height}")
  end

  it 'should return grayscale urls' do
    pictures = Pic.transformed(grayscale: 2)
    expect(pictures.all? { |pic| pic.url.split('?') == 'grayscale=2' }).to eq(true)
  end

  it 'should return blur urls' do
    pictures = Pic.transformed(blur: 2)
    expect(pictures.all? { |pic| pic.url.split('?') == 'blur=2' }).to eq(true)
  end

  it 'should return blurred grayscale urls' do
    pictures = Pic.transformed(blur: 2, grayscale: 2)
    expect(pictures.all? { |pic| pic.url.split('?') == 'grayscale=2&blur=2' }).to eq(true)
  end

  it 'should return picture info' do
    expect(picture.info.author).to eq('Alejandro Escamilla')
  end
end
