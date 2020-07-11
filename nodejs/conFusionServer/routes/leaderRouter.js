const express = require('express')
const bodyParser = require('body-parser');

leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/').all((req, res, next) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", 'text');
	next();
}).get((req, res, next) => {
	res.end("We shall send you that leader bro");

}).post((req, res, next) => {
	res.end("Yes bro we shall add " + req.body.name + " and his description " + req.body.description);

}).put((req, res, next) => {
	res.statusCode = 403;
	res.end("Bro this command isn't supported bro");
}).delete((req, res, next) => {
	res.end("Jus about to delete all the leaders");
})

leadersRouter = express.Router();
leadersRouter.use(bodyParser.json());

leadersRouter.route('/:leaderId').get((req, res, next) => {
	res.end("We shall get u leader number " + req.params.leaderId);
})
.post((req, res, next) => {
	res.end("This action is not supported");
}).put((req, res, next) => {
	res.end("We shall update the leader number " + req.params.leaderId + " by your new leader");
}).delete((req, res, next) => {
	res.end("Okay bro we are deleting the leader number " + req.params.leaderId);
})

module.exports.leaderRouter = leaderRouter;
module.exports.leadersRouter = leadersRouter;
