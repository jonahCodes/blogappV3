var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose=require('mongoose');
var Item = require('./models/postschema');
var config=require('config');
var User = require('./models/User');
var indexRouter = require('./routes/index');
var UserRouter = require('./routes/Users');
var session=require('express-session');
var LocalStrategy=require('passport-local');
var passport = require('./passports');
 
var db = config.get('URL');
const {SESS_SECRET = "rustySecret" } = process.env
var port = process.env.PORT || 3001;

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
mongoose.connect(db,{ useNewUrlParser: true, useCreateIndex:true });

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(session({
    name:"session",
    resave:false,
    saveUninitialized:false,
    secret:SESS_SECRET,
    cookie:{
        maxAge:1000*60*60*2

    }
// name:"session",
// keys: ['key1','key2']
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));



app.use('/', indexRouter);
app.use('/account',UserRouter);


app.listen(port,()=>
{console.log('server started')}
)
module.exports = app;

