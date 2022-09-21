const express = require('express');
const { index: indexController, health: healthController } = require('../../controllers/healthCheck');

const router = express.Router();

router.get('/health', healthController);
router.get('/', indexController);

module.exports = router;
