class AddHighscoreTotalscoreFieldsToUserModel < ActiveRecord::Migration
  def change
  	add_column :users, :high_score, :integer, default: 0
  	add_column :users, :total_score, :integer, default: 0
  end
end
