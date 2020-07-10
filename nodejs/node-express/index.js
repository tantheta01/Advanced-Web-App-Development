const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const hostname= 'localhost';
const port = 3000;

app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
// app.use((req, res, next) => {
// 	console.log(req.headers);
// 	res.statusCode = 200;
// 	res.setHeader('Content-Type', 'text/html');
// 	res.end('<html><body><h1>This is an Express Server</h1></body></html>');

// });

app.all('/dishes', (req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text');
	next();
})
app.get('/dishes', (req, res, next) => {
	res.end("Will send all the dishes to you");
})
app.post('/dishes', (req, res, next) => {
	res.end('Will Add the dish ' + req.body.name + ' with the details: ' + req.body.description);
})
app.put('/dishes', (req, res, next) => {
	res.statusCode = 403;
	res.end("PUT operation on dishes not supported");

})
app.delete('/dishes', (req, res, next) => {
	res.end("Saari dishes delete kr dete hai hum");
})

app.get('/dishes/:dishId', (req, res, next) => {
	res.end("Will send the dish number " + req.params.dishId + " to you");
})
app.post('/dishes/:dishId', (req, res, next) => {
	res.statusCode = 403;
	res.end("POST operation in the dish not supported");
})
app.put('/dishes/:dishId', (req, res, next) => {
	res.end("Shall update the dish " + req.params.dishId + " to the db");
})
app.delete('/dishes/:dishId', (req, res, next) => {
	res.end("Shall delete the dish id " + req.params.dishId);
})

app.use((req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<html><body><h1>Expresssssexxxx</h1></body></html>');
})




const server = http.createServer(app);
server.listen(port, hostname, () => {
	console.log(`Server Running at http://${hostname}:${port}`);	
})