
const express = require('express')
require('./db/mongoose')

const Volunteer = require('./models/volunteers')
const volunteerRouter = require('./routers/volunteer')
const adminRouter = require('./routers/admin')
const staticPages = require('./app') //TODO: check if this is correct
const app = express()
const port = process.env.PORT || 3000

// auto parses json
app.use(express.json())
// use modules
app.use(volunteerRouter)
app.use(staticPages)
app.use(adminRouter)

app.listen(port, () => {
    console.log('Server is up on port', port);
})