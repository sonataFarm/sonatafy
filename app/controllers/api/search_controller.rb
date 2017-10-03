require "#{Rails.root}/lib/search"

class Api::SearchController < ApplicationController
  def search
    search = Search.new(search_params[:query])

    @results =
      case search_params[:type]
      when 'track'
        search.tracks(20).includes(:composer)
      end
    render 'api/search/tracks.json.jbuilder'
  end

  def search_params
    params.permit(:type, :query)
  end
end
