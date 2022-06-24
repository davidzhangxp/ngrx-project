import { createReducer, on } from '@ngrx/store';
import { Todo, TodoState } from 'src/app/interfaces/todo.interface';
import { initTodoList } from './todo.actions';

export const initialState: TodoState = {
  todolist: [
    { title: 'dylan', completed: false, userId: 2, id: 1 },
    { title: 'davis', completed: false, userId: 2, id: 1 },
  ],
};
export const todoReducer = createReducer(
  initialState,
  on(initTodoList, (state: TodoState) => state)
);
