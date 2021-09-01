const express = require('express')

const SportCtrl = require('../controllers/sport.controller')

const router = express.Router()

router.get('/sports', SportCtrl.getSports)
router.post('/sports', SportCtrl.createSport);

module.exports = router