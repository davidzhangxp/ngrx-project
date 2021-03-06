import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo, TodoState } from 'src/app/interfaces/todo.interface';

export const selectTodo = createFeatureSelector<TodoState>('todos');

export const getTodoList = createSelector(
  selectTodo,
  (state: TodoState): Todo[] => state.todolist
);
