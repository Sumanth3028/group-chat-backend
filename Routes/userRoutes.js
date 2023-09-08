const express=require('express')

const router=express.Router()

const userControllers=require('../controllers/users')

router.post('/signup',userControllers.postSignup)

module.exports=router