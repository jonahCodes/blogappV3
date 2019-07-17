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

users.post('/login', (req, res) => { 
    User.findOne({
      email: req.body.email
    })
      .then(user => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            // Passwords match
            const payload = {
              _id: user._id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email
            }
            let token = jwt.sign({payload}, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.send(token)
          } else {
            // Passwords don't match
            res.json({ error: 'User does not exist' })
          }
        } else {
          res.json({ error: 'User does not exist' })
        }
      })
      .catch(err => {
        res.send('error1: ' + err)
      })
  })
  module.exports = users