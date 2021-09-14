const express = require('express')
const LeagueCtrl = require('../controllers/league.controller')
const router = express.Router()
const auth = require('./auth.middleware.ts');

router.get('/leagues', LeagueCtrl.getLeagues);
router.post('/leagues', auth, LeagueCtrl.createLeague);

module.exports = router