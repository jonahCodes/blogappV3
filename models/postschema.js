var mongoose =require('mongoose');

var itemSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description:String,
  image:String,
  author:{ 
    id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
    
  }
})

module.exports = mongoose.model("Item",itemSchema);