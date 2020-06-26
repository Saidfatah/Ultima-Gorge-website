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
      msg:`Men Derb Sultan, Issam fennan fuck Mirikan
      Men derb trap lbeldi jebna l3ezz f Motobécane
      Nhar ntzewjo l3a9a ndiro story 3ya9a f voiture Mégane
      Sa7bi dégage, we9tek sala 3berna sikan
      9sserna Segane bach ga3ma ntkhettaw charrek, mchina pédale
      F rejli 9itan, tbe3tini skhefti f cinquième étage
      Allô allô what you want PRADA Channel
      Skhefti f quartier dima mhaybin b Versace jean
      Sayg w homa f blayss'hom, Issam ma 3endo price
      La3eb 3lihom Tyson, f lekher ana li fayz
      Ghadiyn mroulé, ma 3reftch imta gha netsayeb
      Ana w s7abi mroublin, ra jamais nhezo raya
      F'had rap mnoumrine ga3 li dekhlo b l7aya
      La doubelt l3a9a 3refni 7sebtha f mraya
      Aji bouss l'wawa kho s7aybtk ga3 ma m3aya
      Estafette jaya wraya, khellitha tghawet ya ya
      Skrr skrr skrr, ya ya, skrr skrr
      Ya ya, ya ya…`
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
    const id = req.params.id
    const singleBooking = bookings.filter(booking=> booking.id == id)
    res.json(singleBooking[0])
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


