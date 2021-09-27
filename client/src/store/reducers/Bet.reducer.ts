import { RESULT_TYPE } from '../../assets/enums';
import { Bet, BetType, BetType2, FilterType } from '../../assets/interfaces';
import { BetActions } from '../actions/Bet.actions';
import { ADD_BETS, DELETE_BET, ADD_BET, UPDATE_BET, SET_FILTER } from '../constants/Bet.constants';

export type BetState = {
  items: BetType2[];
  filter: FilterType;
};

const initialState: BetState = {
  items: [],
  filter: {
    attribute: '', 
    value: '',
  }
}

const betsReducer = (state: BetState = initialState, action: BetActions) => {
  switch (action.type) {
    case ADD_BETS:
      return {
        ...state,
        items: [...action.payload.map(deriveBetData).sort((a, b) => a.timestamp > b.timestamp ? -1 : 1)]
      };
    case DELETE_BET:
      return {
        ...state,
        items: [...state.items.filter(bet => bet._id !== action.payload)]
      };
    case ADD_BET:
      return {
        ...state,
        items: [
          deriveBetData(action.payload),
          ...state.items,
        ]
      };
    case UPDATE_BET:
      return {
        ...state,
        items: [
          ...state.items.map(bet => {
            if (bet._id === action.payload._id) {
              return deriveBetData(action.payload);
            }
            return bet;
          })
        ]
      }
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      }
    default:
      return state;
  }
}

export default betsReducer;

// TODO: Move these to utility library

const deriveBetData = (bet: BetType): BetType2 => {
  return {
    ...bet,
    odds: getOdds(bet.bets),
    profit: getProfit(bet),
    type: getBetType(bet.bets),
    result: getResultType(bet.bets),
    bets: [
      ...bet.bets,
    ]
  }
}

/** 
 * Figure out what type of bet this is based on bets listed
 * - If it just contains one bet, take that bet row value
 * - If it contains multiple, just show as single, double, triple etc
 */
const getBetType = (bets: Bet[]) => {
  if (bets.length === 1) {
    return bets[0].type;
  } else if (bets.length === 2) {
    return 'Dubbel';
  } else if (bets.length === 3) {
    return 'Trippel'
  } else if (bets.length === 4) {
    return 'Fyrling';
  } else if (bets.length === 5) {
    return 'Femling';
  } else {
    return 'Oklart';
  }
}

/**
 * Figure out if this bet is won, lost or not completed
 * - If the slip only contains one bet: use that value
 * - If the slip contains at least one loss: the bet is lost
 * - If the slip contains no losses and at least one pending,
 *   we cannot decide the result yet
 */
const getResultType = (bets: Bet[]): RESULT_TYPE => {
  if (bets.length === 1) {
    return bets[0].result as RESULT_TYPE;
  } else if (bets.findIndex(bet => bet.result === RESULT_TYPE.LOSS) > -1) {
    return RESULT_TYPE.LOSS;
  } else if (bets.findIndex(bet => bet.result === RESULT_TYPE.PENDING) > -1) {
    return RESULT_TYPE.PENDING;
  } else {
    return RESULT_TYPE.WIN;
  }
}

/**
 * Calculate total odds of bet by mutliplying all odds and 
 * the amount of money wagered
 */
const getOdds = (bets: Bet[]) => {
  return bets.reduce((acc: number, bet: Bet) => {
    return bet.odds * acc;
  }, 1);
}

/**
 * Calculate the profit of the bet
 * - If we have manually entered a profit, return that value
 * - If we have a win: return the odds multiplied by money wagered
 * - If we have a loss: return the negative value of the money wagered
 */
const getProfit = (bet: BetType) => {
  const result: RESULT_TYPE = getResultType(bet.bets);
  if (bet.profit !== 0) {
    return bet.profit;
  } else {
    if (result === RESULT_TYPE.WIN) {
      return Math.round(+getOdds(bet.bets) * bet.amount);
    } else {
      return 0;
    }
  }
}