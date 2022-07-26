const MestifyUser = require("../models/user");

exports.updateUserLikedPosts=async(req,res)=>{
   
    try{
        await MestifyUser.findOneAndUpdate({_id:req.body.userId},{
          $push:{
            likedPosts:req.body.postId
          }
        },{upsert:true,returnDocument:true},(err,result)=>{
          if(err){
            return res.status(400).json(err)
          
          }
          else{
           return res.status(200).json(result)
          }
        })
        
      }
      catch(e){
        // res.status(500).json({ success: false, message: "Something went wrong !" });
      }
}


exports.updateImagesPosted=async(req,res)=>{
  try{
    await MestifyUser.findOneAndUpdate({_id:req.body.userId},{
      $push:{
        imagesPosted:req.body.postId
      }
    },{upsert:true,returnDocument:true},(err,result)=>{
      if(err){
        return res.status(400).json(err)
      
      }
      else{
       return res.status(200).json(result)
      }
    })
    
  }
  catch(e){

  }
}