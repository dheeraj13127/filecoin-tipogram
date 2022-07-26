const express=require('express')
const router=express.Router()
const {updateUserLikedPosts,updateImagesPosted} =require('../controls/tipogram')
router.post('/updateUserLikedposts',updateUserLikedPosts)
router.post('/updateImagesPosted',updateImagesPosted)
module.exports=router 