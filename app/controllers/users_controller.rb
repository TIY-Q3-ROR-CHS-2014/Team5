class UsersController < ApplicationController
  respond_to :json

  def index
    @users = User.all
    respond_with(@users) do |format|
      format.html
      format.json { render :json => @users.as_json  }
    end
  end

  def new
    @user = User.new
  end

  def create
     @user = User.create params[:id]
  end

  def show
    @user = User.find params[:id]
  end

  def edit
    @user = User.find params[:id]
  end

  def update
    @user = User.find params[:id]
    if @user.update_attributes user_params
      redirect_to users_path, :notice => "User updated!"
    else
      redirect_to users_path, :alert => "Please update user information correctly."
    end
  end

  def destroy
    @user = User.find params[:id]
    user.delete
  end

private
  def user_params
    params.require(:user).permit(:username, :high_score, :total_score)
  end
end
