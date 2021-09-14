const Sport = require('../models/sport.model')

getSports = (req, res) => {
  return Sport.find({}, (err, sports) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!sports.length) {
      return res
        .status(404)
        .json({ success: false, error: `Sport not found` })
    }
    sports = sports.map(sport => sport.name);
    return res.status(200).json({ success: true, data: sports })
  }).catch(err => console.log(err))
}

createSport = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a sport',
    })
  }

  const sport = new Sport(body)

  if (!sport) {
    return res.status(400).json({ success: false, error: err })
  }

  sport
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        data: sport,
        message: 'Sport created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Sport not created!',
      })
    })
}

module.exports = {
  getSports,
  createSport
}