const express = require('express')
const BetCtrl = require('../controllers/bet.controller')
const router = express.Router()
const auth = require('./auth.middleware.ts');

// Bets
router.get('/bets', BetCtrl.getBets);
router.post('/bets', auth, BetCtrl.createBet);
router.put('/bets/:id', auth, BetCtrl.updateBet);
router.delete('/bets/:id', auth, BetCtrl.deleteBet);

module.exports = router