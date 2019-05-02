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
app.use(cors());

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

// Get all volunteer events
app.get('/volunteer', function(req, res) {
  dbConn.query('SELECT * FROM organization', function(error, results, fields) {
    if (error) throw error;
    console.log("Server connected")
    return res.send({data: results});
  });
});

// Get volunteer event by id
app.get('/volunteer/:id', function (req, res) {
  let org_id = req.params.id;
  if(!org_id) {
    return res.status(400).send({ error: true, message: 'Please provide org_id'});
  }
  dbConn.query('SELECT * FROM organization where id=?', org_id, function(error, results, fields) {
    if (error) throw error;
    return res.send(results);
  });
});

app.get('/users', function(req, res) {
  dbConn.query('SELECT * FROM user', function(error, results, fields) {
    if (error) throw error;
    console.log("Server connected")
    
    return res.send({data: results});
  });
});

app.get('/users/:username', (req,res) => {
  let username = req.params.username;
  dbConn.query('SELECT * FROM user WHERE username = ?',username,(error,results,fields) => {
    if(error) throw error;
    return res.send(results);
  });
});

// Add a new user to databse
app.post('/users/:username', (req,res) => {
  let username = req.params.username;
  console.log('user: ',username);
  dbConn.query('INSERT INTO user(username) VALUES (?)',username, (error,result) => {
    if (error) throw error;
    return res.send('User '+username+' added successfully');
  });
});


// Delete a user from database
app.delete('/users/:username', (req, res) => {
  let username = req.params.username;
  dbConn.query('DELETE FROM user WHERE username = ?', username, (error, result) => {
    if(error) throw error;
    return res.send('User '+username+' deleted');
  });
});

app.get('/register', (req,res) => {
  dbConn.query('SELECT * FROM user_events', (error, results, fields) => {
    if (error) throw error;
    return res.send(results);
  });
});

app.get('/register/:username', (req,res) => {
  let username = req.params.usernam;
  dbConn.query('SELECT * FROM user_events WHERE user = ?', username, (error, results,fields) => {
    if(error) throw error;
    return res.send(results);
  })
});

app.post('/register/:event/:user', (req,res) => {
  let event_id = Number(req.params.event);
  let user = req.params.user;
  console.log('event: ', event_id);
  console.log('user: ', user);
  dbConn.query('INSERT INTO user_events SET ?',{user,event_id}, (error,results,fields) => {
    if (error) throw error;
    return res.send("Event #"+event_id.toString()+" added to "+user+" profile.");
  });
});

app.delete('/register/:username', (req,res) => {
  let username = req.params.username;
  dbConn.query('DELETE FROM user_events WHERE user = ?', username, (error,result) => {
    if(error) throw error;
    return res.send('All events deleted from '+username+' profile.')
  });
});


app.use(express.static(path.join(__dirname, 'public')));

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
