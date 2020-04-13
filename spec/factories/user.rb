# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    first_name { 'john' }
    last_name { 'doe' }
    factory :new_user do
      sequence(:email) { |n| "john_appleseedNew#{n.to_i}@gmail.com" }
      password { nil }
      password_confirmation { nil }
    end

    factory :existing_user do
      sequence(:email) { |n| "john_appleseed#{n.to_i}@gmail.com" }
      password { 'password12345' }
      password_confirmation { 'password12345' }
    end
  end
end
