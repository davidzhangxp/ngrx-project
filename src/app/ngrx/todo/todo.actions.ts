import { createAction } from '@ngrx/store';

export const initTodoList = createAction('[TodoList] Initalize TodoList');

/* load todolist*/
export const loadTodolist = createAction('[TodoList] Load Todolist');

export const loadTodolistSuccess = createAction(
  '[TodoList] Load TodolistSuccess'
);

export const loadTodolistFailure = createAction('[TodoList] Load TodolistFail');
