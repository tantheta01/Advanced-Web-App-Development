var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');
const mongoose = require('mongoose');
const Dishes = require('./models/dishes');
var app = express();
var session = require("express-session")
var FileStore = require("session-file-store")(session)

const url = "mongodb://localhost:27017/conFusion"

const connect = mongoose.connect(url)

connect.then((db) => {
	console.log("Connected")

}, (err) => {
	console.log(err)
})

// view engine setup	
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser('12345-67890-00998'));

app.use(session({
	name : 'session-id',
	secret : '1234567-9988',
	saveUninitialized : false,
	resave : false,
	store : new FileStore()
}))


function auth (req, res, next) {

	console.log("req.session")

	if(!req.session.user){
		var author = req.headers.authorization;
		if(!author) {
			var err = new Error("You are not authorized bro!")
			res.setHeader("WWW-Authenticate", 'Basic')
			err.status = 401
			return next(err)
		}
		var autho = new Buffer.from(author.split(' ')[1], 'base64').toString().split(":")
		username = autho[0]
		password = autho[1]
		console.log(username)
		console.log(password)

		if(username == 'admin' && password == 'password'){
			req.session.user = "admin"
			next();
		}
			
		else {
			var err = new Error("You are not authorized bro!")
			res.setHeader("WWW-Authenticate", 'Basic')
			err.status = 401
			return next(err)
		}
	}
	else if(req.session.user == 'admin'){
		next()
	}
	else
	{
		var err = new Err("You are not authorized bro!")
		// res.setHeader("WWW-Authenticate", 'Basic')
		err.status = 401
		return next(err)
	}

	
}

app.use(auth)

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dishes', dishRouter);
app.use('/leader', leaderRouter);
app.use('/promo', promoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
