const Type = require('../models/type.model')

getTypes = (req, res) => {
  return Type.find({}, (err, types) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!types.length) {
      return res
        .status(404)
        .json({ success: false, error: `Type not found` })
    }
    types = types.map(type => type.name);
    return res.status(200).json({ success: true, data: types })
  }).catch(err => console.log(err))
}

createType = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a type',
    })
  }

  const type = new Type(body)

  if (!type) {
    return res.status(400).json({ success: false, error: err })
  }

  type
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        data: type,
        message: 'Type created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Type not created!',
      })
    })
}

module.exports = {
  getTypes,
  createType
}