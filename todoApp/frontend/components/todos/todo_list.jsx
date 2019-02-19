import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = (props) => {
  return (
    <ul>
      <TodoForm receiveTodo={props.receiveTodo}/>
      {props.todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo}/>
      ))}
    </ul>
  )
};

export default TodoList;