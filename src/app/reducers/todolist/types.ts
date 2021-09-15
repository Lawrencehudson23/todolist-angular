import { Action } from 'redux';
import { TODOLIST_ACTIONS } from './action-types';

export interface TodolistState {
    data: any;
}

export type GetTodosAction = Action< TODOLIST_ACTIONS.GET_TODOS> & {
}

export type TodolistActions = GetTodosAction;
