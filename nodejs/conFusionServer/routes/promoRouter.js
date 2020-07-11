const express = require('express')
const bodyParser = require('body-parser');

promotionRouter = express.Router();
promotionRouter.use(bodyParser.json());

promotionRouter.route('/').all((req, res, next) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", 'text');
	next();
}).get((req, res, next) => {
	res.end("We shall send you that promotion bro");

}).post((req, res, next) => {
	res.end("Yes bro we shall add " + req.body.name + " and his description " + req.body.description);

}).put((req, res, next) => {
	res.statusCode = 403;
	res.end("Bro this command isn't supported bro");
}).delete((req, res, next) => {
	res.end("Jus about to delete all the promotions");
})

promotionsRouter = express.Router();
promotionsRouter.use(bodyParser.json());

promotionsRouter.route('/:promotionId').get((req, res, next) => {
	res.end("We shall get u promotion number " + req.params.promotionId);
})
.post((req, res, next) => {
	res.end("This action is not supported");
}).put((req, res, next) => {
	res.end("We shall update the promotion number " + req.params.promotionId + " by your new promotion");
}).delete((req, res, next) => {
	res.end("Okay bro we are deleting the promotion number " + req.params.promotionId);
})

module.exports.promotionRouter = promotionRouter;
module.exports.promotionsRouter = promotionsRouter;
