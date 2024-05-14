const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    firstCount:Number,
    secondCount:Number
})

const count = mongoose.model('timer_counts', Schema)

module.exports = count;