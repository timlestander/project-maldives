const Bet = require('../models/bet.model')

getBets = (_, res) => {
  return Bet.find({}, (err, bets) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!bets.length) {
      return res
        .status(404)
        .json({ success: false, error: `Bets not found` })
    }
    return res.status(200).json({ success: true, data: bets })
  }).catch(err => console.log(err))
}

updateBet = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    })
  }

  Bet.findOneAndUpdate({ _id: req.params.id }, body, { new: true }, (err, bet) => {
    if (err) {
      return res.status(404).json({
        err,
        success: false,
        message: 'Bet not found!',
      })
    } else if (!bet) {
      console.log(bet);
      return res.status(501).json({
        message: 'Something went wrong',
        success: false,
      })
    }

    return res.status(200).json({
      success: true,
      data: bet,
      message: 'Successfully updated bet'
    })
  });
}

deleteBet = (req, res) => {
  return Bet.findOneAndDelete({ _id: req.params.id }, (err, bet) => {
    if (err) {
      return res
        .status(400)
        .json({ success: false, error: err })
    }

    if (!bet) {
      return res
        .status(404)
        .json({ success: false, error: `Bet not found` })
    }

    return res.status(200).json({ success: true, data: bet })
  }).catch(err => console.log(err))
}

createBet = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a bet',
    })
  }

  const bet = new Bet(body)

  if (!bet) {
    return res.status(400).json({ success: false, error: err })
  }

  bet
    .save()
    .then((a) => {
      return res.status(201).json({
        success: true,
        data: bet,
        message: 'Bet created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Bet not created!',
      })
    })
}

module.exports = {
  getBets,
  createBet,
  deleteBet,
  updateBet,
}