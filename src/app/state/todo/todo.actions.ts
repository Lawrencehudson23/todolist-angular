import { TODO_ACTIONS_TYPES } from './todo.action-types';
import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.state';

// Get_Todos
export const getTodos = createAction(TODO_ACTIONS_TYPES.GET_TODOS);

// We can also add additional metadata into our Actions if we like by adding properties:
export const getTodosSuccess = createAction(
  TODO_ACTIONS_TYPES.GET_TODOS_SUCCESS,
  props<{ payload: Todo[] }>()
);

export const getTodosFailure = createAction(
  TODO_ACTIONS_TYPES.GET_TODOS_FAILURE,
  props<{ message: string }>()
);

// Add_todo
export const addTodo = createAction(TODO_ACTIONS_TYPES.ADD_TODO);

export const addTodoSuccess = createAction(
  TODO_ACTIONS_TYPES.ADD_TODO_SUCCESS,
  props<{ payload: Todo }>()
);

export const addTodoFailure = createAction(
  TODO_ACTIONS_TYPES.ADD_TODO_FAILURE,
  props<{ message: string }>()
);

// Delete_Todo
export const deleteTodo = createAction(TODO_ACTIONS_TYPES.DELETE_TODO);

export const deleteTodoSuccess = createAction(
  TODO_ACTIONS_TYPES.DELETE_TODO_SUCCESS,
  props<{ payload: number }>()
);

export const deleteTodoFailure = createAction(
  TODO_ACTIONS_TYPES.DELETE_TODO_FAILURE,
  props<{ message: string }>()
);

// Alternatively, we can also define an action that includes a function for processing the returned server data:
//   export const fetchNUsersSuccess = createAction(
//     '[UserDB] Fetch N Users',
//     (response: Response) => response.users
//   );
