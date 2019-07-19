// const Strategy = require('passport-local').Strategy;
// const User = require('../models/User');
// const bcrypt = require('bcryptjs')


    

// const SignupStrategy = new Strategy({passReqToCallBack:true, usernameField:'email',passwordField:"password" },function(email,password,done){
//     User.findOne({ email }).lean().exec((err,user)=>{
//         if(err){
//             return done(err,null)
//         }
//         if(user){
//             return done("userAlready exist");
//         }
        
//     var salt = bcrypt.genSaltSync(10);
//     var Epassword = bcrypt.hashSync(password, salt)

//       let newUser = new User({
//           email,
//           password:Epassword,         
//           username:username  
//       });
      
//     });

// })


//   module.exports = SignupStrategy;