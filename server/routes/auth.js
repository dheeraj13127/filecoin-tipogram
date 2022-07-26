const express=require('express')
const router=express.Router()
const {signUpWithEmail,signInWithEmail,getProfile}=require('../controls/auth')

router.post('/signUp',signUpWithEmail)
router.post('/signIn',signInWithEmail)
router.post('/getProfile',getProfile)
module.exports=router 