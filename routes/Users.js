const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStragey = require('passport-local');
const bcrypt = require('bcrypt');
const User = require('../models/User');

users.use(cors());
process.env.SECRET_KEY= 'secret';


users.post('/register',(req,res)=>{
    var newUser = new User({
    
        username: req.body.username
        
    })
        User.register(newUser,req.body.password,(err,user)=>{
            if(err){
                res.status(404).json({
                    message:"err:"+ err
                })
            }else{
                 passport.authenticate("local")(req,res,()=>{
                res.json({message:"success login" + user});
            });
        }
           
    })
})

users.post('/login',passport.authenticate('local',{

}),function(req,res){
res.json({
  message:'LOGGEDIN'
  })
})

users.get('/logout',function(req,res){
  req.logout();
  res.send(console.log(req.body.username +' Logged out'))
})
  module.exports = users