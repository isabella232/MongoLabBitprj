const path = require('path')
const express = require('express');

const router = express();
const router = new express.Router()

router.get('', (req, res) => {
	router.render('home')
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