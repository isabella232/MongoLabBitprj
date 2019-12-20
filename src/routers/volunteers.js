
const express = require('express')
require('./db/mongoose')
const Volunteer = require('../models/volunteers')
const router = new express.Router()

// TODO: REST APIs down below
// Add Volunteer
router.post('/volunteers', async (req, res) =>{
    const volunteer = new Volunteer(req, body)
    
    try { 
    	await volunteer.save()
    	res.status(201).send(volunteer)
    } catch(e) {
        res.status(400).send(e)
    }
})

// TODO: Read ALL volunteers


// TODO: Read SINGLE volunteer


// Delete Volunteer
router.delete('/volunteers/:id', async (req, res) => {  
	try {
		// try to delete volunteer, if found store in volunteer 
		const volunteer = await volunteer.findByIdAndDelete(req.params.id)
		
		// if not found return 404 error
		if (!volunteer) { 
			return res.status(404).send()
		}

		// if found send user
		res.send(user)
	//send 500 error if error
	} catch(e) { 
		res.status(500).send()
	}
})

// TODO: Update Volunteer

// Export Volunteer router
module.exports = router