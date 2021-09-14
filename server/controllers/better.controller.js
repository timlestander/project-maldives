const Better = require('../models/better.model')

getBetters = (req, res) => {
  return Better.find({}, (err, betters) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!betters.length) {
      return res
        .status(404)
        .json({ success: false, error: `Betters not found` })
    }
    betters = betters.map(better => better.name);
    return res.status(200).json({ success: true, data: betters })
  }).catch(err => console.log(err))
}

createBetter = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a better',
    })
  }

  const better = new Better(body)

  if (!better) {
    return res.status(400).json({ success: false, error: err })
  }

  better
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        better: better,
        message: 'Better created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Better not created!',
      })
    })
}

module.exports = {
  getBetters,
  createBetter
}