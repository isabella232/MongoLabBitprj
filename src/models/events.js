// const validator = require('validator')
const mongoose = require('mongoose')

const Event = mongoose.model('Event', {
    eventName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    time: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    coordinator: {
        type: String,
        required: true,
        trim: true,
    },
    attendeeCount: {
        type: Number,
        default: 0
    }
})

event1 = {
    eventName: "Turkey Trot",
    date: "12/30/19",
    time: "12:30 pm",
    location: "Davis High School",
    coordinator: "Amy Schumer",
    attendeeCount: 50
}

module.exports = Event