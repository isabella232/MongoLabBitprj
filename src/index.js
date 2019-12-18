const express = require('express')
require('./db/mongoose')

const Volunteer = require('./models/volunteers')
const app = express()
const port = process.env.PORT || 3000

// auto parses json
app.use(express.json())

app.listen(port, () => {
    console.log('Server is up on port', port);
})

// TODO: REST APIs down below
// TODO: Add Volunteer
app.post('/volunteers', (req, res) =>{
    const volunteer = new Volunteer(req.body)
    
    volunteer.save().then(() => {
        res.status(201).send(volunteer)

    }).catch((e) => {
        res.status(400).send(e)
    })
})

// TODO: Read ALL volunteers


// TODO: Read SINGLE volunteer


// TODO: Delete Volunteer


// TODO: Update Volunteer