const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Type = new Schema(
    {
        name: { type: String, required: true, unqiue: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('types', Type)