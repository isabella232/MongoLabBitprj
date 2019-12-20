
const express = require('express')
require('../db/mongoose')
const Event = require('../models/events')
const router = new express.Router()

// REST APIs
// Add Event
router.post('/events', async (req, res) =>{
    const event = new Event(req.body)
    
    try { 
    	await event.save()
    	res.status(201).send(event)
    } catch(e) {
        res.status(400).send(e)
    }
})

// Read ALL events
router.get('/events', async (req, res) => { 
	try { 
		const event = await Event.find({})
		res.send(event)
	} catch (e) { 
		res.status(500).send()
	}
})

// Read SINGLE event
router.get('/events/:id', async (req, res) => { 
    const _id = req.params.id

	try {
		const event = await Event.findById(_id)

		// if not found return 404 error
		if (!event) { 
			return res.status(404).send()
		}

		// if found send user
		res.send(event)
	//send 500 error if error
	} catch(e) { 
		res.status(500).send(e)
	}
})

// Delete Event
router.delete('/events/:id', async (req, res) => {  
	try {
		// try to delete Event, if found store in Event 
		const event = await Event.findByIdAndDelete(req.params.id)
		
		// if not found return 404 error
		if (!event) { 
			return res.status(404).send()
		}

		// if found send user
		res.send(event)
	//send 500 error if error
	} catch(e) { 
		res.status(500).send()
	}
})

// TODO: Update Event
// router.patch('./events/:id', async (req, res) => { 
// 	const updates = Object.keys(req.body) 
// 	const allowedUpdates = ['firstName', 'lastName', 'age', 'email', 'password','eventCount', 'isCoordinator','assignedToEvent']
// 	const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

// 	if (!isValidOperation) { 
// 		return res.status(400).send({error: 'Invalid update'})
// 	}

// 	try { 
// 		const Admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true}) // TODO: check, I think wrong syntax  

// 		if (!Admin) { 
// 			return res.status(404).send()
// 		}

// 		res.send(Admin)
// 	} catch (e) {  
// 		res.status(400).send()
// 	}
// })

// Export Admin router
module.exports = router