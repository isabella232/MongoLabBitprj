const path = require('path')
const express = require('express');

// console.log(__dirname);
// console.log(path.join(__dirname, '../../public'));

const router = express();
// const router = new express.Router()

const publicDirectoryPath = path.join(__dirname, '../../public')

// router.set('view engine', 'hbs')
router.use(express.static(publicDirectoryPath))

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

router.listen(3000, () => {
	console.log('Server is up on port 3000.');
})

module.exports = router