export interface IAddResultsAction {
  readonly type: '[RESULT] ADD_RESULTS';
  payload: string[];
}

export interface IAddResultAction { 
  readonly type: '[RESULT] ADD_RESULT';
  payload: string;
}

export interface IDeleteResultAction {
  readonly type: '[RESULT] DELETE_RESULT';
  payload: string;
}

export type ResultActions = 
  | IAddResultsAction
  | IAddResultAction
  | IDeleteResultAction