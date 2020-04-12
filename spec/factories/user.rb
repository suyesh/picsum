# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    first_name { 'john' }
    last_name { 'doe' }
    factory :new_user do
      email { 'john_appleseedNew@gmail.com' }
      password { nil }
      password_confirmation { nil }
    end

    factory :existing_user do
      email { 'john_appleseed@gmail.com' }
      password { 'password' }
      password_confirmation { 'password' }
    end
  end
end
