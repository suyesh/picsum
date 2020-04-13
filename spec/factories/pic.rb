# frozen_string_literal: true

FactoryBot.define do
  factory :pic do
    sequence(:height) { |n| 200 + n }
    sequence(:width) { |n| 200 + n }
    sequence(:picsum_id, &:to_i)
  end
end
