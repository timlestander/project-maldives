export interface IAddBettersAction {
  readonly type: '[BETTER] ADD_BETTERS';
  payload: string[];
}

export interface IAddBetterAction { 
  readonly type: '[BETTER] ADD_BETTER';
  payload: string;
}

export interface IDeleteBetterAction {
  readonly type: '[BETTER] DELETE_BETTER';
  payload: string;
}

export type BetterActions = 
  | IAddBettersAction
  | IAddBetterAction
  | IDeleteBetterAction