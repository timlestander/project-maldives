const express = require('express')

const BetCtrl = require('../controllers/bet.controller')

const router = express.Router()

// Bets
router.get('/bets', BetCtrl.getBets)
router.post('/bets', BetCtrl.createBet);
router.delete('/bets/:id', BetCtrl.deleteBet);

module.exports = router