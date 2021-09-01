const express = require('express')

const BetterCtrl = require('../controllers/better.controller')

const router = express.Router()

router.get('/betters', BetterCtrl.getBetters);
router.post('/betters', BetterCtrl.createBetter);

module.exports = router