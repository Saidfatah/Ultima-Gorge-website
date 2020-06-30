const Router = require('express').Router
const bodyParser = require('body-parser')
const Booking = require('../models/Booking')
const mongoose=require("mongoose")
const route = Router()



route.use(bodyParser.json())
route.use(bodyParser.urlencoded({extended:false}))


route.get('/',(req,res)=>{
  Booking.find({},(err,result)=>{
      res.send(result); 
  })
})
route.get('/:id',(req,res)=>{
    const id = req.params.id
    const booking = Booking.findById(id,(err,result)=>{
      if(err)return res.json(err)
      res.json(result)
    })
})
route.put('/:id',(req,res)=>{
    console.log(req.body.newTitle)
    tasks.map(tsk => {
        // if(tsk.id ==req.params.id)
        // {
        //     tsk.title=req.body.newTitle
        // }
    })
    res.json(tasks)
})
route.delete('/:id',(req,res)=>{

  Booking.deleteOne({id:req.params.id})
    setTimeout(() => {
        // console.log(req.params.id)
        // tasks =tasks.filter(tsk=>tsk.id != req.params.id)
        // console.log(tasks)
        // res.json(tasks) 
    }, 100);

})
route.post('/',(req,res)=>{
    Booking.insertMany([{...req.body}])
    res.json('inserted succefully') 
})

module.exports=route


