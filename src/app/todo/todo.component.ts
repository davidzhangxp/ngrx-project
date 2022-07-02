import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';
import * as TodoSelectors from '../ngrx/todo/todo.selector';
import * as TodoActions from '../ngrx/todo/todo.actions';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todolist$!: Observable<Todo[]>;
  todo: Todo = {
    title: '',
    completed: false,
    userId: 2,
  };
  form: FormControl = new FormControl('', Validators.required);
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.todolist$ = this.store.select(TodoSelectors.getTodoList);
    this.store.dispatch(TodoActions.loadTodolist());
  }
  onChange() {
    this.todo.title = this.form.value;
    this.store.dispatch(TodoActions.addTodo({ todo: this.todo }));
  }
  onDelete(id: any) {
    console.log(typeof id);
    this.store.dispatch(TodoActions.deleteTodo({ id: id }));
  }
}
