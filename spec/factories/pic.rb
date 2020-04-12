# frozen_string_literal: true

FactoryBot.define do
  factory :pic do
    height { 200 }
    width { 300 }
    picsum_id { 1 }
  end
end
