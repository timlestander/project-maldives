const express = require('express')
const BetterCtrl = require('../controllers/better.controller')
const router = express.Router()
const auth = require('./auth.middleware.ts');

router.get('/betters', BetterCtrl.getBetters);
router.post('/betters', auth, BetterCtrl.createBetter);

module.exports = router