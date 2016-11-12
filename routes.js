const Router = require('express').Router;
const router = new Router();

const message  = require('./model/message/message-router');

router.use('/api1/message', message);

router.use('*', function(req, res) {
	res.sendFile(__dirname + '/portfolio/dist/index.html');
});

module.exports = router;
