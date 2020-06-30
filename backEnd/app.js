const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const moongose = require('mongoose')
const usersRoute = require('./routes/users')
const bookingsRoute = require('./routes/bookings')
const {transporter} = require('./util/sendMail')
const {mailOptions} = require('./util/sendMail')
const connectionString = require('./config/dbConnection')
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
app.post('/',(req,res)=>{
    transporter.sendMail(mailOptions, (error, info)=>{
        if (error) return res.json(error)
        res.json('Email sent: ' + info.response)
    });
})
app.use('/users',usersRoute)
app.use('/bookings',bookingsRoute)


moongose.connect(connectionString,{ useNewUrlParser: true , useUnifiedTopology: true },()=>{
    console.log('connected')
})

app.listen(4000,()=>console.log('listeng'))
