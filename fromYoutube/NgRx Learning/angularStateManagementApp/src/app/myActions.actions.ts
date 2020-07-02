import { Action, createAction } from '@ngrx/store';

import { Customer } from './models/customer';

export const increment = createAction('[My Component1] Increment');
export const decrement = createAction('[My Component1] Decrement');
export const reset = createAction('[My Component1] Reset');

export enum CustomerActionTypes {
  Add = '[Customer Component] Add',
  Remove = '[Customer Component] Remove',
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class CustomerAdd implements ActionEx {
  readonly type = CustomerActionTypes.Add;
  constructor(public payload: any) {}
}

export class CustomerRemove implements ActionEx {
  readonly type = CustomerActionTypes.Remove;
  constructor(public payload: any) {}
}
