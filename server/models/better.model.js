const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Better = new Schema(
    {
        name: { type: String, required: true, unique: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('betters', Better)