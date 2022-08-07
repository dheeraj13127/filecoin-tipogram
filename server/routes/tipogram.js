const express=require('express')
const router=express.Router()
const {updateUserLikedPosts,updateImagesPosted,updateTipsReceived,updateAuthorLikes,updateBadges} =require('../controls/tipogram')
router.post('/updateUserLikedposts',updateUserLikedPosts)
router.post('/updateImagesPosted',updateImagesPosted)
router.post('/updateTipsReceived',updateTipsReceived)
router.put('/updateAuthorLikes/:authorId',updateAuthorLikes)
router.post('/updateBadges',updateBadges)
module.exports=router 