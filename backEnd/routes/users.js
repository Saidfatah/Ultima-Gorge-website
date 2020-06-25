const Router = require('express').Router
const route = Router()
route.get('/',(req,res)=>{
  res.json('users here ')
})
module.exports=route