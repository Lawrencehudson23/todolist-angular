import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodolistService } from '../../services/todolist/todolist.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { TODO_ACTIONS_TYPES } from './todo.action-types';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import {
  addTodo,
  getTodos,
  getTodosFailure,
  getTodosSuccess,
} from './todo.actions';

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

  // AddTodo$: Observable<Action> = createEffect(()=>
  // this.action$.pipe(
  //   of(addTodo),
  //   switchMap(action) => this.todolistService.addTodo(action.payload).pipe(
  //     mergeMap((=>this.loadAllTodos()))
  // )
  // ))

  private loadAllTodos() {
    return this.todolistService
      .getTodos()
      .pipe(
        map((todos) => ({ type: TODO_ACTIONS_TYPES.GET_TODOS_SUCCESS, todos }))
      );
  }
}
