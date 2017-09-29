class Api::TracksController < ApplicationController
  def show
    @track = Track.find_by_id(params[:id])
    @track.url = Aws::S3::Resource.new
      .bucket(ENV["s3_bucket"])
      .object(@track.audio)
      .presigned_url(:get)
    render partial: 'api/tracks/current.json.jbuilder', locals: { track: @track }
  end
end
