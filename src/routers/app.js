const path = require('path')
const express = require('express');
require('../db/mongoose')
const Event = require('../models/events')
const router = express();
// const router = new express.Router()

const publicDirectoryPath = path.join(__dirname, '../../public')

router.set('view engine', 'hbs')
router.use(express.static(publicDirectoryPath))

router.get('', (req, res) => {
	router.render('index')
})

router.get('/turkey-trot', async (req, res) => {
	const eventName = req.params

	try {
		const event = await Event.findOne({eventName:"Fake Title"})
		res.render('turkey-trot', {
			eventName: event.eventName,
			coordinator: event.coordinator,
			date: event.date,
			month: event.month,
			day: event.day,
			time: event.time,
			location: event.location,
			description: event.description
		})
	} catch(e) {
		res.status(500).send()
	}

	// res.render('turkey-trot', {
	// 	eventName: "Fake Title",
	// 	coordinator: "Kim Lee",
	// 	date: "12/29/19",
	// 	month: "S E P T E M B E R",
	// 	day: "21",
	// 	time: "12:30 PM",
	// 	location: "2040 Calaveras Ave Davis, CA 95616",
	// 	description: "set up stuff"
	// })
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