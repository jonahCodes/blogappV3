const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt');
const config=require('config')
const User = require('../models/User');    

// users.use(cors());
// process.env.SECRET_KEY= 'secret';


users.post('/register',(req,res,done)=>{ 
    
    User.findOne({email:req.body.email}).lean().exec((err,email)=>{
        if(err){
            return done(err,null)
        }
        if(email){
            return res.status(500).json({message:"Email already in use"});
        }
    })
    var newUser = new User({username:req.body.username,email:req.body.email});
    User.register(newUser,req.body.password,function(err,user){
        if(err){
                console.log(err);
               res.send('username or email already taken')
        }else{
            passport.authenticate('local')(req,res,function(){
                res.send().json({
                    message:"hello" + user.username
                })
            })
         }
     })
    })
  

 
    users.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function(req, res){
	   
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    return res.json({success:true,redirectUrl:'/'})
}

  module.exports = users;