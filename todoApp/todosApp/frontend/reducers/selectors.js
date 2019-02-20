
const allTodos = ({todos}) => {
  return Object.keys(todos).map(todoId => todos[todoId]);
}

window.allTodos = allTodos;

export default allTodos;