import { TypeActions } from '../actions/Type.actions';
import { ADD_TYPES, ADD_TYPE } from '../constants/Type.constants';

export type TypeState = string[];

const initialState: TypeState = [];

const typesReducer = (state: TypeState = initialState, action: TypeActions) => {
  switch (action.type) {
    case ADD_TYPES:
      return [
        ...action.payload
      ];
    case ADD_TYPE:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

export default typesReducer;
