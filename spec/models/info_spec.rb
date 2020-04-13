# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Info, type: :model do
  it { should belong_to(:pic) }
end
