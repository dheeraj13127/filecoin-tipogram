const express=require('express')
const router=express.Router()
const {signUpWithEmail,signInWithEmail,getProfile,getAllUsers}=require('../controls/auth')

router.post('/signUp',signUpWithEmail)
router.post('/signIn',signInWithEmail)
router.post('/getProfile',getProfile)
router.get('/getAllUsers',getAllUsers)
module.exports=router 