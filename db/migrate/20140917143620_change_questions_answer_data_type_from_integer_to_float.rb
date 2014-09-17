class ChangeQuestionsAnswerDataTypeFromIntegerToFloat < ActiveRecord::Migration
  def change
    change_column :questions, :answer, :float
  end
end
