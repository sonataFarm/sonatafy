class PerformersController < ApplicationController
  def show
    @performer = Performer.find_by_id(params[:id])
  end
end
