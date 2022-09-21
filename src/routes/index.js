const express = require('express');
const { index: indexController } = require('../controllers/healthCheck/index');

const router = express();

router.get('/', indexController);

module.exports = router;
