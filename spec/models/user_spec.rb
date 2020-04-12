# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { build(:new_user) }

  it 'is invalid with invalid attributes' do
    expect(user).to be_invalid
  end

  it 'is valid with valid attributes' do
    user.password = 'password12345'
    user.password_confirmation = 'password12345'
    expect(user).to be_valid
  end

  it 'is not valid without first_name' do
    expect(user).to validate_presence_of(:first_name).with_message("First name can't be blank")
  end

  it 'is not valid without password' do
    expect(user).to validate_presence_of(:password).with_message('is too short (minimum is 6 characters)')
  end

  it 'is not valid without email' do
    expect(user).to validate_presence_of(:email).with_message("Email can't be blank")
  end

  it 'is not valid without valid email' do
    expect(user).to_not allow_value('base@example').for(:email)
  end

  it 'is valid with valid email' do
    expect(user).to allow_value('base@example.com').for(:email)
  end

  it 'will create password_digest after save' do
    user.password = 'password1234'
    user.password_confirmation = 'password1234'
    user.save
    expect(user.password_digest).to_not be_nil
  end

  it 'Validates uniqueness of email with custom message' do
    expect(user).to validate_uniqueness_of(:email).with_message('Email must be unique')
  end

  it { should have_many(:liked_pics) }
end
