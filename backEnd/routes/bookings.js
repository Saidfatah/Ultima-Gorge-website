const Router = require('express').Router
const bodyParser = require('body-parser')
const route = Router()

let bookings = [
    {   
      id:1,
      name:'ali hg',
      email:'ali@outlook.com',
      phone:'0625412548',
      adults:1,
      childern:0,
      arrivalDate:'june 10,2020',
      departureDate:'july 12,2020',
      msg:'heyy this my mssg'
    },
    {   
      id:2,
      name:'souad massi',
      email:'souad@souad.com',
      phone:'0625412154',
      adults:5,
      childern:1,
      arrivalDate:'june 30,2020',
      departureDate:'july 16,2020',
      msg:'Iheard about this from a friend and Im willing to pay a visit'
    },
    {   
      id:3,
      name:'souad hessi',
      email:'soaud@hotmail.com',
      phone:'0625412154',
      adults:5,
      childern:1,
      arrivalDate:'june 1,2020',
      departureDate:'june 10,2020',
      msg:'Iheard about this from a friend and Im willing to pay a visit'
    },
    {   
      id:4,
      name:'issam fenan',
      email:'issam_batal@hotmail.com',
      phone:'0658954124',
      adults:1,
      childern:10,
      arrivalDate:'August 19,2020',
      departureDate:'August 28,2020',
      msg:'men derb sultan issam fenan , mn derb trap el beldi '
    },
    {   
      id:5,
      name:'issam Masifenan',
      email:'issam@hotmail.com',
      phone:'0621596587',
      adults:1,
      childern:0,
      arrivalDate:'August 1,2020',
      departureDate:'August10,2020',
      msg:'men derb sultan issam mlashi fenan , mashi mn derb trap el beldi '
    }
]

const newBooking = (obj)=>{
      const newId = bookings.length +1
      const newBooking = {...bookings[0],...obj}
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
        // if(tsk.id ==req.params.id)
        // {
        //     tsk.title=req.body.newTitle
        // }
    })
    res.json(tasks)
})
route.delete('/:id',(req,res)=>{
    setTimeout(() => {
        // console.log(req.params.id)
        // tasks =tasks.filter(tsk=>tsk.id != req.params.id)
        // console.log(tasks)
        // res.json(tasks) 
    }, 100);

})
route.post('/',(req,res)=>{
    bookings.push(newBooking(req.body))
    res.json(bookings) 
})

module.exports=route


