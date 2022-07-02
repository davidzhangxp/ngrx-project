import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/interfaces/todo.interface';

export const initTodoList = createAction('[TodoList] Initalize TodoList');

/* load todolist*/
export const loadTodolist = createAction('[TodoList] Load Todolist');

export const loadTodolistSuccess = createAction(
  '[TodoList] Load TodolistSuccess',
  props<{ todolist: Todo[] }>()
);

export const loadTodolistFailure = createAction(
  '[TodoList] Load TodolistFail',
  props<{ err: string }>()
);
/* add todo*/

export const addTodo = createAction(
  '[TodoList] Add Todo',
  props<{ todo: Todo }>()
); //request trigger effects

export const addTodoSuccess = createAction(
  '[TodoList] Add TodoSuccess',
  props<{ todo: Todo }>()
); //effects return action, trigger reducer

export const addTodoFailure = createAction(
  '[TodoList] Add TodoFail',
  props<{ err: string }>()
); //effects return error action, trigger reducer

/* delete todo*/

export const deleteTodo = createAction(
  '[TodoList] Delete Todo',
  props<{ id: number }>()
);

export const deleteTodoSuccess = createAction(
  '[TodoList] Delete TodoSuccess',
  props<{ id: number }>()
);

export const deleteTodoFailure = createAction(
  '[TodoList] Delete TodoFail',
  props<{ err: string }>()
);
