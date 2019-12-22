const path = require('path')
const express = require('express');
require('../db/mongoose')
const Event = require('../models/events')
const router = express();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const publicDirectoryPath = path.join(__dirname, '../../public')

router.set('view engine', 'hbs')
router.use(express.static(publicDirectoryPath))

router.get('', (req, res) => {
	router.render('index')
})

router.get('/turkey-trot', async (req, res) => {
	const eventName = req.params

	try {
		const event = await Event.findOne({eventName:"Turkey Trot"})
		res.render('turkey-trot', {
			eventName: event.eventName,
			coordinator: event.coordinator,
			// date: event.date,
			month: monthNames[Number(event.date.slice(5, 7)) - 1].split("").join(" ").toUpperCase(),
			day: event.date.slice(8),
			time: event.time,
			location: event.location,
			description: event.description
		})
	} catch(e) {
		res.status(500).send()
	}
})

router.get('/coastal-cleanup', async (req, res) => {
	const eventName = req.params

	try {
		const event = await Event.findOne({eventName:"Coastal Cleanup"})
		res.render('coastal-cleanup', {
			eventName: event.eventName,
			coordinator: event.coordinator,
			// date: event.date,
			month: monthNames[Number(event.date.slice(5, 7)) - 1].split("").join(" ").toUpperCase(),
			day: event.date.slice(8),
			time: event.time,
			location: event.location,
			description: event.description
		})
	} catch(e) {
		res.status(500).send()
	}
})


router.get('/home', (req, res) => {
	router.render('home')
})

router.get('/profiles', (req,res) => { 
	router.render('profile')
})

router.get('/login', (req,res) => { 
	router.render('login')
})

router.get('/contactus', (req,res) => { 
	router.render('contactus')
})

router.get('/events', (req,res) => { 
	router.render('events')

})

router.get('*', (req, res) => { 
	router.render('404 error')
})

module.exports = router