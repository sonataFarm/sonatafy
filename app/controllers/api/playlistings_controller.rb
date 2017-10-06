class Api::PlaylistingsController < ApplicationController
  def create
    @playlist = Playlist.find_by_id(playlisting_params[:playlist_id])
    @track = Track.find_by_id(playlisting_params[:track_id])

    @playlist.add_track(@track)
    @playlist.reload
    render 'api/playlists/show'
  end

  def destroy
    @playlist = Playlist.find_by_id(playlisting_params[:playlist_id])
    @playlisting = @playlist.playlistings.where(ord: playlisting_params[:ord]).first
    if @playlisting
      @playlisting.destroy
      @playlist.reload
      @playlist.ensure_sequential_ord!
      render 'api/playlists/show'
    else
      render json: 'Track not found', status: 404
    end
    # TODO: consolidate ords
  end

  def swap
    # TODO
  end

  def playlisting_params
    params.require(:playlisting).permit(:track_id, :playlist_id, :ord)
  end
end
