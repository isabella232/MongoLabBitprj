
const express = require('express')
require('./db/mongoose')

const Volunteer = require('./models/volunteers')
const volunteerRouter = require('./routers/volunteer')
const adminRouter = require('./routers/admin')
const app = express()
const config = require('./config') // TODO: check
const port = process.env.PORT || 3000

// auto parses json
app.use(express.json())
// use modules
app.use(volunteerRouter)
app.use(express.static('./public', config.static)) /// TODO: also check this
app.use(adminRouter)

app.listen(port, () => {
    console.log('Server is up on port', port);
})

// // TODO: REST APIs down below
// // Add Volunteer
// app.post('/volunteers', (req, res) =>{
//     const volunteer = new Volunteer(req.body)
    
//     volunteer.save().then((volunteer) => {
//         res.status(201).send(volunteer)

//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })

// // Read ALL volunteers
// app.get('/volunteers', (req, res) => {
//     Volunteer.find({}).then((volunteer) => {
//         res.send(volunteer)
//     }).catch((e) => {
//         res.status(500).send()
//     })
// })

// // TODO: Read ALL volunteers by First Name
// app.get('/volunteers/:firstName', (req, res) => {
//     const firstName = req.params
//     console.log(firstName)

//     Volunteer.find(firstName).then((volunteer) => {
//         res.status(200).send(volunteer)
//     }).catch((e) => {
//         res.status(500).send()
//     })
// })

// // TODO: Delete Volunteer


// // TODO: Update Volunteer