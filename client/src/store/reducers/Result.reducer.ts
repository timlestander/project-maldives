import { ResultActions } from '../actions/Result.actions';
import { ADD_RESULTS, ADD_RESULT } from '../constants/Result.constants';

export type ResultState = string[];

const initialState: ResultState = [];

const resultsReducer = (state: ResultState = initialState, action: ResultActions) => {
  switch (action.type) {
    case ADD_RESULTS:
      return [
        ...action.payload
      ];
    case ADD_RESULT:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

export default resultsReducer;
