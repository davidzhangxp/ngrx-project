import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of } from 'rxjs';
import * as TodoActions from './todo.actions';

@Injectable()
export class TodoEffects {
  private baseUrl = 'http://localhost:3000';
  private path = 'todos';

  loadTodolist$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodolist),
      switchMap((_) => {
        return this.http.get([this.baseUrl, this.path].join('/')).pipe(
          map((todolist: any) => {
            return TodoActions.loadTodolistSuccess({ todolist });
          }),
          catchError((err) => {
            return of(TodoActions.loadTodolistFailure({ err }));
          })
        );
      })
    );
  });

  addTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.addTodo),
      switchMap((data) => {
        return this.http
          .post([this.baseUrl, this.path].join('/'), data.todo)
          .pipe(
            map((todoFromBack: any) => {
              console.log('can i post to backend', todoFromBack);
              return TodoActions.addTodoSuccess({ todo: todoFromBack });
            }),
            catchError((err) => {
              return of(TodoActions.addTodoFailure({ err }));
            })
          );
      })
    );
  });

  deleteTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      switchMap((data) => {
        return this.http
          .delete([this.baseUrl, this.path, data.id].join('/'))
          .pipe(
            map((res) => {
              console.log(res, data.id);
              return TodoActions.deleteTodoSuccess({ id: data.id });
            }),
            catchError((err) => {
              return of(TodoActions.deleteTodoFailure({ err }));
            })
          );
      })
    );
  });

  constructor(private readonly actions$: Actions, private http: HttpClient) {}
}
