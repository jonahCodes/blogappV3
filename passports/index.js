const passport = require('passport');
const User =require('../models/User');



passport.serializeUser(User.serializeUser());

   
passport.deserializeUser(User.deserializeUser());


module.exports = passport;
