const express = require('express')

const TypeCtrl = require('../controllers/type.controller')

const router = express.Router()

router.get('/types', TypeCtrl.getTypes)
router.post('/types', TypeCtrl.createType);

module.exports = router