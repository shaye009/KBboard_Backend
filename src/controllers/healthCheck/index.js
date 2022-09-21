exports.index = (req, res) => {
	res.send('hello world');
};

exports.health = (req, res) => {
	res.send('APIs is working');
};
