const express = require('express');

const router = express();
router.get('/', (req, res) => {
	res.json('hello world');
});
