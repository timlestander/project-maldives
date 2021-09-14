const express = require('express')
const TypeCtrl = require('../controllers/type.controller')
const router = express.Router()
const auth = require('./auth.middleware.ts');

router.get('/types', TypeCtrl.getTypes)
router.post('/types', auth, TypeCtrl.createType);

module.exports = router