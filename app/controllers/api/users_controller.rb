class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render 'api/users/current'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by_id(params[:id])
  end

  def current
    @user = current_user
    if @user
      render 'api/users/current'
    else
      render json: ['Nobody logged in.'], status: 404
    end
  end
end
