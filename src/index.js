const express = require('express');
const logger = require('./config/logger');

const app = express();
app.listen(3000, () => {
	logger.info('server listen');
});
