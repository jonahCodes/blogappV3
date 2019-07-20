var express = require('express');
var Item = require('../models/postschema');
var User =require('../models/User')
var mongoose=require('mongoose');
var router = express.Router();

router.get('/',(req,res,next)=>{
  User.find({})
  .exec()
  .then(result1=>{
    console.log(result1)
    if(result1){
      res.status(200).json(result1)
    }else{
      res.status(404).json({message:"cant find USER"})
    }
  })
  
   
})
router.get('/items',function(req,res,next){
Item.find({})
  .exec()
  .then(result=>{
    console.log(result)
    if(result){
      return res.status(200).json(result);
    }
      return res.status(401).json({jonathan:"cant find ITEM"})
    
  })
})
  
router.post('/',function(req,res){
    const item = new Item({
        _id: new mongoose.Types.ObjectId(),
        description:req.body.description,
        image:req.body.image,
        author:{
          id: req.user._id,
          username: req.user.username
      }
    })
    item.save().then(result =>{
        console.log(result) 
         res.status(201).json({
            message:"handling post",
            createdProduct:item
    })
})
    .catch(err=>res.status(500).json({message:err}));
  

})

router.get('/:id',(req,res,next)=>{
    const id = req.params.id;
    Item.findById(id)
    .exec()
    .then(doc=>{
      console.log('=========')
     console.log(doc)
    if(doc){
     res.status(200).json(doc)
    }else{
      res.status(404).json({message:"no valid info"})
    }
  })
    .catch(err=>{
      console.log(err)
      res.status(500).json({error:err})
    })

})
///
//
//
//
//UPDATE
//
// //[{"PROPNAME":----,"VALUE":-----}]
// router.patch('/:id',(req,res,next)=>{
//   const id =req.params.id;
//   const updateOps={}
//   for(const ops of req.body){
//     updateOps[ops.propName] = ops.value
//   }
//   //[{"PROPNAME":----,"VALUE":-----}]

//   Item.update({ _id:id},{$set:updateOps})
//   .exec()
//   .then(doc=>{
//     console.log(doc)
//     if(doc){
//       res.status(200).json(doc)
//     }else{
//       res.status(404).json({message:"icouldnot update anything"})
//     }
//   })
//   .catch(err=>{
//     console.log(err);
//     res.status(500).json({error:err})
//   })
// })
router.route('/update/:id').post(function(req, res) {
    Item.findById(req.params.id, function(err, product) {
        if (!product)
            res.status(404).send('data is not found');
        else
            product.description = req.body.description;
            product.image = req.body.image;

            product.save().then(product => {
                res.json('product updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

router.delete('/:id',(req,res)=>{
  const id = req.params.id;
  Item.remove({_id:id})
  .exec()
  .then(doc =>{
    console.log(doc)
    if(doc){
      res.status(200).json(doc)
    }else{
      res.status(404).json({message:"couldnt delete anything"})
    }
   
  })
  .catch(err=>{
    console.log(err)
    res.status(500).json({error:err})
  }) 
  
})
module.exports = router;