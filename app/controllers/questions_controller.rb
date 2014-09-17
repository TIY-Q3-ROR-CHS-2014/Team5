class QuestionsController < ApplicationController
  respond_to :json
  before_action :find_question, only: [:show, :edit, :update, :destroy]

  def index
    @user = current_user
    @questions = Question.all
    p @user
    respond_with(@questions, @user) do |format|
      format.html
      format.json { render :json => {question: @questions.as_json, user: @user.as_json}  }
    end
  end

  def show

  end

  def new
    @question = Question.new
  end

  def create
    @question = Question.create question_params
    if @question.save == true
      redirect_to questions_path
      flash[:success] = "Question successfully added."
    else
      render :new
    end
  end

  def edit

  end

  def update
    if @question.update_attributes question_params
      redirect_to question_path(@question)
    else
      render :edit
    end
  end

  def destroy
    @question.destroy
    redirect_to questions_path
  end

  private

  def find_question
    @question = Question.find params[:id]
  end

  def question_params
    params.require(:question).permit(:content, :difficulty, :answer, :category_id)
  end
end
