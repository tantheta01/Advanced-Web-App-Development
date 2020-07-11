const express = require('express');
const bodyParser = require('body-parser');

const dishRouter1 = express.Router();
dishRouter1.use(bodyParser.json());


dishRouter1.route('/')
.all((req, res, next) => {
	// res.statusCode = 200;
	res.setHeader('Content-Type', 'text');
	next();
}).get((req, res, next) => {
	res.end("Will send all the dishes to you");
}).post((req, res, next) => {
	res.end('Will Add the dish ' + req.body.name + ' with the details: ' + req.body.description);
}).put((req, res, next) => {
	res.statusCode = 403;
	res.end("PUT operation on dishes not supported");

}).delete((req, res, next) => {
	res.end("Saari dishes delete kr dete hai hum");
});


const dishRouter2 = express.Router();
dishRouter2.use(bodyParser.json());


dishRouter2.route('/:dishId')
.get((req, res, next) => {
	res.end("Will send the dish number " + req.params.dishId + " to you");
})
.post((req, res, next) => {
	res.statusCode = 403;
	res.end("POST operation in the dish not supported");
})
.put((req, res, next) => {
	res.end("Shall update the dish " + req.params.dishId + " to the db");
})
.delete((req, res, next) => {
	res.end("Shall delete the dish id " + req.params.dishId);
});



module.exports.one = dishRouter1;
module.exports.two = dishRouter2;

