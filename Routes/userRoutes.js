const express=require('express')

const router=express.Router()

const userControllers=require('../controllers/users')

router.post('/signup',userControllers.postSignup)

router.post('/login',userControllers.postLoginDetails)

module.exports=router