const winston = require('winston');

const logConfiguration = {
	format: winston.format.json(),
	level: 'info',
	transports: [
		new winston.transports.File({ filename: 'error.log', level: 'error' }),
		new winston.transports.File({ filename: 'combined.log' })
	]
};
const logger = winston.createLogger(logConfiguration);

if (process.env.NODE_ENV !== 'production') {
	logger.add(
		new winston.transports.Console({
			format: winston.format.simple()
		})
	);
}

module.exports = logger;
