const mongoose = require('mongoose')
const Schema = mongoose.Schema

const League = new Schema(
    {
        name: { type: String, required: true, unqiue: true },
    },
)

module.exports = mongoose.model('leagues', League)