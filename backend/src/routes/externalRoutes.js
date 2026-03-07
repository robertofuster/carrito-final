const express = require('express');
const router = express.Router();
const externalController = require('../controllers/externalController');

router.get('/dolar', externalController.getDolar);

module.exports = router;