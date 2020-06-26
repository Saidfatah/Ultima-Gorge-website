const SendmailTransport = require('nodemailer/lib/sendmail-transport')

const Router = require('express').Router
const route = Router()

const usersList = [
  {
    userName:'admin',
    password:'123456',
  }
]
route.get('/',(req,res)=>{
  res.json('users here ')
})
route.post('/login',(req,res)=>{
  const user = {userName:req.body.userName , password : req.body.password}
  const userFound =usersList.find(u=>u.userName == user.userName  && u.password == user.password )
  console.log(userFound)
  if(userFound == undefined || userFound == null)
     res.status(400).send('user not found ,usernmae or password are incorrect  !')
  else res.send('logged succefully')
})
module.exports=route