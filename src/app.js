const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');

const apiRouter = require('./routes/api');
const indexRouter = require('./routes');

require('dotenv').config();

const app = express();

app.use(helmet());

const morganLog =
	process.env.NODE_ENV === 'development'
		? morgan('dev')
		: morgan('common', {
				skip(req, res) {
					if (req.url === '/health') {
						return res.statusCode < 400;
					}
					return false;
				}
		  });

app.use(morganLog);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
	cors({
		credentials: true,
		exposedHeaders: 'Authorization',
		origin: ['http://localhost:8000', 'http://localhost:3000']
	})
);

app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;
