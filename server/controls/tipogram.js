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


exports.updateTipsReceived=async(req,res)=>{
 
 
  try{
    await MestifyUser.findById({_id:req.body.authorId}).then(async(resp)=>{
     
      await MestifyUser.findOneAndUpdate({_id:req.body.authorId},{
        tipsReceived:parseFloat(req.body.tipAmt)+parseFloat(resp.tipsReceived)
    },{upsert:true,returnDocument:true},(err,result)=>{
      if(err){
        return res.status(400).json(err)
      
      }
      else{
       return res.status(200).json(result)
      }
    })
    })

    
  }
  catch(e){

  }
}
exports.updateAuthorLikes=async(req,res)=>{

 
  try{
    await MestifyUser.findById({_id:req.params.authorId}).then(async(resp)=>{
     
      await MestifyUser.findOneAndUpdate({_id:req.params.authorId},{
        likeCount:parseInt(resp.likeCount)+1
    },{upsert:true,returnDocument:true},(err,result)=>{
      if(err){
        return res.status(400).json(err)
      
      }
      else{
       return res.status(200).json(result)
      }
    })
    })

    
  }
  catch(e){

  }
}


exports.updateBadges=async(req,res)=>{
 
  try{
    await MestifyUser.findById({_id:req.params.userId}).then(async(resp)=>{
      if(!resp.badges.includes(req.body.badgesData)){
            await MestifyUser.findOneAndUpdate({_id:req.params.userId},{
      $push:{
        badges:req.body.badgesData
      }
    },{upsert:true,returnDocument:true},(err,result)=>{
      if(err){
      
        return res.status(400).json(err)
      
      }
      else{
       return res.status(200).json({message:"New badge unlocked"})
      }
    })
      }
      
    })

    
  }
  catch(e){
    
  }
}