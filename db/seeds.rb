# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

categories = Category.create([{ name: "Math" }])

categories.each do |category|
  10.times do
    int_1 = rand(0..10)
    int_2 = rand(0..10)
    operator_options = ["+", "-", "/", "*"]
    operator_index = rand(0...4)
    operator = operator_options[operator_index]
    def answer int_1, int_2, operator
      output = 0
      case operator
      when "+"
        output = int_1 + int_2
      when "-"
        output = int_1 - int_2
      when "/"
        output = int_1.to_f / int_2.to_f
      when "*"
        output = int_1 * int_2
      end
      return output
    end

    questions = Question.create([{ content: "#{int_1} #{operator} #{int_2} =", difficulty: 1, answer: answer(int_1, int_2, operator), category_id: category.id }])
  end
end


5.times do
  password = "#{Faker::Internet.password(8)}"
  user = User.create([{ email: "#{Faker::Internet.email}", username: "#{Faker::Internet.user_name}", high_score: rand(0..10), total_score: rand(0..100), password: password, password_confirmation: password }])
end
