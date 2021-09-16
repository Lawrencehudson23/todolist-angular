import { TODOLIST_ACTIONS } from './todolist.action-types';
import { createAction, props } from '@ngrx/store';

export const getTodos = createAction(TODOLIST_ACTIONS.GET_TODOS);
export const getTodosSuccess = createAction(
  TODOLIST_ACTIONS.GET_TODOS_SUCCESS,
  props<any>()
);
export const getTodosFailure = createAction(
  TODOLIST_ACTIONS.GET_TODOS_FAILURE,
  props<{ error: any }>()
);
