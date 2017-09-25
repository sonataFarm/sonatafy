class Api::TracksController < ApplicationController
  def show
    @track = Track.find_by_id(params[:id])
  end
end
