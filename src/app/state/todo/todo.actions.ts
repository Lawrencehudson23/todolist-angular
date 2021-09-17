import { TODO_ACTIONS_TYPES } from './todo.action-types';
import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.state';

export const getTodos = createAction(TODO_ACTIONS_TYPES.GET_TODOS);
export const getTodosSuccess = createAction(
  TODO_ACTIONS_TYPES.GET_TODOS_SUCCESS,
  props<{ payload: Todo[] }>()
);
export const getTodosFailure = createAction(
  TODO_ACTIONS_TYPES.GET_TODOS_FAILURE,
  props<{ message: string }>()
);
