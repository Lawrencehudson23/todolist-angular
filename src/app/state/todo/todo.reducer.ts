import { TODO_ACTIONS_TYPES } from './todo.action-types';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, TodoState } from './todo.state';
import { getTodosSuccess, getTodosFailure } from './todo.actions';

const _todoReducer = createReducer(
  initialState,
  on(getTodosSuccess, (state: TodoState, action) => ({
    ...state,
    todos: action.payload,
  })),
  on(getTodosFailure, (state: TodoState, action) => ({
    ...state,
    error: action.message,
  }))
);

export function TodoReducer(state: TodoState | undefined, action: Action) {
  return _todoReducer(state, action);
}
