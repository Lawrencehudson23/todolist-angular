import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodolistService } from '../../services/todolist/todolist.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { TODO_ACTIONS_TYPES } from './todo.action-types';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { getTodos, getTodosFailure, getTodosSuccess } from './todo.actions';

@Injectable()
export class TodoEffects {
  constructor(
    private action$: Actions,
    private todolistService: TodolistService
  ) {}

  GetTodos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(getTodos),
      mergeMap((action) =>
        this.todolistService.getTodos().pipe(
          map((data: any) => {
            return getTodosSuccess({ payload: data });
          }),
          catchError((error: Error) => {
            return of(getTodosFailure(error));
          })
        )
      )
    )
  );

  // private loadAllTodos() {
  //   return this.todolistService
  //     .getTodos()
  //     .pipe(
  //       map((todos) => ({ type: TODO_ACTIONS_TYPES.GET_TODOS_SUCCESS, todos }))
  //     );
  // }
}
