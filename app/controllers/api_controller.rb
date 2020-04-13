require 'application_responder'
# frozen_string_literal: true

class ApiController < ActionController::API
  self.responder = ApplicationResponder
  include Knock::Authenticable
  include Response
end
