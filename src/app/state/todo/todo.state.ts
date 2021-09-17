export interface Todo {
  userId?: number;
  id?: any;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  error: string;
}

export const initialState: TodoState = {
  todos: [],
  error: '',
};
