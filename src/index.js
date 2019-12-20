
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