/**
 * Module dependencies.
 */
const express = require('express');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const dotenv = require('dotenv');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env.example' });

/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('connected', () => {
  console.log('%s MongoDB connection established!', chalk.green('✓'));
});
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

/**
 * API keys and Passport configuration.
 */
const passportConfig = require('./config/passport');

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(expressStatusMonitor());
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
        url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
        autoReconnect: true
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * Primary app routes.
 */
app.get('/', homeController.index);
app.get('/templates/:template', homeController.angularTemplate);

const Seat = require('./models/Seat');
const Person = require('./models/Person');
const User = require('./models/User');
const userController = require('./controllers/User');
app.get('/json/seats', (req, res) => {
    Seat.find().exec((err, docs) => res.send(docs));
});
app.get('/json/persons', (req, res) => {
    Person.find().exec((err, docs) => res.send(docs));
});
app.get('/json/users', passportConfig.isAuthenticated, (req, res) => {
    User.find().exec((err, docs) => res.send(docs));
});

app.post('/new-seat', passportConfig.isAuthenticated, (req, res) => {
    new Seat(req.body).save();
    res.send({type: 'success'});
});
app.post('/update-seat', passportConfig.isAuthenticated, (req, res) => {
    console.log('req.body', req.body);
    Seat.findOne({id: req.body.id}).exec((err, doc) => {
        Object.assign(doc, req.body);
        doc.markModified('occupant');
        doc.save();
        res.send({type: 'success'});
    });
});

app.post('/new-person', passportConfig.isAuthenticated, (req, res) => {
    new Person(req.body).save();
    res.send({type: 'success'});
});
app.post('/update-person', passportConfig.isAuthenticated, (req, res) => {
    Person.findOne({id: req.body.id}).exec((err, doc) => {
        Object.assign(doc, req.body);
        doc.markModified('seatId');
        doc.save();
        res.send({type: 'success'});
    });
});


app.post('/login', userController.postLogin);
app.get('/logout', userController.logout);

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), app.get('port'), app.get('env'));
});

/* Dumb DB */
/*
for (var i = 1; i <= 2; i++) {
    var newPerson = new Person({
        email: 'example@gmail.com',
        name: i == 1 ? 'Ivan Ivanov' : 'Nick Thompson'
    });
    newPerson.save();

    var newSeat = new Seat({
        left: 100,
        top: 150,
        id: 0,
        title: i == 1 ? 'manager seat' : 'secretary seat'
    });
    newSeat.save();
}*/

module.exports = app;
