import { Dispatch } from 'redux';
import { TODOLIST_ACTIONS } from './action-types';
import { GetTodosAction } from './types';

export const getTodos = (data: any) => (dispatch: Dispatch<GetTodosAction>) => {
    dispatch({ type: TODOLIST_ACTIONS.GET_TODOS, data });
};
