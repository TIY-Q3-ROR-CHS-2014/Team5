class Question < ActiveRecord::Base
  require 'json'
  belongs_to :category
end
