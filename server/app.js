const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const logger = require('morgan');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');



// var con = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'giveBU'
//
// });
//
// con.connect(function(err) {
// 	if (err) throw err;
// 	console.log("Connected!");
// });
var dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gabbers',
  database: 'giveBU'
});

dbConn.connect(function(err) {
  if(err) throw err;
  console.log("Connected");
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var volunteerRouter = require('./routes/volunteer');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieSession({
    name: 'session',
    keys: ['hey'],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))


app.get('/volunteer', function(req, res) {
  dbConn.query('SELECT * FROM organization', function(error, results, fields) {
    if (error) throw error;
    console.log("Server connected")
    return res.send(results);
  });
});

app.get('/volunteer/:id', function (req, res) {
  let org_id = req.paramas.id;
  if(!org_id) {
    return res.status(400).send({ error: true, message: 'Please provide org_id'});
  }
  dbConnect.query('SELECT * FROM organization where id=?', org_id, function(error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results[0], message: 'volunteer list'});
  });
});


app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/volunteer', volunteerRouter);

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
