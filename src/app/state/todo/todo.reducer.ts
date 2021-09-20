import { TODO_ACTIONS_TYPES } from './todo.action-types';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, TodoState } from './todo.state';
import {
  getTodosSuccess,
  getTodosFailure,
  addTodoSuccess,
  addTodoFailure,
} from './todo.actions';

// A reducer is a fancy name for a pure function that takes the current application state,
// processes an action and then returns either the previous state,
// or a new modified state for the application.

//It is important to remember that Reducers work with state,
// and our application state is just a plain old javascript object that will hold all of our data.
// Since we are working with TypeScript,
// it is quite common to also define an interface to the application state object in our reducer file.

// The reducer above defines a piece of application state that contains a simple interface called State,
// which defines both home and away keys for our store object. The reducer then also defines an initial state,
// which implements the State interface and sets the scores to 0 when the reducer is first used.
// The createReducer helper function takes initialState as its first argument,
// and then we can then pass in one or more ActionCreator actions (generated via the createAction helper function)
// into our on helper function to modify the state.

const _todoReducer = createReducer(
  initialState,
  on(getTodosSuccess, (state: TodoState, action) => ({
    ...state,
    todos: action.payload,
  })),
  on(getTodosFailure, (state: TodoState, action) => ({
    ...state,
    error: action.message,
  })),
  on(addTodoSuccess, (state: TodoState, action) => ({
    ...state,
    todos: [...state.todos, action.payload],
  })),
  on(addTodoFailure, (state: TodoState, action) => ({
    ...state,
    error: action.message,
  }))
);

export function TodoReducer(state: TodoState | undefined, action: Action) {
  return _todoReducer(state, action);
}
