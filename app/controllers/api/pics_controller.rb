# frozen_string_literal: true

class API::PicsController < ApiController
  def index
    @pics = Pic.with_all_params(
      grayscale: params[:grayscale],
      blur: params[:blur],
      page_param: params[:page],
      per_param: params[:per],
      width: params[:width],
      height: params[:height]
    )
    json_response(@pics)
  end

  private

  def pics_params
    params.permit(:grayscale, :blur, :page, :per, :width, :height)
  end
end
