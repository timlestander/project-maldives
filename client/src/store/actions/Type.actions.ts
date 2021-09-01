export interface IAddTypesAction {
  readonly type: '[TYPE] ADD_TYPES';
  payload: string[];
}

export interface IAddTypeAction { 
  readonly type: '[TYPE] ADD_TYPE';
  payload: string;
}

export interface IDeleteTypeAction {
  readonly type: '[TYPE] DELETE_TYPE';
  payload: string;
}

export type TypeActions = 
  | IAddTypesAction
  | IAddTypeAction
  | IDeleteTypeAction;