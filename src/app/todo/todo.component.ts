import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';
import * as TodoSelectors from '../ngrx/todo/todo.selector';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todolist$!: Observable<Todo[]>;
  todoList!: Todo[];

  todo: Todo = {
    title: '',
    completed: false,
    userId: 2,
  };
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.todolist$ = this.store.select(TodoSelectors.getTodoList);
    this.todolist$.subscribe((items) => {
      console.log(items);
      this.todoList = items;
    });
  }
}
