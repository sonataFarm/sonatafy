class Api::TracksController < ApplicationController
  def show
    @track = Track.find_by_id(params[:id])
    render partial: 'api/tracks/current.json.jbuilder', locals: { track: @track }
  end
end
