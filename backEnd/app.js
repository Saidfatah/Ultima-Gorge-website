const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const moongose = require('mongoose')
const usersRoute = require('./routes/users')
const bookingsRoute = require('./routes/bookings')
const app =express()

const corsOptions = {
    origin: 'http://127.0.0.1:5500/public/index.html'
}
app.use(cors({corsOptions}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.json("home")
})
app.use('/users',usersRoute)
app.use('/bookings',bookingsRoute)

app.listen(4000,()=>console.log('listeng'))