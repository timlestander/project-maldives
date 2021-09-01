import { BetterActions } from '../actions/Better.actions';
import { ADD_BETTERS, ADD_BETTER } from '../constants/Better.constants';

export type BetterState = string[];

const initialState: BetterState = [];

const betsReducer = (state: BetterState = initialState, action: BetterActions) => {
  switch (action.type) {
    case ADD_BETTERS:
      return [
        ...action.payload
      ];
    case ADD_BETTER:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

export default betsReducer;
