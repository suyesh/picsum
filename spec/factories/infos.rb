# frozen_string_literal: true

FactoryBot.define do
  factory :info do
    author { 'Suyesh Bhandari' }
    url { 'url' }
    download_url { 'url' }
    height { 1 }
    width { 1 }
    pic_id { nil }
  end
end
