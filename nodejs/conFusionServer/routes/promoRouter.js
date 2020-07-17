const express = require('express');
const bodyParser = require('body-parser');
const promos = require ('../models/promo')
const mongoose = require('mongoose')
const promoRouter = express.Router();
promoRouter.use(bodyParser.json());


promoRouter.route('/')
.get((req, res, next) => {
	promos.find({}).then((promos) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json')
		res.json(promos);
	}, (err) => next(err)).catch((err) => next(err))

}).post((req, res, next) => {
	promos.create(req.body).then((promos) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json')
		res.json(promos);

	}, (err) => next(err)).catch((err) => next(err))
}).put((req, res, next) => {
	res.statusCode = 403
	res.setHeader('Content-Type', 'text')
	res.end("The PUT is not supported")
}).delete((req, res, next) => {
	promos.remove({}).then((resp) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json')
		res.json(resp);
	},(err) => next(err)).catch((err) => next(err))
})

promoRouter.route('/:promoId')
.get((req, res, next) => {
	promos.findById(req.params.promoId).then((promo) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json')
		res.json(promo);
	}, (err) => next(err)).catch((err) => next(err))

}).post((req, res, next) => {
	res.statusCode = 403
	res.setHeader('Content-Type', 'text')
	res.end("The PUT is not supported")
}).put((req, res, next) => {
	promos.findByIdAndUpdate(req.params.promoId, { $set: req.body }, { new: true }).then((promo) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json')
		res.json(promo)
	}, ((err) => next(err))).catch((err) => next(err))
}).delete((req, res, next) => {
	promos.findByIdAndRemove(req.params.promoId).then((resp) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json')
		res.json(resp);
	},(err) => next(err)).catch((err) => next(err))
})


module.exports = promoRouter;
