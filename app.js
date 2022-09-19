require('dotenv').config();
const express = require('express');

const app = express();
const winston = require('winston');

const logConfiguration = {
	transports: [new winston.transports.Console()]
};
const logger = winston.createLogger(logConfiguration);

app.listen(3000, () => {
	logger.info('server listen');
});
