

const express = require ('express');
const router = express.Router();


 const Post = require('../models/Post');
// GETTING THE POSTS

router.get('/',async (req,res)=> {
 
  try{
      const posts=  await Post.find();
      res.json(posts);
  }catch(err){
    res.json({message:err});

 }


   });

  // router.post('/',(req,res)=> {
      
  //   console.log(req.body);
  //  });

// SUBMITTING THE POST 
    router.post('/', async (req,res)=> {
       
    // const{ title, description } = req.body;
    //   console.log(title)
        const post = new Post({
          title: req.body.title,
          description:req.body.description
       });
          // saving it on data base
      //  post.save()
      //  .then(data =>
      //  { 
      //    res.json(data);

      //  })
      //  .catch(err =>
      //   {
      //     res.json({message: err});
      //   })
          // saving it on data base second method
        try{
         const savedpost= await post.save();
         req.json(savedpost);
 }catch(err){
    res.json({message:err});

 }

});
// SPECIFIC POST searching by id

router.get('/:postId' , async (req,res)=> {
 
  try{
      const specpost=  await Post.findById(req.params.postId);
      res.json(specpost);
  }catch(err){
    res.json({message:err});

 }

});
router.delete('/:postId' , async (req,res)=> {
 
  try{
      const removepost=  await Post.remove({_id: req.params.postId});
      res.json(removepost);
  }catch(err){
    res.json({message:err});

 }

});
// UPDATING THE POST

router.patch('/:postId' , async (req,res)=> {
 
  try{
      const updatepost=  await Post.updateOne({_id: req.params.postId}, {$set : {title: req.body.title}});
      res.json(updatepost);
  }catch(err){
    res.json({message:err});

 }

});
   

module.exports= router;
