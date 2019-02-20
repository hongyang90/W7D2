class Api::TodosController < ApplicationController

  def show
    @todo = Todo.find_by(id: params[:id])
    render json: @todo
  end

  def index 
    @todos = Todo.all
    render json: @todos
  end

  def create 
    @todo = Todo.new(todos_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422      
    end
  end

  def update 
    @todo = Todo.find_by(id: params[:id])

    if @todo.update_attributes(todos_params)
      render json: @todo #does this rep old state still?
    else
      render json: @todo.errors.full_messages, status: 422      
    end
    
  end

  def destroy 
    @todo = Todo.find_by(id: params[:id])
    @todo.destroy
    render json: @todo  # what happens if destroy fails??  what do we want to send back here in the json respnose?  
  end
  
  private 

  def todos_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
