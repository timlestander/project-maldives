const mongoose = require('mongoose')

// mongoose
//     .connect('mongodb://127.0.0.1:27017/maldives', { useNewUrlParser: true })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

const connection = "mongodb+srv://bankbankbank:bankbankbank@maldives.2mdll.mongodb.net/maldives?retryWrites=true&w=majority";
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

const db = mongoose.connection

module.exports = db