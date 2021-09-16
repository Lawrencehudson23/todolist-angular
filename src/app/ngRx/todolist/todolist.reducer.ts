import { TODOLIST_ACTIONS } from './todolist.action-types';
import { Todo } from '../../models/todo.interface';
import { Action, createReducer, on } from '@ngrx/store';

export interface State {
  todolist: Todo[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  todolist: [],
  isLoading: false,
  error: '',
};

const _todolistReducer = createReducer(
  initialState,
  on(TODOLIST_ACTIONS.GET_TODOS, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(TODOLIST_ACTIONS.GET_TODOS_SUCCESS, (state, { todolist }) => ({
    ...state,
    isLoading: false,
    todolist: todolist,
  }))
);

export function todolistReducer(state: State | undefined, action: Action) {
  return _todolistReducer(state, action);
}
