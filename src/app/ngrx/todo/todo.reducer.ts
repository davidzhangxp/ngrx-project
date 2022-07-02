import { createReducer, on } from '@ngrx/store';
import { Todo, TodoState } from 'src/app/interfaces/todo.interface';
import * as TodoActions from './todo.actions';

export const initialState: TodoState = {
  todolist: [],
};
export const todoReducer = createReducer(
  initialState,
  on(TodoActions.initTodoList, (state: TodoState) => {
    return { ...state };
  }),
  /*load todolist*/
  on(TodoActions.loadTodolistSuccess, (state: TodoState, { todolist }) => {
    return { ...state, todolist: [...todolist].reverse() };
  }),
  on(TodoActions.loadTodolistFailure, (state, { err }) => {
    return { ...state, err };
  }),
  /*add todo*/
  on(TodoActions.addTodoSuccess, (state: TodoState, { todo }) => {
    return { ...state, todolist: [todo, ...state.todolist] };
  }),
  on(TodoActions.addTodoFailure, (state, { err }) => {
    return { ...state, err };
  }),
  /*delete todo*/
  on(TodoActions.deleteTodoSuccess, (state: TodoState, { id }) => {
    return {
      ...state,
      todolist: [...state.todolist].filter((todo) => todo.id !== id),
    };
  }),
  on(TodoActions.deleteTodoFailure, (state, { err }) => {
    return { ...state, err };
  })
);
