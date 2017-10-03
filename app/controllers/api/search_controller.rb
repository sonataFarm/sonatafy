require "#{Rails.root}/lib/search"

class Api::SearchController < ApplicationController
  # def search
  #   search_terms = search_params[:query].split.map { |term| "%#{term}%"}
  #   @results = case search_params[:type]
  #   when 'track'
  #     columns = 2
  #     query_string = ['(tracks.title ILIKE ? OR composers.name ILIKE ?)']
  #     query_string = ([query_string] * search_terms.count).join(' AND ')
  #     query_terms = (search_terms * columns).sort
  #     begin
  #       Track.joins(:composer).where(
  #         query_string,
  #         *query_terms
  #       ).limit(20).includes(:composer)
  #     rescue
  #       debugger
  #     end
  #
  #   end
  #   render 'api/search/tracks.json.jbuilder'
  # end

  def search
    search = Search.new(search_params[:query])

    @results = case search_params[:type]
    when 'track'
      search.tracks(20).includes(:composer)
    end
    render 'api/search/tracks.json.jbuilder'
  end

  def search_params
    params.permit(:type, :query)
  end
end
