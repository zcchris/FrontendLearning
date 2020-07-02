import {
  ActionEx,
  CustomerActionTypes,
  decrement,
  increment,
  reset,
} from './myActions.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  // list of actions
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const initialCusState = [];

export function CustomerReducer(state = initialCusState, action: ActionEx) {
  switch (action.type) {
    case CustomerActionTypes.Add:
      return [...state, action.payload];
    case CustomerActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    default:
      return state;
  }
}
