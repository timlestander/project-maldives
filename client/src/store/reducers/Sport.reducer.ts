import { SportActions } from '../actions/Sport.actions';
import { ADD_SPORTS, ADD_SPORT } from '../constants/Sport.constants';

export type SportState = string[];

const initialState: SportState = [];

const sportsReducer = (state: SportState = initialState, action: SportActions) => {
  switch (action.type) {
    case ADD_SPORTS:
      return [
        ...action.payload
      ];
    case ADD_SPORT:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

export default sportsReducer;
