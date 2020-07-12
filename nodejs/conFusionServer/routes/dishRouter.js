const express = require('express');
const bodyParser = require('body-parser');
const Dishes = require ('../models/dishes')
const mongoose = require('mongoose')
const dishRouter1 = express.Router();
dishRouter1.use(bodyParser.json());


dishRouter1.route('/')
.get((req, res, next) => {
	Dishes.find({})
	.then((dishes) => {
		res.statusCode = 200
		res.setHeader('Content-Type', 'application/json')
		res.json(dishes);
	}, (err) => {
		next(err);
	}).catch((err) => {
		next(err);
	})
}).post((req, res, next) => {
	Dishes.create(req.body)
	.then((dishes) => {
		console.log("Dish Created")
		res.statusCode = 200
		res.setHeader('Content-Type', 'application/json')
		res.json(dishes)
	}, ((err) => next(err))).catch((err) => next(err))

})

.put((req, res, next) => {
	res.statusCode = 403;
	res.end("PUT operation on dishes not supported");

}).delete((req, res, next) => {
	Dishes.remove({}).then((resp) => {
		res.statusCode = 200;
		res.setHeader("Content-Type", "application/json");
		res.json(resp)
	}, ((err) => next(err))).catch((err) => next(err))
})


const dishRouter2 = express.Router();
dishRouter2.use(bodyParser.json());


dishRouter2.route('/:dishId')
.get((req, res, next) => {
	Dishes.findById(req.params.dishId).then((dish) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(dish)
	}, ((err) => next(err))).catch((err) => next(err))
})
.post((req, res, next) => {
	res.statusCode = 403;
	res.end("POST operation in the dish not supported");
})
.put((req, res, next) => {
	Dishes.findByIdAndUpdate(req.params.dishId, {
		$set : req.body
	}, { new : true })
	.then((dish) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json')
		res.json(dish)
	}, ((err) => next(err))).catch((err) => next(err))
})
.delete((req, res, next) => {
	Dishes.remove(req.params.dishId)
	.then((resp) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json')
	}, ((err) => next(err))).catch((err) => next(err))
})



module.exports.one = dishRouter1;
module.exports.two = dishRouter2;

