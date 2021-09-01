import { LeagueActions } from '../actions/League.actions';
import { ADD_LEAGUES, ADD_LEAGUE } from '../constants/League.constants';

export type LeagueState = string[];

const initialState: LeagueState = [];

const leaguesReducer = (state: LeagueState = initialState, action: LeagueActions) => {
  switch (action.type) {
    case ADD_LEAGUES:
      return [
        ...action.payload
      ];
    case ADD_LEAGUE:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

export default leaguesReducer;
