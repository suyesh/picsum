# frozen_string_literal: true

module Response
  def json_response(object, relation = :info, status = :ok)
    render json: object.to_json(include: relation), status: status
  end
end
