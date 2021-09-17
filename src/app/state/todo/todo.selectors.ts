import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectTodoState = (state: any) => state.todoState;
export const selectTodos = createSelector(
  selectTodoState,
  (state) => state.todos
);
export const selectError = createSelector(
  selectTodoState,
  (state) => state.error
);
