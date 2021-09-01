import { combineReducers } from 'redux'
import betReducer from './reducers/Bet.reducer'
import betterReducer from './reducers/Better.reducer';
import resultsReducer from './reducers/Result.reducer';
import leaguesReducer from './reducers/League.reducer';
import sportsReducer from './reducers/Sport.reducer';
import typesReducer from './reducers/Type.reducer';

const rootReducer = combineReducers({
    bets: betReducer,
    betters: betterReducer,
    results: resultsReducer,
    leagues: leaguesReducer,
    sports: sportsReducer,
    types: typesReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;