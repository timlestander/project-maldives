export interface IAddLeaguesAction {
  readonly type: '[LEAGUE] ADD_LEAGUES';
  payload: string[];
}

export interface IAddLeagueAction { 
  readonly type: '[LEAGUE] ADD_LEAGUE';
  payload: string;
}

export interface IDeleteLeagueAction {
  readonly type: '[LEAGUE] DELETE_LEAGUE';
  payload: string;
}

export type LeagueActions = 
  | IAddLeaguesAction
  | IAddLeagueAction
  | IDeleteLeagueAction;