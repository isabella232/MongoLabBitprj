const express = require('express')
require('./db/mongoose')
const Volunteer = require('../models/admin')
const router = new express.Router()

// TODO: finish REST APIs for admin

// Export Volunteer router
module.exports = router