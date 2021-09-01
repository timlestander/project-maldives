const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Bet = new Schema(
  {
    better: { type: String, required: true },
    timestamp: { type: String, required: true },
    amount: { type: Number, required: true },
    profit: { type: Number, required: false },
    bets: [
      {
        home: { type: String, required: false },
        away: { type: String, required: false },
        prediction: { type: String, required: false },
        odds: { type: Number, required: true },
        sport: { type: String, required: false },
        league: { type: String, required: false },
        type: { type: String, required: true },
        result: { type: String, requried: true }
      }
    ]
  },
  { timestamps: true },
)

module.exports = mongoose.model('bets', Bet);