class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(
      follower_id: params[:user_id],
      followed_user_id: follow_params[:followed_user_id]
    );

    if @follow.save
      render json: {}
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.where(
      follower_id: params[:user_id],
      followed_user_id: params[:id]
    ).first;

    if @follow
      @follow.destroy
      render json: {}
    else
      render json: 'Follow not found', status: 404
    end
  end

  def follow_params
    params.require(:follow).permit(:followed_user_id)
  end
end
