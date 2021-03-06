const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const db = require('./db')

const sportRouter = require('./routes/sport.routes')
const betRouter = require('./routes/bet.routes');
const betterRouter = require('./routes/better.routes');
const leagueRouter = require('./routes/league.routes');
const typeRouter = require('./routes/type.routes');

const app = express()
const apiPort = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', sportRouter)
app.use('/api', betRouter);
app.use('/api', betterRouter);
app.use('/api', leagueRouter);
app.use('/api', typeRouter);

app.use(express.static(path.join(__dirname, '../client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build'))
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))