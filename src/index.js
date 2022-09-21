const app = require('./app');
const logger = require('./config/logger');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	logger.info(`server listen ${PORT}`);
});
