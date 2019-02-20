import React from 'react';

const TodoListItem = ({todo}) => (
  <li>{todo.title}: {todo.body}</li>
);

export default TodoListItem;