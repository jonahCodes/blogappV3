const passport = require('passport');


//all Stragey
// const signUpStategy = require('./SignupStrategy');
const signInStategy = require('./SignInStrategy');


passport.use('local-signin',signInStategy);
// passport.use('local-signup',signUpStategy);

module.exports = passport;
