const express = require('express')
const userModel = require('../models/user.model')
const router  = express.Router()



router.post('/register', async (req,res)=>{
     const {username, password} = req.body;
     const user = await userModel.create({
          username,password
     })
     res.status(201).json({
          message:'user registered...',
          user
     })


})
router.post('/login', async (req,res)=>{
     const {username, password} = req.body;
     const isUserExists = await userModel.findOne({
          username:username
     })
     if(!isUserExists){
          
     }
})




module.exports = router