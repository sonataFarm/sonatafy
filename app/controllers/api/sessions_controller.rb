class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )

    if @user
      login!(@user)
      render 'api/users/current'
    else
      render json: ['Bad username/password combination'], status: 401
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      render json: ['Nobody signed in'], status: 404
    end
  end
end
