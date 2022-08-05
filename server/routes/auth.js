const express=require('express')
const router=express.Router()
const {signUpWithEmail,signInWithEmail,getProfile,getAllUsers,updateUserProfile}=require('../controls/auth')

router.post('/signUp',signUpWithEmail)
router.post('/signIn',signInWithEmail)
router.post('/getProfile',getProfile)
router.get('/getAllUsers',getAllUsers)
router.put('/updateUserProfile/:userId',updateUserProfile)
module.exports=router 