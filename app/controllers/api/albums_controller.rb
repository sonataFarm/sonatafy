class Api::AlbumsController < ApplicationController
  def show
    @album = Album.find_by_id(params[:id])
  end

  def ordered_tracks

  end

  def track_ids
    @album.tracks.map do |track|
      track.id
    end
  end
end
