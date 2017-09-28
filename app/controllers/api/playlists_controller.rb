class Api::PlaylistsController < ApplicationController
  def show
    @playlist = Playlist.find_by_id(params[:id])
    render 'api/playlists/show'
  end

  def index
    user = User.find_by_id(params[:author_id])
    @playlists = user.playlists
  end

  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.save
      render partial: 'api/playlists/playlist.json.jbuilder',
        locals: { playlist: @playlist }
    else
      render json: @playlist.errors.full_messages
    end
  end

  def destroy
    @playlist = Playlist.find_by_id(params[:id])
    if @playlist
      @playlist.destroy
      render json: {}
    else
      render json: ["Playlist does not exist"], status: 404
    end
  end

  def playlist_params
    params.require(:playlist).permit(:title, :author_id)
  end
end
