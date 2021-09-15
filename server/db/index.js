const mongoose = require('mongoose')
const prod = process.env.NODE_ENV === 'production' ? true : false;

if (prod) {
  const connection = "mongodb+srv://bankbankbank:bankbankbank@maldives.2mdll.mongodb.net/maldives?retryWrites=true&w=majority&ssl=true";
  mongoose
    .connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 30000 })
      .then(() => console.log("Connected to production databse"))
      .catch(err => console.log(err));
} else {
  mongoose
    .connect('mongodb://127.0.0.1:27017/maldives', { useNewUrlParser: true })
      .then(() => console.log("Connected to development database"))
      .catch(e => console.error('Connection error', e.message))
}

const db = mongoose.connection

module.exports = db