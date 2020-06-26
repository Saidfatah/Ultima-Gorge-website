const Router = require('express').Router
const route = Router()

const usersList = [
  {
    userNam:'aichaMolatElMerja',
    password:'123456',
  }
]
route.get('/',(req,res)=>{
  res.json('users here ')
})
route.get('/:id',(req,res)=>{
  res.json('users here ')
})
module.exports=route