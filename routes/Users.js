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
    var newUser = new User({username:req.body.username,email:req.body.email});

    User.findOne({email:req.body.email}).lean().exec((err,email)=>{
        if(err){
            return done(err,null)
        }
        if(email){
            return res.status(500).json({message:"Email already in use"});
        }
    });


    User.register(newUser,req.body.password,function(err,user){
        if(err){
               return console.log(err);
        }
            passport.authenticate('local')(req,res,function(){
                res.json({
                    message:"hello" + user.username
                })
               
            });
         })
          
     });
     function getdata(req){
       
           return user
     }
 
    users.post("/login",passport.authenticate('local'),function(req,res,next){
                const user = {
                            username:req.body.username,
                            password:req.body.password

                        }
          
           jwt.sign({user},'secretkey',(err,token)=>{
               res.json({
                   token
               })
           })
               
    })



    users.get('/logout',verifyToken,(req,res)=>{
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            if(err) {
              res.sendStatus(403);
            } else {  
                    req.logout();
                    res.status(200).json({message:"Youve been logged out",authData})
              
            }
          });
      
    })
    
  users.get('/api',function(req,res){
    const id = req.user;
      res.json({
          message:'you requested api'   
      });
  })

function verifyToken(req,res,next){
const bearerHeader = req.headers['authorization'];

if(typeof bearerHeader !== 'undefined'){
//split at the space 
const bearer= bearerHeader.split(' ');
//get token from array 
const bearerToken = bearer[1];
//set the token 
req.token = bearerToken; 
//next middle ware
next();
}else{
    res.sendStatus(403);    
    }
}


function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    return res.status(500).json({message:"you need to login"})
}

  module.exports = users;