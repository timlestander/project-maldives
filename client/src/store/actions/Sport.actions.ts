export interface IAddSportsAction {
  readonly type: '[SPORT] ADD_SPORTS';
  payload: string[];
}

export interface IAddSportAction { 
  readonly type: '[SPORT] ADD_SPORT';
  payload: string;
}

export interface IDeleteSportAction {
  readonly type: '[SPORT] DELETE_SPORT';
  payload: string;
}

export type SportActions = 
  | IAddSportsAction
  | IAddSportAction
  | IDeleteSportAction;