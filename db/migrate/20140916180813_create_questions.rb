class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
    	t.string :content 
    	t.integer :difficutly
    	t.integer :answer
    	t.integer :category_id
      t.timestamps
    end
  end
end
