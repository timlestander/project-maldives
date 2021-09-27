import { RESULT_TYPE } from "./enums"

// Details for one single bet
export type Bet = {
  prediction: string;
  sport: string;
  league: string;
  home: string;
  away: string;
  result: string;
  odds: number;
  type: string;
}

// How data is stored in database
// And what data used in forms
export type BetType = {
  _id?: string;
  better: string;
  amount: number;
  profit: number;
  timestamp: Date;
  bets: Bet[];
}

// TOOD: Rename
// How we process the data to look like
// By calculating the rest of the attributes
export type BetType2 = {
  _id?: string;
  better: string;
  amount: number;
  profit: number;
  timestamp: Date;
  bets: Bet[];
  // Derived data points
  odds: number;
  result: RESULT_TYPE;
  type: string;
}

export type FilterType = {
  attribute: string;
  value: any;
}