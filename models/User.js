const mongoose =require('mongoose');
const passportlocal = require('passport-local-mongoose');

const Schema = mongoose.Schema;

var UserSchema = new Schema({
    username:String,
	password:String,
})
UserSchema.plugin(passportlocal);
module.exports = mongoose.model('User',UserSchema);