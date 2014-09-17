class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  include Pundit
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception



def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit({ roles: [] }, :email, :password, :password_confirmation, :first_name, :last_name, :about_yourself, :github_url, :personal_site, :twitter) }
    devise_parameter_sanitizer.for(:account_update) { |u| u.permit({ roles: [] }, :email, :password, :password_confirmation, :first_name, :last_name, :current_password, :about_yourself, :github_url, :personal_site, :twitter) }
end
end
