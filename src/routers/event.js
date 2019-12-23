
const express = require('express')
const path = require('path')
require('../db/mongoose')
const Event = require('../models/events')
const router = new express.Router()

// const publicDirectoryPath = path.join(__dirname, '../../public')
// router.use(express.static(publicDirectoryPath))

app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// REST APIs
// Add Event
router.post('/events', async (req, res) =>{
    const event = new Event(req.body)
    console.log(event);
    try { 
    	await event.save()
    	res.status(201).send(event)
    } catch(e) {
        res.status(400).send(e)
    }
})

// Read ALL events
// Added functionality, if url has eventName search parameter, fitlers for that event name
router.get('/events', async (req, res) => { 
	//Create variable to store filter
	var query = {}

	// if filter is present
	if (req.query.eventName) { 
			query.eventName = req.query.eventName
			const events = await Event.find({"eventName":query.eventName})
			res.send(events)
	//no filter present
	} else { 
		const events = await Event.find()
		res.send(events)
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