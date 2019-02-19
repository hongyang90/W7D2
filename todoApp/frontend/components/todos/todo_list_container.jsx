import React from 'react';
import { connect } from 'react-redux';
import TodoList from './todo_list';
import {receiveTodo} from '../../actions/todo_actions';
import allTodos from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state)
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    receiveTodo: (todo) => (dispatch(receiveTodo(todo)))
  }
)

const ConnectedTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default ConnectedTodoList;