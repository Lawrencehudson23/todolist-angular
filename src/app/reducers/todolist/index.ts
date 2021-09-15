import { TodolistActions, TodolistState } from './types';
import { TODOLIST_ACTIONS } from './action-types';

export const initialState: TodolistState = {
    data: null,
};

export default function TodolistReducer(state = initialState, action: TodolistActions): TodolistState {
    switch (action.type) {
        case TODOLIST_ACTIONS.GET_TODOS:
            return {
                ...state,
            };
        default:
            return state;
    }
}
