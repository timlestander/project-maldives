const League = require('../models/league.model')

getLeagues = (req, res) => {
  return League.find({}, (err, leagues) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!leagues.length) {
      return res
        .status(404)
        .json({ success: false, error: `League not found` })
    }
    leagues = leagues.map(league => league.name);
    return res.status(200).json({ success: true, data: leagues })
  }).catch(err => console.log(err))
}

createLeague = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a league',
    })
  }

  const league = new League(body)

  if (!league) {
    return res.status(400).json({ success: false, error: err })
  }

  league
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        data: league,
        message: 'League created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'League not created!',
      })
    })
}

module.exports = {
  getLeagues,
  createLeague
}