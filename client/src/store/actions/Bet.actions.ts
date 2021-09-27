import { BetType, FilterType } from "../../assets/interfaces";

export interface IAddBetsAction {
  readonly type: '[BET] ADD_BETS';
  payload: BetType[];
}

export interface IAddBetAction { 
  readonly type: '[BET] ADD_BET';
  payload: BetType;
}

export interface IDeleteBetAction {
  readonly type: '[BET] DELETE_BET';
  payload: string;
}

export interface IUpdateBetAction {
  readonly type: '[BET] UPDATE_BET';
  payload: BetType;
}

export interface ISetFilterAction {
  readonly type: '[BET] SET_FILTER';
  payload: FilterType;
}

export type BetActions = 
  | IAddBetsAction
  | IAddBetAction
  | IDeleteBetAction
  | IUpdateBetAction
  | ISetFilterAction