const Router = require('express').Router
const bodyParser = require('body-parser')
const route = Router()

let bookings = [
    {   
      id:1,
      name:'ali hg',
      email:'sa@sa.com',
      phone:'0625412548',
      adults:1,
      childern:0,
      arrivalDate:'10/12/2020',
      departureDate:'10/30/2020',
      msg:'heyy this my mssg'
    }
]

const newBooking = (obj)=>{
      const newId = bookings.length +1
      const newBooking = {...bookings[0],obj}
      newBooking.id=newId
      return newBooking
}

route.use(bodyParser.json())
route.use(bodyParser.urlencoded({extended:false}))
route.get('/',(req,res)=>{
  res.json(bookings)
})
route.get('/:id',(req,res)=>{
    res.json(tasks)
})
route.put('/:id',(req,res)=>{
    console.log(req.body.newTitle)
    tasks.map(tsk => {
        if(tsk.id ==req.params.id)
        {
            tsk.title=req.body.newTitle
        }
    })
    res.json(tasks)
})
route.delete('/:id',(req,res)=>{
    setTimeout(() => {
        console.log(req.params.id)
        tasks =tasks.filter(tsk=>tsk.id != req.params.id)
        console.log(tasks)
        res.json(tasks) 
    }, 100);

})
route.post('/',(req,res)=>{
    bookings.push(newBooking(req.body))
    res.json(bookings) 
})

module.exports=route


