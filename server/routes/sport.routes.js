const express = require('express')
const SportCtrl = require('../controllers/sport.controller')
const router = express.Router()
const auth = require('./auth.middleware.ts');

router.get('/sports', SportCtrl.getSports)
router.post('/sports', auth, SportCtrl.createSport);

module.exports = router