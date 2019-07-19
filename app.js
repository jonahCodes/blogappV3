var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose=require('mongoose');
var Item = require('./models/postschema');
var config=require('config');
var User = require('./models/User');
var indexRouter = require('./routes/index');
var UserRouter = require('./routes/Users');
var LocalStrategy=require('passport-local');
var passport = require('./passports');
 
var db = config.get('URL');

var port = process.env.PORT || 3001;

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
mongoose.connect(db,{ useNewUrlParser: true, useCreateIndex:true });

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require("express-session")({
    secret:"jonathanx99x",
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', indexRouter);
app.use('/account',UserRouter);


app.listen(port,()=>
{console.log('server started')}
)
module.exports = app;

