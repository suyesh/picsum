# frozen_string_literal: true

module RequestSpecHelper
  def json
    JSON.parse(response.body).deep_symbolize_keys
  end
end
