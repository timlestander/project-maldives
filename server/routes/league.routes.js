const express = require('express')

const LeagueCtrl = require('../controllers/league.controller')

const router = express.Router()

router.get('/leagues', LeagueCtrl.getLeagues);
router.post('/leagues', LeagueCtrl.createLeague);

module.exports = router