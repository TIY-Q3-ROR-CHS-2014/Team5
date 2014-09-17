class ChangeQuestionsFieldDifficutlyToDifficulty < ActiveRecord::Migration
  def change
    rename_column :questions, :difficutly, :difficulty
  end
end
